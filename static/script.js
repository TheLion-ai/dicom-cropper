area_width = 130; // size of the square used to select the area of interest
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWADOImageLoader.external.cornerstoneMath = cornerstoneMath;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstone.registerImageLoader('http', cornerstoneWADOImageLoader.loadImage)
cornerstone.registerImageLoader('https', cornerstoneWADOImageLoader.loadImage)

var config = {
    webWorkerPath: '/static/dist/cornerstoneWADOImageLoaderWebWorker.js',
    taskConfiguration: {
        decodeTask: {
            codecsPath: '/static/dist/cornerstoneWADOImageLoaderCodecs.js'
        }
    }
}
cornerstoneWADOImageLoader.webWorkerManager.initialize(config)

function loadAndViewImage(imageId) {
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone
    const element = document.getElementById('dicomDiv');
    cornerstone.enable(element);
    cornerstone.loadImage(imageId).then(function (image) {
        window.dicomJSON = {}
        window.dicomJSON['Study Instance UID'] = image.data.string('x0020000d');
        window.dicomJSON['Institution Name'] = image.data.string('x00080080');
        window.dicomJSON['Patient\'s Age'] = image.data.uint16('x00101010');
        window.dicomJSON['Patient\'s Sex'] = image.data.string('x00100040');
        window.dicomJSON['Patient\'s Size'] = image.data.string('x00101020');
        window.dicomJSON['Patient\'s Weight'] = image.data.string('x00101030');
        window.dicomJSON['Study Date'] = image.data.string('x00080020');
        cornerstone.displayImage(element, image)
        window.dicomJSON['PixelData'] = cornerstone.getPixels(element, 0, 0, image.data.uint16('x00280011'), image.data.uint16('x00280010'))
        console.log(window.dicomJSON)

        let dicomCanvas = document.getElementsByClassName('cornerstone-canvas')
        dicomCanvas[0].setAttribute('style', 'z-index: 1;')

    }).then(() => {
        autoFill(window.dicomJSON)
        let upload = document.getElementById('upload')
        upload.setAttribute('hidden', 'hidden')
        let guideline = document.getElementById('guideline')
        guideline.innerText = 'Select tumor area'
        let guideline2 = document.getElementById('guideline2')
        guideline2.innerText = 'Drag the white box over the kidney with the tumor, try to center the kidney in the box'
        window.annotationCanvas = (document.getElementById('annotationCanvas')) ? document.getElementById('annotationCanvas') : undefined
        let rect = window.annotationCanvas.getBoundingClientRect()
        let selectArea = document.getElementById('selectArea')
        selectArea.removeAttribute('hidden')
        selectArea.style.left = rect.left + "px"
        selectArea.style.top = rect.top + "px"
        showCoords(rect, selectArea.offsetLeft + area_width / 2, selectArea.offsetTop + area_width / 2)
        dragElement(selectArea, rect)
    });
}

function loadData(event) {
    let file = event.target.files[0]
    window.fileName = file.name;
    const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file)
    let reader = new FileReader()
    let canvasDiv = document.getElementById('canvasDiv')
    canvasDiv.removeAttribute('hidden')
    loadAndViewImage(imageId)
    reader.readAsArrayBuffer(file)
}

function showCoords(rect, x, y) {

    x = Math.floor(x - rect.left);
    y = Math.floor(y - rect.top);

    window.rectX = x - (area_width / 2);
    window.rectY = y - (area_width / 2);

    let value = window.dicomJSON.PixelData[x * 512 + y];
    let value2 = window.dicomJSON.PixelData[x * 512 + y];
    window.croppedImage = [];
    let coords = "X coords: " + x + ", Y coords: " + y + "    " + value + "    " + value2;
    for (let i = y - (area_width / 2); i < y + (area_width / 2); i++) {
        for (let j = x - (area_width / 2); j < x + (area_width / 2); j++) {
            croppedImage.push(window.dicomJSON.PixelData[i * 512 + j]);
        }
    }
    document.getElementById("coordinates").innerHTML = coords;
}

