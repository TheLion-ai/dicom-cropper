area_width = 130; // size of the square used to select the area of interest

function littleToBig(hex) {
    /*changes Little Endian to Big Endian
    Input: hex - hex string in Little Endian
    Output: hex - hex string in Big Endian
    */
    if (hex.length > 2) { // Assuming little endian encoding
        let hexArr = [];
        for (let i = 0; i < hex.length; i += 2) {
            hexArr.push(hex.slice(i, i + 2)); // one byte is represented by 2 hex digits(a single byte is in BigEndian)
        }
        hex = hexArr.reverse().join('');
    }
    return hex;
}


function hexToInt(hex, isBigEndian) {
    /* input: hex - hex string in either Big or Little Endian, depending on the Transfer Syntax
    */
    if(!isBigEndian){
        hex = littleToBig(hex);
    }
    return parseInt(hex, 16);
}


function hexToASCII(hex) { // TODO: make sure it works Little/Big Endian
    return String.fromCharCode(parseInt(hex, 16));
}

function hexTo2BytesPadding(index, dicom, range) {
    /* makes sure each element of an array is represented by two hex digits(one byte)*/
    for (let i = index; i < index + range; i++) {
        if (dicom[i].length < 2) {
            dicom[i] = "0" + dicom[i];
        }
    }
}

function checkParameters(index, dicom, j, isOdd) {
    /* checks if
    1. a value should be decoded to ASCII or stay in HEX (isASCII)
    2. VR in explicit encoding uses 2(default) or 4 bytes to store length (isException)
    3. VR is SQ (isSQ)
    j - a piece of json dict with information about a given Tag
    isOdd - states if the tag is private
    */
    let vr = "";
    const ascii = ["CS", "SH", "LO", "ST", "LT", "UT", "AE", "PN", "UI", "DA", "TM", "DT", "AS", "IS", "DS"];
    const hex = ["SS", "US or SS", "US", "SL", "UL", "AT", "FL", "FD", "OB", "OB or OW", "OW", "OF", "SQ", "UT",
        "UN", "US or OW", "US or SS or OW"
    ];
    const exceptions = ["OB", "OW", "OF", "SQ", "UT", "UN",
    "OB or OW"]; // even if they are encoded explicitly, their length is stored in 4 bytes
    if(isOdd){
       // private tag's VR can't be found in dicomAttr dictionary
       // private tags always use explicit encoding
       // VRs are always in BigEndian ??? TODO
       vr = dicom.slice(index, index+2).map(x => hexToASCII(x)).join('');
    } else {
        vr = dicomAttr[j].VR;
    }
    const isASCII = (ascii.indexOf(vr) != -1) ? 1 : 0;
    const isException = (exceptions.indexOf(vr) != -1) ? 1 : 0;
    const isSQ = (vr=="SQ") ? 1 : 0;
    return [isASCII, isException, isSQ];
}


function getEncoding(value) {
    let unsupported = false;
    const encoding = [
        "1.2.840.10008.1.2", // Little Endian Implicit
        "1.2.840.10008.1.2.2", // Big Endian Explicit
        "1.2.840.10008.1.2.1", // Little Endian Explicit
        "1.2.840.10008.1.2.4.90", // JPEG-2000 Lossless
    ];
    if (!encoding.includes(value.replace('\u0000', ''))) {
        alert("Unsupported file encoding. Contact support to request an update.");
        unsupported = true;
    }
    const bigEndian = (value == encoding[1]) ? 1 : 0; // 0-little endian, 1-big endian
    const explicit = (value.slice(0, -1) == encoding[0]) ? 0 : 1; // 0-implicit, 1-explicit
    return [bigEndian, explicit, unsupported];
}


