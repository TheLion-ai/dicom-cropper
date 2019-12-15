function littleToBig(hex) {
    /*changes Little Endian to Big Endian*/
    if (hex.length > 2) { // Assuming little endian encoding
        let hexArr = [];
        for (let i = 0; i < hex.length; i += 2) {
            hexArr.push(hex.slice(i, i + 2));
        }
        hex = hexArr.reverse().join('');
    }
    return hex;
}

function hexToInt(hex) {
    hex = littleToBig(hex);
    return parseInt(hex, 16);
}

function hexToASCII(hex) {
    return String.fromCharCode(parseInt(hex, 16));
}

function hex2B(index, dicom, range) {
    /* make sure each element of an array is represented by two hex digits(two bytes) */
    for (let i = index; i < index + range; i++) {
        if (dicom[i].length < 2) {
            dicom[i] = "0" + dicom[i];
        }
    }
}

function findPatientName(dicom) {
    const key = ['10', '0', '10', '0']
    let find = 0
    let i = 128;
    while (find < key.length - 1) {
        find = (dicom[i] == key[find]) ? find + 1 : 0;
        i++;
    }
    return i - 3;
}

function checkVR(i) {
    /* checks if a value should be decoded in ASCII or stay in HEX*/
    ascii = ["CS", "SH", "LO", "ST", "LT", "UT", "AE", "PN", "UI", "DA", "TM", "DT", "AS", "IS", "DS"]
    exceptions = ["SS", "US or SS", "US", "SL", /*"UL",*/ "AT", "FL", "FD", "OB", "OB or OW", "OW", "OF", "SQ", "UT",
        "UN", "US or OW", "US or SS or OW"
    ]; // even if they are encoded explicitly, their length is stored in 4 bytes
    isASCII = (ascii.indexOf(dicomAttr[i].VR) != -1) ? 1 : 0;
    isException = (exceptions.indexOf(dicomAttr[i].VR) != -1) ? 1 : 0;
    return [isASCII, isException];
}

function getEncoding(value) {
    const encoding = [
        `1.2.840.10008.1.2`, // Little Endian Implicit
        "1.2.840.10008.1.2.2", // Big Endian Explicit
        "1.2.840.10008.1.2.1", // Little Endian Explicit
        "1.2.840.10008.1.2.4.90", //
    ];
    let bigEndian = (value == encoding[1]) ? 1 : 0; // 0-little endian, 1-big endian
    let explicit = (value.slice(0, -1) == encoding[0]) ? 0 : 1; // 0-implicit, 1-explicit
    return [bigEndian, explicit];
}

function getElementName(index, dicom) {
    /* match each dicom tag with a name*/
    hex2B(index, dicom, 4); // each tag name takes 4 bytes, 2 per group name and 2 per element name
    const group = dicom.slice(index, index + 2).reverse().join(
        ""); // reverse from Big Endian to little Endian and convert to string
    const element = dicom.slice(index + 2, index + 4).reverse().join("");
    let tag = "(" + group + "," + element + ")";
    tag = tag.toUpperCase();
    console.log(`${group}${element}`);
    let changeEncoding = (group != "0002") ? 1 : 0;
    for (i = 0; i < dicomAttr
        .length; i++) { //TO DO
        if (dicomAttr[i].Tag === tag) {
            const name = dicomAttr[i].Name;
            const [isASCII, isException] = checkVR(i);
            index += 4;
            console.log(`name: ${name} VR: ${dicomAttr[i].VR}`);
            return [index, name, isASCII, isException, changeEncoding];
        }
    }
}


function getValueLength(index, dicom, explicit = true,
                        isException) {
    /* read length (in bytes) of data stored in a given tag*/
    let step = (explicit) ? [2, 4] : [0, 4];
    step = (isException && explicit) ? [4, 8] : step;
    hex2B(index + step[0], dicom, index + step[1]);
    const length = hexToInt(dicom.slice(index + step[0], index + step[1]).join("")); // in bytes
    console.log(`length: ${length}`);
    index += step[1];
    return [index, length];
}

function getValue(index, dicom, length, isASCII, element) {
    hex2B(index, dicom, length);
    let value;
    if (isASCII) {
        value = dicom.slice(index, index + length).map(x => hexToASCII(x)).join('');
    } else if (element == "Pixel Data") {
        value = dicom.slice(index, index + length).join('');
    } else {
        value = hexToInt(dicom.slice(index, index + length).join(''));
    }
    index += length;
    console.log(`value; ${value}`);
    return [index, value];
}

function dicomToJSON(dicom) {
    let index = 132; //findPatientName(dicom); //132
    let value, element, length, bigEndian = 0,
        changeEncoding;
    let explicit = 1;
    let dicomJSON = {};

    while (index < dicom.length) {
        [index, element, isASCII, isException, changeEncoding] = getElementName(index, dicom);
        if (changeEncoding) {
            [bigEndian, explicit] = getEncoding(dicomJSON[
                "Transfer Syntax UID"]); // wykonywane za każdym razem gdy element jest z innej grupy niż 0020 trzeba to zmienić
        }
        [index, length] = getValueLength(index, dicom, explicit, isException);
        [index, value] = getValue(index, dicom, length, isASCII, element);
        dicomJSON[element] = value;
    }
    return dicomJSON;
}