function autoFill(dicomJSON) {
    document.getElementById("Study Instance UID").value = (dicomJSON.hasOwnProperty("Study Instance UID")) ? dicomJSON["Study Instance UID"].replace('\u0000', '') : "";
    document.getElementById("Institution Name").value = (dicomJSON.hasOwnProperty("Institution Name")) ? dicomJSON["Institution Name"] : "Copernicus Zaspa";
    document.getElementById("Patient's Age").value = (dicomJSON.hasOwnProperty("Patient's Age")) ? dicomJSON["Patient's Age"] : "age";
    document.getElementById("Patient's Sex").value = (dicomJSON.hasOwnProperty("Patient's Sex")) ? $.trim(dicomJSON["Patient's Sex"]) : "M or F or O";
    document.getElementById("Patient's Size").value = (dicomJSON.hasOwnProperty("Patient's Size")) ? dicomJSON["Patient's Size"] : "in meters";
    document.getElementById("Patient's Weight").value = (dicomJSON.hasOwnProperty("Patient's Weight")) ? dicomJSON["Patient's Weight"] : "in kilograms";
    document.getElementById("Study Date").value = (dicomJSON.hasOwnProperty("Study Date")) ? dicomJSON["Study Date"].replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3') : "YYYYMMDD";
}

function onResize() {

    let canvas = document.getElementById('annotationCanvas');
    let rect = canvas.getBoundingClientRect()
    if (rect.left != 0 && rect.top != 0) {
        let selectArea = document.getElementById('selectArea');
        selectArea.removeAttribute('hidden');

        selectArea.style.left = rect.left + "px";
        selectArea.style.top = rect.top + "px";

        dragElement(selectArea, rect, rect);
    }
}


function dragElement(elmnt, rect) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // var rect = rect;
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;

    function isOutsideImg(rect, x, y) {
        if (x < rect.left || x > rect.right || y > rect.bottom || y < rect.top) {
            return true
        } else {
            return false
        }
    }

    function dragMouseDown(e) {

        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:

        x = elmnt.offsetLeft - pos1;
        y = elmnt.offsetTop - pos2;
        if (x > rect.left && x + area_width < rect.right + 1 && y > rect.top - 1 && y + area_width < rect.bottom + 1) {
            elmnt.style.top = y + "px";
            elmnt.style.left = x + "px";
        }

    }

    function closeDragElement(e) {
        /* stop moving when mouse button is released:*/
        showCoords(rect, elmnt.offsetLeft + area_width / 2, elmnt.offsetTop + area_width / 2);
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function sendData() {
    const sendDict = {};
    for (const field of document.getElementById("Form").elements) {
        sendDict[field.id] = field.value
    }
    sendDict['Area'] = {'x': window.rectX, 'y': window.rectY, 'width': area_width};
    sendDict['Image'] = croppedImage;
    sendDict['File Name'] = fileName;
    $.ajax({
        url: '/send',
        type: "POST",
        data: JSON.stringify(sendDict),
        contentType: "application/json",
        success: function (data) {

            let canvasDiv = document.getElementById('canvasDiv');
            canvasDiv.setAttribute('hidden', 'hidden');

            let upload = document.getElementById('upload');
            upload.removeAttribute('hidden');
            let guideline = document.getElementById('guideline');
            guideline.innerText = 'Upload another dicom file';

            let guideline2 = document.getElementById('guideline2');
            guideline2.innerText = 'Click the button below to select dicom file from your\n' +
                '    computer';

            let selectArea = document.getElementById('selectArea');
            selectArea.setAttribute('hidden', 'hidden');
            let success = document.getElementById('success');
            success.removeAttribute('hidden');
        },
        error: function (request, status, error) {
            // request.responseText = "There was an error on the server. File wasn't sent.";
            alert(request.statusText);
        },
    });
}

window.dicomJSON = {'PixelData': ''}