function getElementName(index, dicom, isBigEndian) {
    /* match each dicom tag with a name*/
    let isASCII, isException, isSQ;
    hexTo2BytesPadding(index, dicom, 4); // each tag name takes 4 bytes, 2 per group name and 2 per element name
    let group = dicom.slice(index, index + 2);
    let element = dicom.slice(index + 2, index + 4);
    const bareTag = group.join("") + element.join("");
    const isOdd = (hexToInt(group.join(""), isBigEndian)%2 === 0) ? 0 : 1; // odd numbers stand for private tags
    group = group.reverse().join(""); // reverse from Little Endian to Big Endian and convert to string // TODO: make it universal
    element = element.reverse().join("");
    let tag = "(" + group + "," + element + ")";
    tag = tag.toUpperCase(); // hex digits in dicomAttr dictionary are in uppercase
    console.log(`${group}${element}`);
    let changeEncoding = (group != "0002") ? 1 : 0; // tags from group 2 are always in Little Endian Explicit
    index += 4;
    if(!isOdd){
        for(let j = 0; j < dicomAttr.length; j++) {
            if (dicomAttr[j].Tag === tag) {
                const tagName = dicomAttr[j].Name;
                const [isASCII, isException, isSQ] = checkParameters(index, dicom, j, isOdd);
                console.log(`tagName: ${tagName} VR: ${dicomAttr[j].VR}`);
                return [index, bareTag, tagName, isASCII, isException, changeEncoding, isSQ, isOdd];
            }
        }
    } else {
        const [isASCII, isException, isSQ] = checkParameters(index, dicom, j=0, isOdd);
        console.log(`tagName: private VR: ${dicom.slice(index, index+2).map(x => hexToASCII(x)).join('')}`);
        return [index, bareTag, tagName="private", isASCII, isException, changeEncoding, isSQ, isOdd];
    }
}

function getValueLength(index, dicom, explicit = true,
                        isException, isBigEndian) {
    /* read length (in bytes) of data stored in a given tag
    Possible encoding:
    1. implicit - 4 bytes
    2. explicit (works for most VRs) 2 bytes encode vr, following two encode length
    3. explicit (for longer VRs listed as exceptions in checkParameters) 2 per VR, 2 blank, 4 per length
    */
    let step = (explicit) ? [2, 4] : [0, 4];
    step = (isException && explicit) ? [4, 8] : step;
    hexTo2BytesPadding(index + step[0], dicom, index + step[1]);
    const length = hexToInt(dicom.slice(index + step[0], index + step[1]).join(""), isBigEndian); // in bytes
    console.log(`length: ${length}`);
    index += step[1];
    return [index, length];
}

function getValue(index, dicom, length, isASCII, tagName, isBigEndian) {
    hexTo2BytesPadding(index, dicom, length);
    let value;
    if (isASCII) {
        value = dicom.slice(index, index + length).map(x => hexToASCII(x)).join('');
    } else if (tagName == "Pixel Data") {
        value = dicom.slice(index, index + length).join('');
    } else {
        value = hexToInt(dicom.slice(index, index + length).join(''), isBigEndian);
    }
    index += length;
    console.log(`value; ${value}`);
    return [index, value];
}

function sqElement(index, dicom, explicit, isException, isBigEndian, undefinedLength, dicomJSON){
    let sqElemLength, length, value, tagName, isASCII, changeEncoding, isSQ, isOdd;
    let closingTag = (isBigEndian) ? "fffee00d" : "feff0de0";
    index += 4; // omit SQ element's opening tag
    [index, sqElemLength] = getValueLength(index, dicom, 0, 0, isBigEndian);
    const endIndex = index + sqElemLength;
    while(index<endIndex && dicom.slice(index, index+4).join("")!=closingTag){
        console.log(dicom.slice(index, index+4).join(""));
        console.log(dicom.slice(index, index+4).join(""));
        console.log(closingTag);
        [index, bareTag, tagName, isASCII, isException, changeEncoding,
                isSQ, isOdd] = getElementName(index, dicom, isBigEndian);
        if(isSQ){
            handleSQ(index, dicom, explicit, isException, isBigEndian, dicomJSON);
            return index;
        }
        [index, length] = getValueLength(index, dicom, explicit, isException, isBigEndian);
        [index, value] = getValue(index, dicom, length, isASCII, tagName, isBigEndian);
        dicomJSON[tagName] = value;
    }
    //if(sqElemLength == 4294967295){
    if(dicom.slice(index, index+4).join("") == closingTag){
        index += 8;
    }
    return index;
}