function u2(pixelDataArr) {
    /* converts pixelData from u2 to signed integer
input: array of hex strings
output: array of numbers
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
    /* Adjust the values to those the range important for diagnosis
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

function decodePixelData(pixelData, bitsAllocated, bitsStored, highBit, pixelRepresentation, rescaleSlope, rescaleIntercept, windowCenter, windowWidth, photometricInterpretation) {
    bitsAllocated = parseInt(bitsAllocated);
    bitsStored = parseInt(bitsStored);
    highBit = parseInt(highBit);
    pixelRepresentation = parseInt(pixelRepresentation);
    rescaleSlope = parseInt(rescaleSlope);
    rescaleIntercept = parseInt(rescaleIntercept);
    windowCenter = parseInt(windowCenter);
    windowWidth = parseInt(windowWidth);

    pixelDataArr = [];
    // Convert PixelData hex string into array of pixels
    let hexAllocated = Math.ceil(bitsAllocated / 8) * 2; // one byte is two hex digits
    let hexStored = Math.ceil(bitsStored / 8) * 2;
    for (let i = 0; i < pixelData.length; i += hexAllocated) {
        pixelDataArr.push(pixelData.slice(i, i + hexStored));
    }
    //if  highBit==bitsStored it's in BigEndian,  lse if highBit==0, then it is in LittleEndian,
    pixelDataArr = (highBit + 1 === bitsStored) ? pixelDataArr.map(x => littleToBig(x)) : pixelDataArr;
    // if pixelRepresentation=0, pixels are stored as unsigned integers, else if if pixelRepresentation=1 they are encoded in two's complement
    pixelDataArr = (pixelRepresentation === 0) ? parseInt(pixelDataArr, 16) : u2(pixelDataArr);
    // from now on pixelDataArr is array of numbers
    pixelDataArr = pixelDataArr.map(x => rescaleSlope * x + rescaleIntercept);
    // from now we are going to operate on a new array- pixToDispArr, because we will start processing the image for the purpose of displaying it in a browser
    // pixelDataArr doesn't change
    pixToDispArr = Array.from(pixelDataArr);
    pixToDispArr = adjustWindow(pixToDispArr, windowCenter, windowWidth);
    // so far we support only monochrome1 and monochrome2
    // MONOCHROME1 indicates that the greyscale ranges from bright to dark with ascending pixel values, whereas MONOCHROME2 ranges from dark to bright with ascending pixel values.
    if (photometricInterpretation === "MONOCHROME1") {
        pixToDispArr = pixToDispArr.map(x => 255 - x);
    }
    pixToDispArr = pixToDispArr.map(x => x.toString(16).toUpperCase().padStart(2, "0"));
    pixToDispArr = pixToDispArr.map(x => "#" + x.repeat(3));
    //console.log(pixToDispArr.filter(x => x!="#000" && x!="#FFFFFF"));
    // CANT RETURN TWO ARRAYS - FIX IT!!!!!!!!!!
    window.pixelDataArr = pixelDataArr;
    return pixToDispArr;
}

function displayImage(ctx, rows, columns, pixToDispArr) {
    rows = parseInt(rows);
    columns = parseInt(columns);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j += 1) {
            ctx.fillStyle = pixToDispArr[rows * i + j];
            ctx.fillRect(i, j, 1, 1);
        }
    }
}

function showCoords(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - Math.floor(rect.left);
    var y = event.clientY - Math.floor(rect.top);
    let value = pixelDataArr[y * 512 + x];
    let value2 = pixToDispArr[y * 512 + x];
    var coords = "X coords: " + x + ", Y coords: " + y + "    " + value + "    " + value2;
    document.getElementById("coordinates").innerHTML = coords;
}

function loadData() {
    a = document.getElementById("cos");
    a.addEventListener('change', function () {
        console.log("CDF");
        file = a.files[0];
        console.log(a.files);
        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = function (event) {
            var contents = event.target.result;
            const typedArray1 = new Uint8Array(contents);
            const dicm = Array.from(typedArray1, x => Number(x).toString(16));
            console.log(dicm);
            const dicomJSON = dicomToJSON(dicm);
            console.log(dicomJSON);
            let pixToDispArr = decodePixelData(dicomJSON["Pixel Data"], dicomJSON["Bits Allocated"], dicomJSON["Bits Stored"], dicomJSON["High Bit"], dicomJSON["Pixel Representation"], dicomJSON["Rescale Slope"], dicomJSON["Rescale Intercept"], dicomJSON["Window Center"], dicomJSON["Window Width"], dicomJSON["Photometric Interpretation"]);
            console.log(pixToDispArr);
            var canvas = document.getElementById('dicomImage');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                displayImage(ctx, dicomJSON["Rows"], dicomJSON["Columns"], pixToDispArr);
                canvas.addEventListener('click', function (even) {
                    showCoords(canvas, even);
                }, false);

            } else {
                // canvas-unsupported code here
            }
            let upload= document.getElementById('upload');
            upload.setAttribute('hidden','hidden');
            let guideline = document.getElementById('guideline');
            guideline.innerText = 'Select tumor area';
            rect = canvas.getBoundingClientRect()
            let selectArea = document.getElementById('selectArea');
            selectArea.removeAttribute('hidden')

            selectArea.style.left = rect.left + "px";
            selectArea.style.top = rect.top + "px";

            dragElement(selectArea,rect,rect);


        };
        reader.readAsArrayBuffer(file);

    })
}



loadData();





function dragElement(elmnt,rect) {



    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var rect = rect
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;

    function isOutisideImg(rect,x,y) {
        if(x<rect.left || x>rect.right || y> rect.bottom || y< rect.top)
        {
            return true
        }
        else{
            return false
        }

    }

    function dragMouseDown(e) {

        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        if(!isOutisideImg(rect,pos3,pos4)) {
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
        else {
            console.log((pos3+ ' ' + pos4))
            console.log(rect)
        }
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

        x = elmnt.offsetLeft - pos1
        y = elmnt.offsetTop - pos2
        if(x> rect.left && x+102< rect.right && y> rect.top && y+102<rect.bottom) {
            elmnt.style.top = y + "px";
            elmnt.style.left = x + "px";
        }

    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}