function handleSQ(index, dicom, explicit, isException, isBigEndian, dicomJSON){
    /* Decode Sequence Value Representation
    */
    let sqLength;
    const closingTag = (isBigEndian) ? "fffee0dd" : "feffdde0";
    [index, sqLength] = getValueLength(index, dicom,
                        explicit, isException, isBigEndian);
    const undefinedLength = (sqLength === 4294967295) ? 1 : 0; // FFFF - length undefined, look for closing
    if(undefinedLength){
        while(dicom.slice(index, index+4).join("") != closingTag){
            index = sqElement(index, dicom, explicit, isException, isBigEndian, undefinedLength, dicomJSON);
        }
        index += 8;
    } else{
        const endIndex = index + sqLength;
        while(index < endIndex){
            index = sqElement(index, dicom, explicit, isException, isBigEndian, undefinedLength, dicomJSON);
        }
    }
    return index;
}

function dicomToJSON(dicom) {
    /*input: array storing dicom in hex string*/
    let index = 132; // skip header identical for every dicom
    let value, bareTag, tagName, isASCII, isException, length, unsupported, changeEncoding;
    let isSQ = 0;
    let isOdd = 0;
    let isBigEndian = 0;
    let explicit = 1;
    let dicomJSON = {};

    while (index < dicom.length) {
        try {
            [index, bareTag, tagName, isASCII, isException, changeEncoding,
            isSQ, isOdd] = getElementName(index, dicom, isBigEndian);
            console.log(index);
            if(isSQ){
              index = handleSQ(index, dicom, explicit, isException, isBigEndian, dicomJSON);
              continue;
            }
        } catch (e) {
            alert("Unsupported file format.\nMake sure your file is in Dicom (.dcm) format. Contact support for further details.");
            return "Unsupported file format.";
        }
        if (changeEncoding) {
            [isBigEndian, explicit, unsupported] = getEncoding(dicomJSON["Transfer Syntax UID"]);
            // wykonywane za kaĹĽdym razem, gdy tag jest z innej grupy niĹĽ 0002 trzeba to zmieniÄ‡
            if (unsupported) {
                return "Unsupported file format.";
            }
        }
        explicit = (isOdd) ? 1 : explicit;
        [index, length] = getValueLength(index, dicom, explicit, isException, isBigEndian);
        if(isOdd){
            index += length;
        } else {
            [index, value] = getValue(index, dicom, length, isASCII, tagName, isBigEndian);
            dicomJSON[tagName] = value;
        }
    }

    return dicomJSON;
}

function pixelDataToSignedInt(pixelDataArr) {
    /* converts pixelData from u2 to signed integer
input: array of hex strings in u2
output: array of numbers in signed integer
*/
    let bits = [];
    for (let i = 0; i < pixelDataArr.length; i++) {
        bits[i] = parseInt(pixelDataArr[i], 16).toString(2);
        // if number is negative
        if (bits[i].slice(0, 1) === "1" && bits[i].length == 16) {
            bits[i] = bits[i].replace(/[01]/g, function ($1) {
                return $1 === '0' ? '1' : '0'
            });
            bits[i] = parseInt(bits[i], 2);
            bits[i] = -(bits[i] + 1); // check if it works; add change 0 to -32768
            bits[i] = (bits[i] === 0) ? -32768 : bits[i]; // change it to be universal //to do
        } else {
            bits[i] = parseInt(bits[i], 2);
        }
    }
    return bits;
}

function adjustWindow(pixToDispArr, windowCenter, windowWidth) {
    /* Adjust the values to those important for diagnosis
input: array of numbers
output: array of numbers
*/
    const lowest = windowCenter - windowWidth / 2; // lowest possible pixel value, all pixels below this value will be represented as total black
    const highest = windowCenter + windowWidth / 2; // highest possible pixel value, all pixels above this value will be represented as white
    const range = Math.abs(lowest) + Math.abs(highest);

    for (let i = 0; i < pixToDispArr.length; i++) {
        if (pixToDispArr[i] < lowest) {
            pixToDispArr[i] = lowest;
        } else if (pixToDispArr[i] > highest) {
            pixToDispArr[i] = highest;
        }
        pixToDispArr[i] = (lowest < 0) ? pixToDispArr[i] + Math.abs(lowest) : pixToDispArr[i]; // make sure all numbers are positive
        pixToDispArr[i] = Math.floor(pixToDispArr[i] * 255 / range); // rescale the number, so that the values range from 0-255
    }
    return pixToDispArr;
}

function decodePixelData(pixelData, bitsAllocated, bitsStored, highBit, pixelRepresentation,
                         rescaleSlope, rescaleIntercept, windowCenter, windowWidth, photometricInterpretation) {
    bitsAllocated = parseInt(bitsAllocated);
    bitsStored = parseInt(bitsStored);
    highBit = parseInt(highBit);
    pixelRepresentation = parseInt(pixelRepresentation);
    rescaleSlope = parseInt(rescaleSlope);
    rescaleIntercept = parseInt(rescaleIntercept);
    windowCenter = parseInt(windowCenter);
    windowWidth = parseInt(windowWidth);

    let pixelDataArr = [];
    // Convert PixelData hex string into array of pixels
    let hexAllocated = Math.ceil(bitsAllocated / 8) * 2; // one byte is two hex digits
    let hexStored = Math.ceil(bitsStored / 8) * 2;
    for (let i = 0; i < pixelData.length; i += hexAllocated) {
        pixelDataArr.push(pixelData.slice(i, i + hexStored));
    }
    //if  highBit==bitsStored it's in BigEndian,  lse if highBit==0, then it is in LittleEndian,
    pixelDataArr = (highBit + 1 === bitsStored) ? pixelDataArr.map(x => littleToBig(x)) : pixelDataArr;
    // if pixelRepresentation=0, pixels are stored as unsigned integers, else if if pixelRepresentation=1 they are encoded in two's complement
    pixelDataArr = (pixelRepresentation === 0) ? parseInt(pixelDataArr, 16) : pixelDataToSignedInt(pixelDataArr);
    // from now on pixelDataArr is array of numbers
    pixelDataArr = pixelDataArr.map(x => rescaleSlope * x + rescaleIntercept);
    // from now we are going to operate on a new array- pixToDispArr, because we will start processing the image for the purpose of displaying it in a browser
    // pixelDataArr doesn't change
    let pixToDispArr = Array.from(pixelDataArr);
    pixToDispArr = adjustWindow(pixToDispArr, windowCenter, windowWidth);
    // so far we support only monochrome1 and monochrome2
    // MONOCHROME1 indicates that the greyscale ranges from bright to dark with ascending pixel values, whereas MONOCHROME2 ranges from dark to bright with ascending pixel values.
    if (photometricInterpretation === "MONOCHROME1") {
        pixToDispArr = pixToDispArr.map(x => 255 - x);
    }
    pixToDispArr = pixToDispArr.map(x => x.toString(16).toUpperCase().padStart(2, "0"));
    pixToDispArr = pixToDispArr.map(x => "#" + x.repeat(3));
    // CANT RETURN TWO ARRAYS - FIX IT!!!!!!!!!!
    window.pixelDataArr = pixelDataArr;
    window.pixToDispArr = pixToDispArr;
    return pixToDispArr;
}

function displayImage(ctx, rows, columns, pixToDispArr) {
    rows = parseInt(rows);
    columns = parseInt(columns);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j += 1) {
            ctx.fillStyle = pixToDispArr[rows * i + j];
            ctx.fillRect(j, i, 1, 1);
        }
    }
}

function showCoords(rect, x, y) {

    x = Math.floor(x - rect.left);
    y = Math.floor(y - rect.top);

    window.rectX = x - (area_width / 2);
    window.rectY = y - (area_width / 2);

    let value = window.pixelDataArr[y * 512 + x];
    let value2 = window.pixToDispArr[y * 512 + x];
    let coords = "X coords: " + x + ", Y coords: " + y + "    " + value + "    " + value2;
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

function loadData() {
    let fileSelectButton = document.getElementById("file-select-button");
    fileSelectButton.addEventListener('change', function () {
        let success = document.getElementById('success');
        success.setAttribute('hidden', 'hidden')

        let guideline = document.getElementById('guideline');
        guideline.innerText = 'Uploading file';

        let guideline2 = document.getElementById('guideline2');
        guideline2.innerText = 'Please wait';

        let upload = document.getElementById('upload');
        upload.setAttribute('hidden', 'hidden');
        let file = fileSelectButton.files[0];
        console.log(fileSelectButton.files);
        let reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = function (event) {
            let contents = event.target.result;
            const original_dicom = new Uint8Array(contents);
            const memfs = [
                    {
                        name: "input.dcm",
                        data: original_dicom
                    }
                ];
            const result = gdcmFunc({
                    MEMFS: memfs,
                    arguments: ["-i", "input.dcm", "-o", "output.dcm", "-w"]
                });
            const dicm = Array.from(result.MEMFS[0].data, x => Number(x).toString(16));
            console.log(dicm);
            const dicomJSON = dicomToJSON(dicm);
            if (dicomJSON == "Unsupported file format.") {
                return 0;
            }
            console.log(dicomJSON);
            let pixToDispArr = decodePixelData(dicomJSON["Pixel Data"], dicomJSON["Bits Allocated"], dicomJSON["Bits Stored"], dicomJSON["High Bit"], dicomJSON["Pixel Representation"], dicomJSON["Rescale Slope"], dicomJSON["Rescale Intercept"], dicomJSON["Window Center"], dicomJSON["Window Width"], dicomJSON["Photometric Interpretation"]);
            console.log(pixToDispArr);
            let canvas = document.getElementById('dicomImage');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                displayImage(ctx, dicomJSON["Rows"], dicomJSON["Columns"], pixToDispArr);


            } else {
                // canvas-unsupported code here
            }

            let canvasDiv = document.getElementById('canvasDiv');
            canvasDiv.removeAttribute('hidden');
            autoFill(dicomJSON);
            let upload = document.getElementById('upload');
            upload.setAttribute('hidden', 'hidden');
            let guideline = document.getElementById('guideline');
            guideline.innerText = 'Select tumor area';

            let guideline2 = document.getElementById('guideline2');
            guideline2.innerText = 'Drag the white box over the kidney with the tumor, try to center the kidney in the box';

            let rect = canvas.getBoundingClientRect();
            let selectArea = document.getElementById('selectArea');
            selectArea.removeAttribute('hidden');

            selectArea.style.left = rect.left + "px";
            selectArea.style.top = rect.top + "px";

            showCoords(rect, selectArea.offsetLeft + area_width / 2, selectArea.offsetTop + area_width / 2);
            dragElement(selectArea, rect);
        };
        reader.readAsArrayBuffer(file);

    })
}


loadData();
window.onresize = onResize;

function onResize() {

    let canvas = document.getElementById('dicomImage');
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
    const form = document.getElementById("Form");
    const sendDict = {};
    for (const field of document.getElementById("Form").elements) {
        sendDict[field.id] = field.value
    }
    sendDict['Area'] = {'x': window.rectX, 'y': window.rectY, 'width': area_width};

    sendDict['Image'] = pixelDataArr;
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
