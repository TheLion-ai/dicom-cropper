
        let dicomAttr = [{
            "Tag": "(0002,0000)",
            "VR": "UL",
            "Name": "File Meta Information Group Length",
            "Name1": ""
        },
            {
                "Tag": "(0002,0001)",
                "VR": "OB",
                "Name": "File Meta Information Version",
                "Name1": ""
            },
            {
                "Tag": "(0002,0002)",
                "VR": "UI",
                "Name": "Media Storage SOP Class UID",
                "Name1": ""
            },
            {
                "Tag": "(0002,0003)",
                "VR": "UI",
                "Name": "Media Storage SOP Instance UID",
                "Name1": ""
            },
            {
                "Tag": "(0002,0010)",
                "VR": "UI",
                "Name": "Transfer Syntax UID",
                "Name1": ""
            },
            {
                "Tag": "(0002,0012)",
                "VR": "UI",
                "Name": "Implementation Class UID",
                "Name1": ""
            },
            {
                "Tag": "(0002,0013)",
                "VR": "SH",
                "Name": "Implementation Version Name",
                "Name1": ""
            },
            {
                "Tag": "(0002,0016)",
                "VR": "AE",
                "Name": "Source Application Entity Title",
                "Name1": ""
            },
            {
                "Tag": "(0002,0017)",
                "VR": "AE",
                "Name": "Sending Application Entity Title",
                "Name1": ""
            },
            {
                "Tag": "(0002,0018)",
                "VR": "AE",
                "Name": "Receiving Application Entity Title",
                "Name1": ""
            },
            {
                "Tag": "(0002,0100)",
                "VR": "UI",
                "Name": "Private Information Creator UID",
                "Name1": ""
            },
            {
                "Tag": "(0002,0102)",
                "VR": "OB",
                "Name": "Private Information",
                "Name1": ""
            },
            {
                "Tag": "(0004,1130)",
                "VR": "CS",
                "Name": "File-set ID",
                "Name1": ""
            },
            {
                "Tag": "(0004,1141)",
                "VR": "CS",
                "Name": "File-set Descriptor File ID",
                "Name1": ""
            },
            {
                "Tag": "(0004,1142)",
                "VR": "CS",
                "Name": "Specific Character Set of File-set Descriptor File",
                "Name1": ""
            },
            {
                "Tag": "(0004,1200)",
                "VR": "UL",
                "Name": "Offset of the First Directory Record of the Root Directory Entity",
                "Name1": ""
            },
            {
                "Tag": "(0004,1202)",
                "VR": "UL",
                "Name": "Offset of the Last Directory Record of the Root Directory Entity",
                "Name1": ""
            },
            {
                "Tag": "(0004,1212)",
                "VR": "US",
                "Name": "File-set Consistency Flag",
                "Name1": ""
            },
            {
                "Tag": "(0004,1220)",
                "VR": "SQ",
                "Name": "Directory Record Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0004,1400)",
                "VR": "UL",
                "Name": "Offset of the Next Directory Record",
                "Name1": ""
            },
            {
                "Tag": "(0004,1410)",
                "VR": "US",
                "Name": "Record In-use Flag",
                "Name1": ""
            },
            {
                "Tag": "(0004,1420)",
                "VR": "UL",
                "Name": "Offset of Referenced Lower-Level Directory Entity",
                "Name1": ""
            },
            {
                "Tag": "(0004,1430)",
                "VR": "CS",
                "Name": "Directory Record Type",
                "Name1": ""
            },
            {
                "Tag": "(0004,1432)",
                "VR": "UI",
                "Name": "Private Record UID",
                "Name1": ""
            },
            {
                "Tag": "(0004,1500)",
                "VR": "CS",
                "Name": "Referenced File ID",
                "Name1": ""
            },
            {
                "Tag": "(0004,1504)",
                "VR": "UL",
                "Name": "MRDR Directory Record Offset",
                "Name1": "Retired"
            },
            {
                "Tag": "(0004,1510)",
                "VR": "UI",
                "Name": "Referenced SOP Class UID in File",
                "Name1": ""
            },
            {
                "Tag": "(0004,1511)",
                "VR": "UI",
                "Name": "Referenced SOP Instance UID in File",
                "Name1": ""
            },
            {
                "Tag": "(0004,1512)",
                "VR": "UI",
                "Name": "Referenced Transfer Syntax UID in File",
                "Name1": ""
            },
            {
                "Tag": "(0004,151A)",
                "VR": "UI",
                "Name": "Referenced Related General SOP Class UID in File",
                "Name1": ""
            },
            {
                "Tag": "(0004,1600)",
                "VR": "UL",
                "Name": "Number of References",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0001)",
                "VR": "UL",
                "Name": "Length to End",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0005)",
                "VR": "CS",
                "Name": "Specific Character Set",
                "Name1": ""
            },
            {
                "Tag": "(0008,0006)",
                "VR": "SQ",
                "Name": "Language Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0008)",
                "VR": "CS",
                "Name": "Image Type",
                "Name1": ""
            },
            {
                "Tag": "(0008,0010)",
                "VR": "SH",
                "Name": "Recognition Code",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0012)",
                "VR": "DA",
                "Name": "Instance Creation Date",
                "Name1": ""
            },
            {
                "Tag": "(0008,0013)",
                "VR": "TM",
                "Name": "Instance Creation Time",
                "Name1": ""
            },
            {
                "Tag": "(0008,0014)",
                "VR": "UI",
                "Name": "Instance Creator UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,0015)",
                "VR": "DT",
                "Name": "Instance Coercion DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0008,0016)",
                "VR": "UI",
                "Name": "SOP Class UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,0018)",
                "VR": "UI",
                "Name": "SOP Instance UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,001A)",
                "VR": "UI",
                "Name": "Related General SOP Class UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,001B)",
                "VR": "UI",
                "Name": "Original Specialized SOP Class UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,0020)",
                "VR": "DA",
                "Name": "Study Date",
                "Name1": ""
            },
            {
                "Tag": "(0008,0021)",
                "VR": "DA",
                "Name": "Series Date",
                "Name1": ""
            },
            {
                "Tag": "(0008,0022)",
                "VR": "DA",
                "Name": "Acquisition Date",
                "Name1": ""
            },
            {
                "Tag": "(0008,0023)",
                "VR": "DA",
                "Name": "Content Date",
                "Name1": ""
            },
            {
                "Tag": "(0008,0024)",
                "VR": "DA",
                "Name": "Overlay Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0025)",
                "VR": "DA",
                "Name": "Curve Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,002A)",
                "VR": "DT",
                "Name": "Acquisition DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0008,0030)",
                "VR": "TM",
                "Name": "Study Time",
                "Name1": ""
            },
            {
                "Tag": "(0008,0031)",
                "VR": "TM",
                "Name": "Series Time",
                "Name1": ""
            },
            {
                "Tag": "(0008,0032)",
                "VR": "TM",
                "Name": "Acquisition Time",
                "Name1": ""
            },
            {
                "Tag": "(0008,0033)",
                "VR": "TM",
                "Name": "Content Time",
                "Name1": ""
            },
            {
                "Tag": "(0008,0034)",
                "VR": "TM",
                "Name": "Overlay Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0035)",
                "VR": "TM",
                "Name": "Curve Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0040)",
                "VR": "US",
                "Name": "Data Set Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0041)",
                "VR": "LO",
                "Name": "Data Set Subtype",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0042)",
                "VR": "CS",
                "Name": "Nuclear Medicine Series Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,0050)",
                "VR": "SH",
                "Name": "Accession Number",
                "Name1": ""
            },
            {
                "Tag": "(0008,0051)",
                "VR": "SQ",
                "Name": "Issuer of Accession Number Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0052)",
                "VR": "CS",
                "Name": "Query/Retrieve Level",
                "Name1": ""
            },
            {
                "Tag": "(0008,0053)",
                "VR": "CS",
                "Name": "Query/Retrieve View",
                "Name1": ""
            },
            {
                "Tag": "(0008,0054)",
                "VR": "AE",
                "Name": "Retrieve AE Title",
                "Name1": ""
            },
            {
                "Tag": "(0008,0055)",
                "VR": "AE",
                "Name": "Station  AE Title",
                "Name1": ""
            },
            {
                "Tag": "(0008,0056)",
                "VR": "CS",
                "Name": "Instance Availability",
                "Name1": ""
            },
            {
                "Tag": "(0008,0058)",
                "VR": "UI",
                "Name": "Failed SOP Instance UID List",
                "Name1": ""
            },
            {
                "Tag": "(0008,0060)",
                "VR": "CS",
                "Name": "Modality",
                "Name1": ""
            },
            {
                "Tag": "(0008,0061)",
                "VR": "CS",
                "Name": "Modalities in Study",
                "Name1": ""
            },
            {
                "Tag": "(0008,0062)",
                "VR": "UI",
                "Name": "SOP Classes in Study",
                "Name1": ""
            },
            {
                "Tag": "(0008,0064)",
                "VR": "CS",
                "Name": "Conversion Type",
                "Name1": ""
            },
            {
                "Tag": "(0008,0068)",
                "VR": "CS",
                "Name": "Presentation Intent Type",
                "Name1": ""
            },
            {
                "Tag": "(0008,0070)",
                "VR": "LO",
                "Name": "Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(0008,0080)",
                "VR": "LO",
                "Name": "Institution Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,0081)",
                "VR": "ST",
                "Name": "Institution Address",
                "Name1": ""
            },
            {
                "Tag": "(0008,0082)",
                "VR": "SQ",
                "Name": "Institution Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0090)",
                "VR": "PN",
                "Name": "Referring Physician's Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,0092)",
                "VR": "ST",
                "Name": "Referring Physician's Address",
                "Name1": ""
            },
            {
                "Tag": "(0008,0094)",
                "VR": "SH",
                "Name": "Referring Physician's Telephone Numbers",
                "Name1": ""
            },
            {
                "Tag": "(0008,0096)",
                "VR": "SQ",
                "Name": "Referring Physician Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,009C)",
                "VR": "PN",
                "Name": "Consulting Physician's Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,009D)",
                "VR": "SQ",
                "Name": "Consulting Physician Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0100)",
                "VR": "SH",
                "Name": "Code Value",
                "Name1": ""
            },
            {
                "Tag": "(0008,0101)",
                "VR": "LO",
                "Name": "Extended Code Value",
                "Name1": ""
            },
            {
                "Tag": "(0008,0102)",
                "VR": "SH",
                "Name": "Coding Scheme Designator",
                "Name1": ""
            },
            {
                "Tag": "(0008,0103)",
                "VR": "SH",
                "Name": "Coding Scheme Version",
                "Name1": ""
            },
            {
                "Tag": "(0008,0104)",
                "VR": "LO",
                "Name": "Code Meaning",
                "Name1": ""
            },
            {
                "Tag": "(0008,0105)",
                "VR": "CS",
                "Name": "Mapping Resource",
                "Name1": ""
            },
            {
                "Tag": "(0008,0106)",
                "VR": "DT",
                "Name": "Context Group Version",
                "Name1": ""
            },
            {
                "Tag": "(0008,0107)",
                "VR": "DT",
                "Name": "Context Group Local Version",
                "Name1": ""
            },
            {
                "Tag": "(0008,0108)",
                "VR": "LT",
                "Name": "Extended Code Meaning",
                "Name1": ""
            },
            {
                "Tag": "(0008,010B)",
                "VR": "CS",
                "Name": "Context Group Extension Flag",
                "Name1": ""
            },
            {
                "Tag": "(0008,010C)",
                "VR": "UI",
                "Name": "Coding Scheme UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,010D)",
                "VR": "UI",
                "Name": "Context Group Extension Creator UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,010F)",
                "VR": "CS",
                "Name": "Context Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0008,0110)",
                "VR": "SQ",
                "Name": "Coding Scheme Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0112)",
                "VR": "LO",
                "Name": "Coding Scheme Registry",
                "Name1": ""
            },
            {
                "Tag": "(0008,0114)",
                "VR": "ST",
                "Name": "Coding Scheme External ID",
                "Name1": ""
            },
            {
                "Tag": "(0008,0115)",
                "VR": "ST",
                "Name": "Coding Scheme Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,0116)",
                "VR": "ST",
                "Name": "Coding Scheme Responsible Organization",
                "Name1": ""
            },
            {
                "Tag": "(0008,0117)",
                "VR": "UI",
                "Name": "Context UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,0118)",
                "VR": "UI",
                "Name": "Mapping Resource UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,0119)",
                "VR": "UC",
                "Name": "Long Code Value",
                "Name1": ""
            },
            {
                "Tag": "(0008,0120)",
                "VR": "UR",
                "Name": "URN Code Value",
                "Name1": ""
            },
            {
                "Tag": "(0008,0121)",
                "VR": "SQ",
                "Name": "Equivalent Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0122)",
                "VR": "LO",
                "Name": "Mapping Resource Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,0123)",
                "VR": "SQ",
                "Name": "Context Group Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0124)",
                "VR": "SQ",
                "Name": "Mapping Resource Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0201)",
                "VR": "SH",
                "Name": "Timezone Offset From UTC",
                "Name1": ""
            },
            {
                "Tag": "(0008,0300)",
                "VR": "SQ",
                "Name": "Private Data Element Characteristics Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0301)",
                "VR": "US",
                "Name": "Private Group Reference",
                "Name1": ""
            },
            {
                "Tag": "(0008,0302)",
                "VR": "LO",
                "Name": "Private Creator Reference",
                "Name1": ""
            },
            {
                "Tag": "(0008,0303)",
                "VR": "CS",
                "Name": "Block Identifying Information Status",
                "Name1": ""
            },
            {
                "Tag": "(0008,0304)",
                "VR": "US",
                "Name": "Nonidentifying Private Elements",
                "Name1": ""
            },
            {
                "Tag": "(0008,0306)",
                "VR": "US",
                "Name": "Identifying Private Elements",
                "Name1": ""
            },
            {
                "Tag": "(0008,0305)",
                "VR": "SQ",
                "Name": "Deidentification Action Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,0307)",
                "VR": "CS",
                "Name": "Deidentification Action",
                "Name1": ""
            },
            {
                "Tag": "(0008,1000)",
                "VR": "AE",
                "Name": "Network ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,1010)",
                "VR": "SH",
                "Name": "Station Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,1030)",
                "VR": "LO",
                "Name": "Study Description",
                "Name1": ""
            },
            {
                "Tag": "(0008,1032)",
                "VR": "SQ",
                "Name": "Procedure Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,103E)",
                "VR": "LO",
                "Name": "Series Description",
                "Name1": ""
            },
            {
                "Tag": "(0008,103F)",
                "VR": "SQ",
                "Name": "Series Description Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1040)",
                "VR": "LO",
                "Name": "Institutional Department Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,1048)",
                "VR": "PN",
                "Name": "Physician(s) of Record",
                "Name1": ""
            },
            {
                "Tag": "(0008,1049)",
                "VR": "SQ",
                "Name": "Physician(s) of Record Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1050)",
                "VR": "PN",
                "Name": "Performing Physician's Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,1052)",
                "VR": "SQ",
                "Name": "Performing Physician Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1060)",
                "VR": "PN",
                "Name": "Name of Physician(s) Reading Study",
                "Name1": ""
            },
            {
                "Tag": "(0008,1062)",
                "VR": "SQ",
                "Name": "Physician(s) Reading Study Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1070)",
                "VR": "PN",
                "Name": "Operators' Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,1072)",
                "VR": "SQ",
                "Name": "Operator Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1080)",
                "VR": "LO",
                "Name": "Admitting Diagnoses Description",
                "Name1": ""
            },
            {
                "Tag": "(0008,1084)",
                "VR": "SQ",
                "Name": "Admitting Diagnoses Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1090)",
                "VR": "LO",
                "Name": "Manufacturer's Model Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,1100)",
                "VR": "SQ",
                "Name": "Referenced Results Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,1110)",
                "VR": "SQ",
                "Name": "Referenced Study Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1111)",
                "VR": "SQ",
                "Name": "Referenced Performed Procedure Step Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1115)",
                "VR": "SQ",
                "Name": "Referenced Series Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1120)",
                "VR": "SQ",
                "Name": "Referenced Patient Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1125)",
                "VR": "SQ",
                "Name": "Referenced Visit Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1130)",
                "VR": "SQ",
                "Name": "Referenced Overlay Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,1134)",
                "VR": "SQ",
                "Name": "Referenced Stereometric Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,113A)",
                "VR": "SQ",
                "Name": "Referenced Waveform Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1140)",
                "VR": "SQ",
                "Name": "Referenced Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1145)",
                "VR": "SQ",
                "Name": "Referenced Curve Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,114A)",
                "VR": "SQ",
                "Name": "Referenced Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,114B)",
                "VR": "SQ",
                "Name": "Referenced Real World Value Mapping Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1150)",
                "VR": "UI",
                "Name": "Referenced SOP Class UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,1155)",
                "VR": "UI",
                "Name": "Referenced SOP Instance UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,115A)",
                "VR": "UI",
                "Name": "SOP Classes Supported",
                "Name1": ""
            },
            {
                "Tag": "(0008,1160)",
                "VR": "IS",
                "Name": "Referenced Frame Number",
                "Name1": ""
            },
            {
                "Tag": "(0008,1161)",
                "VR": "UL",
                "Name": "Simple Frame List",
                "Name1": ""
            },
            {
                "Tag": "(0008,1162)",
                "VR": "UL",
                "Name": "Calculated Frame List",
                "Name1": ""
            },
            {
                "Tag": "(0008,1163)",
                "VR": "FD",
                "Name": "Time Range",
                "Name1": ""
            },
            {
                "Tag": "(0008,1164)",
                "VR": "SQ",
                "Name": "Frame Extraction Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1167)",
                "VR": "UI",
                "Name": "Multi-frame Source SOP Instance UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,1190)",
                "VR": "UR",
                "Name": "Retrieve URL",
                "Name1": ""
            },
            {
                "Tag": "(0008,1195)",
                "VR": "UI",
                "Name": "Transaction UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,1196)",
                "VR": "US",
                "Name": "Warning Reason",
                "Name1": ""
            },
            {
                "Tag": "(0008,1197)",
                "VR": "US",
                "Name": "Failure Reason",
                "Name1": ""
            },
            {
                "Tag": "(0008,1198)",
                "VR": "SQ",
                "Name": "Failed SOP Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1199)",
                "VR": "SQ",
                "Name": "Referenced SOP Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,119A)",
                "VR": "SQ",
                "Name": "Other Failures Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1200)",
                "VR": "SQ",
                "Name": "Studies Containing Other Referenced Instances Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,1250)",
                "VR": "SQ",
                "Name": "Related Series Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2110)",
                "VR": "CS",
                "Name": "Lossy Image Compression (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2111)",
                "VR": "ST",
                "Name": "Derivation Description",
                "Name1": ""
            },
            {
                "Tag": "(0008,2112)",
                "VR": "SQ",
                "Name": "Source Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2120)",
                "VR": "SH",
                "Name": "Stage Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,2122)",
                "VR": "IS",
                "Name": "Stage Number",
                "Name1": ""
            },
            {
                "Tag": "(0008,2124)",
                "VR": "IS",
                "Name": "Number of Stages",
                "Name1": ""
            },
            {
                "Tag": "(0008,2127)",
                "VR": "SH",
                "Name": "View Name",
                "Name1": ""
            },
            {
                "Tag": "(0008,2128)",
                "VR": "IS",
                "Name": "View Number",
                "Name1": ""
            },
            {
                "Tag": "(0008,2129)",
                "VR": "IS",
                "Name": "Number of Event Timers",
                "Name1": ""
            },
            {
                "Tag": "(0008,212A)",
                "VR": "IS",
                "Name": "Number of Views in Stage",
                "Name1": ""
            },
            {
                "Tag": "(0008,2130)",
                "VR": "DS",
                "Name": "Event Elapsed Time(s)",
                "Name1": ""
            },
            {
                "Tag": "(0008,2132)",
                "VR": "LO",
                "Name": "Event Timer Name(s)",
                "Name1": ""
            },
            {
                "Tag": "(0008,2133)",
                "VR": "SQ",
                "Name": "Event Timer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2134)",
                "VR": "FD",
                "Name": "Event Time Offset",
                "Name1": ""
            },
            {
                "Tag": "(0008,2135)",
                "VR": "SQ",
                "Name": "Event Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2142)",
                "VR": "IS",
                "Name": "Start Trim",
                "Name1": ""
            },
            {
                "Tag": "(0008,2143)",
                "VR": "IS",
                "Name": "Stop Trim",
                "Name1": ""
            },
            {
                "Tag": "(0008,2144)",
                "VR": "IS",
                "Name": "Recommended Display Frame Rate",
                "Name1": ""
            },
            {
                "Tag": "(0008,2200)",
                "VR": "CS",
                "Name": "Transducer Position",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2204)",
                "VR": "CS",
                "Name": "Transducer Orientation",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2208)",
                "VR": "CS",
                "Name": "Anatomic Structure",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2218)",
                "VR": "SQ",
                "Name": "Anatomic Region Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2220)",
                "VR": "SQ",
                "Name": "Anatomic Region Modifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2228)",
                "VR": "SQ",
                "Name": "Primary Anatomic Structure Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2229)",
                "VR": "SQ",
                "Name": "Anatomic Structure, Space or Region Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2230)",
                "VR": "SQ",
                "Name": "Primary Anatomic Structure Modifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,2240)",
                "VR": "SQ",
                "Name": "Transducer Position Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2242)",
                "VR": "SQ",
                "Name": "Transducer Position Modifier Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2244)",
                "VR": "SQ",
                "Name": "Transducer Orientation Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2246)",
                "VR": "SQ",
                "Name": "Transducer Orientation Modifier Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2251)",
                "VR": "SQ",
                "Name": "Anatomic Structure Space Or Region Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2253)",
                "VR": "SQ",
                "Name": "Anatomic Portal Of Entrance Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2255)",
                "VR": "SQ",
                "Name": "Anatomic Approach Direction Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2256)",
                "VR": "ST",
                "Name": "Anatomic Perspective Description (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2257)",
                "VR": "SQ",
                "Name": "Anatomic Perspective Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2258)",
                "VR": "ST",
                "Name": "Anatomic Location Of Examining Instrument Description (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,2259)",
                "VR": "SQ",
                "Name": "Anatomic Location Of Examining Instrument Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,225A)",
                "VR": "SQ",
                "Name": "Anatomic Structure Space Or Region Modifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,225C)",
                "VR": "SQ",
                "Name": "On Axis Background Anatomic Structure Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,3001)",
                "VR": "SQ",
                "Name": "Alternate Representation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,3010)",
                "VR": "UI",
                "Name": "Irradiation Event UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,3011)",
                "VR": "SQ",
                "Name": "Source Irradiation Event Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,3012)",
                "VR": "UI",
                "Name": "Radiopharmaceutical Administration Event UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,4000)",
                "VR": "LT",
                "Name": "Identifying Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(0008,9007)",
                "VR": "CS",
                "Name": "Frame Type",
                "Name1": ""
            },
            {
                "Tag": "(0008,9092)",
                "VR": "SQ",
                "Name": "Referenced Image Evidence Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9121)",
                "VR": "SQ",
                "Name": "Referenced Raw Data Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9123)",
                "VR": "UI",
                "Name": "Creator-Version UID",
                "Name1": ""
            },
            {
                "Tag": "(0008,9124)",
                "VR": "SQ",
                "Name": "Derivation Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9154)",
                "VR": "SQ",
                "Name": "Source Image Evidence Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9205)",
                "VR": "CS",
                "Name": "Pixel Presentation",
                "Name1": ""
            },
            {
                "Tag": "(0008,9206)",
                "VR": "CS",
                "Name": "Volumetric Properties",
                "Name1": ""
            },
            {
                "Tag": "(0008,9207)",
                "VR": "CS",
                "Name": "Volume Based Calculation Technique",
                "Name1": ""
            },
            {
                "Tag": "(0008,9208)",
                "VR": "CS",
                "Name": "Complex Image Component",
                "Name1": ""
            },
            {
                "Tag": "(0008,9209)",
                "VR": "CS",
                "Name": "Acquisition Contrast",
                "Name1": ""
            },
            {
                "Tag": "(0008,9215)",
                "VR": "SQ",
                "Name": "Derivation Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9237)",
                "VR": "SQ",
                "Name": "Referenced Presentation State Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9410)",
                "VR": "SQ",
                "Name": "Referenced Other Plane Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9458)",
                "VR": "SQ",
                "Name": "Frame Display Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0008,9459)",
                "VR": "FL",
                "Name": "Recommended Display Frame Rate in Float",
                "Name1": ""
            },
            {
                "Tag": "(0008,9460)",
                "VR": "CS",
                "Name": "Skip Frame Range Flag",
                "Name1": ""
            },
            {
                "Tag": "(0010,0010)",
                "VR": "PN",
                "Name": "Patient's Name",
                "Name1": ""
            },
            {
                "Tag": "(0010,0020)",
                "VR": "LO",
                "Name": "Patient ID",
                "Name1": ""
            },
            {
                "Tag": "(0010,0021)",
                "VR": "LO",
                "Name": "Issuer of Patient ID",
                "Name1": ""
            },
            {
                "Tag": "(0010,0022)",
                "VR": "CS",
                "Name": "Type of Patient ID",
                "Name1": ""
            },
            {
                "Tag": "(0010,0024)",
                "VR": "SQ",
                "Name": "Issuer of Patient ID Qualifiers Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0026)",
                "VR": "SQ",
                "Name": "Source Patient Group Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0027)",
                "VR": "SQ",
                "Name": "Group of Patients Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0028)",
                "VR": "US",
                "Name": "Subject Relative Position in Image",
                "Name1": ""
            },
            {
                "Tag": "(0010,0030)",
                "VR": "DA",
                "Name": "Patient's Birth Date",
                "Name1": ""
            },
            {
                "Tag": "(0010,0032)",
                "VR": "TM",
                "Name": "Patient's Birth Time",
                "Name1": ""
            },
            {
                "Tag": "(0010,0033)",
                "VR": "LO",
                "Name": "Patient's Birth Date in Alternative Calendar",
                "Name1": ""
            },
            {
                "Tag": "(0010,0034)",
                "VR": "LO",
                "Name": "Patient's Death Date in Alternative Calendar",
                "Name1": ""
            },
            {
                "Tag": "(0010,0035)",
                "VR": "CS",
                "Name": "Patient's Alternative Calendar",
                "Name1": ""
            },
            {
                "Tag": "(0010,0040)",
                "VR": "CS",
                "Name": "Patient's Sex",
                "Name1": ""
            },
            {
                "Tag": "(0010,0050)",
                "VR": "SQ",
                "Name": "Patient's Insurance Plan Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0101)",
                "VR": "SQ",
                "Name": "Patient's Primary Language Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0102)",
                "VR": "SQ",
                "Name": "Patient's Primary Language Modifier Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0200)",
                "VR": "CS",
                "Name": "Quality Control Subject",
                "Name1": ""
            },
            {
                "Tag": "(0010,0201)",
                "VR": "SQ",
                "Name": "Quality Control Subject Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0212)",
                "VR": "UC",
                "Name": "Strain Description",
                "Name1": ""
            },
            {
                "Tag": "(0010,0213)",
                "VR": "LO",
                "Name": "Strain Nomenclature",
                "Name1": ""
            },
            {
                "Tag": "(0010,0214)",
                "VR": "LO",
                "Name": "Strain Stock Number",
                "Name1": ""
            },
            {
                "Tag": "(0010,0215)",
                "VR": "SQ",
                "Name": "Strain Source Registry Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0216)",
                "VR": "SQ",
                "Name": "Strain Stock Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,0217)",
                "VR": "LO",
                "Name": "Strain Source",
                "Name1": ""
            },
            {
                "Tag": "(0010,0218)",
                "VR": "UT",
                "Name": "Strain Additional Information",
                "Name1": ""
            },
            {
                "Tag": "(0010,0219)",
                "VR": "SQ",
                "Name": "Strain Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,1000)",
                "VR": "LO",
                "Name": "Other Patient IDs",
                "Name1": ""
            },
            {
                "Tag": "(0010,1001)",
                "VR": "PN",
                "Name": "Other Patient Names",
                "Name1": ""
            },
            {
                "Tag": "(0010,1002)",
                "VR": "SQ",
                "Name": "Other Patient IDs Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,1005)",
                "VR": "PN",
                "Name": "Patient's Birth Name",
                "Name1": ""
            },
            {
                "Tag": "(0010,1010)",
                "VR": "AS",
                "Name": "Patient's Age",
                "Name1": ""
            },
            {
                "Tag": "(0010,1020)",
                "VR": "DS",
                "Name": "Patient's Size",
                "Name1": ""
            },
            {
                "Tag": "(0010,1021)",
                "VR": "SQ",
                "Name": "Patient's Size Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,1030)",
                "VR": "DS",
                "Name": "Patient's Weight",
                "Name1": ""
            },
            {
                "Tag": "(0010,1040)",
                "VR": "LO",
                "Name": "Patient's Address",
                "Name1": ""
            },
            {
                "Tag": "(0010,1050)",
                "VR": "LO",
                "Name": "Insurance Plan Identification",
                "Name1": "Retired"
            },
            {
                "Tag": "(0010,1060)",
                "VR": "PN",
                "Name": "Patient's Mother's Birth Name",
                "Name1": ""
            },
            {
                "Tag": "(0010,1080)",
                "VR": "LO",
                "Name": "Military Rank",
                "Name1": ""
            },
            {
                "Tag": "(0010,1081)",
                "VR": "LO",
                "Name": "Branch of Service",
                "Name1": ""
            },
            {
                "Tag": "(0010,1090)",
                "VR": "LO",
                "Name": "Medical Record Locator",
                "Name1": ""
            },
            {
                "Tag": "(0010,1100)",
                "VR": "SQ",
                "Name": "Referenced Patient Photo Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,2000)",
                "VR": "LO",
                "Name": "Medical Alerts",
                "Name1": ""
            },
            {
                "Tag": "(0010,2110)",
                "VR": "LO",
                "Name": "Allergies",
                "Name1": ""
            },
            {
                "Tag": "(0010,2150)",
                "VR": "LO",
                "Name": "Country of Residence",
                "Name1": ""
            },
            {
                "Tag": "(0010,2152)",
                "VR": "LO",
                "Name": "Region of Residence",
                "Name1": ""
            },
            {
                "Tag": "(0010,2154)",
                "VR": "SH",
                "Name": "Patient's Telephone Numbers",
                "Name1": ""
            },
            {
                "Tag": "(0010,2155)",
                "VR": "LT",
                "Name": "Patient's Telecom Information",
                "Name1": ""
            },
            {
                "Tag": "(0010,2160)",
                "VR": "SH",
                "Name": "Ethnic Group",
                "Name1": ""
            },
            {
                "Tag": "(0010,2180)",
                "VR": "SH",
                "Name": "Occupation",
                "Name1": ""
            },
            {
                "Tag": "(0010,21A0)",
                "VR": "CS",
                "Name": "Smoking Status",
                "Name1": ""
            },
            {
                "Tag": "(0010,21B0)",
                "VR": "LT",
                "Name": "Additional Patient History",
                "Name1": ""
            },
            {
                "Tag": "(0010,21C0)",
                "VR": "US",
                "Name": "Pregnancy Status",
                "Name1": ""
            },
            {
                "Tag": "(0010,21D0)",
                "VR": "DA",
                "Name": "Last Menstrual Date",
                "Name1": ""
            },
            {
                "Tag": "(0010,21F0)",
                "VR": "LO",
                "Name": "Patient's Religious Preference",
                "Name1": ""
            },
            {
                "Tag": "(0010,2201)",
                "VR": "LO",
                "Name": "Patient Species Description",
                "Name1": ""
            },
            {
                "Tag": "(0010,2202)",
                "VR": "SQ",
                "Name": "Patient Species Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,2203)",
                "VR": "CS",
                "Name": "Patient's Sex Neutered",
                "Name1": ""
            },
            {
                "Tag": "(0010,2210)",
                "VR": "CS",
                "Name": "Anatomical Orientation Type",
                "Name1": ""
            },
            {
                "Tag": "(0010,2292)",
                "VR": "LO",
                "Name": "Patient Breed Description",
                "Name1": ""
            },
            {
                "Tag": "(0010,2293)",
                "VR": "SQ",
                "Name": "Patient Breed Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,2294)",
                "VR": "SQ",
                "Name": "Breed Registration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,2295)",
                "VR": "LO",
                "Name": "Breed Registration Number",
                "Name1": ""
            },
            {
                "Tag": "(0010,2296)",
                "VR": "SQ",
                "Name": "Breed Registry Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0010,2297)",
                "VR": "PN",
                "Name": "Responsible Person",
                "Name1": ""
            },
            {
                "Tag": "(0010,2298)",
                "VR": "CS",
                "Name": "Responsible Person Role",
                "Name1": ""
            },
            {
                "Tag": "(0010,2299)",
                "VR": "LO",
                "Name": "Responsible Organization",
                "Name1": ""
            },
            {
                "Tag": "(0010,4000)",
                "VR": "LT",
                "Name": "Patient Comments",
                "Name1": ""
            },
            {
                "Tag": "(0010,9431)",
                "VR": "FL",
                "Name": "Examined Body Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0012,0010)",
                "VR": "LO",
                "Name": "Clinical Trial Sponsor Name",
                "Name1": ""
            },
            {
                "Tag": "(0012,0020)",
                "VR": "LO",
                "Name": "Clinical Trial Protocol ID",
                "Name1": ""
            },
            {
                "Tag": "(0012,0021)",
                "VR": "LO",
                "Name": "Clinical Trial Protocol Name",
                "Name1": ""
            },
            {
                "Tag": "(0012,0030)",
                "VR": "LO",
                "Name": "Clinical Trial Site ID",
                "Name1": ""
            },
            {
                "Tag": "(0012,0031)",
                "VR": "LO",
                "Name": "Clinical Trial Site Name",
                "Name1": ""
            },
            {
                "Tag": "(0012,0040)",
                "VR": "LO",
                "Name": "Clinical Trial Subject ID",
                "Name1": ""
            },
            {
                "Tag": "(0012,0042)",
                "VR": "LO",
                "Name": "Clinical Trial Subject Reading ID",
                "Name1": ""
            },
            {
                "Tag": "(0012,0050)",
                "VR": "LO",
                "Name": "Clinical Trial Time Point ID",
                "Name1": ""
            },
            {
                "Tag": "(0012,0051)",
                "VR": "ST",
                "Name": "Clinical Trial Time Point Description",
                "Name1": ""
            },
            {
                "Tag": "(0012,0060)",
                "VR": "LO",
                "Name": "Clinical Trial Coordinating Center Name",
                "Name1": ""
            },
            {
                "Tag": "(0012,0062)",
                "VR": "CS",
                "Name": "Patient Identity Removed",
                "Name1": ""
            },
            {
                "Tag": "(0012,0063)",
                "VR": "LO",
                "Name": "De-identification Method",
                "Name1": ""
            },
            {
                "Tag": "(0012,0064)",
                "VR": "SQ",
                "Name": "De-identification Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0012,0071)",
                "VR": "LO",
                "Name": "Clinical Trial Series ID",
                "Name1": ""
            },
            {
                "Tag": "(0012,0072)",
                "VR": "LO",
                "Name": "Clinical Trial Series Description",
                "Name1": ""
            },
            {
                "Tag": "(0012,0081)",
                "VR": "LO",
                "Name": "Clinical Trial Protocol Ethics Committee Name",
                "Name1": ""
            },
            {
                "Tag": "(0012,0082)",
                "VR": "LO",
                "Name": "Clinical Trial Protocol Ethics Committee Approval Number",
                "Name1": ""
            },
            {
                "Tag": "(0012,0083)",
                "VR": "SQ",
                "Name": "Consent for Clinical Trial Use Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0012,0084)",
                "VR": "CS",
                "Name": "Distribution Type",
                "Name1": ""
            },
            {
                "Tag": "(0012,0085)",
                "VR": "CS",
                "Name": "Consent for Distribution Flag",
                "Name1": ""
            },
            {
                "Tag": "(0014,0023)",
                "VR": "ST",
                "Name": "CAD File Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(0014,0024)",
                "VR": "ST",
                "Name": "Component Reference System",
                "Name1": "Retired"
            },
            {
                "Tag": "(0014,0025)",
                "VR": "ST",
                "Name": "Component Manufacturing Procedure",
                "Name1": ""
            },
            {
                "Tag": "(0014,0028)",
                "VR": "ST",
                "Name": "Component Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(0014,0030)",
                "VR": "DS",
                "Name": "Material Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0014,0032)",
                "VR": "DS",
                "Name": "Material Pipe Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0014,0034)",
                "VR": "DS",
                "Name": "Material Isolation Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0014,0042)",
                "VR": "ST",
                "Name": "Material Grade",
                "Name1": ""
            },
            {
                "Tag": "(0014,0044)",
                "VR": "ST",
                "Name": "Material Properties Description",
                "Name1": ""
            },
            {
                "Tag": "(0014,0045)",
                "VR": "ST",
                "Name": "Material Properties File Format (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0014,0046)",
                "VR": "LT",
                "Name": "Material Notes",
                "Name1": ""
            },
            {
                "Tag": "(0014,0050)",
                "VR": "CS",
                "Name": "Component Shape",
                "Name1": ""
            },
            {
                "Tag": "(0014,0052)",
                "VR": "CS",
                "Name": "Curvature Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,0054)",
                "VR": "DS",
                "Name": "Outer Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0014,0056)",
                "VR": "DS",
                "Name": "Inner Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0014,0100)",
                "VR": "LO",
                "Name": "Component Welder IDs",
                "Name1": ""
            },
            {
                "Tag": "(0014,0101)",
                "VR": "CS",
                "Name": "Secondary Approval Status",
                "Name1": ""
            },
            {
                "Tag": "(0014,0102)",
                "VR": "DA",
                "Name": "Secondary Review Date",
                "Name1": ""
            },
            {
                "Tag": "(0014,0103)",
                "VR": "TM",
                "Name": "Secondary Review Time",
                "Name1": ""
            },
            {
                "Tag": "(0014,0104)",
                "VR": "PN",
                "Name": "Secondary Reviewer Name",
                "Name1": ""
            },
            {
                "Tag": "(0014,0105)",
                "VR": "ST",
                "Name": "Repair ID",
                "Name1": ""
            },
            {
                "Tag": "(0014,0106)",
                "VR": "SQ",
                "Name": "Multiple Component Approval Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,0107)",
                "VR": "CS",
                "Name": "Other Approval Status",
                "Name1": ""
            },
            {
                "Tag": "(0014,0108)",
                "VR": "CS",
                "Name": "Other Secondary Approval Status",
                "Name1": ""
            },
            {
                "Tag": "(0014,1010)",
                "VR": "ST",
                "Name": "Actual Environmental Conditions",
                "Name1": ""
            },
            {
                "Tag": "(0014,1020)",
                "VR": "DA",
                "Name": "Expiry Date",
                "Name1": ""
            },
            {
                "Tag": "(0014,1040)",
                "VR": "ST",
                "Name": "Environmental Conditions",
                "Name1": ""
            },
            {
                "Tag": "(0014,2002)",
                "VR": "SQ",
                "Name": "Evaluator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,2004)",
                "VR": "IS",
                "Name": "Evaluator Number",
                "Name1": ""
            },
            {
                "Tag": "(0014,2006)",
                "VR": "PN",
                "Name": "Evaluator Name",
                "Name1": ""
            },
            {
                "Tag": "(0014,2008)",
                "VR": "IS",
                "Name": "Evaluation Attempt",
                "Name1": ""
            },
            {
                "Tag": "(0014,2012)",
                "VR": "SQ",
                "Name": "Indication Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,2014)",
                "VR": "IS",
                "Name": "Indication Number",
                "Name1": ""
            },
            {
                "Tag": "(0014,2016)",
                "VR": "SH",
                "Name": "Indication Label",
                "Name1": ""
            },
            {
                "Tag": "(0014,2018)",
                "VR": "ST",
                "Name": "Indication Description",
                "Name1": ""
            },
            {
                "Tag": "(0014,201A)",
                "VR": "CS",
                "Name": "Indication Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,201C)",
                "VR": "CS",
                "Name": "Indication Disposition",
                "Name1": ""
            },
            {
                "Tag": "(0014,201E)",
                "VR": "SQ",
                "Name": "Indication ROI Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,2030)",
                "VR": "SQ",
                "Name": "Indication Physical Property Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,2032)",
                "VR": "SH",
                "Name": "Property Label",
                "Name1": ""
            },
            {
                "Tag": "(0014,2202)",
                "VR": "IS",
                "Name": "Coordinate System Number of Axes",
                "Name1": ""
            },
            {
                "Tag": "(0014,2204)",
                "VR": "SQ",
                "Name": "Coordinate System Axes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,2206)",
                "VR": "ST",
                "Name": "Coordinate System Axis Description",
                "Name1": ""
            },
            {
                "Tag": "(0014,2208)",
                "VR": "CS",
                "Name": "Coordinate System Data Set Mapping",
                "Name1": ""
            },
            {
                "Tag": "(0014,220A)",
                "VR": "IS",
                "Name": "Coordinate System Axis Number",
                "Name1": ""
            },
            {
                "Tag": "(0014,220C)",
                "VR": "CS",
                "Name": "Coordinate System Axis Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,220E)",
                "VR": "CS",
                "Name": "Coordinate System Axis Units",
                "Name1": ""
            },
            {
                "Tag": "(0014,2210)",
                "VR": "OB",
                "Name": "Coordinate System Axis Values",
                "Name1": ""
            },
            {
                "Tag": "(0014,2220)",
                "VR": "SQ",
                "Name": "Coordinate System Transform Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,2222)",
                "VR": "ST",
                "Name": "Transform Description",
                "Name1": ""
            },
            {
                "Tag": "(0014,2224)",
                "VR": "IS",
                "Name": "Transform Number of Axes",
                "Name1": ""
            },
            {
                "Tag": "(0014,2226)",
                "VR": "IS",
                "Name": "Transform Order of Axes",
                "Name1": ""
            },
            {
                "Tag": "(0014,2228)",
                "VR": "CS",
                "Name": "Transformed Axis Units",
                "Name1": ""
            },
            {
                "Tag": "(0014,222A)",
                "VR": "DS",
                "Name": "Coordinate System Transform Rotation and Scale Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0014,222C)",
                "VR": "DS",
                "Name": "Coordinate System Transform Translation Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0014,3011)",
                "VR": "DS",
                "Name": "Internal Detector Frame Time",
                "Name1": ""
            },
            {
                "Tag": "(0014,3012)",
                "VR": "DS",
                "Name": "Number of Frames Integrated",
                "Name1": ""
            },
            {
                "Tag": "(0014,3020)",
                "VR": "SQ",
                "Name": "Detector Temperature Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,3022)",
                "VR": "ST",
                "Name": "Sensor Name",
                "Name1": ""
            },
            {
                "Tag": "(0014,3024)",
                "VR": "DS",
                "Name": "Horizontal Offset of Sensor",
                "Name1": ""
            },
            {
                "Tag": "(0014,3026)",
                "VR": "DS",
                "Name": "Vertical Offset of Sensor",
                "Name1": ""
            },
            {
                "Tag": "(0014,3028)",
                "VR": "DS",
                "Name": "Sensor Temperature",
                "Name1": ""
            },
            {
                "Tag": "(0014,3040)",
                "VR": "SQ",
                "Name": "Dark Current Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,3050)",
                "VR": "OB or OW",
                "Name": "Dark Current Counts",
                "Name1": ""
            },
            {
                "Tag": "(0014,3060)",
                "VR": "SQ",
                "Name": "Gain Correction Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,3070)",
                "VR": "OB or OW",
                "Name": "Air Counts",
                "Name1": ""
            },
            {
                "Tag": "(0014,3071)",
                "VR": "DS",
                "Name": "KV Used in Gain Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0014,3072)",
                "VR": "DS",
                "Name": "MA Used in Gain Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0014,3073)",
                "VR": "DS",
                "Name": "Number of Frames Used for Integration",
                "Name1": ""
            },
            {
                "Tag": "(0014,3074)",
                "VR": "LO",
                "Name": "Filter Material Used in Gain Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0014,3075)",
                "VR": "DS",
                "Name": "Filter Thickness Used in Gain Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0014,3076)",
                "VR": "DA",
                "Name": "Date of Gain Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0014,3077)",
                "VR": "TM",
                "Name": "Time of Gain Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0014,3080)",
                "VR": "OB",
                "Name": "Bad Pixel Image",
                "Name1": ""
            },
            {
                "Tag": "(0014,3099)",
                "VR": "LT",
                "Name": "Calibration Notes",
                "Name1": ""
            },
            {
                "Tag": "(0014,4002)",
                "VR": "SQ",
                "Name": "Pulser Equipment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4004)",
                "VR": "CS",
                "Name": "Pulser Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,4006)",
                "VR": "LT",
                "Name": "Pulser Notes",
                "Name1": ""
            },
            {
                "Tag": "(0014,4008)",
                "VR": "SQ",
                "Name": "Receiver Equipment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,400A)",
                "VR": "CS",
                "Name": "Amplifier Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,400C)",
                "VR": "LT",
                "Name": "Receiver Notes",
                "Name1": ""
            },
            {
                "Tag": "(0014,400E)",
                "VR": "SQ",
                "Name": "Pre-Amplifier Equipment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,400F)",
                "VR": "LT",
                "Name": "Pre-Amplifier Notes",
                "Name1": ""
            },
            {
                "Tag": "(0014,4010)",
                "VR": "SQ",
                "Name": "Transmit Transducer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4011)",
                "VR": "SQ",
                "Name": "Receive Transducer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4012)",
                "VR": "US",
                "Name": "Number of Elements",
                "Name1": ""
            },
            {
                "Tag": "(0014,4013)",
                "VR": "CS",
                "Name": "Element Shape",
                "Name1": ""
            },
            {
                "Tag": "(0014,4014)",
                "VR": "DS",
                "Name": "Element Dimension A",
                "Name1": ""
            },
            {
                "Tag": "(0014,4015)",
                "VR": "DS",
                "Name": "Element Dimension B",
                "Name1": ""
            },
            {
                "Tag": "(0014,4016)",
                "VR": "DS",
                "Name": "Element Pitch A",
                "Name1": ""
            },
            {
                "Tag": "(0014,4017)",
                "VR": "DS",
                "Name": "Measured Beam Dimension A",
                "Name1": ""
            },
            {
                "Tag": "(0014,4018)",
                "VR": "DS",
                "Name": "Measured Beam Dimension B",
                "Name1": ""
            },
            {
                "Tag": "(0014,4019)",
                "VR": "DS",
                "Name": "Location of Measured Beam Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0014,401A)",
                "VR": "DS",
                "Name": "Nominal Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0014,401B)",
                "VR": "DS",
                "Name": "Measured Center Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0014,401C)",
                "VR": "DS",
                "Name": "Measured Bandwidth",
                "Name1": ""
            },
            {
                "Tag": "(0014,401D)",
                "VR": "DS",
                "Name": "Element Pitch B",
                "Name1": ""
            },
            {
                "Tag": "(0014,4020)",
                "VR": "SQ",
                "Name": "Pulser Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4022)",
                "VR": "DS",
                "Name": "Pulse Width",
                "Name1": ""
            },
            {
                "Tag": "(0014,4024)",
                "VR": "DS",
                "Name": "Excitation Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0014,4026)",
                "VR": "CS",
                "Name": "Modulation Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,4028)",
                "VR": "DS",
                "Name": "Damping",
                "Name1": ""
            },
            {
                "Tag": "(0014,4030)",
                "VR": "SQ",
                "Name": "Receiver Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4031)",
                "VR": "DS",
                "Name": "Acquired Soundpath Length",
                "Name1": ""
            },
            {
                "Tag": "(0014,4032)",
                "VR": "CS",
                "Name": "Acquisition Compression Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,4033)",
                "VR": "IS",
                "Name": "Acquisition Sample Size",
                "Name1": ""
            },
            {
                "Tag": "(0014,4034)",
                "VR": "DS",
                "Name": "Rectifier Smoothing",
                "Name1": ""
            },
            {
                "Tag": "(0014,4035)",
                "VR": "SQ",
                "Name": "DAC Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4036)",
                "VR": "CS",
                "Name": "DAC Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,4038)",
                "VR": "DS",
                "Name": "DAC Gain Points",
                "Name1": ""
            },
            {
                "Tag": "(0014,403A)",
                "VR": "DS",
                "Name": "DAC Time Points",
                "Name1": ""
            },
            {
                "Tag": "(0014,403C)",
                "VR": "DS",
                "Name": "DAC Amplitude",
                "Name1": ""
            },
            {
                "Tag": "(0014,4040)",
                "VR": "SQ",
                "Name": "Pre-Amplifier Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4050)",
                "VR": "SQ",
                "Name": "Transmit Transducer Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4051)",
                "VR": "SQ",
                "Name": "Receive Transducer Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4052)",
                "VR": "DS",
                "Name": "Incident Angle",
                "Name1": ""
            },
            {
                "Tag": "(0014,4054)",
                "VR": "ST",
                "Name": "Coupling Technique",
                "Name1": ""
            },
            {
                "Tag": "(0014,4056)",
                "VR": "ST",
                "Name": "Coupling Medium",
                "Name1": ""
            },
            {
                "Tag": "(0014,4057)",
                "VR": "DS",
                "Name": "Coupling Velocity",
                "Name1": ""
            },
            {
                "Tag": "(0014,4058)",
                "VR": "DS",
                "Name": "Probe Center Location X",
                "Name1": ""
            },
            {
                "Tag": "(0014,4059)",
                "VR": "DS",
                "Name": "Probe Center Location Z",
                "Name1": ""
            },
            {
                "Tag": "(0014,405A)",
                "VR": "DS",
                "Name": "Sound Path Length",
                "Name1": ""
            },
            {
                "Tag": "(0014,405C)",
                "VR": "ST",
                "Name": "Delay Law Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0014,4060)",
                "VR": "SQ",
                "Name": "Gate Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4062)",
                "VR": "DS",
                "Name": "Gate Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0014,4064)",
                "VR": "DS",
                "Name": "Velocity of Sound",
                "Name1": ""
            },
            {
                "Tag": "(0014,4070)",
                "VR": "SQ",
                "Name": "Calibration Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4072)",
                "VR": "ST",
                "Name": "Calibration Procedure",
                "Name1": ""
            },
            {
                "Tag": "(0014,4074)",
                "VR": "SH",
                "Name": "Procedure Version",
                "Name1": ""
            },
            {
                "Tag": "(0014,4076)",
                "VR": "DA",
                "Name": "Procedure Creation Date",
                "Name1": ""
            },
            {
                "Tag": "(0014,4078)",
                "VR": "DA",
                "Name": "Procedure Expiration Date",
                "Name1": ""
            },
            {
                "Tag": "(0014,407A)",
                "VR": "DA",
                "Name": "Procedure Last Modified Date",
                "Name1": ""
            },
            {
                "Tag": "(0014,407C)",
                "VR": "TM",
                "Name": "Calibration Time",
                "Name1": ""
            },
            {
                "Tag": "(0014,407E)",
                "VR": "DA",
                "Name": "Calibration Date",
                "Name1": ""
            },
            {
                "Tag": "(0014,4080)",
                "VR": "SQ",
                "Name": "Probe Drive Equipment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4081)",
                "VR": "CS",
                "Name": "Drive Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,4082)",
                "VR": "LT",
                "Name": "Probe Drive Notes",
                "Name1": ""
            },
            {
                "Tag": "(0014,4083)",
                "VR": "SQ",
                "Name": "Drive Probe Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4084)",
                "VR": "DS",
                "Name": "Probe Inductance",
                "Name1": ""
            },
            {
                "Tag": "(0014,4085)",
                "VR": "DS",
                "Name": "Probe Resistance",
                "Name1": ""
            },
            {
                "Tag": "(0014,4086)",
                "VR": "SQ",
                "Name": "Receive Probe Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4087)",
                "VR": "SQ",
                "Name": "Probe Drive Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4088)",
                "VR": "DS",
                "Name": "Bridge Resistors",
                "Name1": ""
            },
            {
                "Tag": "(0014,4089)",
                "VR": "DS",
                "Name": "Probe Orientation Angle",
                "Name1": ""
            },
            {
                "Tag": "(0014,408B)",
                "VR": "DS",
                "Name": "User Selected Gain Y",
                "Name1": ""
            },
            {
                "Tag": "(0014,408C)",
                "VR": "DS",
                "Name": "User Selected Phase",
                "Name1": ""
            },
            {
                "Tag": "(0014,408D)",
                "VR": "DS",
                "Name": "User Selected Offset X",
                "Name1": ""
            },
            {
                "Tag": "(0014,408E)",
                "VR": "DS",
                "Name": "User Selected Offset Y",
                "Name1": ""
            },
            {
                "Tag": "(0014,4091)",
                "VR": "SQ",
                "Name": "Channel Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,4092)",
                "VR": "DS",
                "Name": "Channel Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0014,409A)",
                "VR": "SQ",
                "Name": "Scanner Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0014,409B)",
                "VR": "ST",
                "Name": "Scan Procedure",
                "Name1": ""
            },
            {
                "Tag": "(0014,409C)",
                "VR": "DS",
                "Name": "Translation Rate X",
                "Name1": ""
            },
            {
                "Tag": "(0014,409D)",
                "VR": "DS",
                "Name": "Translation Rate Y",
                "Name1": ""
            },
            {
                "Tag": "(0014,409F)",
                "VR": "DS",
                "Name": "Channel Overlap",
                "Name1": ""
            },
            {
                "Tag": "(0014,40A0)",
                "VR": "LO",
                "Name": "Image Quality Indicator Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,40A1)",
                "VR": "LO",
                "Name": "Image Quality Indicator Material",
                "Name1": ""
            },
            {
                "Tag": "(0014,40A2)",
                "VR": "LO",
                "Name": "Image Quality Indicator Size",
                "Name1": ""
            },
            {
                "Tag": "(0014,5002)",
                "VR": "IS",
                "Name": "LINAC Energy",
                "Name1": ""
            },
            {
                "Tag": "(0014,5004)",
                "VR": "IS",
                "Name": "LINAC Output",
                "Name1": ""
            },
            {
                "Tag": "(0014,5100)",
                "VR": "US",
                "Name": "Active Aperture",
                "Name1": ""
            },
            {
                "Tag": "(0014,5101)",
                "VR": "DS",
                "Name": "Total Aperture",
                "Name1": ""
            },
            {
                "Tag": "(0014,5102)",
                "VR": "DS",
                "Name": "Aperture Elevation",
                "Name1": ""
            },
            {
                "Tag": "(0014,5103)",
                "VR": "DS",
                "Name": "Main Lobe Angle",
                "Name1": ""
            },
            {
                "Tag": "(0014,5104)",
                "VR": "DS",
                "Name": "Main Roof Angle",
                "Name1": ""
            },
            {
                "Tag": "(0014,5105)",
                "VR": "CS",
                "Name": "Connector Type",
                "Name1": ""
            },
            {
                "Tag": "(0014,5106)",
                "VR": "SH",
                "Name": "Wedge Model Number",
                "Name1": ""
            },
            {
                "Tag": "(0014,5107)",
                "VR": "DS",
                "Name": "Wedge Angle Float",
                "Name1": ""
            },
            {
                "Tag": "(0014,5108)",
                "VR": "DS",
                "Name": "Wedge Roof Angle",
                "Name1": ""
            },
            {
                "Tag": "(0014,5109)",
                "VR": "CS",
                "Name": "Wedge Element 1 Position",
                "Name1": ""
            },
            {
                "Tag": "(0014,510A)",
                "VR": "DS",
                "Name": "Wedge Material Velocity",
                "Name1": ""
            },
            {
                "Tag": "(0014,510B)",
                "VR": "SH",
                "Name": "Wedge Material",
                "Name1": ""
            },
            {
                "Tag": "(0014,510C)",
                "VR": "DS",
                "Name": "Wedge Offset Z",
                "Name1": ""
            },
            {
                "Tag": "(0014,510D)",
                "VR": "DS",
                "Name": "Wedge Origin Offset X",
                "Name1": ""
            },
            {
                "Tag": "(0014,510E)",
                "VR": "DS",
                "Name": "Wedge Time Delay",
                "Name1": ""
            },
            {
                "Tag": "(0014,510F)",
                "VR": "SH",
                "Name": "Wedge Name",
                "Name1": ""
            },
            {
                "Tag": "(0014,5110)",
                "VR": "SH",
                "Name": "Wedge Manufacturer Name",
                "Name1": ""
            },
            {
                "Tag": "(0014,5111)",
                "VR": "LO",
                "Name": "Wedge Description",
                "Name1": ""
            },
            {
                "Tag": "(0014,5112)",
                "VR": "DS",
                "Name": "Nominal Beam Angle",
                "Name1": ""
            },
            {
                "Tag": "(0014,5113)",
                "VR": "DS",
                "Name": "Wedge Offset X",
                "Name1": ""
            },
            {
                "Tag": "(0014,5114)",
                "VR": "DS",
                "Name": "Wedge Offset Y",
                "Name1": ""
            },
            {
                "Tag": "(0014,5115)",
                "VR": "DS",
                "Name": "Wedge Total Length",
                "Name1": ""
            },
            {
                "Tag": "(0014,5116)",
                "VR": "DS",
                "Name": "Wedge In Contact Length",
                "Name1": ""
            },
            {
                "Tag": "(0014,5117)",
                "VR": "DS",
                "Name": "Wedge Front Gap",
                "Name1": ""
            },
            {
                "Tag": "(0014,5118)",
                "VR": "DS",
                "Name": "Wedge Total Height",
                "Name1": ""
            },
            {
                "Tag": "(0014,5119)",
                "VR": "DS",
                "Name": "Wedge Front Height",
                "Name1": ""
            },
            {
                "Tag": "(0014,511A)",
                "VR": "DS",
                "Name": "Wedge Rear Height",
                "Name1": ""
            },
            {
                "Tag": "(0014,511B)",
                "VR": "DS",
                "Name": "Wedge Total Width",
                "Name1": ""
            },
            {
                "Tag": "(0014,511C)",
                "VR": "DS",
                "Name": "Wedge In Contact Width",
                "Name1": ""
            },
            {
                "Tag": "(0014,511D)",
                "VR": "DS",
                "Name": "Wedge Chamfer Height",
                "Name1": ""
            },
            {
                "Tag": "(0014,511E)",
                "VR": "CS",
                "Name": "Wedge Curve",
                "Name1": ""
            },
            {
                "Tag": "(0014,511F)",
                "VR": "DS",
                "Name": "Radius Along the Wedge",
                "Name1": ""
            },
            {
                "Tag": "(0018,0010)",
                "VR": "LO",
                "Name": "Contrast/Bolus Agent",
                "Name1": ""
            },
            {
                "Tag": "(0018,0012)",
                "VR": "SQ",
                "Name": "Contrast/Bolus Agent Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,0013)",
                "VR": "FL",
                "Name": "Contrast/Bolus T1 Relaxivity",
                "Name1": ""
            },
            {
                "Tag": "(0018,0014)",
                "VR": "SQ",
                "Name": "Contrast/Bolus Administration Route Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,0015)",
                "VR": "CS",
                "Name": "Body Part Examined",
                "Name1": ""
            },
            {
                "Tag": "(0018,0020)",
                "VR": "CS",
                "Name": "Scanning Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,0021)",
                "VR": "CS",
                "Name": "Sequence Variant",
                "Name1": ""
            },
            {
                "Tag": "(0018,0022)",
                "VR": "CS",
                "Name": "Scan Options",
                "Name1": ""
            },
            {
                "Tag": "(0018,0023)",
                "VR": "CS",
                "Name": "MR Acquisition Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,0024)",
                "VR": "SH",
                "Name": "Sequence Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,0025)",
                "VR": "CS",
                "Name": "Angio Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,0026)",
                "VR": "SQ",
                "Name": "Intervention Drug Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,0027)",
                "VR": "TM",
                "Name": "Intervention Drug Stop Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,0028)",
                "VR": "DS",
                "Name": "Intervention Drug Dose",
                "Name1": ""
            },
            {
                "Tag": "(0018,0029)",
                "VR": "SQ",
                "Name": "Intervention Drug Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,002A)",
                "VR": "SQ",
                "Name": "Additional Drug Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,0030)",
                "VR": "LO",
                "Name": "Radionuclide",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,0031)",
                "VR": "LO",
                "Name": "Radiopharmaceutical",
                "Name1": ""
            },
            {
                "Tag": "(0018,0032)",
                "VR": "DS",
                "Name": "Energy Window Centerline",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,0033)",
                "VR": "DS",
                "Name": "Energy Window Total Width",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,0034)",
                "VR": "LO",
                "Name": "Intervention Drug Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,0035)",
                "VR": "TM",
                "Name": "Intervention Drug Start Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,0036)",
                "VR": "SQ",
                "Name": "Intervention Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,0037)",
                "VR": "CS",
                "Name": "Therapy Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,0038)",
                "VR": "CS",
                "Name": "Intervention Status",
                "Name1": ""
            },
            {
                "Tag": "(0018,0039)",
                "VR": "CS",
                "Name": "Therapy Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,003A)",
                "VR": "ST",
                "Name": "Intervention Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,0040)",
                "VR": "IS",
                "Name": "Cine Rate",
                "Name1": ""
            },
            {
                "Tag": "(0018,0042)",
                "VR": "CS",
                "Name": "Initial Cine Run State",
                "Name1": ""
            },
            {
                "Tag": "(0018,0050)",
                "VR": "DS",
                "Name": "Slice Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0018,0060)",
                "VR": "DS",
                "Name": "KVP",
                "Name1": ""
            },
            {
                "Tag": "(0018,0061)",
                "VR": "DS",
                "Name": "",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,0070)",
                "VR": "IS",
                "Name": "Counts Accumulated",
                "Name1": ""
            },
            {
                "Tag": "(0018,0071)",
                "VR": "CS",
                "Name": "Acquisition Termination Condition",
                "Name1": ""
            },
            {
                "Tag": "(0018,0072)",
                "VR": "DS",
                "Name": "Effective Duration",
                "Name1": ""
            },
            {
                "Tag": "(0018,0073)",
                "VR": "CS",
                "Name": "Acquisition Start Condition",
                "Name1": ""
            },
            {
                "Tag": "(0018,0074)",
                "VR": "IS",
                "Name": "Acquisition Start Condition Data",
                "Name1": ""
            },
            {
                "Tag": "(0018,0075)",
                "VR": "IS",
                "Name": "Acquisition Termination Condition Data",
                "Name1": ""
            },
            {
                "Tag": "(0018,0080)",
                "VR": "DS",
                "Name": "Repetition Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,0081)",
                "VR": "DS",
                "Name": "Echo Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,0082)",
                "VR": "DS",
                "Name": "Inversion Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,0083)",
                "VR": "DS",
                "Name": "Number of Averages",
                "Name1": ""
            },
            {
                "Tag": "(0018,0084)",
                "VR": "DS",
                "Name": "Imaging Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0018,0085)",
                "VR": "SH",
                "Name": "Imaged Nucleus",
                "Name1": ""
            },
            {
                "Tag": "(0018,0086)",
                "VR": "IS",
                "Name": "Echo Number(s)",
                "Name1": ""
            },
            {
                "Tag": "(0018,0087)",
                "VR": "DS",
                "Name": "Magnetic Field Strength",
                "Name1": ""
            },
            {
                "Tag": "(0018,0088)",
                "VR": "DS",
                "Name": "Spacing Between Slices",
                "Name1": ""
            },
            {
                "Tag": "(0018,0089)",
                "VR": "IS",
                "Name": "Number of Phase Encoding Steps",
                "Name1": ""
            },
            {
                "Tag": "(0018,0090)",
                "VR": "DS",
                "Name": "Data Collection Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0018,0091)",
                "VR": "IS",
                "Name": "Echo Train Length",
                "Name1": ""
            },
            {
                "Tag": "(0018,0093)",
                "VR": "DS",
                "Name": "Percent Sampling",
                "Name1": ""
            },
            {
                "Tag": "(0018,0094)",
                "VR": "DS",
                "Name": "Percent Phase Field of View",
                "Name1": ""
            },
            {
                "Tag": "(0018,0095)",
                "VR": "DS",
                "Name": "Pixel Bandwidth",
                "Name1": ""
            },
            {
                "Tag": "(0018,1000)",
                "VR": "LO",
                "Name": "Device Serial Number",
                "Name1": ""
            },
            {
                "Tag": "(0018,1002)",
                "VR": "UI",
                "Name": "Device UID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1003)",
                "VR": "LO",
                "Name": "Device ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1004)",
                "VR": "LO",
                "Name": "Plate ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1005)",
                "VR": "LO",
                "Name": "Generator ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1006)",
                "VR": "LO",
                "Name": "Grid ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1007)",
                "VR": "LO",
                "Name": "Cassette ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1008)",
                "VR": "LO",
                "Name": "Gantry ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1010)",
                "VR": "LO",
                "Name": "Secondary Capture Device ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,1011)",
                "VR": "LO",
                "Name": "Hardcopy Creation Device ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,1012)",
                "VR": "DA",
                "Name": "Date of Secondary Capture",
                "Name1": ""
            },
            {
                "Tag": "(0018,1014)",
                "VR": "TM",
                "Name": "Time of Secondary Capture",
                "Name1": ""
            },
            {
                "Tag": "(0018,1016)",
                "VR": "LO",
                "Name": "Secondary Capture Device Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(0018,1017)",
                "VR": "LO",
                "Name": "Hardcopy Device Manufacturer",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,1018)",
                "VR": "LO",
                "Name": "Secondary Capture Device Manufacturer's Model Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,1019)",
                "VR": "LO",
                "Name": "Secondary Capture Device Software Versions",
                "Name1": ""
            },
            {
                "Tag": "(0018,101A)",
                "VR": "LO",
                "Name": "Hardcopy Device Software Version",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,101B)",
                "VR": "LO",
                "Name": "Hardcopy Device Manufacturer's Model Name",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,1020)",
                "VR": "LO",
                "Name": "Software Version(s)",
                "Name1": ""
            },
            {
                "Tag": "(0018,1022)",
                "VR": "SH",
                "Name": "Video Image Format Acquired",
                "Name1": ""
            },
            {
                "Tag": "(0018,1023)",
                "VR": "LO",
                "Name": "Digital Image Format Acquired",
                "Name1": ""
            },
            {
                "Tag": "(0018,1030)",
                "VR": "LO",
                "Name": "Protocol Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,1040)",
                "VR": "LO",
                "Name": "Contrast/Bolus Route",
                "Name1": ""
            },
            {
                "Tag": "(0018,1041)",
                "VR": "DS",
                "Name": "Contrast/Bolus Volume",
                "Name1": ""
            },
            {
                "Tag": "(0018,1042)",
                "VR": "TM",
                "Name": "Contrast/Bolus Start Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1043)",
                "VR": "TM",
                "Name": "Contrast/Bolus Stop Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1044)",
                "VR": "DS",
                "Name": "Contrast/Bolus Total Dose",
                "Name1": ""
            },
            {
                "Tag": "(0018,1045)",
                "VR": "IS",
                "Name": "Syringe Counts",
                "Name1": ""
            },
            {
                "Tag": "(0018,1046)",
                "VR": "DS",
                "Name": "Contrast Flow Rate",
                "Name1": ""
            },
            {
                "Tag": "(0018,1047)",
                "VR": "DS",
                "Name": "Contrast Flow Duration",
                "Name1": ""
            },
            {
                "Tag": "(0018,1048)",
                "VR": "CS",
                "Name": "Contrast/Bolus Ingredient",
                "Name1": ""
            },
            {
                "Tag": "(0018,1049)",
                "VR": "DS",
                "Name": "Contrast/Bolus Ingredient Concentration",
                "Name1": ""
            },
            {
                "Tag": "(0018,1050)",
                "VR": "DS",
                "Name": "Spatial Resolution",
                "Name1": ""
            },
            {
                "Tag": "(0018,1060)",
                "VR": "DS",
                "Name": "Trigger Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1061)",
                "VR": "LO",
                "Name": "Trigger Source or Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1062)",
                "VR": "IS",
                "Name": "Nominal Interval",
                "Name1": ""
            },
            {
                "Tag": "(0018,1063)",
                "VR": "DS",
                "Name": "Frame Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1064)",
                "VR": "LO",
                "Name": "Cardiac Framing Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1065)",
                "VR": "DS",
                "Name": "Frame Time Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,1066)",
                "VR": "DS",
                "Name": "Frame Delay",
                "Name1": ""
            },
            {
                "Tag": "(0018,1067)",
                "VR": "DS",
                "Name": "Image Trigger Delay",
                "Name1": ""
            },
            {
                "Tag": "(0018,1068)",
                "VR": "DS",
                "Name": "Multiplex Group Time Offset",
                "Name1": ""
            },
            {
                "Tag": "(0018,1069)",
                "VR": "DS",
                "Name": "Trigger Time Offset",
                "Name1": ""
            },
            {
                "Tag": "(0018,106A)",
                "VR": "CS",
                "Name": "Synchronization Trigger",
                "Name1": ""
            },
            {
                "Tag": "(0018,106C)",
                "VR": "US",
                "Name": "Synchronization Channel",
                "Name1": ""
            },
            {
                "Tag": "(0018,106E)",
                "VR": "UL",
                "Name": "Trigger Sample Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,1070)",
                "VR": "LO",
                "Name": "Radiopharmaceutical Route",
                "Name1": ""
            },
            {
                "Tag": "(0018,1071)",
                "VR": "DS",
                "Name": "Radiopharmaceutical Volume",
                "Name1": ""
            },
            {
                "Tag": "(0018,1072)",
                "VR": "TM",
                "Name": "Radiopharmaceutical Start Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1073)",
                "VR": "TM",
                "Name": "Radiopharmaceutical Stop Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1074)",
                "VR": "DS",
                "Name": "Radionuclide Total Dose",
                "Name1": ""
            },
            {
                "Tag": "(0018,1075)",
                "VR": "DS",
                "Name": "Radionuclide Half Life",
                "Name1": ""
            },
            {
                "Tag": "(0018,1076)",
                "VR": "DS",
                "Name": "Radionuclide Positron Fraction",
                "Name1": ""
            },
            {
                "Tag": "(0018,1077)",
                "VR": "DS",
                "Name": "Radiopharmaceutical Specific Activity",
                "Name1": ""
            },
            {
                "Tag": "(0018,1078)",
                "VR": "DT",
                "Name": "Radiopharmaceutical Start DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,1079)",
                "VR": "DT",
                "Name": "Radiopharmaceutical Stop DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,1080)",
                "VR": "CS",
                "Name": "Beat Rejection Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,1081)",
                "VR": "IS",
                "Name": "Low R-R Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,1082)",
                "VR": "IS",
                "Name": "High R-R Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,1083)",
                "VR": "IS",
                "Name": "Intervals Acquired",
                "Name1": ""
            },
            {
                "Tag": "(0018,1084)",
                "VR": "IS",
                "Name": "Intervals Rejected",
                "Name1": ""
            },
            {
                "Tag": "(0018,1085)",
                "VR": "LO",
                "Name": "PVC Rejection",
                "Name1": ""
            },
            {
                "Tag": "(0018,1086)",
                "VR": "IS",
                "Name": "Skip Beats",
                "Name1": ""
            },
            {
                "Tag": "(0018,1088)",
                "VR": "IS",
                "Name": "Heart Rate",
                "Name1": ""
            },
            {
                "Tag": "(0018,1090)",
                "VR": "IS",
                "Name": "Cardiac Number of Images",
                "Name1": ""
            },
            {
                "Tag": "(0018,1094)",
                "VR": "IS",
                "Name": "Trigger Window",
                "Name1": ""
            },
            {
                "Tag": "(0018,1100)",
                "VR": "DS",
                "Name": "Reconstruction Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0018,1110)",
                "VR": "DS",
                "Name": "Distance Source to Detector",
                "Name1": ""
            },
            {
                "Tag": "(0018,1111)",
                "VR": "DS",
                "Name": "Distance Source to Patient",
                "Name1": ""
            },
            {
                "Tag": "(0018,1114)",
                "VR": "DS",
                "Name": "Estimated Radiographic Magnification Factor",
                "Name1": ""
            },
            {
                "Tag": "(0018,1120)",
                "VR": "DS",
                "Name": "Gantry/Detector Tilt",
                "Name1": ""
            },
            {
                "Tag": "(0018,1121)",
                "VR": "DS",
                "Name": "Gantry/Detector Slew",
                "Name1": ""
            },
            {
                "Tag": "(0018,1130)",
                "VR": "DS",
                "Name": "Table Height",
                "Name1": ""
            },
            {
                "Tag": "(0018,1131)",
                "VR": "DS",
                "Name": "Table Traverse",
                "Name1": ""
            },
            {
                "Tag": "(0018,1134)",
                "VR": "CS",
                "Name": "Table Motion",
                "Name1": ""
            },
            {
                "Tag": "(0018,1135)",
                "VR": "DS",
                "Name": "Table Vertical Increment",
                "Name1": ""
            },
            {
                "Tag": "(0018,1136)",
                "VR": "DS",
                "Name": "Table Lateral Increment",
                "Name1": ""
            },
            {
                "Tag": "(0018,1137)",
                "VR": "DS",
                "Name": "Table Longitudinal Increment",
                "Name1": ""
            },
            {
                "Tag": "(0018,1138)",
                "VR": "DS",
                "Name": "Table Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,113A)",
                "VR": "CS",
                "Name": "Table Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1140)",
                "VR": "CS",
                "Name": "Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,1141)",
                "VR": "DS",
                "Name": "Angular Position",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,1142)",
                "VR": "DS",
                "Name": "Radial Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,1143)",
                "VR": "DS",
                "Name": "Scan Arc",
                "Name1": ""
            },
            {
                "Tag": "(0018,1144)",
                "VR": "DS",
                "Name": "Angular Step",
                "Name1": ""
            },
            {
                "Tag": "(0018,1145)",
                "VR": "DS",
                "Name": "Center of Rotation Offset",
                "Name1": ""
            },
            {
                "Tag": "(0018,1146)",
                "VR": "DS",
                "Name": "Rotation Offset",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,1147)",
                "VR": "CS",
                "Name": "Field of View Shape",
                "Name1": ""
            },
            {
                "Tag": "(0018,1149)",
                "VR": "IS",
                "Name": "Field of View Dimension(s)",
                "Name1": ""
            },
            {
                "Tag": "(0018,1150)",
                "VR": "IS",
                "Name": "Exposure Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1151)",
                "VR": "IS",
                "Name": "X-Ray Tube Current",
                "Name1": ""
            },
            {
                "Tag": "(0018,1152)",
                "VR": "IS",
                "Name": "Exposure",
                "Name1": ""
            },
            {
                "Tag": "(0018,1153)",
                "VR": "IS",
                "Name": "Exposure in µAs",
                "Name1": ""
            },
            {
                "Tag": "(0018,1154)",
                "VR": "DS",
                "Name": "Average Pulse Width",
                "Name1": ""
            },
            {
                "Tag": "(0018,1155)",
                "VR": "CS",
                "Name": "Radiation Setting",
                "Name1": ""
            },
            {
                "Tag": "(0018,1156)",
                "VR": "CS",
                "Name": "Rectification Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,115A)",
                "VR": "CS",
                "Name": "Radiation Mode",
                "Name1": ""
            },
            {
                "Tag": "(0018,115E)",
                "VR": "DS",
                "Name": "Image and Fluoroscopy Area Dose Product",
                "Name1": ""
            },
            {
                "Tag": "(0018,1160)",
                "VR": "SH",
                "Name": "Filter Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1161)",
                "VR": "LO",
                "Name": "Type of Filters",
                "Name1": ""
            },
            {
                "Tag": "(0018,1162)",
                "VR": "DS",
                "Name": "Intensifier Size",
                "Name1": ""
            },
            {
                "Tag": "(0018,1164)",
                "VR": "DS",
                "Name": "Imager Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(0018,1166)",
                "VR": "CS",
                "Name": "Grid",
                "Name1": ""
            },
            {
                "Tag": "(0018,1170)",
                "VR": "IS",
                "Name": "Generator Power",
                "Name1": ""
            },
            {
                "Tag": "(0018,1180)",
                "VR": "SH",
                "Name": "Collimator/grid Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,1181)",
                "VR": "CS",
                "Name": "Collimator Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1182)",
                "VR": "IS",
                "Name": "Focal Distance",
                "Name1": ""
            },
            {
                "Tag": "(0018,1183)",
                "VR": "DS",
                "Name": "X Focus Center",
                "Name1": ""
            },
            {
                "Tag": "(0018,1184)",
                "VR": "DS",
                "Name": "Y Focus Center",
                "Name1": ""
            },
            {
                "Tag": "(0018,1190)",
                "VR": "DS",
                "Name": "Focal Spot(s)",
                "Name1": ""
            },
            {
                "Tag": "(0018,1191)",
                "VR": "CS",
                "Name": "Anode Target Material",
                "Name1": ""
            },
            {
                "Tag": "(0018,11A0)",
                "VR": "DS",
                "Name": "Body Part Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0018,11A2)",
                "VR": "DS",
                "Name": "Compression Force",
                "Name1": ""
            },
            {
                "Tag": "(0018,11A4)",
                "VR": "LO",
                "Name": "Paddle Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,1200)",
                "VR": "DA",
                "Name": "Date of Last Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0018,1201)",
                "VR": "TM",
                "Name": "Time of Last Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0018,1202)",
                "VR": "DT",
                "Name": "DateTime of Last Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0018,1210)",
                "VR": "SH",
                "Name": "Convolution Kernel",
                "Name1": ""
            },
            {
                "Tag": "(0018,1240)",
                "VR": "IS",
                "Name": "Upper/Lower Pixel Values",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,1242)",
                "VR": "IS",
                "Name": "Actual Frame Duration",
                "Name1": ""
            },
            {
                "Tag": "(0018,1243)",
                "VR": "IS",
                "Name": "Count Rate",
                "Name1": ""
            },
            {
                "Tag": "(0018,1244)",
                "VR": "US",
                "Name": "Preferred Playback Sequencing",
                "Name1": ""
            },
            {
                "Tag": "(0018,1250)",
                "VR": "SH",
                "Name": "Receive Coil Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,1251)",
                "VR": "SH",
                "Name": "Transmit Coil Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,1260)",
                "VR": "SH",
                "Name": "Plate Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1261)",
                "VR": "LO",
                "Name": "Phosphor Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1271)",
                "VR": "FD",
                "Name": "Water Equivalent Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0018,1272)",
                "VR": "SQ",
                "Name": "Water Equivalent Diameter Calculation Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,1300)",
                "VR": "DS",
                "Name": "Scan Velocity",
                "Name1": ""
            },
            {
                "Tag": "(0018,1301)",
                "VR": "CS",
                "Name": "Whole Body Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,1302)",
                "VR": "IS",
                "Name": "Scan Length",
                "Name1": ""
            },
            {
                "Tag": "(0018,1310)",
                "VR": "US",
                "Name": "Acquisition Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0018,1312)",
                "VR": "CS",
                "Name": "In-plane Phase Encoding Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,1314)",
                "VR": "DS",
                "Name": "Flip Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,1315)",
                "VR": "CS",
                "Name": "Variable Flip Angle Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,1316)",
                "VR": "DS",
                "Name": "SAR",
                "Name1": ""
            },
            {
                "Tag": "(0018,1318)",
                "VR": "DS",
                "Name": "dB/dt",
                "Name1": ""
            },
            {
                "Tag": "(0018,1320)",
                "VR": "FL",
                "Name": "B1rms",
                "Name1": ""
            },
            {
                "Tag": "(0018,1400)",
                "VR": "LO",
                "Name": "Acquisition Device Processing Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,1401)",
                "VR": "LO",
                "Name": "Acquisition Device Processing Code",
                "Name1": ""
            },
            {
                "Tag": "(0018,1402)",
                "VR": "CS",
                "Name": "Cassette Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0018,1403)",
                "VR": "CS",
                "Name": "Cassette Size",
                "Name1": ""
            },
            {
                "Tag": "(0018,1404)",
                "VR": "US",
                "Name": "Exposures on Plate",
                "Name1": ""
            },
            {
                "Tag": "(0018,1405)",
                "VR": "IS",
                "Name": "Relative X-Ray Exposure",
                "Name1": ""
            },
            {
                "Tag": "(0018,1411)",
                "VR": "DS",
                "Name": "Exposure Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,1412)",
                "VR": "DS",
                "Name": "Target Exposure Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,1413)",
                "VR": "DS",
                "Name": "Deviation Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,1450)",
                "VR": "DS",
                "Name": "Column Angulation",
                "Name1": ""
            },
            {
                "Tag": "(0018,1460)",
                "VR": "DS",
                "Name": "Tomo Layer Height",
                "Name1": ""
            },
            {
                "Tag": "(0018,1470)",
                "VR": "DS",
                "Name": "Tomo Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,1480)",
                "VR": "DS",
                "Name": "Tomo Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,1490)",
                "VR": "CS",
                "Name": "Tomo Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1491)",
                "VR": "CS",
                "Name": "Tomo Class",
                "Name1": ""
            },
            {
                "Tag": "(0018,1495)",
                "VR": "IS",
                "Name": "Number of Tomosynthesis Source Images",
                "Name1": ""
            },
            {
                "Tag": "(0018,1500)",
                "VR": "CS",
                "Name": "Positioner Motion",
                "Name1": ""
            },
            {
                "Tag": "(0018,1508)",
                "VR": "CS",
                "Name": "Positioner Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,1510)",
                "VR": "DS",
                "Name": "Positioner Primary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,1511)",
                "VR": "DS",
                "Name": "Positioner Secondary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,1520)",
                "VR": "DS",
                "Name": "Positioner Primary Angle Increment",
                "Name1": ""
            },
            {
                "Tag": "(0018,1521)",
                "VR": "DS",
                "Name": "Positioner Secondary Angle Increment",
                "Name1": ""
            },
            {
                "Tag": "(0018,1530)",
                "VR": "DS",
                "Name": "Detector Primary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,1531)",
                "VR": "DS",
                "Name": "Detector Secondary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,1600)",
                "VR": "CS",
                "Name": "Shutter Shape",
                "Name1": ""
            },
            {
                "Tag": "(0018,1602)",
                "VR": "IS",
                "Name": "Shutter Left Vertical Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1604)",
                "VR": "IS",
                "Name": "Shutter Right Vertical Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1606)",
                "VR": "IS",
                "Name": "Shutter Upper Horizontal Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1608)",
                "VR": "IS",
                "Name": "Shutter Lower Horizontal Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1610)",
                "VR": "IS",
                "Name": "Center of Circular Shutter",
                "Name1": ""
            },
            {
                "Tag": "(0018,1612)",
                "VR": "IS",
                "Name": "Radius of Circular Shutter",
                "Name1": ""
            },
            {
                "Tag": "(0018,1620)",
                "VR": "IS",
                "Name": "Vertices of the Polygonal Shutter",
                "Name1": ""
            },
            {
                "Tag": "(0018,1622)",
                "VR": "US",
                "Name": "Shutter Presentation Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,1623)",
                "VR": "US",
                "Name": "Shutter Overlay Group",
                "Name1": ""
            },
            {
                "Tag": "(0018,1624)",
                "VR": "US",
                "Name": "Shutter Presentation Color CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,1700)",
                "VR": "CS",
                "Name": "Collimator Shape",
                "Name1": ""
            },
            {
                "Tag": "(0018,1702)",
                "VR": "IS",
                "Name": "Collimator Left Vertical Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1704)",
                "VR": "IS",
                "Name": "Collimator Right Vertical Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1706)",
                "VR": "IS",
                "Name": "Collimator Upper Horizontal Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1708)",
                "VR": "IS",
                "Name": "Collimator Lower Horizontal Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,1710)",
                "VR": "IS",
                "Name": "Center of Circular Collimator",
                "Name1": ""
            },
            {
                "Tag": "(0018,1712)",
                "VR": "IS",
                "Name": "Radius of Circular Collimator",
                "Name1": ""
            },
            {
                "Tag": "(0018,1720)",
                "VR": "IS",
                "Name": "Vertices of the Polygonal Collimator",
                "Name1": ""
            },
            {
                "Tag": "(0018,1800)",
                "VR": "CS",
                "Name": "Acquisition Time Synchronized",
                "Name1": ""
            },
            {
                "Tag": "(0018,1801)",
                "VR": "SH",
                "Name": "Time Source",
                "Name1": ""
            },
            {
                "Tag": "(0018,1802)",
                "VR": "CS",
                "Name": "Time Distribution Protocol",
                "Name1": ""
            },
            {
                "Tag": "(0018,1803)",
                "VR": "LO",
                "Name": "NTP Source Address",
                "Name1": ""
            },
            {
                "Tag": "(0018,2001)",
                "VR": "IS",
                "Name": "Page Number Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,2002)",
                "VR": "SH",
                "Name": "Frame Label Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,2003)",
                "VR": "DS",
                "Name": "Frame Primary Angle Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,2004)",
                "VR": "DS",
                "Name": "Frame Secondary Angle Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,2005)",
                "VR": "DS",
                "Name": "Slice Location Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,2006)",
                "VR": "SH",
                "Name": "Display Window Label Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,2010)",
                "VR": "DS",
                "Name": "Nominal Scanned Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(0018,2020)",
                "VR": "CS",
                "Name": "Digitizing Device Transport Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,2030)",
                "VR": "DS",
                "Name": "Rotation of Scanned Film",
                "Name1": ""
            },
            {
                "Tag": "(0018,2041)",
                "VR": "SQ",
                "Name": "Biopsy Target Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,2042)",
                "VR": "UI",
                "Name": "Target UID",
                "Name1": ""
            },
            {
                "Tag": "(0018,2043)",
                "VR": "FL",
                "Name": "Localizing Cursor Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,2044)",
                "VR": "FL",
                "Name": "Calculated Target Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,2045)",
                "VR": "SH",
                "Name": "Target Label",
                "Name1": ""
            },
            {
                "Tag": "(0018,2046)",
                "VR": "FL",
                "Name": "Displayed Z Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,3100)",
                "VR": "CS",
                "Name": "IVUS Acquisition",
                "Name1": ""
            },
            {
                "Tag": "(0018,3101)",
                "VR": "DS",
                "Name": "IVUS Pullback Rate",
                "Name1": ""
            },
            {
                "Tag": "(0018,3102)",
                "VR": "DS",
                "Name": "IVUS Gated Rate",
                "Name1": ""
            },
            {
                "Tag": "(0018,3103)",
                "VR": "IS",
                "Name": "IVUS Pullback Start Frame Number",
                "Name1": ""
            },
            {
                "Tag": "(0018,3104)",
                "VR": "IS",
                "Name": "IVUS Pullback Stop Frame Number",
                "Name1": ""
            },
            {
                "Tag": "(0018,3105)",
                "VR": "IS",
                "Name": "Lesion Number",
                "Name1": ""
            },
            {
                "Tag": "(0018,4000)",
                "VR": "LT",
                "Name": "Acquisition Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,5000)",
                "VR": "SH",
                "Name": "Output Power",
                "Name1": ""
            },
            {
                "Tag": "(0018,5010)",
                "VR": "LO",
                "Name": "Transducer Data",
                "Name1": ""
            },
            {
                "Tag": "(0018,5012)",
                "VR": "DS",
                "Name": "Focus Depth",
                "Name1": ""
            },
            {
                "Tag": "(0018,5020)",
                "VR": "LO",
                "Name": "Processing Function",
                "Name1": ""
            },
            {
                "Tag": "(0018,5021)",
                "VR": "LO",
                "Name": "Postprocessing Function",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,5022)",
                "VR": "DS",
                "Name": "Mechanical Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,5024)",
                "VR": "DS",
                "Name": "Bone Thermal Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,5026)",
                "VR": "DS",
                "Name": "Cranial Thermal Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,5027)",
                "VR": "DS",
                "Name": "Soft Tissue Thermal Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,5028)",
                "VR": "DS",
                "Name": "Soft Tissue-focus Thermal Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,5029)",
                "VR": "DS",
                "Name": "Soft Tissue-surface Thermal Index",
                "Name1": ""
            },
            {
                "Tag": "(0018,5030)",
                "VR": "DS",
                "Name": "Dynamic Range",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,5040)",
                "VR": "DS",
                "Name": "Total Gain",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,5050)",
                "VR": "IS",
                "Name": "Depth of Scan Field",
                "Name1": ""
            },
            {
                "Tag": "(0018,5100)",
                "VR": "CS",
                "Name": "Patient Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,5101)",
                "VR": "CS",
                "Name": "View Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,5104)",
                "VR": "SQ",
                "Name": "Projection Eponymous Name Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,5210)",
                "VR": "DS",
                "Name": "Image Transformation Matrix",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,5212)",
                "VR": "DS",
                "Name": "Image Translation Vector",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,6000)",
                "VR": "DS",
                "Name": "Sensitivity",
                "Name1": ""
            },
            {
                "Tag": "(0018,6011)",
                "VR": "SQ",
                "Name": "Sequence of Ultrasound Regions",
                "Name1": ""
            },
            {
                "Tag": "(0018,6012)",
                "VR": "US",
                "Name": "Region Spatial Format",
                "Name1": ""
            },
            {
                "Tag": "(0018,6014)",
                "VR": "US",
                "Name": "Region Data Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,6016)",
                "VR": "UL",
                "Name": "Region Flags",
                "Name1": ""
            },
            {
                "Tag": "(0018,6018)",
                "VR": "UL",
                "Name": "Region Location Min X0",
                "Name1": ""
            },
            {
                "Tag": "(0018,601A)",
                "VR": "UL",
                "Name": "Region Location Min Y0",
                "Name1": ""
            },
            {
                "Tag": "(0018,601C)",
                "VR": "UL",
                "Name": "Region Location Max X1",
                "Name1": ""
            },
            {
                "Tag": "(0018,601E)",
                "VR": "UL",
                "Name": "Region Location Max Y1",
                "Name1": ""
            },
            {
                "Tag": "(0018,6020)",
                "VR": "SL",
                "Name": "Reference Pixel X0",
                "Name1": ""
            },
            {
                "Tag": "(0018,6022)",
                "VR": "SL",
                "Name": "Reference Pixel Y0",
                "Name1": ""
            },
            {
                "Tag": "(0018,6024)",
                "VR": "US",
                "Name": "Physical Units X Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,6026)",
                "VR": "US",
                "Name": "Physical Units Y Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,6028)",
                "VR": "FD",
                "Name": "Reference Pixel Physical Value X",
                "Name1": ""
            },
            {
                "Tag": "(0018,602A)",
                "VR": "FD",
                "Name": "Reference Pixel Physical Value Y",
                "Name1": ""
            },
            {
                "Tag": "(0018,602C)",
                "VR": "FD",
                "Name": "Physical Delta X",
                "Name1": ""
            },
            {
                "Tag": "(0018,602E)",
                "VR": "FD",
                "Name": "Physical Delta Y",
                "Name1": ""
            },
            {
                "Tag": "(0018,6030)",
                "VR": "UL",
                "Name": "Transducer Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0018,6031)",
                "VR": "CS",
                "Name": "Transducer Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,6032)",
                "VR": "UL",
                "Name": "Pulse Repetition Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0018,6034)",
                "VR": "FD",
                "Name": "Doppler Correction Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,6036)",
                "VR": "FD",
                "Name": "Steering Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,6038)",
                "VR": "UL",
                "Name": "Doppler Sample Volume X Position (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,6039)",
                "VR": "SL",
                "Name": "Doppler Sample Volume X Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,603A)",
                "VR": "UL",
                "Name": "Doppler Sample Volume Y Position (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,603B)",
                "VR": "SL",
                "Name": "Doppler Sample Volume Y Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,603C)",
                "VR": "UL",
                "Name": "TM-Line Position X0 (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,603D)",
                "VR": "SL",
                "Name": "TM-Line Position X0",
                "Name1": ""
            },
            {
                "Tag": "(0018,603E)",
                "VR": "UL",
                "Name": "TM-Line Position Y0 (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,603F)",
                "VR": "SL",
                "Name": "TM-Line Position Y0",
                "Name1": ""
            },
            {
                "Tag": "(0018,6040)",
                "VR": "UL",
                "Name": "TM-Line Position X1 (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,6041)",
                "VR": "SL",
                "Name": "TM-Line Position X1",
                "Name1": ""
            },
            {
                "Tag": "(0018,6042)",
                "VR": "UL",
                "Name": "TM-Line Position Y1 (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,6043)",
                "VR": "SL",
                "Name": "TM-Line Position Y1",
                "Name1": ""
            },
            {
                "Tag": "(0018,6044)",
                "VR": "US",
                "Name": "Pixel Component Organization",
                "Name1": ""
            },
            {
                "Tag": "(0018,6046)",
                "VR": "UL",
                "Name": "Pixel Component Mask",
                "Name1": ""
            },
            {
                "Tag": "(0018,6048)",
                "VR": "UL",
                "Name": "Pixel Component Range Start",
                "Name1": ""
            },
            {
                "Tag": "(0018,604A)",
                "VR": "UL",
                "Name": "Pixel Component Range Stop",
                "Name1": ""
            },
            {
                "Tag": "(0018,604C)",
                "VR": "US",
                "Name": "Pixel Component Physical Units",
                "Name1": ""
            },
            {
                "Tag": "(0018,604E)",
                "VR": "US",
                "Name": "Pixel Component Data Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,6050)",
                "VR": "UL",
                "Name": "Number of Table Break Points",
                "Name1": ""
            },
            {
                "Tag": "(0018,6052)",
                "VR": "UL",
                "Name": "Table of X Break Points",
                "Name1": ""
            },
            {
                "Tag": "(0018,6054)",
                "VR": "FD",
                "Name": "Table of Y Break Points",
                "Name1": ""
            },
            {
                "Tag": "(0018,6056)",
                "VR": "UL",
                "Name": "Number of Table Entries",
                "Name1": ""
            },
            {
                "Tag": "(0018,6058)",
                "VR": "UL",
                "Name": "Table of Pixel Values",
                "Name1": ""
            },
            {
                "Tag": "(0018,605A)",
                "VR": "FL",
                "Name": "Table of Parameter Values",
                "Name1": ""
            },
            {
                "Tag": "(0018,6060)",
                "VR": "FL",
                "Name": "R Wave Time Vector",
                "Name1": ""
            },
            {
                "Tag": "(0018,7000)",
                "VR": "CS",
                "Name": "Detector Conditions Nominal Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,7001)",
                "VR": "DS",
                "Name": "Detector Temperature",
                "Name1": ""
            },
            {
                "Tag": "(0018,7004)",
                "VR": "CS",
                "Name": "Detector Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,7005)",
                "VR": "CS",
                "Name": "Detector Configuration",
                "Name1": ""
            },
            {
                "Tag": "(0018,7006)",
                "VR": "LT",
                "Name": "Detector Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,7008)",
                "VR": "LT",
                "Name": "Detector Mode",
                "Name1": ""
            },
            {
                "Tag": "(0018,700A)",
                "VR": "SH",
                "Name": "Detector ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,700C)",
                "VR": "DA",
                "Name": "Date of Last Detector Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0018,700E)",
                "VR": "TM",
                "Name": "Time of Last Detector Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0018,7010)",
                "VR": "IS",
                "Name": "Exposures on Detector Since Last Calibration",
                "Name1": ""
            },
            {
                "Tag": "(0018,7011)",
                "VR": "IS",
                "Name": "Exposures on Detector Since Manufactured",
                "Name1": ""
            },
            {
                "Tag": "(0018,7012)",
                "VR": "DS",
                "Name": "Detector Time Since Last Exposure",
                "Name1": ""
            },
            {
                "Tag": "(0018,7014)",
                "VR": "DS",
                "Name": "Detector Active Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,7016)",
                "VR": "DS",
                "Name": "Detector Activation Offset From Exposure",
                "Name1": ""
            },
            {
                "Tag": "(0018,701A)",
                "VR": "DS",
                "Name": "Detector Binning",
                "Name1": ""
            },
            {
                "Tag": "(0018,7020)",
                "VR": "DS",
                "Name": "Detector Element Physical Size",
                "Name1": ""
            },
            {
                "Tag": "(0018,7022)",
                "VR": "DS",
                "Name": "Detector Element Spacing",
                "Name1": ""
            },
            {
                "Tag": "(0018,7024)",
                "VR": "CS",
                "Name": "Detector Active Shape",
                "Name1": ""
            },
            {
                "Tag": "(0018,7026)",
                "VR": "DS",
                "Name": "Detector Active Dimension(s)",
                "Name1": ""
            },
            {
                "Tag": "(0018,7028)",
                "VR": "DS",
                "Name": "Detector Active Origin",
                "Name1": ""
            },
            {
                "Tag": "(0018,702A)",
                "VR": "LO",
                "Name": "Detector Manufacturer Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,702B)",
                "VR": "LO",
                "Name": "Detector Manufacturer's Model Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,7030)",
                "VR": "DS",
                "Name": "Field of View Origin",
                "Name1": ""
            },
            {
                "Tag": "(0018,7032)",
                "VR": "DS",
                "Name": "Field of View Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0018,7034)",
                "VR": "CS",
                "Name": "Field of View Horizontal Flip",
                "Name1": ""
            },
            {
                "Tag": "(0018,7036)",
                "VR": "FL",
                "Name": "Pixel Data Area Origin Relative To FOV",
                "Name1": ""
            },
            {
                "Tag": "(0018,7038)",
                "VR": "FL",
                "Name": "Pixel Data Area Rotation Angle Relative To FOV",
                "Name1": ""
            },
            {
                "Tag": "(0018,7040)",
                "VR": "LT",
                "Name": "Grid Absorbing Material",
                "Name1": ""
            },
            {
                "Tag": "(0018,7041)",
                "VR": "LT",
                "Name": "Grid Spacing Material",
                "Name1": ""
            },
            {
                "Tag": "(0018,7042)",
                "VR": "DS",
                "Name": "Grid Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0018,7044)",
                "VR": "DS",
                "Name": "Grid Pitch",
                "Name1": ""
            },
            {
                "Tag": "(0018,7046)",
                "VR": "IS",
                "Name": "Grid Aspect Ratio",
                "Name1": ""
            },
            {
                "Tag": "(0018,7048)",
                "VR": "DS",
                "Name": "Grid Period",
                "Name1": ""
            },
            {
                "Tag": "(0018,704C)",
                "VR": "DS",
                "Name": "Grid Focal Distance",
                "Name1": ""
            },
            {
                "Tag": "(0018,7050)",
                "VR": "CS",
                "Name": "Filter Material",
                "Name1": ""
            },
            {
                "Tag": "(0018,7052)",
                "VR": "DS",
                "Name": "Filter Thickness Minimum",
                "Name1": ""
            },
            {
                "Tag": "(0018,7054)",
                "VR": "DS",
                "Name": "Filter Thickness Maximum",
                "Name1": ""
            },
            {
                "Tag": "(0018,7056)",
                "VR": "FL",
                "Name": "Filter Beam Path Length Minimum",
                "Name1": ""
            },
            {
                "Tag": "(0018,7058)",
                "VR": "FL",
                "Name": "Filter Beam Path Length Maximum",
                "Name1": ""
            },
            {
                "Tag": "(0018,7060)",
                "VR": "CS",
                "Name": "Exposure Control Mode",
                "Name1": ""
            },
            {
                "Tag": "(0018,7062)",
                "VR": "LT",
                "Name": "Exposure Control Mode Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,7064)",
                "VR": "CS",
                "Name": "Exposure Status",
                "Name1": ""
            },
            {
                "Tag": "(0018,7065)",
                "VR": "DS",
                "Name": "Phototimer Setting",
                "Name1": ""
            },
            {
                "Tag": "(0018,8150)",
                "VR": "DS",
                "Name": "Exposure Time in µS",
                "Name1": ""
            },
            {
                "Tag": "(0018,8151)",
                "VR": "DS",
                "Name": "X-Ray Tube Current in µA",
                "Name1": ""
            },
            {
                "Tag": "(0018,9004)",
                "VR": "CS",
                "Name": "Content Qualification",
                "Name1": ""
            },
            {
                "Tag": "(0018,9005)",
                "VR": "SH",
                "Name": "Pulse Sequence Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,9006)",
                "VR": "SQ",
                "Name": "MR Imaging Modifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9008)",
                "VR": "CS",
                "Name": "Echo Pulse Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9009)",
                "VR": "CS",
                "Name": "Inversion Recovery",
                "Name1": ""
            },
            {
                "Tag": "(0018,9010)",
                "VR": "CS",
                "Name": "Flow Compensation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9011)",
                "VR": "CS",
                "Name": "Multiple Spin Echo",
                "Name1": ""
            },
            {
                "Tag": "(0018,9012)",
                "VR": "CS",
                "Name": "Multi-planar Excitation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9014)",
                "VR": "CS",
                "Name": "Phase Contrast",
                "Name1": ""
            },
            {
                "Tag": "(0018,9015)",
                "VR": "CS",
                "Name": "Time of Flight Contrast",
                "Name1": ""
            },
            {
                "Tag": "(0018,9016)",
                "VR": "CS",
                "Name": "Spoiling",
                "Name1": ""
            },
            {
                "Tag": "(0018,9017)",
                "VR": "CS",
                "Name": "Steady State Pulse Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9018)",
                "VR": "CS",
                "Name": "Echo Planar Pulse Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9019)",
                "VR": "FD",
                "Name": "Tag Angle First Axis",
                "Name1": ""
            },
            {
                "Tag": "(0018,9020)",
                "VR": "CS",
                "Name": "Magnetization Transfer",
                "Name1": ""
            },
            {
                "Tag": "(0018,9021)",
                "VR": "CS",
                "Name": "T2 Preparation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9022)",
                "VR": "CS",
                "Name": "Blood Signal Nulling",
                "Name1": ""
            },
            {
                "Tag": "(0018,9024)",
                "VR": "CS",
                "Name": "Saturation Recovery",
                "Name1": ""
            },
            {
                "Tag": "(0018,9025)",
                "VR": "CS",
                "Name": "Spectrally Selected Suppression",
                "Name1": ""
            },
            {
                "Tag": "(0018,9026)",
                "VR": "CS",
                "Name": "Spectrally Selected Excitation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9027)",
                "VR": "CS",
                "Name": "Spatial Pre-saturation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9028)",
                "VR": "CS",
                "Name": "Tagging",
                "Name1": ""
            },
            {
                "Tag": "(0018,9029)",
                "VR": "CS",
                "Name": "Oversampling Phase",
                "Name1": ""
            },
            {
                "Tag": "(0018,9030)",
                "VR": "FD",
                "Name": "Tag Spacing First Dimension",
                "Name1": ""
            },
            {
                "Tag": "(0018,9032)",
                "VR": "CS",
                "Name": "Geometry of k-Space Traversal",
                "Name1": ""
            },
            {
                "Tag": "(0018,9033)",
                "VR": "CS",
                "Name": "Segmented k-Space Traversal",
                "Name1": ""
            },
            {
                "Tag": "(0018,9034)",
                "VR": "CS",
                "Name": "Rectilinear Phase Encode Reordering",
                "Name1": ""
            },
            {
                "Tag": "(0018,9035)",
                "VR": "FD",
                "Name": "Tag Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0018,9036)",
                "VR": "CS",
                "Name": "Partial Fourier Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9037)",
                "VR": "CS",
                "Name": "Cardiac Synchronization Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,9041)",
                "VR": "LO",
                "Name": "Receive Coil Manufacturer Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,9042)",
                "VR": "SQ",
                "Name": "MR Receive Coil Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9043)",
                "VR": "CS",
                "Name": "Receive Coil Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9044)",
                "VR": "CS",
                "Name": "Quadrature Receive Coil",
                "Name1": ""
            },
            {
                "Tag": "(0018,9045)",
                "VR": "SQ",
                "Name": "Multi-Coil Definition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9046)",
                "VR": "LO",
                "Name": "Multi-Coil Configuration",
                "Name1": ""
            },
            {
                "Tag": "(0018,9047)",
                "VR": "SH",
                "Name": "Multi-Coil Element Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,9048)",
                "VR": "CS",
                "Name": "Multi-Coil Element Used",
                "Name1": ""
            },
            {
                "Tag": "(0018,9049)",
                "VR": "SQ",
                "Name": "MR Transmit Coil Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9050)",
                "VR": "LO",
                "Name": "Transmit Coil Manufacturer Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,9051)",
                "VR": "CS",
                "Name": "Transmit Coil Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9052)",
                "VR": "FD",
                "Name": "Spectral Width",
                "Name1": ""
            },
            {
                "Tag": "(0018,9053)",
                "VR": "FD",
                "Name": "Chemical Shift Reference",
                "Name1": ""
            },
            {
                "Tag": "(0018,9054)",
                "VR": "CS",
                "Name": "Volume Localization Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,9058)",
                "VR": "US",
                "Name": "MR Acquisition Frequency Encoding Steps",
                "Name1": ""
            },
            {
                "Tag": "(0018,9059)",
                "VR": "CS",
                "Name": "De-coupling",
                "Name1": ""
            },
            {
                "Tag": "(0018,9060)",
                "VR": "CS",
                "Name": "De-coupled Nucleus",
                "Name1": ""
            },
            {
                "Tag": "(0018,9061)",
                "VR": "FD",
                "Name": "De-coupling Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0018,9062)",
                "VR": "CS",
                "Name": "De-coupling Method",
                "Name1": ""
            },
            {
                "Tag": "(0018,9063)",
                "VR": "FD",
                "Name": "De-coupling Chemical Shift Reference",
                "Name1": ""
            },
            {
                "Tag": "(0018,9064)",
                "VR": "CS",
                "Name": "k-space Filtering",
                "Name1": ""
            },
            {
                "Tag": "(0018,9065)",
                "VR": "CS",
                "Name": "Time Domain Filtering",
                "Name1": ""
            },
            {
                "Tag": "(0018,9066)",
                "VR": "US",
                "Name": "Number of Zero Fills",
                "Name1": ""
            },
            {
                "Tag": "(0018,9067)",
                "VR": "CS",
                "Name": "Baseline Correction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9069)",
                "VR": "FD",
                "Name": "Parallel Reduction Factor In-plane",
                "Name1": ""
            },
            {
                "Tag": "(0018,9070)",
                "VR": "FD",
                "Name": "Cardiac R-R Interval Specified",
                "Name1": ""
            },
            {
                "Tag": "(0018,9073)",
                "VR": "FD",
                "Name": "Acquisition Duration",
                "Name1": ""
            },
            {
                "Tag": "(0018,9074)",
                "VR": "DT",
                "Name": "Frame Acquisition DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,9075)",
                "VR": "CS",
                "Name": "Diffusion Directionality",
                "Name1": ""
            },
            {
                "Tag": "(0018,9076)",
                "VR": "SQ",
                "Name": "Diffusion Gradient Direction Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9077)",
                "VR": "CS",
                "Name": "Parallel Acquisition",
                "Name1": ""
            },
            {
                "Tag": "(0018,9078)",
                "VR": "CS",
                "Name": "Parallel Acquisition Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,9079)",
                "VR": "FD",
                "Name": "Inversion Times",
                "Name1": ""
            },
            {
                "Tag": "(0018,9080)",
                "VR": "ST",
                "Name": "Metabolite Map Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9081)",
                "VR": "CS",
                "Name": "Partial Fourier",
                "Name1": ""
            },
            {
                "Tag": "(0018,9082)",
                "VR": "FD",
                "Name": "Effective Echo Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,9083)",
                "VR": "SQ",
                "Name": "Metabolite Map Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9084)",
                "VR": "SQ",
                "Name": "Chemical Shift Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9085)",
                "VR": "CS",
                "Name": "Cardiac Signal Source",
                "Name1": ""
            },
            {
                "Tag": "(0018,9087)",
                "VR": "FD",
                "Name": "Diffusion b-value",
                "Name1": ""
            },
            {
                "Tag": "(0018,9089)",
                "VR": "FD",
                "Name": "Diffusion Gradient Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9090)",
                "VR": "FD",
                "Name": "Velocity Encoding Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9091)",
                "VR": "FD",
                "Name": "Velocity Encoding Minimum Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,9092)",
                "VR": "SQ",
                "Name": "Velocity Encoding Acquisition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9093)",
                "VR": "US",
                "Name": "Number of k-Space Trajectories",
                "Name1": ""
            },
            {
                "Tag": "(0018,9094)",
                "VR": "CS",
                "Name": "Coverage of k-Space",
                "Name1": ""
            },
            {
                "Tag": "(0018,9095)",
                "VR": "UL",
                "Name": "Spectroscopy Acquisition Phase Rows",
                "Name1": ""
            },
            {
                "Tag": "(0018,9096)",
                "VR": "FD",
                "Name": "Parallel Reduction Factor In-plane (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,9098)",
                "VR": "FD",
                "Name": "Transmitter Frequency",
                "Name1": ""
            },
            {
                "Tag": "(0018,9100)",
                "VR": "CS",
                "Name": "Resonant Nucleus",
                "Name1": ""
            },
            {
                "Tag": "(0018,9101)",
                "VR": "CS",
                "Name": "Frequency Correction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9103)",
                "VR": "SQ",
                "Name": "MR Spectroscopy FOV/Geometry Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9104)",
                "VR": "FD",
                "Name": "Slab Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0018,9105)",
                "VR": "FD",
                "Name": "Slab Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9106)",
                "VR": "FD",
                "Name": "Mid Slab Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,9107)",
                "VR": "SQ",
                "Name": "MR Spatial Saturation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9112)",
                "VR": "SQ",
                "Name": "MR Timing and Related Parameters Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9114)",
                "VR": "SQ",
                "Name": "MR Echo Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9115)",
                "VR": "SQ",
                "Name": "MR Modifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9117)",
                "VR": "SQ",
                "Name": "MR Diffusion Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9118)",
                "VR": "SQ",
                "Name": "Cardiac Synchronization Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9119)",
                "VR": "SQ",
                "Name": "MR Averages Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9125)",
                "VR": "SQ",
                "Name": "MR FOV/Geometry Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9126)",
                "VR": "SQ",
                "Name": "Volume Localization Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9127)",
                "VR": "UL",
                "Name": "Spectroscopy Acquisition Data Columns",
                "Name1": ""
            },
            {
                "Tag": "(0018,9147)",
                "VR": "CS",
                "Name": "Diffusion Anisotropy Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9151)",
                "VR": "DT",
                "Name": "Frame Reference DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,9152)",
                "VR": "SQ",
                "Name": "MR Metabolite Map Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9155)",
                "VR": "FD",
                "Name": "Parallel Reduction Factor out-of-plane",
                "Name1": ""
            },
            {
                "Tag": "(0018,9159)",
                "VR": "UL",
                "Name": "Spectroscopy Acquisition Out-of-plane Phase Steps",
                "Name1": ""
            },
            {
                "Tag": "(0018,9166)",
                "VR": "CS",
                "Name": "Bulk Motion Status",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,9168)",
                "VR": "FD",
                "Name": "Parallel Reduction Factor Second In-plane",
                "Name1": ""
            },
            {
                "Tag": "(0018,9169)",
                "VR": "CS",
                "Name": "Cardiac Beat Rejection Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,9170)",
                "VR": "CS",
                "Name": "Respiratory Motion Compensation Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,9171)",
                "VR": "CS",
                "Name": "Respiratory Signal Source",
                "Name1": ""
            },
            {
                "Tag": "(0018,9172)",
                "VR": "CS",
                "Name": "Bulk Motion Compensation Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,9173)",
                "VR": "CS",
                "Name": "Bulk Motion Signal Source",
                "Name1": ""
            },
            {
                "Tag": "(0018,9174)",
                "VR": "CS",
                "Name": "Applicable Safety Standard Agency",
                "Name1": ""
            },
            {
                "Tag": "(0018,9175)",
                "VR": "LO",
                "Name": "Applicable Safety Standard Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9176)",
                "VR": "SQ",
                "Name": "Operating Mode Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9177)",
                "VR": "CS",
                "Name": "Operating Mode Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9178)",
                "VR": "CS",
                "Name": "Operating Mode",
                "Name1": ""
            },
            {
                "Tag": "(0018,9179)",
                "VR": "CS",
                "Name": "Specific Absorption Rate Definition",
                "Name1": ""
            },
            {
                "Tag": "(0018,9180)",
                "VR": "CS",
                "Name": "Gradient Output Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9181)",
                "VR": "FD",
                "Name": "Specific Absorption Rate Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,9182)",
                "VR": "FD",
                "Name": "Gradient Output",
                "Name1": ""
            },
            {
                "Tag": "(0018,9183)",
                "VR": "CS",
                "Name": "Flow Compensation Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9184)",
                "VR": "FD",
                "Name": "Tagging Delay",
                "Name1": ""
            },
            {
                "Tag": "(0018,9185)",
                "VR": "ST",
                "Name": "Respiratory Motion Compensation Technique Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9186)",
                "VR": "SH",
                "Name": "Respiratory Signal Source ID",
                "Name1": ""
            },
            {
                "Tag": "(0018,9195)",
                "VR": "FD",
                "Name": "Chemical Shift Minimum Integration Limit in Hz",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,9196)",
                "VR": "FD",
                "Name": "Chemical Shift Maximum Integration Limit in Hz",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,9197)",
                "VR": "SQ",
                "Name": "MR Velocity Encoding Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9198)",
                "VR": "CS",
                "Name": "First Order Phase Correction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9199)",
                "VR": "CS",
                "Name": "Water Referenced Phase Correction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9200)",
                "VR": "CS",
                "Name": "MR Spectroscopy Acquisition Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9214)",
                "VR": "CS",
                "Name": "Respiratory Cycle Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,9217)",
                "VR": "FD",
                "Name": "Velocity Encoding Maximum Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,9218)",
                "VR": "FD",
                "Name": "Tag Spacing Second Dimension",
                "Name1": ""
            },
            {
                "Tag": "(0018,9219)",
                "VR": "SS",
                "Name": "Tag Angle Second Axis",
                "Name1": ""
            },
            {
                "Tag": "(0018,9220)",
                "VR": "FD",
                "Name": "Frame Acquisition Duration",
                "Name1": ""
            },
            {
                "Tag": "(0018,9226)",
                "VR": "SQ",
                "Name": "MR Image Frame Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9227)",
                "VR": "SQ",
                "Name": "MR Spectroscopy Frame Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9231)",
                "VR": "US",
                "Name": "MR Acquisition Phase Encoding Steps in-plane",
                "Name1": ""
            },
            {
                "Tag": "(0018,9232)",
                "VR": "US",
                "Name": "MR Acquisition Phase Encoding Steps out-of-plane",
                "Name1": ""
            },
            {
                "Tag": "(0018,9234)",
                "VR": "UL",
                "Name": "Spectroscopy Acquisition Phase Columns",
                "Name1": ""
            },
            {
                "Tag": "(0018,9236)",
                "VR": "CS",
                "Name": "Cardiac Cycle Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,9239)",
                "VR": "SQ",
                "Name": "Specific Absorption Rate Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9240)",
                "VR": "US",
                "Name": "RF Echo Train Length",
                "Name1": ""
            },
            {
                "Tag": "(0018,9241)",
                "VR": "US",
                "Name": "Gradient Echo Train Length",
                "Name1": ""
            },
            {
                "Tag": "(0018,9250)",
                "VR": "CS",
                "Name": "Arterial Spin Labeling Contrast",
                "Name1": ""
            },
            {
                "Tag": "(0018,9251)",
                "VR": "SQ",
                "Name": "MR Arterial Spin Labeling Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9252)",
                "VR": "LO",
                "Name": "ASL Technique Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9253)",
                "VR": "US",
                "Name": "ASL Slab Number",
                "Name1": ""
            },
            {
                "Tag": "(0018,9254)",
                "VR": "FD",
                "Name": "ASL Slab Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0018,9255)",
                "VR": "FD",
                "Name": "ASL Slab Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9256)",
                "VR": "FD",
                "Name": "ASL Mid Slab Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,9257)",
                "VR": "CS",
                "Name": "ASL Context",
                "Name1": ""
            },
            {
                "Tag": "(0018,9258)",
                "VR": "UL",
                "Name": "ASL Pulse Train Duration",
                "Name1": ""
            },
            {
                "Tag": "(0018,9259)",
                "VR": "CS",
                "Name": "ASL Crusher Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,925A)",
                "VR": "FD",
                "Name": "ASL Crusher Flow Limit",
                "Name1": ""
            },
            {
                "Tag": "(0018,925B)",
                "VR": "LO",
                "Name": "ASL Crusher Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,925C)",
                "VR": "CS",
                "Name": "ASL Bolus Cut-off Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,925D)",
                "VR": "SQ",
                "Name": "ASL Bolus Cut-off Timing Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,925E)",
                "VR": "LO",
                "Name": "ASL Bolus Cut-off Technique",
                "Name1": ""
            },
            {
                "Tag": "(0018,925F)",
                "VR": "UL",
                "Name": "ASL Bolus Cut-off Delay Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,9260)",
                "VR": "SQ",
                "Name": "ASL Slab Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9295)",
                "VR": "FD",
                "Name": "Chemical Shift Minimum Integration Limit in ppm",
                "Name1": ""
            },
            {
                "Tag": "(0018,9296)",
                "VR": "FD",
                "Name": "Chemical Shift Maximum Integration Limit in ppm",
                "Name1": ""
            },
            {
                "Tag": "(0018,9297)",
                "VR": "CS",
                "Name": "Water Reference Acquisition",
                "Name1": ""
            },
            {
                "Tag": "(0018,9298)",
                "VR": "IS",
                "Name": "Echo Peak Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,9301)",
                "VR": "SQ",
                "Name": "CT Acquisition Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9302)",
                "VR": "CS",
                "Name": "Acquisition Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9303)",
                "VR": "FD",
                "Name": "Tube Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9304)",
                "VR": "SQ",
                "Name": "CT Acquisition Details Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9305)",
                "VR": "FD",
                "Name": "Revolution Time",
                "Name1": ""
            },
            {
                "Tag": "(0018,9306)",
                "VR": "FD",
                "Name": "Single Collimation Width",
                "Name1": ""
            },
            {
                "Tag": "(0018,9307)",
                "VR": "FD",
                "Name": "Total Collimation Width",
                "Name1": ""
            },
            {
                "Tag": "(0018,9308)",
                "VR": "SQ",
                "Name": "CT Table Dynamics Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9309)",
                "VR": "FD",
                "Name": "Table Speed",
                "Name1": ""
            },
            {
                "Tag": "(0018,9310)",
                "VR": "FD",
                "Name": "Table Feed per Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9311)",
                "VR": "FD",
                "Name": "Spiral Pitch Factor",
                "Name1": ""
            },
            {
                "Tag": "(0018,9312)",
                "VR": "SQ",
                "Name": "CT Geometry Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9313)",
                "VR": "FD",
                "Name": "Data Collection Center (Patient)",
                "Name1": ""
            },
            {
                "Tag": "(0018,9314)",
                "VR": "SQ",
                "Name": "CT Reconstruction Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9315)",
                "VR": "CS",
                "Name": "Reconstruction Algorithm",
                "Name1": ""
            },
            {
                "Tag": "(0018,9316)",
                "VR": "CS",
                "Name": "Convolution Kernel Group",
                "Name1": ""
            },
            {
                "Tag": "(0018,9317)",
                "VR": "FD",
                "Name": "Reconstruction Field of View",
                "Name1": ""
            },
            {
                "Tag": "(0018,9318)",
                "VR": "FD",
                "Name": "Reconstruction Target Center (Patient)",
                "Name1": ""
            },
            {
                "Tag": "(0018,9319)",
                "VR": "FD",
                "Name": "Reconstruction Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9320)",
                "VR": "SH",
                "Name": "Image Filter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9321)",
                "VR": "SQ",
                "Name": "CT Exposure Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9322)",
                "VR": "FD",
                "Name": "Reconstruction Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(0018,9323)",
                "VR": "CS",
                "Name": "Exposure Modulation Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9324)",
                "VR": "FD",
                "Name": "Estimated Dose Saving",
                "Name1": ""
            },
            {
                "Tag": "(0018,9325)",
                "VR": "SQ",
                "Name": "CT X-Ray Details Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9326)",
                "VR": "SQ",
                "Name": "CT Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9327)",
                "VR": "FD",
                "Name": "Table Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,9328)",
                "VR": "FD",
                "Name": "Exposure Time in ms",
                "Name1": ""
            },
            {
                "Tag": "(0018,9329)",
                "VR": "SQ",
                "Name": "CT Image Frame Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9330)",
                "VR": "FD",
                "Name": "X-Ray Tube Current in mA",
                "Name1": ""
            },
            {
                "Tag": "(0018,9332)",
                "VR": "FD",
                "Name": "Exposure in mAs",
                "Name1": ""
            },
            {
                "Tag": "(0018,9333)",
                "VR": "CS",
                "Name": "Constant Volume Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,9334)",
                "VR": "CS",
                "Name": "Fluoroscopy Flag",
                "Name1": ""
            },
            {
                "Tag": "(0018,9335)",
                "VR": "FD",
                "Name": "Distance Source to Data Collection Center",
                "Name1": ""
            },
            {
                "Tag": "(0018,9337)",
                "VR": "US",
                "Name": "Contrast/Bolus Agent Number",
                "Name1": ""
            },
            {
                "Tag": "(0018,9338)",
                "VR": "SQ",
                "Name": "Contrast/Bolus Ingredient Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9340)",
                "VR": "SQ",
                "Name": "Contrast Administration Profile Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9341)",
                "VR": "SQ",
                "Name": "Contrast/Bolus Usage Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9342)",
                "VR": "CS",
                "Name": "Contrast/Bolus Agent Administered",
                "Name1": ""
            },
            {
                "Tag": "(0018,9343)",
                "VR": "CS",
                "Name": "Contrast/Bolus Agent Detected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9344)",
                "VR": "CS",
                "Name": "Contrast/Bolus Agent Phase",
                "Name1": ""
            },
            {
                "Tag": "(0018,9345)",
                "VR": "FD",
                "Name": "CTDIvol",
                "Name1": ""
            },
            {
                "Tag": "(0018,9346)",
                "VR": "SQ",
                "Name": "CTDI Phantom Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9351)",
                "VR": "FL",
                "Name": "Calcium Scoring Mass Factor Patient",
                "Name1": ""
            },
            {
                "Tag": "(0018,9352)",
                "VR": "FL",
                "Name": "Calcium Scoring Mass Factor Device",
                "Name1": ""
            },
            {
                "Tag": "(0018,9353)",
                "VR": "FL",
                "Name": "Energy Weighting Factor",
                "Name1": ""
            },
            {
                "Tag": "(0018,9360)",
                "VR": "SQ",
                "Name": "CT Additional X-Ray Source Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9401)",
                "VR": "SQ",
                "Name": "Projection Pixel Calibration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9402)",
                "VR": "FL",
                "Name": "Distance Source to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9403)",
                "VR": "FL",
                "Name": "Distance Object to Table Top",
                "Name1": ""
            },
            {
                "Tag": "(0018,9404)",
                "VR": "FL",
                "Name": "Object Pixel Spacing in Center of Beam",
                "Name1": ""
            },
            {
                "Tag": "(0018,9405)",
                "VR": "SQ",
                "Name": "Positioner Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9406)",
                "VR": "SQ",
                "Name": "Table Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9407)",
                "VR": "SQ",
                "Name": "Collimator Shape Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9410)",
                "VR": "CS",
                "Name": "Planes in Acquisition",
                "Name1": ""
            },
            {
                "Tag": "(0018,9412)",
                "VR": "SQ",
                "Name": "XA/XRF Frame Characteristics Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9417)",
                "VR": "SQ",
                "Name": "Frame Acquisition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9420)",
                "VR": "CS",
                "Name": "X-Ray Receptor Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9423)",
                "VR": "LO",
                "Name": "Acquisition Protocol Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,9424)",
                "VR": "LT",
                "Name": "Acquisition Protocol Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9425)",
                "VR": "CS",
                "Name": "Contrast/Bolus Ingredient Opaque",
                "Name1": ""
            },
            {
                "Tag": "(0018,9426)",
                "VR": "FL",
                "Name": "Distance Receptor Plane to Detector Housing",
                "Name1": ""
            },
            {
                "Tag": "(0018,9427)",
                "VR": "CS",
                "Name": "Intensifier Active Shape",
                "Name1": ""
            },
            {
                "Tag": "(0018,9428)",
                "VR": "FL",
                "Name": "Intensifier Active Dimension(s)",
                "Name1": ""
            },
            {
                "Tag": "(0018,9429)",
                "VR": "FL",
                "Name": "Physical Detector Size",
                "Name1": ""
            },
            {
                "Tag": "(0018,9430)",
                "VR": "FL",
                "Name": "Position of Isocenter Projection",
                "Name1": ""
            },
            {
                "Tag": "(0018,9432)",
                "VR": "SQ",
                "Name": "Field of View Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9433)",
                "VR": "LO",
                "Name": "Field of View Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9434)",
                "VR": "SQ",
                "Name": "Exposure Control Sensing Regions Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9435)",
                "VR": "CS",
                "Name": "Exposure Control Sensing Region Shape",
                "Name1": ""
            },
            {
                "Tag": "(0018,9436)",
                "VR": "SS",
                "Name": "Exposure Control Sensing Region Left Vertical Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,9437)",
                "VR": "SS",
                "Name": "Exposure Control Sensing Region Right Vertical Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,9438)",
                "VR": "SS",
                "Name": "Exposure Control Sensing Region Upper Horizontal Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,9439)",
                "VR": "SS",
                "Name": "Exposure Control Sensing Region Lower Horizontal Edge",
                "Name1": ""
            },
            {
                "Tag": "(0018,9440)",
                "VR": "SS",
                "Name": "Center of Circular Exposure Control Sensing Region",
                "Name1": ""
            },
            {
                "Tag": "(0018,9441)",
                "VR": "US",
                "Name": "Radius of Circular Exposure Control Sensing Region",
                "Name1": ""
            },
            {
                "Tag": "(0018,9442)",
                "VR": "SS",
                "Name": "Vertices of the Polygonal Exposure Control Sensing Region",
                "Name1": ""
            },
            {
                "Tag": "(0018,9445)",
                "VR": "",
                "Name": "",
                "Name1": "Retired"
            },
            {
                "Tag": "(0018,9447)",
                "VR": "FL",
                "Name": "Column Angulation (Patient)",
                "Name1": ""
            },
            {
                "Tag": "(0018,9449)",
                "VR": "FL",
                "Name": "Beam Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9451)",
                "VR": "SQ",
                "Name": "Frame Detector Parameters Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9452)",
                "VR": "FL",
                "Name": "Calculated Anatomy Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0018,9455)",
                "VR": "SQ",
                "Name": "Calibration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9456)",
                "VR": "SQ",
                "Name": "Object Thickness Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9457)",
                "VR": "CS",
                "Name": "Plane Identification",
                "Name1": ""
            },
            {
                "Tag": "(0018,9461)",
                "VR": "FL",
                "Name": "Field of View Dimension(s) in Float",
                "Name1": ""
            },
            {
                "Tag": "(0018,9462)",
                "VR": "SQ",
                "Name": "Isocenter Reference System Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9463)",
                "VR": "FL",
                "Name": "Positioner Isocenter Primary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9464)",
                "VR": "FL",
                "Name": "Positioner Isocenter Secondary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9465)",
                "VR": "FL",
                "Name": "Positioner Isocenter Detector Rotation Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9466)",
                "VR": "FL",
                "Name": "Table X Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9467)",
                "VR": "FL",
                "Name": "Table Y Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9468)",
                "VR": "FL",
                "Name": "Table Z Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9469)",
                "VR": "FL",
                "Name": "Table Horizontal Rotation Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9470)",
                "VR": "FL",
                "Name": "Table Head Tilt Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9471)",
                "VR": "FL",
                "Name": "Table Cradle Tilt Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9472)",
                "VR": "SQ",
                "Name": "Frame Display Shutter Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9473)",
                "VR": "FL",
                "Name": "Acquired Image Area Dose Product",
                "Name1": ""
            },
            {
                "Tag": "(0018,9474)",
                "VR": "CS",
                "Name": "C-arm Positioner Tabletop Relationship",
                "Name1": ""
            },
            {
                "Tag": "(0018,9476)",
                "VR": "SQ",
                "Name": "X-Ray Geometry Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9477)",
                "VR": "SQ",
                "Name": "Irradiation Event Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9504)",
                "VR": "SQ",
                "Name": "X-Ray 3D Frame Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9506)",
                "VR": "SQ",
                "Name": "Contributing Sources Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9507)",
                "VR": "SQ",
                "Name": "X-Ray 3D Acquisition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9508)",
                "VR": "FL",
                "Name": "Primary Positioner Scan Arc",
                "Name1": ""
            },
            {
                "Tag": "(0018,9509)",
                "VR": "FL",
                "Name": "Secondary Positioner Scan Arc",
                "Name1": ""
            },
            {
                "Tag": "(0018,9510)",
                "VR": "FL",
                "Name": "Primary Positioner Scan Start Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9511)",
                "VR": "FL",
                "Name": "Secondary Positioner Scan Start Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9514)",
                "VR": "FL",
                "Name": "Primary Positioner Increment",
                "Name1": ""
            },
            {
                "Tag": "(0018,9515)",
                "VR": "FL",
                "Name": "Secondary Positioner Increment",
                "Name1": ""
            },
            {
                "Tag": "(0018,9516)",
                "VR": "DT",
                "Name": "Start Acquisition DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,9517)",
                "VR": "DT",
                "Name": "End Acquisition DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,9518)",
                "VR": "SS",
                "Name": "Primary Positioner Increment Sign",
                "Name1": ""
            },
            {
                "Tag": "(0018,9519)",
                "VR": "SS",
                "Name": "Secondary Positioner Increment Sign",
                "Name1": ""
            },
            {
                "Tag": "(0018,9524)",
                "VR": "LO",
                "Name": "Application Name",
                "Name1": ""
            },
            {
                "Tag": "(0018,9525)",
                "VR": "LO",
                "Name": "Application Version",
                "Name1": ""
            },
            {
                "Tag": "(0018,9526)",
                "VR": "LO",
                "Name": "Application Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(0018,9527)",
                "VR": "CS",
                "Name": "Algorithm Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9528)",
                "VR": "LO",
                "Name": "Algorithm Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9530)",
                "VR": "SQ",
                "Name": "X-Ray 3D Reconstruction Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9531)",
                "VR": "LO",
                "Name": "Reconstruction Description",
                "Name1": ""
            },
            {
                "Tag": "(0018,9538)",
                "VR": "SQ",
                "Name": "Per Projection Acquisition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9541)",
                "VR": "SQ",
                "Name": "Detector Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9542)",
                "VR": "SQ",
                "Name": "X-Ray Acquisition Dose Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9543)",
                "VR": "FD",
                "Name": "X-Ray Source Isocenter Primary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9544)",
                "VR": "FD",
                "Name": "X-Ray Source Isocenter Secondary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9545)",
                "VR": "FD",
                "Name": "Breast Support Isocenter Primary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9546)",
                "VR": "FD",
                "Name": "Breast Support Isocenter Secondary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9547)",
                "VR": "FD",
                "Name": "Breast Support X Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9548)",
                "VR": "FD",
                "Name": "Breast Support Y Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9549)",
                "VR": "FD",
                "Name": "Breast Support Z Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9550)",
                "VR": "FD",
                "Name": "Detector Isocenter Primary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9551)",
                "VR": "FD",
                "Name": "Detector Isocenter Secondary Angle",
                "Name1": ""
            },
            {
                "Tag": "(0018,9552)",
                "VR": "FD",
                "Name": "Detector X Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9553)",
                "VR": "FD",
                "Name": "Detector Y Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9554)",
                "VR": "FD",
                "Name": "Detector Z Position to Isocenter",
                "Name1": ""
            },
            {
                "Tag": "(0018,9555)",
                "VR": "SQ",
                "Name": "X-Ray Grid Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9556)",
                "VR": "SQ",
                "Name": "X-Ray Filter Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9557)",
                "VR": "FD",
                "Name": "Detector Active Area TLHC Position",
                "Name1": ""
            },
            {
                "Tag": "(0018,9558)",
                "VR": "FD",
                "Name": "Detector Active Area Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9559)",
                "VR": "CS",
                "Name": "Positioner Primary Angle Direction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9601)",
                "VR": "SQ",
                "Name": "Diffusion b-matrix Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9602)",
                "VR": "FD",
                "Name": "Diffusion b-value XX",
                "Name1": ""
            },
            {
                "Tag": "(0018,9603)",
                "VR": "FD",
                "Name": "Diffusion b-value XY",
                "Name1": ""
            },
            {
                "Tag": "(0018,9604)",
                "VR": "FD",
                "Name": "Diffusion b-value XZ",
                "Name1": ""
            },
            {
                "Tag": "(0018,9605)",
                "VR": "FD",
                "Name": "Diffusion b-value YY",
                "Name1": ""
            },
            {
                "Tag": "(0018,9606)",
                "VR": "FD",
                "Name": "Diffusion b-value YZ",
                "Name1": ""
            },
            {
                "Tag": "(0018,9607)",
                "VR": "FD",
                "Name": "Diffusion b-value ZZ",
                "Name1": ""
            },
            {
                "Tag": "(0018,9621)",
                "VR": "SQ",
                "Name": "Functional MR Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9622)",
                "VR": "CS",
                "Name": "Functional Settling Phase Frames Present",
                "Name1": ""
            },
            {
                "Tag": "(0018,9623)",
                "VR": "DT",
                "Name": "Functional Sync Pulse",
                "Name1": ""
            },
            {
                "Tag": "(0018,9624)",
                "VR": "CS",
                "Name": "Settling Phase Frame",
                "Name1": ""
            },
            {
                "Tag": "(0018,9701)",
                "VR": "DT",
                "Name": "Decay Correction DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,9715)",
                "VR": "FD",
                "Name": "Start Density Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9716)",
                "VR": "FD",
                "Name": "Start Relative Density Difference Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9717)",
                "VR": "FD",
                "Name": "Start Cardiac Trigger Count Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9718)",
                "VR": "FD",
                "Name": "Start Respiratory Trigger Count Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9719)",
                "VR": "FD",
                "Name": "Termination Counts Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9720)",
                "VR": "FD",
                "Name": "Termination Density Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9721)",
                "VR": "FD",
                "Name": "Termination Relative Density Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9722)",
                "VR": "FD",
                "Name": "Termination Time Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9723)",
                "VR": "FD",
                "Name": "Termination Cardiac Trigger Count Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9724)",
                "VR": "FD",
                "Name": "Termination Respiratory Trigger Count Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0018,9725)",
                "VR": "CS",
                "Name": "Detector Geometry",
                "Name1": ""
            },
            {
                "Tag": "(0018,9726)",
                "VR": "FD",
                "Name": "Transverse Detector Separation",
                "Name1": ""
            },
            {
                "Tag": "(0018,9727)",
                "VR": "FD",
                "Name": "Axial Detector Dimension",
                "Name1": ""
            },
            {
                "Tag": "(0018,9729)",
                "VR": "US",
                "Name": "Radiopharmaceutical Agent Number",
                "Name1": ""
            },
            {
                "Tag": "(0018,9732)",
                "VR": "SQ",
                "Name": "PET Frame Acquisition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9733)",
                "VR": "SQ",
                "Name": "PET Detector Motion Details Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9734)",
                "VR": "SQ",
                "Name": "PET Table Dynamics Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9735)",
                "VR": "SQ",
                "Name": "PET Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9736)",
                "VR": "SQ",
                "Name": "PET Frame Correction Factors Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9737)",
                "VR": "SQ",
                "Name": "Radiopharmaceutical Usage Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9738)",
                "VR": "CS",
                "Name": "Attenuation Correction Source",
                "Name1": ""
            },
            {
                "Tag": "(0018,9739)",
                "VR": "US",
                "Name": "Number of Iterations",
                "Name1": ""
            },
            {
                "Tag": "(0018,9740)",
                "VR": "US",
                "Name": "Number of Subsets",
                "Name1": ""
            },
            {
                "Tag": "(0018,9749)",
                "VR": "SQ",
                "Name": "PET Reconstruction Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9751)",
                "VR": "SQ",
                "Name": "PET Frame Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9755)",
                "VR": "CS",
                "Name": "Time of Flight Information Used",
                "Name1": ""
            },
            {
                "Tag": "(0018,9756)",
                "VR": "CS",
                "Name": "Reconstruction Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9758)",
                "VR": "CS",
                "Name": "Decay Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9759)",
                "VR": "CS",
                "Name": "Attenuation Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9760)",
                "VR": "CS",
                "Name": "Scatter Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9761)",
                "VR": "CS",
                "Name": "Dead Time Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9762)",
                "VR": "CS",
                "Name": "Gantry Motion Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9763)",
                "VR": "CS",
                "Name": "Patient Motion Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9764)",
                "VR": "CS",
                "Name": "Count Loss Normalization Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9765)",
                "VR": "CS",
                "Name": "Randoms Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9766)",
                "VR": "CS",
                "Name": "Non-uniform Radial Sampling Corrected",
                "Name1": ""
            },
            {
                "Tag": "(0018,9767)",
                "VR": "CS",
                "Name": "Sensitivity Calibrated",
                "Name1": ""
            },
            {
                "Tag": "(0018,9768)",
                "VR": "CS",
                "Name": "Detector Normalization Correction",
                "Name1": ""
            },
            {
                "Tag": "(0018,9769)",
                "VR": "CS",
                "Name": "Iterative Reconstruction Method",
                "Name1": ""
            },
            {
                "Tag": "(0018,9770)",
                "VR": "CS",
                "Name": "Attenuation Correction Temporal Relationship",
                "Name1": ""
            },
            {
                "Tag": "(0018,9771)",
                "VR": "SQ",
                "Name": "Patient Physiological State Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9772)",
                "VR": "SQ",
                "Name": "Patient Physiological State Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9801)",
                "VR": "FD",
                "Name": "Depth(s) of Focus",
                "Name1": ""
            },
            {
                "Tag": "(0018,9803)",
                "VR": "SQ",
                "Name": "Excluded Intervals Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9804)",
                "VR": "DT",
                "Name": "Exclusion Start DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,9805)",
                "VR": "FD",
                "Name": "Exclusion Duration",
                "Name1": ""
            },
            {
                "Tag": "(0018,9806)",
                "VR": "SQ",
                "Name": "US Image Description Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9807)",
                "VR": "SQ",
                "Name": "Image Data Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9808)",
                "VR": "CS",
                "Name": "Data Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,9809)",
                "VR": "SQ",
                "Name": "Transducer Scan Pattern Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,980B)",
                "VR": "CS",
                "Name": "Aliased Data Type",
                "Name1": ""
            },
            {
                "Tag": "(0018,980C)",
                "VR": "CS",
                "Name": "Position Measuring Device Used",
                "Name1": ""
            },
            {
                "Tag": "(0018,980D)",
                "VR": "SQ",
                "Name": "Transducer Geometry Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,980E)",
                "VR": "SQ",
                "Name": "Transducer Beam Steering Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,980F)",
                "VR": "SQ",
                "Name": "Transducer Application Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,9810)",
                "VR": "US or SS",
                "Name": "Zero Velocity Pixel Value",
                "Name1": ""
            },
            {
                "Tag": "(0018,A001)",
                "VR": "SQ",
                "Name": "Contributing Equipment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0018,A002)",
                "VR": "DT",
                "Name": "Contribution DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0018,A003)",
                "VR": "ST",
                "Name": "Contribution Description",
                "Name1": ""
            },
            {
                "Tag": "(0020,000D)",
                "VR": "UI",
                "Name": "Study Instance UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,000E)",
                "VR": "UI",
                "Name": "Series Instance UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,0010)",
                "VR": "SH",
                "Name": "Study ID",
                "Name1": ""
            },
            {
                "Tag": "(0020,0011)",
                "VR": "IS",
                "Name": "Series Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,0012)",
                "VR": "IS",
                "Name": "Acquisition Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,0013)",
                "VR": "IS",
                "Name": "Instance Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,0014)",
                "VR": "IS",
                "Name": "Isotope Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0015)",
                "VR": "IS",
                "Name": "Phase Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0016)",
                "VR": "IS",
                "Name": "Interval Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0017)",
                "VR": "IS",
                "Name": "Time Slot Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0018)",
                "VR": "IS",
                "Name": "Angle Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0019)",
                "VR": "IS",
                "Name": "Item Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,0020)",
                "VR": "CS",
                "Name": "Patient Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0020,0022)",
                "VR": "IS",
                "Name": "Overlay Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0024)",
                "VR": "IS",
                "Name": "Curve Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0026)",
                "VR": "IS",
                "Name": "LUT Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0030)",
                "VR": "DS",
                "Name": "Image Position",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0032)",
                "VR": "DS",
                "Name": "Image Position (Patient)",
                "Name1": ""
            },
            {
                "Tag": "(0020,0035)",
                "VR": "DS",
                "Name": "Image Orientation",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0037)",
                "VR": "DS",
                "Name": "Image Orientation (Patient)",
                "Name1": ""
            },
            {
                "Tag": "(0020,0050)",
                "VR": "DS",
                "Name": "Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0052)",
                "VR": "UI",
                "Name": "Frame of Reference UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,0060)",
                "VR": "CS",
                "Name": "Laterality",
                "Name1": ""
            },
            {
                "Tag": "(0020,0062)",
                "VR": "CS",
                "Name": "Image Laterality",
                "Name1": ""
            },
            {
                "Tag": "(0020,0070)",
                "VR": "LO",
                "Name": "Image Geometry Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0080)",
                "VR": "CS",
                "Name": "Masking Image",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,00AA)",
                "VR": "IS",
                "Name": "Report Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,0100)",
                "VR": "IS",
                "Name": "Temporal Position Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0020,0105)",
                "VR": "IS",
                "Name": "Number of Temporal Positions",
                "Name1": ""
            },
            {
                "Tag": "(0020,0110)",
                "VR": "DS",
                "Name": "Temporal Resolution",
                "Name1": ""
            },
            {
                "Tag": "(0020,0200)",
                "VR": "UI",
                "Name": "Synchronization Frame of Reference UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,0242)",
                "VR": "UI",
                "Name": "SOP Instance UID of Concatenation Source",
                "Name1": ""
            },
            {
                "Tag": "(0020,1000)",
                "VR": "IS",
                "Name": "Series in Study",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,1001)",
                "VR": "IS",
                "Name": "Acquisitions in Series",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,1002)",
                "VR": "IS",
                "Name": "Images in Acquisition",
                "Name1": ""
            },
            {
                "Tag": "(0020,1003)",
                "VR": "IS",
                "Name": "Images in Series",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,1004)",
                "VR": "IS",
                "Name": "Acquisitions in Study",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,1005)",
                "VR": "IS",
                "Name": "Images in Study",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,1020)",
                "VR": "LO",
                "Name": "Reference",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,1040)",
                "VR": "LO",
                "Name": "Position Reference Indicator",
                "Name1": ""
            },
            {
                "Tag": "(0020,1041)",
                "VR": "DS",
                "Name": "Slice Location",
                "Name1": ""
            },
            {
                "Tag": "(0020,1070)",
                "VR": "IS",
                "Name": "Other Study Numbers",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,1200)",
                "VR": "IS",
                "Name": "Number of Patient Related Studies",
                "Name1": ""
            },
            {
                "Tag": "(0020,1202)",
                "VR": "IS",
                "Name": "Number of Patient Related Series",
                "Name1": ""
            },
            {
                "Tag": "(0020,1204)",
                "VR": "IS",
                "Name": "Number of Patient Related Instances",
                "Name1": ""
            },
            {
                "Tag": "(0020,1206)",
                "VR": "IS",
                "Name": "Number of Study Related Series",
                "Name1": ""
            },
            {
                "Tag": "(0020,1208)",
                "VR": "IS",
                "Name": "Number of Study Related Instances",
                "Name1": ""
            },
            {
                "Tag": "(0020,1209)",
                "VR": "IS",
                "Name": "Number of Series Related Instances",
                "Name1": ""
            },
            {
                "Tag": "(0020,31xx)",
                "VR": "CS",
                "Name": "Source Image IDs",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,3401)",
                "VR": "CS",
                "Name": "Modifying Device ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,3402)",
                "VR": "CS",
                "Name": "Modified Image ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,3403)",
                "VR": "DA",
                "Name": "Modified Image Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,3404)",
                "VR": "LO",
                "Name": "Modifying Device Manufacturer",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,3405)",
                "VR": "TM",
                "Name": "Modified Image Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,3406)",
                "VR": "LO",
                "Name": "Modified Image Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,4000)",
                "VR": "LT",
                "Name": "Image Comments",
                "Name1": ""
            },
            {
                "Tag": "(0020,5000)",
                "VR": "AT",
                "Name": "Original Image Identification",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,5002)",
                "VR": "LO",
                "Name": "Original Image Identification Nomenclature",
                "Name1": "Retired"
            },
            {
                "Tag": "(0020,9056)",
                "VR": "SH",
                "Name": "Stack ID",
                "Name1": ""
            },
            {
                "Tag": "(0020,9057)",
                "VR": "UL",
                "Name": "In-Stack Position Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,9071)",
                "VR": "SQ",
                "Name": "Frame Anatomy Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9072)",
                "VR": "CS",
                "Name": "Frame Laterality",
                "Name1": ""
            },
            {
                "Tag": "(0020,9111)",
                "VR": "SQ",
                "Name": "Frame Content Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9113)",
                "VR": "SQ",
                "Name": "Plane Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9116)",
                "VR": "SQ",
                "Name": "Plane Orientation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9128)",
                "VR": "UL",
                "Name": "Temporal Position Index",
                "Name1": ""
            },
            {
                "Tag": "(0020,9153)",
                "VR": "FD",
                "Name": "Nominal Cardiac Trigger Delay Time",
                "Name1": ""
            },
            {
                "Tag": "(0020,9154)",
                "VR": "FL",
                "Name": "Nominal Cardiac Trigger Time Prior To R-Peak",
                "Name1": ""
            },
            {
                "Tag": "(0020,9155)",
                "VR": "FL",
                "Name": "Actual Cardiac Trigger Time Prior To R-Peak",
                "Name1": ""
            },
            {
                "Tag": "(0020,9156)",
                "VR": "US",
                "Name": "Frame Acquisition Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,9157)",
                "VR": "UL",
                "Name": "Dimension Index Values",
                "Name1": ""
            },
            {
                "Tag": "(0020,9158)",
                "VR": "LT",
                "Name": "Frame Comments",
                "Name1": ""
            },
            {
                "Tag": "(0020,9161)",
                "VR": "UI",
                "Name": "Concatenation UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,9162)",
                "VR": "US",
                "Name": "In-concatenation Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,9163)",
                "VR": "US",
                "Name": "In-concatenation Total Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,9164)",
                "VR": "UI",
                "Name": "Dimension Organization UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,9165)",
                "VR": "AT",
                "Name": "Dimension Index Pointer",
                "Name1": ""
            },
            {
                "Tag": "(0020,9167)",
                "VR": "AT",
                "Name": "Functional Group Pointer",
                "Name1": ""
            },
            {
                "Tag": "(0020,9170)",
                "VR": "SQ",
                "Name": "Unassigned Shared Converted Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9171)",
                "VR": "SQ",
                "Name": "Unassigned Per-Frame Converted Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9172)",
                "VR": "SQ",
                "Name": "Conversion Source Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9213)",
                "VR": "LO",
                "Name": "Dimension Index Private Creator",
                "Name1": ""
            },
            {
                "Tag": "(0020,9221)",
                "VR": "SQ",
                "Name": "Dimension Organization Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9222)",
                "VR": "SQ",
                "Name": "Dimension Index Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9228)",
                "VR": "UL",
                "Name": "Concatenation Frame Offset Number",
                "Name1": ""
            },
            {
                "Tag": "(0020,9238)",
                "VR": "LO",
                "Name": "Functional Group Private Creator",
                "Name1": ""
            },
            {
                "Tag": "(0020,9241)",
                "VR": "FL",
                "Name": "Nominal Percentage of Cardiac Phase",
                "Name1": ""
            },
            {
                "Tag": "(0020,9245)",
                "VR": "FL",
                "Name": "Nominal Percentage of Respiratory Phase",
                "Name1": ""
            },
            {
                "Tag": "(0020,9246)",
                "VR": "FL",
                "Name": "Starting Respiratory Amplitude",
                "Name1": ""
            },
            {
                "Tag": "(0020,9247)",
                "VR": "CS",
                "Name": "Starting Respiratory Phase",
                "Name1": ""
            },
            {
                "Tag": "(0020,9248)",
                "VR": "FL",
                "Name": "Ending Respiratory Amplitude",
                "Name1": ""
            },
            {
                "Tag": "(0020,9249)",
                "VR": "CS",
                "Name": "Ending Respiratory Phase",
                "Name1": ""
            },
            {
                "Tag": "(0020,9250)",
                "VR": "CS",
                "Name": "Respiratory Trigger Type",
                "Name1": ""
            },
            {
                "Tag": "(0020,9251)",
                "VR": "FD",
                "Name": "R-R Interval Time Nominal",
                "Name1": ""
            },
            {
                "Tag": "(0020,9252)",
                "VR": "FD",
                "Name": "Actual Cardiac Trigger Delay Time",
                "Name1": ""
            },
            {
                "Tag": "(0020,9253)",
                "VR": "SQ",
                "Name": "Respiratory Synchronization Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9254)",
                "VR": "FD",
                "Name": "Respiratory Interval Time",
                "Name1": ""
            },
            {
                "Tag": "(0020,9255)",
                "VR": "FD",
                "Name": "Nominal Respiratory Trigger Delay Time",
                "Name1": ""
            },
            {
                "Tag": "(0020,9256)",
                "VR": "FD",
                "Name": "Respiratory Trigger Delay Threshold",
                "Name1": ""
            },
            {
                "Tag": "(0020,9257)",
                "VR": "FD",
                "Name": "Actual Respiratory Trigger Delay Time",
                "Name1": ""
            },
            {
                "Tag": "(0020,9301)",
                "VR": "FD",
                "Name": "Image Position (Volume)",
                "Name1": ""
            },
            {
                "Tag": "(0020,9302)",
                "VR": "FD",
                "Name": "Image Orientation (Volume)",
                "Name1": ""
            },
            {
                "Tag": "(0020,9307)",
                "VR": "CS",
                "Name": "Ultrasound Acquisition Geometry",
                "Name1": ""
            },
            {
                "Tag": "(0020,9308)",
                "VR": "FD",
                "Name": "Apex Position",
                "Name1": ""
            },
            {
                "Tag": "(0020,9309)",
                "VR": "FD",
                "Name": "Volume to Transducer Mapping Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0020,930A)",
                "VR": "FD",
                "Name": "Volume to Table Mapping Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0020,930B)",
                "VR": "CS",
                "Name": "Volume to Transducer Relationship",
                "Name1": ""
            },
            {
                "Tag": "(0020,930C)",
                "VR": "CS",
                "Name": "Patient Frame of Reference Source",
                "Name1": ""
            },
            {
                "Tag": "(0020,930D)",
                "VR": "FD",
                "Name": "Temporal Position Time Offset",
                "Name1": ""
            },
            {
                "Tag": "(0020,930E)",
                "VR": "SQ",
                "Name": "Plane Position (Volume) Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,930F)",
                "VR": "SQ",
                "Name": "Plane Orientation (Volume) Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9310)",
                "VR": "SQ",
                "Name": "Temporal Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9311)",
                "VR": "CS",
                "Name": "Dimension Organization Type",
                "Name1": ""
            },
            {
                "Tag": "(0020,9312)",
                "VR": "UI",
                "Name": "Volume Frame of Reference UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,9313)",
                "VR": "UI",
                "Name": "Table Frame of Reference UID",
                "Name1": ""
            },
            {
                "Tag": "(0020,9421)",
                "VR": "LO",
                "Name": "Dimension Description Label",
                "Name1": ""
            },
            {
                "Tag": "(0020,9450)",
                "VR": "SQ",
                "Name": "Patient Orientation in Frame Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9453)",
                "VR": "LO",
                "Name": "Frame Label",
                "Name1": ""
            },
            {
                "Tag": "(0020,9518)",
                "VR": "US",
                "Name": "Acquisition Index",
                "Name1": ""
            },
            {
                "Tag": "(0020,9529)",
                "VR": "SQ",
                "Name": "Contributing SOP Instances Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0020,9536)",
                "VR": "US",
                "Name": "Reconstruction Index",
                "Name1": ""
            },
            {
                "Tag": "(0022,0001)",
                "VR": "US",
                "Name": "Light Path Filter Pass-Through Wavelength",
                "Name1": ""
            },
            {
                "Tag": "(0022,0002)",
                "VR": "US",
                "Name": "Light Path Filter Pass Band",
                "Name1": ""
            },
            {
                "Tag": "(0022,0003)",
                "VR": "US",
                "Name": "Image Path Filter Pass-Through Wavelength",
                "Name1": ""
            },
            {
                "Tag": "(0022,0004)",
                "VR": "US",
                "Name": "Image Path Filter Pass Band",
                "Name1": ""
            },
            {
                "Tag": "(0022,0005)",
                "VR": "CS",
                "Name": "Patient Eye Movement Commanded",
                "Name1": ""
            },
            {
                "Tag": "(0022,0006)",
                "VR": "SQ",
                "Name": "Patient Eye Movement Command Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0007)",
                "VR": "FL",
                "Name": "Spherical Lens Power",
                "Name1": ""
            },
            {
                "Tag": "(0022,0008)",
                "VR": "FL",
                "Name": "Cylinder Lens Power",
                "Name1": ""
            },
            {
                "Tag": "(0022,0009)",
                "VR": "FL",
                "Name": "Cylinder Axis",
                "Name1": ""
            },
            {
                "Tag": "(0022,000A)",
                "VR": "FL",
                "Name": "Emmetropic Magnification",
                "Name1": ""
            },
            {
                "Tag": "(0022,000B)",
                "VR": "FL",
                "Name": "Intra Ocular Pressure",
                "Name1": ""
            },
            {
                "Tag": "(0022,000C)",
                "VR": "FL",
                "Name": "Horizontal Field of View",
                "Name1": ""
            },
            {
                "Tag": "(0022,000D)",
                "VR": "CS",
                "Name": "Pupil Dilated",
                "Name1": ""
            },
            {
                "Tag": "(0022,000E)",
                "VR": "FL",
                "Name": "Degree of Dilation",
                "Name1": ""
            },
            {
                "Tag": "(0022,0010)",
                "VR": "FL",
                "Name": "Stereo Baseline Angle",
                "Name1": ""
            },
            {
                "Tag": "(0022,0011)",
                "VR": "FL",
                "Name": "Stereo Baseline Displacement",
                "Name1": ""
            },
            {
                "Tag": "(0022,0012)",
                "VR": "FL",
                "Name": "Stereo Horizontal Pixel Offset",
                "Name1": ""
            },
            {
                "Tag": "(0022,0013)",
                "VR": "FL",
                "Name": "Stereo Vertical Pixel Offset",
                "Name1": ""
            },
            {
                "Tag": "(0022,0014)",
                "VR": "FL",
                "Name": "Stereo Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0022,0015)",
                "VR": "SQ",
                "Name": "Acquisition Device Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0016)",
                "VR": "SQ",
                "Name": "Illumination Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0017)",
                "VR": "SQ",
                "Name": "Light Path Filter Type Stack Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0018)",
                "VR": "SQ",
                "Name": "Image Path Filter Type Stack Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0019)",
                "VR": "SQ",
                "Name": "Lenses Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,001A)",
                "VR": "SQ",
                "Name": "Channel Description Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,001B)",
                "VR": "SQ",
                "Name": "Refractive State Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,001C)",
                "VR": "SQ",
                "Name": "Mydriatic Agent Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,001D)",
                "VR": "SQ",
                "Name": "Relative Image Position Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,001E)",
                "VR": "FL",
                "Name": "Camera Angle of View",
                "Name1": ""
            },
            {
                "Tag": "(0022,0020)",
                "VR": "SQ",
                "Name": "Stereo Pairs Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0021)",
                "VR": "SQ",
                "Name": "Left Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0022)",
                "VR": "SQ",
                "Name": "Right Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0028)",
                "VR": "CS",
                "Name": "Stereo Pairs Present",
                "Name1": ""
            },
            {
                "Tag": "(0022,0030)",
                "VR": "FL",
                "Name": "Axial Length of the Eye",
                "Name1": ""
            },
            {
                "Tag": "(0022,0031)",
                "VR": "SQ",
                "Name": "Ophthalmic Frame Location Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0032)",
                "VR": "FL",
                "Name": "Reference Coordinates",
                "Name1": ""
            },
            {
                "Tag": "(0022,0035)",
                "VR": "FL",
                "Name": "Depth Spatial Resolution",
                "Name1": ""
            },
            {
                "Tag": "(0022,0036)",
                "VR": "FL",
                "Name": "Maximum Depth Distortion",
                "Name1": ""
            },
            {
                "Tag": "(0022,0037)",
                "VR": "FL",
                "Name": "Along-scan Spatial Resolution",
                "Name1": ""
            },
            {
                "Tag": "(0022,0038)",
                "VR": "FL",
                "Name": "Maximum Along-scan Distortion",
                "Name1": ""
            },
            {
                "Tag": "(0022,0039)",
                "VR": "CS",
                "Name": "Ophthalmic Image Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0022,0041)",
                "VR": "FL",
                "Name": "Depth of Transverse Image",
                "Name1": ""
            },
            {
                "Tag": "(0022,0042)",
                "VR": "SQ",
                "Name": "Mydriatic Agent Concentration Units Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,0048)",
                "VR": "FL",
                "Name": "Across-scan Spatial Resolution",
                "Name1": ""
            },
            {
                "Tag": "(0022,0049)",
                "VR": "FL",
                "Name": "Maximum Across-scan Distortion",
                "Name1": ""
            },
            {
                "Tag": "(0022,004E)",
                "VR": "DS",
                "Name": "Mydriatic Agent Concentration",
                "Name1": ""
            },
            {
                "Tag": "(0022,0055)",
                "VR": "FL",
                "Name": "Illumination Wave Length",
                "Name1": ""
            },
            {
                "Tag": "(0022,0056)",
                "VR": "FL",
                "Name": "Illumination Power",
                "Name1": ""
            },
            {
                "Tag": "(0022,0057)",
                "VR": "FL",
                "Name": "Illumination Bandwidth",
                "Name1": ""
            },
            {
                "Tag": "(0022,0058)",
                "VR": "SQ",
                "Name": "Mydriatic Agent Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1007)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Measurements Right Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1008)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Measurements Left Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1009)",
                "VR": "CS",
                "Name": "Ophthalmic Axial Measurements Device Type",
                "Name1": ""
            },
            {
                "Tag": "(0022,1010)",
                "VR": "CS",
                "Name": "Ophthalmic Axial Length Measurements Type",
                "Name1": ""
            },
            {
                "Tag": "(0022,1012)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1019)",
                "VR": "FL",
                "Name": "Ophthalmic Axial Length",
                "Name1": ""
            },
            {
                "Tag": "(0022,1024)",
                "VR": "SQ",
                "Name": "Lens Status Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1025)",
                "VR": "SQ",
                "Name": "Vitreous Status Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1028)",
                "VR": "SQ",
                "Name": "IOL Formula Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1029)",
                "VR": "LO",
                "Name": "IOL Formula Detail",
                "Name1": ""
            },
            {
                "Tag": "(0022,1033)",
                "VR": "FL",
                "Name": "Keratometer Index",
                "Name1": ""
            },
            {
                "Tag": "(0022,1035)",
                "VR": "SQ",
                "Name": "Source of Ophthalmic Axial Length Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1037)",
                "VR": "FL",
                "Name": "Target Refraction",
                "Name1": ""
            },
            {
                "Tag": "(0022,1039)",
                "VR": "CS",
                "Name": "Refractive Procedure Occurred",
                "Name1": ""
            },
            {
                "Tag": "(0022,1040)",
                "VR": "SQ",
                "Name": "Refractive Surgery Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1044)",
                "VR": "SQ",
                "Name": "Ophthalmic Ultrasound Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1050)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1053)",
                "VR": "FL",
                "Name": "IOL Power",
                "Name1": ""
            },
            {
                "Tag": "(0022,1054)",
                "VR": "FL",
                "Name": "Predicted Refractive Error",
                "Name1": ""
            },
            {
                "Tag": "(0022,1059)",
                "VR": "FL",
                "Name": "Ophthalmic Axial Length Velocity",
                "Name1": ""
            },
            {
                "Tag": "(0022,1065)",
                "VR": "LO",
                "Name": "Lens Status Description",
                "Name1": ""
            },
            {
                "Tag": "(0022,1066)",
                "VR": "LO",
                "Name": "Vitreous Status Description",
                "Name1": ""
            },
            {
                "Tag": "(0022,1090)",
                "VR": "SQ",
                "Name": "IOL Power Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1092)",
                "VR": "SQ",
                "Name": "Lens Constant Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1093)",
                "VR": "LO",
                "Name": "IOL Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(0022,1094)",
                "VR": "LO",
                "Name": "Lens Constant Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(0022,1095)",
                "VR": "LO",
                "Name": "Implant Name",
                "Name1": ""
            },
            {
                "Tag": "(0022,1096)",
                "VR": "SQ",
                "Name": "Keratometry Measurement Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1097)",
                "VR": "LO",
                "Name": "Implant Part Number",
                "Name1": ""
            },
            {
                "Tag": "(0022,1100)",
                "VR": "SQ",
                "Name": "Referenced Ophthalmic Axial Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1101)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1103)",
                "VR": "SQ",
                "Name": "Refractive Error Before Refractive Surgery Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1121)",
                "VR": "FL",
                "Name": "IOL Power For Exact Emmetropia",
                "Name1": ""
            },
            {
                "Tag": "(0022,1122)",
                "VR": "FL",
                "Name": "IOL Power For Exact Target Refraction",
                "Name1": ""
            },
            {
                "Tag": "(0022,1125)",
                "VR": "SQ",
                "Name": "Anterior Chamber Depth Definition Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1127)",
                "VR": "SQ",
                "Name": "Lens Thickness Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1128)",
                "VR": "SQ",
                "Name": "Anterior Chamber Depth Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1130)",
                "VR": "FL",
                "Name": "Lens Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0022,1131)",
                "VR": "FL",
                "Name": "Anterior Chamber Depth",
                "Name1": ""
            },
            {
                "Tag": "(0022,1132)",
                "VR": "SQ",
                "Name": "Source of Lens Thickness Data Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1133)",
                "VR": "SQ",
                "Name": "Source of Anterior Chamber Depth Data Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1134)",
                "VR": "SQ",
                "Name": "Source of Refractive Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1135)",
                "VR": "SQ",
                "Name": "Source of Refractive Measurements Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1140)",
                "VR": "CS",
                "Name": "Ophthalmic Axial Length Measurement Modified",
                "Name1": ""
            },
            {
                "Tag": "(0022,1150)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Data Source Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1153)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Acquisition Method Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0022,1155)",
                "VR": "FL",
                "Name": "Signal to Noise Ratio",
                "Name1": ""
            },
            {
                "Tag": "(0022,1159)",
                "VR": "LO",
                "Name": "Ophthalmic Axial Length Data Source Description",
                "Name1": ""
            },
            {
                "Tag": "(0022,1210)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Measurements Total Length Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1211)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Measurements Segmental Length Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1212)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Measurements Length Summation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1220)",
                "VR": "SQ",
                "Name": "Ultrasound Ophthalmic Axial Length Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1225)",
                "VR": "SQ",
                "Name": "Optical Ophthalmic Axial Length Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1230)",
                "VR": "SQ",
                "Name": "Ultrasound Selected Ophthalmic Axial Length Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1250)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Selection Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1255)",
                "VR": "SQ",
                "Name": "Optical Selected Ophthalmic Axial Length Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1257)",
                "VR": "SQ",
                "Name": "Selected Segmental Ophthalmic Axial Length Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1260)",
                "VR": "SQ",
                "Name": "Selected Total Ophthalmic Axial Length Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1262)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Quality Metric Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1265)",
                "VR": "SQ",
                "Name": "Ophthalmic Axial Length Quality Metric Type Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0022,1273)",
                "VR": "LO",
                "Name": "Ophthalmic Axial Length Quality Metric Type Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(0022,1300)",
                "VR": "SQ",
                "Name": "Intraocular Lens Calculations Right Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1310)",
                "VR": "SQ",
                "Name": "Intraocular Lens Calculations Left Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1330)",
                "VR": "SQ",
                "Name": "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1415)",
                "VR": "CS",
                "Name": "Ophthalmic Mapping Device Type",
                "Name1": ""
            },
            {
                "Tag": "(0022,1420)",
                "VR": "SQ",
                "Name": "Acquisition Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1423)",
                "VR": "SQ",
                "Name": "Acquisition Method Algorithm Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1436)",
                "VR": "SQ",
                "Name": "Ophthalmic Thickness Map Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1443)",
                "VR": "SQ",
                "Name": "Ophthalmic Thickness Mapping Normals Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1445)",
                "VR": "SQ",
                "Name": "Retinal Thickness Definition Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1450)",
                "VR": "SQ",
                "Name": "Pixel Value Mapping to Coded Concept Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1452)",
                "VR": "US or SS",
                "Name": "Mapped Pixel Value",
                "Name1": ""
            },
            {
                "Tag": "(0022,1454)",
                "VR": "LO",
                "Name": "Pixel Value Mapping Explanation",
                "Name1": ""
            },
            {
                "Tag": "(0022,1458)",
                "VR": "SQ",
                "Name": "Ophthalmic Thickness Map Quality Threshold Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1460)",
                "VR": "FL",
                "Name": "Ophthalmic Thickness Map Threshold Quality Rating",
                "Name1": ""
            },
            {
                "Tag": "(0022,1463)",
                "VR": "FL",
                "Name": "Anatomic Structure Reference Point",
                "Name1": ""
            },
            {
                "Tag": "(0022,1465)",
                "VR": "SQ",
                "Name": "Registration to Localizer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1466)",
                "VR": "CS",
                "Name": "Registered Localizer Units",
                "Name1": ""
            },
            {
                "Tag": "(0022,1467)",
                "VR": "FL",
                "Name": "Registered Localizer Top Left Hand Corner",
                "Name1": ""
            },
            {
                "Tag": "(0022,1468)",
                "VR": "FL",
                "Name": "Registered Localizer Bottom Right Hand Corner",
                "Name1": ""
            },
            {
                "Tag": "(0022,1470)",
                "VR": "SQ",
                "Name": "Ophthalmic Thickness Map Quality Rating Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1472)",
                "VR": "SQ",
                "Name": "Relevant OPT Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1512)",
                "VR": "SQ",
                "Name": "Transformation Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1513)",
                "VR": "SQ",
                "Name": "Transformation Algorithm Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1515)",
                "VR": "CS",
                "Name": "Ophthalmic Axial Length Method",
                "Name1": ""
            },
            {
                "Tag": "(0022,1517)",
                "VR": "FL",
                "Name": "Ophthalmic FOV",
                "Name1": ""
            },
            {
                "Tag": "(0022,1518)",
                "VR": "SQ",
                "Name": "Two Dimensional to Three Dimensional Map Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1525)",
                "VR": "SQ",
                "Name": "Wide Field Ophthalmic Photography Quality Rating Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1526)",
                "VR": "SQ",
                "Name": "Wide Field Ophthalmic Photography Quality Threshold Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0022,1527)",
                "VR": "FL",
                "Name": "Wide Field Ophthalmic Photography Threshold Quality Rating",
                "Name1": ""
            },
            {
                "Tag": "(0022,1528)",
                "VR": "FL",
                "Name": "X Coordinates Center Pixel View Angle",
                "Name1": ""
            },
            {
                "Tag": "(0022,1529)",
                "VR": "FL",
                "Name": "Y Coordinates Center Pixel View Angle",
                "Name1": ""
            },
            {
                "Tag": "(0022,1530)",
                "VR": "UL",
                "Name": "Number of Map Points",
                "Name1": ""
            },
            {
                "Tag": "(0022,1531)",
                "VR": "OF",
                "Name": "Two Dimensional to Three Dimensional Map Data",
                "Name1": ""
            },
            {
                "Tag": "(0024,0010)",
                "VR": "FL",
                "Name": "Visual Field Horizontal Extent",
                "Name1": ""
            },
            {
                "Tag": "(0024,0011)",
                "VR": "FL",
                "Name": "Visual Field Vertical Extent",
                "Name1": ""
            },
            {
                "Tag": "(0024,0012)",
                "VR": "CS",
                "Name": "Visual Field Shape",
                "Name1": ""
            },
            {
                "Tag": "(0024,0016)",
                "VR": "SQ",
                "Name": "Screening Test Mode Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0018)",
                "VR": "FL",
                "Name": "Maximum Stimulus Luminance",
                "Name1": ""
            },
            {
                "Tag": "(0024,0020)",
                "VR": "FL",
                "Name": "Background Luminance",
                "Name1": ""
            },
            {
                "Tag": "(0024,0021)",
                "VR": "SQ",
                "Name": "Stimulus Color Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0024)",
                "VR": "SQ",
                "Name": "Background Illumination Color Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0025)",
                "VR": "FL",
                "Name": "Stimulus Area",
                "Name1": ""
            },
            {
                "Tag": "(0024,0028)",
                "VR": "FL",
                "Name": "Stimulus Presentation Time",
                "Name1": ""
            },
            {
                "Tag": "(0024,0032)",
                "VR": "SQ",
                "Name": "Fixation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0033)",
                "VR": "SQ",
                "Name": "Fixation Monitoring Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0034)",
                "VR": "SQ",
                "Name": "Visual Field Catch Trial Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0035)",
                "VR": "US",
                "Name": "Fixation Checked Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0036)",
                "VR": "US",
                "Name": "Patient Not Properly Fixated Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0037)",
                "VR": "CS",
                "Name": "Presented Visual Stimuli Data Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0038)",
                "VR": "US",
                "Name": "Number of Visual Stimuli",
                "Name1": ""
            },
            {
                "Tag": "(0024,0039)",
                "VR": "CS",
                "Name": "Excessive Fixation Losses Data Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0040)",
                "VR": "CS",
                "Name": "Excessive Fixation Losses",
                "Name1": ""
            },
            {
                "Tag": "(0024,0042)",
                "VR": "US",
                "Name": "Stimuli Retesting Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0044)",
                "VR": "LT",
                "Name": "Comments on Patient's Performance of Visual Field",
                "Name1": ""
            },
            {
                "Tag": "(0024,0045)",
                "VR": "CS",
                "Name": "False Negatives Estimate Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0046)",
                "VR": "FL",
                "Name": "False Negatives Estimate",
                "Name1": ""
            },
            {
                "Tag": "(0024,0048)",
                "VR": "US",
                "Name": "Negative Catch Trials Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0050)",
                "VR": "US",
                "Name": "False Negatives Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0051)",
                "VR": "CS",
                "Name": "Excessive False Negatives Data Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0052)",
                "VR": "CS",
                "Name": "Excessive False Negatives",
                "Name1": ""
            },
            {
                "Tag": "(0024,0053)",
                "VR": "CS",
                "Name": "False Positives Estimate Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0054)",
                "VR": "FL",
                "Name": "False Positives Estimate",
                "Name1": ""
            },
            {
                "Tag": "(0024,0055)",
                "VR": "CS",
                "Name": "Catch Trials Data Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0056)",
                "VR": "US",
                "Name": "Positive Catch Trials Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0057)",
                "VR": "CS",
                "Name": "Test Point Normals Data Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0058)",
                "VR": "SQ",
                "Name": "Test Point Normals Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0059)",
                "VR": "CS",
                "Name": "Global Deviation Probability Normals Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0060)",
                "VR": "US",
                "Name": "False Positives Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0061)",
                "VR": "CS",
                "Name": "Excessive False Positives Data Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0062)",
                "VR": "CS",
                "Name": "Excessive False Positives",
                "Name1": ""
            },
            {
                "Tag": "(0024,0063)",
                "VR": "CS",
                "Name": "Visual Field Test Normals Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0064)",
                "VR": "SQ",
                "Name": "Results Normals Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0065)",
                "VR": "SQ",
                "Name": "Age Corrected Sensitivity Deviation Algorithm Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0066)",
                "VR": "FL",
                "Name": "Global Deviation From Normal",
                "Name1": ""
            },
            {
                "Tag": "(0024,0067)",
                "VR": "SQ",
                "Name": "Generalized Defect Sensitivity Deviation Algorithm Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0068)",
                "VR": "FL",
                "Name": "Localized Deviation From Normal",
                "Name1": ""
            },
            {
                "Tag": "(0024,0069)",
                "VR": "LO",
                "Name": "Patient Reliability Indicator",
                "Name1": ""
            },
            {
                "Tag": "(0024,0070)",
                "VR": "FL",
                "Name": "Visual Field Mean Sensitivity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0071)",
                "VR": "FL",
                "Name": "Global Deviation Probability",
                "Name1": ""
            },
            {
                "Tag": "(0024,0072)",
                "VR": "CS",
                "Name": "Local Deviation Probability Normals Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0073)",
                "VR": "FL",
                "Name": "Localized Deviation Probability",
                "Name1": ""
            },
            {
                "Tag": "(0024,0074)",
                "VR": "CS",
                "Name": "Short Term Fluctuation Calculated",
                "Name1": ""
            },
            {
                "Tag": "(0024,0075)",
                "VR": "FL",
                "Name": "Short Term Fluctuation",
                "Name1": ""
            },
            {
                "Tag": "(0024,0076)",
                "VR": "CS",
                "Name": "Short Term Fluctuation Probability Calculated",
                "Name1": ""
            },
            {
                "Tag": "(0024,0077)",
                "VR": "FL",
                "Name": "Short Term Fluctuation Probability",
                "Name1": ""
            },
            {
                "Tag": "(0024,0078)",
                "VR": "CS",
                "Name": "Corrected Localized Deviation From Normal Calculated",
                "Name1": ""
            },
            {
                "Tag": "(0024,0079)",
                "VR": "FL",
                "Name": "Corrected Localized Deviation From Normal",
                "Name1": ""
            },
            {
                "Tag": "(0024,0080)",
                "VR": "CS",
                "Name": "Corrected Localized Deviation From Normal Probability Calculated",
                "Name1": ""
            },
            {
                "Tag": "(0024,0081)",
                "VR": "FL",
                "Name": "Corrected Localized Deviation From Normal Probability",
                "Name1": ""
            },
            {
                "Tag": "(0024,0083)",
                "VR": "SQ",
                "Name": "Global Deviation Probability Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0085)",
                "VR": "SQ",
                "Name": "Localized Deviation Probability Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0086)",
                "VR": "CS",
                "Name": "Foveal Sensitivity Measured",
                "Name1": ""
            },
            {
                "Tag": "(0024,0087)",
                "VR": "FL",
                "Name": "Foveal Sensitivity",
                "Name1": ""
            },
            {
                "Tag": "(0024,0088)",
                "VR": "FL",
                "Name": "Visual Field Test Duration",
                "Name1": ""
            },
            {
                "Tag": "(0024,0089)",
                "VR": "SQ",
                "Name": "Visual Field Test Point Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0090)",
                "VR": "FL",
                "Name": "Visual Field Test Point X-Coordinate",
                "Name1": ""
            },
            {
                "Tag": "(0024,0091)",
                "VR": "FL",
                "Name": "Visual Field Test Point Y-Coordinate",
                "Name1": ""
            },
            {
                "Tag": "(0024,0092)",
                "VR": "FL",
                "Name": "Age Corrected Sensitivity Deviation Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0093)",
                "VR": "CS",
                "Name": "Stimulus Results",
                "Name1": ""
            },
            {
                "Tag": "(0024,0094)",
                "VR": "FL",
                "Name": "Sensitivity Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0095)",
                "VR": "CS",
                "Name": "Retest Stimulus Seen",
                "Name1": ""
            },
            {
                "Tag": "(0024,0096)",
                "VR": "FL",
                "Name": "Retest Sensitivity Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0097)",
                "VR": "SQ",
                "Name": "Visual Field Test Point Normals Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0098)",
                "VR": "FL",
                "Name": "Quantified Defect",
                "Name1": ""
            },
            {
                "Tag": "(0024,0100)",
                "VR": "FL",
                "Name": "Age Corrected Sensitivity Deviation Probability Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0102)",
                "VR": "CS",
                "Name": "Generalized Defect Corrected Sensitivity Deviation Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0103)",
                "VR": "FL",
                "Name": "Generalized Defect Corrected Sensitivity Deviation Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0104)",
                "VR": "FL",
                "Name": "Generalized Defect Corrected Sensitivity Deviation Probability Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0105)",
                "VR": "FL",
                "Name": "Minimum Sensitivity Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0106)",
                "VR": "CS",
                "Name": "Blind Spot Localized",
                "Name1": ""
            },
            {
                "Tag": "(0024,0107)",
                "VR": "FL",
                "Name": "Blind Spot X-Coordinate",
                "Name1": ""
            },
            {
                "Tag": "(0024,0108)",
                "VR": "FL",
                "Name": "Blind Spot Y-Coordinate",
                "Name1": ""
            },
            {
                "Tag": "(0024,0110)",
                "VR": "SQ",
                "Name": "Visual Acuity Measurement Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0112)",
                "VR": "SQ",
                "Name": "Refractive Parameters Used on Patient Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0113)",
                "VR": "CS",
                "Name": "Measurement Laterality",
                "Name1": ""
            },
            {
                "Tag": "(0024,0114)",
                "VR": "SQ",
                "Name": "Ophthalmic Patient Clinical Information Left Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0115)",
                "VR": "SQ",
                "Name": "Ophthalmic Patient Clinical Information Right Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0117)",
                "VR": "CS",
                "Name": "Foveal Point Normative Data Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0118)",
                "VR": "FL",
                "Name": "Foveal Point Probability Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0120)",
                "VR": "CS",
                "Name": "Screening Baseline Measured",
                "Name1": ""
            },
            {
                "Tag": "(0024,0122)",
                "VR": "SQ",
                "Name": "Screening Baseline Measured Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0124)",
                "VR": "CS",
                "Name": "Screening Baseline Type",
                "Name1": ""
            },
            {
                "Tag": "(0024,0126)",
                "VR": "FL",
                "Name": "Screening Baseline Value",
                "Name1": ""
            },
            {
                "Tag": "(0024,0202)",
                "VR": "LO",
                "Name": "Algorithm Source",
                "Name1": ""
            },
            {
                "Tag": "(0024,0306)",
                "VR": "LO",
                "Name": "Data Set Name",
                "Name1": ""
            },
            {
                "Tag": "(0024,0307)",
                "VR": "LO",
                "Name": "Data Set Version",
                "Name1": ""
            },
            {
                "Tag": "(0024,0308)",
                "VR": "LO",
                "Name": "Data Set Source",
                "Name1": ""
            },
            {
                "Tag": "(0024,0309)",
                "VR": "LO",
                "Name": "Data Set Description",
                "Name1": ""
            },
            {
                "Tag": "(0024,0317)",
                "VR": "SQ",
                "Name": "Visual Field Test Reliability Global Index Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0320)",
                "VR": "SQ",
                "Name": "Visual Field Global Results Index Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0325)",
                "VR": "SQ",
                "Name": "Data Observation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0024,0338)",
                "VR": "CS",
                "Name": "Index Normals Flag",
                "Name1": ""
            },
            {
                "Tag": "(0024,0341)",
                "VR": "FL",
                "Name": "Index Probability",
                "Name1": ""
            },
            {
                "Tag": "(0024,0344)",
                "VR": "SQ",
                "Name": "Index Probability Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,0002)",
                "VR": "US",
                "Name": "Samples per Pixel",
                "Name1": ""
            },
            {
                "Tag": "(0028,0003)",
                "VR": "US",
                "Name": "Samples per Pixel Used",
                "Name1": ""
            },
            {
                "Tag": "(0028,0004)",
                "VR": "CS",
                "Name": "Photometric Interpretation",
                "Name1": ""
            },
            {
                "Tag": "(0028,0005)",
                "VR": "US",
                "Name": "Image Dimensions",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0006)",
                "VR": "US",
                "Name": "Planar Configuration",
                "Name1": ""
            },
            {
                "Tag": "(0028,0008)",
                "VR": "IS",
                "Name": "Number of Frames",
                "Name1": ""
            },
            {
                "Tag": "(0028,0009)",
                "VR": "AT",
                "Name": "Frame Increment Pointer",
                "Name1": ""
            },
            {
                "Tag": "(0028,000A)",
                "VR": "AT",
                "Name": "Frame Dimension Pointer",
                "Name1": ""
            },
            {
                "Tag": "(0028,0010)",
                "VR": "US",
                "Name": "Rows",
                "Name1": ""
            },
            {
                "Tag": "(0028,0011)",
                "VR": "US",
                "Name": "Columns",
                "Name1": ""
            },
            {
                "Tag": "(0028,0012)",
                "VR": "US",
                "Name": "Planes",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0014)",
                "VR": "US",
                "Name": "Ultrasound Color Data Present",
                "Name1": ""
            },
            {
                "Tag": "(0028,0020)",
                "VR": "",
                "Name": "",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0030)",
                "VR": "DS",
                "Name": "Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(0028,0031)",
                "VR": "DS",
                "Name": "Zoom Factor",
                "Name1": ""
            },
            {
                "Tag": "(0028,0032)",
                "VR": "DS",
                "Name": "Zoom Center",
                "Name1": ""
            },
            {
                "Tag": "(0028,0034)",
                "VR": "IS",
                "Name": "Pixel Aspect Ratio",
                "Name1": ""
            },
            {
                "Tag": "(0028,0040)",
                "VR": "CS",
                "Name": "Image Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0050)",
                "VR": "LO",
                "Name": "Manipulated Image",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0051)",
                "VR": "CS",
                "Name": "Corrected Image",
                "Name1": ""
            },
            {
                "Tag": "(0028,005F)",
                "VR": "LO",
                "Name": "Compression Recognition Code",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0060)",
                "VR": "CS",
                "Name": "Compression Code",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0061)",
                "VR": "SH",
                "Name": "Compression Originator",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0062)",
                "VR": "LO",
                "Name": "Compression Label",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0063)",
                "VR": "SH",
                "Name": "Compression Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0065)",
                "VR": "CS",
                "Name": "Compression Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0066)",
                "VR": "AT",
                "Name": "Compression Step Pointers",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0068)",
                "VR": "US",
                "Name": "Repeat Interval",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0069)",
                "VR": "US",
                "Name": "Bits Grouped",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0070)",
                "VR": "US",
                "Name": "Perimeter Table",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0071)",
                "VR": "US or SS",
                "Name": "Perimeter Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0080)",
                "VR": "US",
                "Name": "Predictor Rows",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0081)",
                "VR": "US",
                "Name": "Predictor Columns",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0082)",
                "VR": "US",
                "Name": "Predictor Constants",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0090)",
                "VR": "CS",
                "Name": "Blocked Pixels",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0091)",
                "VR": "US",
                "Name": "Block Rows",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0092)",
                "VR": "US",
                "Name": "Block Columns",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0093)",
                "VR": "US",
                "Name": "Row Overlap",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0094)",
                "VR": "US",
                "Name": "Column Overlap",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0100)",
                "VR": "US",
                "Name": "Bits Allocated",
                "Name1": ""
            },
            {
                "Tag": "(0028,0101)",
                "VR": "US",
                "Name": "Bits Stored",
                "Name1": ""
            },
            {
                "Tag": "(0028,0102)",
                "VR": "US",
                "Name": "High Bit",
                "Name1": ""
            },
            {
                "Tag": "(0028,0103)",
                "VR": "US",
                "Name": "Pixel Representation",
                "Name1": ""
            },
            {
                "Tag": "(0028,0104)",
                "VR": "US or SS",
                "Name": "Smallest Valid Pixel Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0105)",
                "VR": "US or SS",
                "Name": "Largest Valid Pixel Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0106)",
                "VR": "US or SS",
                "Name": "Smallest Image Pixel Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,0107)",
                "VR": "US or SS",
                "Name": "Largest Image Pixel Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,0108)",
                "VR": "US or SS",
                "Name": "Smallest Pixel Value in Series",
                "Name1": ""
            },
            {
                "Tag": "(0028,0109)",
                "VR": "US or SS",
                "Name": "Largest Pixel Value in Series",
                "Name1": ""
            },
            {
                "Tag": "(0028,0110)",
                "VR": "US or SS",
                "Name": "Smallest Image Pixel Value in Plane",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0111)",
                "VR": "US or SS",
                "Name": "Largest Image Pixel Value in Plane",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0120)",
                "VR": "US or SS",
                "Name": "Pixel Padding Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,0121)",
                "VR": "US or SS",
                "Name": "Pixel Padding Range Limit",
                "Name1": ""
            },
            {
                "Tag": "(0028,0122)",
                "VR": "FL",
                "Name": "Float Pixel Padding Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,0123)",
                "VR": "FD",
                "Name": "Double Float Pixel Padding Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,0124)",
                "VR": "FL",
                "Name": "Float Pixel Padding Range Limit",
                "Name1": ""
            },
            {
                "Tag": "(0028,0125)",
                "VR": "FD",
                "Name": "Double Float Pixel Padding Range Limit",
                "Name1": ""
            },
            {
                "Tag": "(0028,0200)",
                "VR": "US",
                "Name": "Image Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0300)",
                "VR": "CS",
                "Name": "Quality Control Image",
                "Name1": ""
            },
            {
                "Tag": "(0028,0301)",
                "VR": "CS",
                "Name": "Burned In Annotation",
                "Name1": ""
            },
            {
                "Tag": "(0028,0302)",
                "VR": "CS",
                "Name": "Recognizable Visual Features",
                "Name1": ""
            },
            {
                "Tag": "(0028,0303)",
                "VR": "CS",
                "Name": "Longitudinal Temporal Information Modified",
                "Name1": ""
            },
            {
                "Tag": "(0028,0304)",
                "VR": "UI",
                "Name": "Referenced Color Palette Instance UID",
                "Name1": ""
            },
            {
                "Tag": "(0028,0400)",
                "VR": "LO",
                "Name": "Transform Label",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0401)",
                "VR": "LO",
                "Name": "Transform Version Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0402)",
                "VR": "US",
                "Name": "Number of Transform Steps",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0403)",
                "VR": "LO",
                "Name": "Sequence of Compressed Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0404)",
                "VR": "AT",
                "Name": "Details of Coefficients",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,04x0)",
                "VR": "US",
                "Name": "Rows For Nth Order Coefficients",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,04x1)",
                "VR": "US",
                "Name": "Columns For Nth Order Coefficients",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,04x2)",
                "VR": "LO",
                "Name": "Coefficient Coding",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,04x3)",
                "VR": "AT",
                "Name": "Coefficient Coding Pointers",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0700)",
                "VR": "LO",
                "Name": "DCT Label",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0701)",
                "VR": "CS",
                "Name": "Data Block Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0702)",
                "VR": "AT",
                "Name": "Data Block",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0710)",
                "VR": "US",
                "Name": "Normalization Factor Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0720)",
                "VR": "US",
                "Name": "Zonal Map Number Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0721)",
                "VR": "AT",
                "Name": "Zonal Map Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0722)",
                "VR": "US",
                "Name": "Zonal Map Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0730)",
                "VR": "US",
                "Name": "Adaptive Map Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0740)",
                "VR": "US",
                "Name": "Code Number Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,08x0)",
                "VR": "CS",
                "Name": "Code Label",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,08x2)",
                "VR": "US",
                "Name": "Number of Tables",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,08x3)",
                "VR": "AT",
                "Name": "Code Table Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,08x4)",
                "VR": "US",
                "Name": "Bits For Code Word",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,08x8)",
                "VR": "AT",
                "Name": "Image Data Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,0A02)",
                "VR": "CS",
                "Name": "Pixel Spacing Calibration Type",
                "Name1": ""
            },
            {
                "Tag": "(0028,0A04)",
                "VR": "LO",
                "Name": "Pixel Spacing Calibration Description",
                "Name1": ""
            },
            {
                "Tag": "(0028,1040)",
                "VR": "CS",
                "Name": "Pixel Intensity Relationship",
                "Name1": ""
            },
            {
                "Tag": "(0028,1041)",
                "VR": "SS",
                "Name": "Pixel Intensity Relationship Sign",
                "Name1": ""
            },
            {
                "Tag": "(0028,1050)",
                "VR": "DS",
                "Name": "Window Center",
                "Name1": ""
            },
            {
                "Tag": "(0028,1051)",
                "VR": "DS",
                "Name": "Window Width",
                "Name1": ""
            },
            {
                "Tag": "(0028,1052)",
                "VR": "DS",
                "Name": "Rescale Intercept",
                "Name1": ""
            },
            {
                "Tag": "(0028,1053)",
                "VR": "DS",
                "Name": "Rescale Slope",
                "Name1": ""
            },
            {
                "Tag": "(0028,1054)",
                "VR": "LO",
                "Name": "Rescale Type",
                "Name1": ""
            },
            {
                "Tag": "(0028,1055)",
                "VR": "LO",
                "Name": "Window Center & Width Explanation",
                "Name1": ""
            },
            {
                "Tag": "(0028,1056)",
                "VR": "CS",
                "Name": "VOI LUT Function",
                "Name1": ""
            },
            {
                "Tag": "(0028,1080)",
                "VR": "CS",
                "Name": "Gray Scale",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1090)",
                "VR": "CS",
                "Name": "Recommended Viewing Mode",
                "Name1": ""
            },
            {
                "Tag": "(0028,1100)",
                "VR": "US or SS",
                "Name": "Gray Lookup Table Descriptor",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1101)",
                "VR": "US or SS",
                "Name": "Red Palette Color Lookup Table Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(0028,1102)",
                "VR": "US or SS",
                "Name": "Green Palette Color Lookup Table Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(0028,1103)",
                "VR": "US or SS",
                "Name": "Blue Palette Color Lookup Table Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(0028,1104)",
                "VR": "US",
                "Name": "Alpha Palette Color Lookup Table Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(0028,1111)",
                "VR": "US or SS",
                "Name": "Large Red Palette Color Lookup Table Descriptor",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1112)",
                "VR": "US or SS",
                "Name": "Large Green Palette Color Lookup Table Descriptor",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1113)",
                "VR": "US or SS",
                "Name": "Large Blue Palette Color Lookup Table Descriptor",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1199)",
                "VR": "UI",
                "Name": "Palette Color Lookup Table UID",
                "Name1": ""
            },
            {
                "Tag": "(0028,1200)",
                "VR": "US or SS or OW",
                "Name": "Gray Lookup Table Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1201)",
                "VR": "OW",
                "Name": "Red Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1202)",
                "VR": "OW",
                "Name": "Green Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1203)",
                "VR": "OW",
                "Name": "Blue Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1204)",
                "VR": "OW",
                "Name": "Alpha Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1211)",
                "VR": "OW",
                "Name": "Large Red Palette Color Lookup Table Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1212)",
                "VR": "OW",
                "Name": "Large Green Palette Color Lookup Table Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1213)",
                "VR": "OW",
                "Name": "Large Blue Palette Color Lookup Table Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1214)",
                "VR": "UI",
                "Name": "Large Palette Color Lookup Table UID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,1221)",
                "VR": "OW",
                "Name": "Segmented Red Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1222)",
                "VR": "OW",
                "Name": "Segmented Green Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1223)",
                "VR": "OW",
                "Name": "Segmented Blue Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1224)",
                "VR": "OW",
                "Name": "Segmented Alpha Palette Color Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,1300)",
                "VR": "CS",
                "Name": "Breast Implant Present",
                "Name1": ""
            },
            {
                "Tag": "(0028,1350)",
                "VR": "CS",
                "Name": "Partial View",
                "Name1": ""
            },
            {
                "Tag": "(0028,1351)",
                "VR": "ST",
                "Name": "Partial View Description",
                "Name1": ""
            },
            {
                "Tag": "(0028,1352)",
                "VR": "SQ",
                "Name": "Partial View Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,135A)",
                "VR": "CS",
                "Name": "Spatial Locations Preserved",
                "Name1": ""
            },
            {
                "Tag": "(0028,1401)",
                "VR": "SQ",
                "Name": "Data Frame Assignment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,1402)",
                "VR": "CS",
                "Name": "Data Path Assignment",
                "Name1": ""
            },
            {
                "Tag": "(0028,1403)",
                "VR": "US",
                "Name": "Bits Mapped to Color Lookup Table",
                "Name1": ""
            },
            {
                "Tag": "(0028,1404)",
                "VR": "SQ",
                "Name": "Blending LUT 1 Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,1405)",
                "VR": "CS",
                "Name": "Blending LUT 1 Transfer Function",
                "Name1": ""
            },
            {
                "Tag": "(0028,1406)",
                "VR": "FD",
                "Name": "Blending Weight Constant",
                "Name1": ""
            },
            {
                "Tag": "(0028,1407)",
                "VR": "US",
                "Name": "Blending Lookup Table Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(0028,1408)",
                "VR": "OW",
                "Name": "Blending Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,140B)",
                "VR": "SQ",
                "Name": "Enhanced Palette Color Lookup Table Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,140C)",
                "VR": "SQ",
                "Name": "Blending LUT 2 Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,140D)",
                "VR": "CS",
                "Name": "Blending LUT 2 Transfer Function",
                "Name1": ""
            },
            {
                "Tag": "(0028,140E)",
                "VR": "CS",
                "Name": "Data Path ID",
                "Name1": ""
            },
            {
                "Tag": "(0028,140F)",
                "VR": "CS",
                "Name": "RGB LUT Transfer Function",
                "Name1": ""
            },
            {
                "Tag": "(0028,1410)",
                "VR": "CS",
                "Name": "Alpha LUT Transfer Function",
                "Name1": ""
            },
            {
                "Tag": "(0028,2000)",
                "VR": "OB",
                "Name": "ICC Profile",
                "Name1": ""
            },
            {
                "Tag": "(0028,2002)",
                "VR": "CS",
                "Name": "Color Space",
                "Name1": ""
            },
            {
                "Tag": "(0028,2110)",
                "VR": "CS",
                "Name": "Lossy Image Compression",
                "Name1": ""
            },
            {
                "Tag": "(0028,2112)",
                "VR": "DS",
                "Name": "Lossy Image Compression Ratio",
                "Name1": ""
            },
            {
                "Tag": "(0028,2114)",
                "VR": "CS",
                "Name": "Lossy Image Compression Method",
                "Name1": ""
            },
            {
                "Tag": "(0028,3000)",
                "VR": "SQ",
                "Name": "Modality LUT Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,3002)",
                "VR": "US or SS",
                "Name": "LUT Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(0028,3003)",
                "VR": "LO",
                "Name": "LUT Explanation",
                "Name1": ""
            },
            {
                "Tag": "(0028,3004)",
                "VR": "LO",
                "Name": "Modality LUT Type",
                "Name1": ""
            },
            {
                "Tag": "(0028,3006)",
                "VR": "US or OW",
                "Name": "LUT Data",
                "Name1": ""
            },
            {
                "Tag": "(0028,3010)",
                "VR": "SQ",
                "Name": "VOI LUT Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,3110)",
                "VR": "SQ",
                "Name": "Softcopy VOI LUT Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,4000)",
                "VR": "LT",
                "Name": "Image Presentation Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,5000)",
                "VR": "SQ",
                "Name": "Bi-Plane Acquisition Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,6010)",
                "VR": "US",
                "Name": "Representative Frame Number",
                "Name1": ""
            },
            {
                "Tag": "(0028,6020)",
                "VR": "US",
                "Name": "Frame Numbers of Interest (FOI)",
                "Name1": ""
            },
            {
                "Tag": "(0028,6022)",
                "VR": "LO",
                "Name": "Frame of Interest Description",
                "Name1": ""
            },
            {
                "Tag": "(0028,6023)",
                "VR": "CS",
                "Name": "Frame of Interest Type",
                "Name1": ""
            },
            {
                "Tag": "(0028,6030)",
                "VR": "US",
                "Name": "Mask Pointer(s)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,6040)",
                "VR": "US",
                "Name": "R Wave Pointer",
                "Name1": ""
            },
            {
                "Tag": "(0028,6100)",
                "VR": "SQ",
                "Name": "Mask Subtraction Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,6101)",
                "VR": "CS",
                "Name": "Mask Operation",
                "Name1": ""
            },
            {
                "Tag": "(0028,6102)",
                "VR": "US",
                "Name": "Applicable Frame Range",
                "Name1": ""
            },
            {
                "Tag": "(0028,6110)",
                "VR": "US",
                "Name": "Mask Frame Numbers",
                "Name1": ""
            },
            {
                "Tag": "(0028,6112)",
                "VR": "US",
                "Name": "Contrast Frame Averaging",
                "Name1": ""
            },
            {
                "Tag": "(0028,6114)",
                "VR": "FL",
                "Name": "Mask Sub-pixel Shift",
                "Name1": ""
            },
            {
                "Tag": "(0028,6120)",
                "VR": "SS",
                "Name": "TID Offset",
                "Name1": ""
            },
            {
                "Tag": "(0028,6190)",
                "VR": "ST",
                "Name": "Mask Operation Explanation",
                "Name1": ""
            },
            {
                "Tag": "(0028,7000)",
                "VR": "SQ",
                "Name": "Equipment Administrator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7001)",
                "VR": "US",
                "Name": "Number of Display Subsystems",
                "Name1": ""
            },
            {
                "Tag": "(0028,7002)",
                "VR": "US",
                "Name": "Current Configuration ID",
                "Name1": ""
            },
            {
                "Tag": "(0028,7003)",
                "VR": "US",
                "Name": "Display Subsystem ID",
                "Name1": ""
            },
            {
                "Tag": "(0028,7004)",
                "VR": "SH",
                "Name": "Display Subsystem Name",
                "Name1": ""
            },
            {
                "Tag": "(0028,7005)",
                "VR": "LO",
                "Name": "Display Subsystem Description",
                "Name1": ""
            },
            {
                "Tag": "(0028,7006)",
                "VR": "CS",
                "Name": "System Status",
                "Name1": ""
            },
            {
                "Tag": "(0028,7007)",
                "VR": "LO",
                "Name": "System Status Comment",
                "Name1": ""
            },
            {
                "Tag": "(0028,7008)",
                "VR": "SQ",
                "Name": "Target Luminance Characteristics Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7009)",
                "VR": "US",
                "Name": "Luminance Characteristics ID",
                "Name1": ""
            },
            {
                "Tag": "(0028,700A)",
                "VR": "SQ",
                "Name": "Display Subsystem Configuration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,700B)",
                "VR": "US",
                "Name": "Configuration ID",
                "Name1": ""
            },
            {
                "Tag": "(0028,700C)",
                "VR": "SH",
                "Name": "Configuration Name",
                "Name1": ""
            },
            {
                "Tag": "(0028,700D)",
                "VR": "LO",
                "Name": "Configuration Description",
                "Name1": ""
            },
            {
                "Tag": "(0028,700E)",
                "VR": "US",
                "Name": "Referenced Target Luminance Characteristics ID",
                "Name1": ""
            },
            {
                "Tag": "(0028,700F)",
                "VR": "SQ",
                "Name": "QA Results Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7010)",
                "VR": "SQ",
                "Name": "Display Subsystem QA Results Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7011)",
                "VR": "SQ",
                "Name": "Configuration QA Results Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7012)",
                "VR": "SQ",
                "Name": "Measurement Equipment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7013)",
                "VR": "CS",
                "Name": "Measurement Functions",
                "Name1": ""
            },
            {
                "Tag": "(0028,7014)",
                "VR": "CS",
                "Name": "Measurement Equipment Type",
                "Name1": ""
            },
            {
                "Tag": "(0028,7015)",
                "VR": "SQ",
                "Name": "Visual Evaluation Result Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7016)",
                "VR": "SQ",
                "Name": "Display Calibration Result Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7017)",
                "VR": "US",
                "Name": "DDL Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,7018)",
                "VR": "FL",
                "Name": "CIExy White Point",
                "Name1": ""
            },
            {
                "Tag": "(0028,7019)",
                "VR": "CS",
                "Name": "Display Function Type",
                "Name1": ""
            },
            {
                "Tag": "(0028,701A)",
                "VR": "FL",
                "Name": "Gamma Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,701B)",
                "VR": "US",
                "Name": "Number of Luminance Points",
                "Name1": ""
            },
            {
                "Tag": "(0028,701C)",
                "VR": "SQ",
                "Name": "Luminance Response Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,701D)",
                "VR": "FL",
                "Name": "Target Minimum Luminance",
                "Name1": ""
            },
            {
                "Tag": "(0028,701E)",
                "VR": "FL",
                "Name": "Target Maximum Luminance",
                "Name1": ""
            },
            {
                "Tag": "(0028,701F)",
                "VR": "FL",
                "Name": "Luminance Value",
                "Name1": ""
            },
            {
                "Tag": "(0028,7020)",
                "VR": "LO",
                "Name": "Luminance Response Description",
                "Name1": ""
            },
            {
                "Tag": "(0028,7021)",
                "VR": "CS",
                "Name": "White Point Flag",
                "Name1": ""
            },
            {
                "Tag": "(0028,7022)",
                "VR": "SQ",
                "Name": "Display Device Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7023)",
                "VR": "SQ",
                "Name": "Display Subsystem Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7024)",
                "VR": "SQ",
                "Name": "Luminance Result Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7025)",
                "VR": "CS",
                "Name": "Ambient Light Value Source",
                "Name1": ""
            },
            {
                "Tag": "(0028,7026)",
                "VR": "CS",
                "Name": "Measured Characteristics",
                "Name1": ""
            },
            {
                "Tag": "(0028,7027)",
                "VR": "SQ",
                "Name": "Luminance Uniformity Result Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7028)",
                "VR": "SQ",
                "Name": "Visual Evaluation Test Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7029)",
                "VR": "CS",
                "Name": "Test Result",
                "Name1": ""
            },
            {
                "Tag": "(0028,702A)",
                "VR": "LO",
                "Name": "Test Result Comment",
                "Name1": ""
            },
            {
                "Tag": "(0028,702B)",
                "VR": "CS",
                "Name": "Test Image Validation",
                "Name1": ""
            },
            {
                "Tag": "(0028,702C)",
                "VR": "SQ",
                "Name": "Test Pattern Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,702D)",
                "VR": "SQ",
                "Name": "Measurement Pattern Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,702E)",
                "VR": "SQ",
                "Name": "Visual Evaluation Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,7FE0)",
                "VR": "UR",
                "Name": "Pixel Data Provider URL",
                "Name1": ""
            },
            {
                "Tag": "(0028,9001)",
                "VR": "UL",
                "Name": "Data Point Rows",
                "Name1": ""
            },
            {
                "Tag": "(0028,9002)",
                "VR": "UL",
                "Name": "Data Point Columns",
                "Name1": ""
            },
            {
                "Tag": "(0028,9003)",
                "VR": "CS",
                "Name": "Signal Domain Columns",
                "Name1": ""
            },
            {
                "Tag": "(0028,9099)",
                "VR": "US",
                "Name": "Largest Monochrome Pixel Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(0028,9108)",
                "VR": "CS",
                "Name": "Data Representation",
                "Name1": ""
            },
            {
                "Tag": "(0028,9110)",
                "VR": "SQ",
                "Name": "Pixel Measures Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9132)",
                "VR": "SQ",
                "Name": "Frame VOI LUT Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9145)",
                "VR": "SQ",
                "Name": "Pixel Value Transformation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9235)",
                "VR": "CS",
                "Name": "Signal Domain Rows",
                "Name1": ""
            },
            {
                "Tag": "(0028,9411)",
                "VR": "FL",
                "Name": "Display Filter Percentage",
                "Name1": ""
            },
            {
                "Tag": "(0028,9415)",
                "VR": "SQ",
                "Name": "Frame Pixel Shift Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9416)",
                "VR": "US",
                "Name": "Subtraction Item ID",
                "Name1": ""
            },
            {
                "Tag": "(0028,9422)",
                "VR": "SQ",
                "Name": "Pixel Intensity Relationship LUT Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9443)",
                "VR": "SQ",
                "Name": "Frame Pixel Data Properties Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9444)",
                "VR": "CS",
                "Name": "Geometrical Properties",
                "Name1": ""
            },
            {
                "Tag": "(0028,9445)",
                "VR": "FL",
                "Name": "Geometric Maximum Distortion",
                "Name1": ""
            },
            {
                "Tag": "(0028,9446)",
                "VR": "CS",
                "Name": "Image Processing Applied",
                "Name1": ""
            },
            {
                "Tag": "(0028,9454)",
                "VR": "CS",
                "Name": "Mask Selection Mode",
                "Name1": ""
            },
            {
                "Tag": "(0028,9474)",
                "VR": "CS",
                "Name": "LUT Function",
                "Name1": ""
            },
            {
                "Tag": "(0028,9478)",
                "VR": "FL",
                "Name": "Mask Visibility Percentage",
                "Name1": ""
            },
            {
                "Tag": "(0028,9501)",
                "VR": "SQ",
                "Name": "Pixel Shift Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9502)",
                "VR": "SQ",
                "Name": "Region Pixel Shift Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9503)",
                "VR": "SS",
                "Name": "Vertices of the Region",
                "Name1": ""
            },
            {
                "Tag": "(0028,9505)",
                "VR": "SQ",
                "Name": "Multi-frame Presentation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0028,9506)",
                "VR": "US",
                "Name": "Pixel Shift Frame Range",
                "Name1": ""
            },
            {
                "Tag": "(0028,9507)",
                "VR": "US",
                "Name": "LUT Frame Range",
                "Name1": ""
            },
            {
                "Tag": "(0028,9520)",
                "VR": "DS",
                "Name": "Image to Equipment Mapping Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0028,9537)",
                "VR": "CS",
                "Name": "Equipment Coordinate System Identification",
                "Name1": ""
            },
            {
                "Tag": "(0032,000A)",
                "VR": "CS",
                "Name": "Study Status ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,000C)",
                "VR": "CS",
                "Name": "Study Priority ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,0012)",
                "VR": "LO",
                "Name": "Study ID Issuer",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,0032)",
                "VR": "DA",
                "Name": "Study Verified Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,0033)",
                "VR": "TM",
                "Name": "Study Verified Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,0034)",
                "VR": "DA",
                "Name": "Study Read Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,0035)",
                "VR": "TM",
                "Name": "Study Read Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1000)",
                "VR": "DA",
                "Name": "Scheduled Study Start Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1001)",
                "VR": "TM",
                "Name": "Scheduled Study Start Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1010)",
                "VR": "DA",
                "Name": "Scheduled Study Stop Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1011)",
                "VR": "TM",
                "Name": "Scheduled Study Stop Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1020)",
                "VR": "LO",
                "Name": "Scheduled Study Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1021)",
                "VR": "AE",
                "Name": "Scheduled Study Location AE Title",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1030)",
                "VR": "LO",
                "Name": "Reason for Study",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1031)",
                "VR": "SQ",
                "Name": "Requesting Physician Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0032,1032)",
                "VR": "PN",
                "Name": "Requesting Physician",
                "Name1": ""
            },
            {
                "Tag": "(0032,1033)",
                "VR": "LO",
                "Name": "Requesting Service",
                "Name1": ""
            },
            {
                "Tag": "(0032,1034)",
                "VR": "SQ",
                "Name": "Requesting Service Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0032,1040)",
                "VR": "DA",
                "Name": "Study Arrival Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1041)",
                "VR": "TM",
                "Name": "Study Arrival Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1050)",
                "VR": "DA",
                "Name": "Study Completion Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1051)",
                "VR": "TM",
                "Name": "Study Completion Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1055)",
                "VR": "CS",
                "Name": "Study Component Status ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0032,1060)",
                "VR": "LO",
                "Name": "Requested Procedure Description",
                "Name1": ""
            },
            {
                "Tag": "(0032,1064)",
                "VR": "SQ",
                "Name": "Requested Procedure Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0032,1070)",
                "VR": "LO",
                "Name": "Requested Contrast Agent",
                "Name1": ""
            },
            {
                "Tag": "(0032,4000)",
                "VR": "LT",
                "Name": "Study Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0004)",
                "VR": "SQ",
                "Name": "Referenced Patient Alias Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0038,0008)",
                "VR": "CS",
                "Name": "Visit Status ID",
                "Name1": ""
            },
            {
                "Tag": "(0038,0010)",
                "VR": "LO",
                "Name": "Admission ID",
                "Name1": ""
            },
            {
                "Tag": "(0038,0011)",
                "VR": "LO",
                "Name": "Issuer of Admission ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0014)",
                "VR": "SQ",
                "Name": "Issuer of Admission ID Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0038,0016)",
                "VR": "LO",
                "Name": "Route of Admissions",
                "Name1": ""
            },
            {
                "Tag": "(0038,001A)",
                "VR": "DA",
                "Name": "Scheduled Admission Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,001B)",
                "VR": "TM",
                "Name": "Scheduled Admission Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,001C)",
                "VR": "DA",
                "Name": "Scheduled Discharge Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,001D)",
                "VR": "TM",
                "Name": "Scheduled Discharge Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,001E)",
                "VR": "LO",
                "Name": "Scheduled Patient Institution Residence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0020)",
                "VR": "DA",
                "Name": "Admitting Date",
                "Name1": ""
            },
            {
                "Tag": "(0038,0021)",
                "VR": "TM",
                "Name": "Admitting Time",
                "Name1": ""
            },
            {
                "Tag": "(0038,0030)",
                "VR": "DA",
                "Name": "Discharge Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0032)",
                "VR": "TM",
                "Name": "Discharge Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0040)",
                "VR": "LO",
                "Name": "Discharge Diagnosis Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0044)",
                "VR": "SQ",
                "Name": "Discharge Diagnosis Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0050)",
                "VR": "LO",
                "Name": "Special Needs",
                "Name1": ""
            },
            {
                "Tag": "(0038,0060)",
                "VR": "LO",
                "Name": "Service Episode ID",
                "Name1": ""
            },
            {
                "Tag": "(0038,0061)",
                "VR": "LO",
                "Name": "Issuer of Service Episode ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0038,0062)",
                "VR": "LO",
                "Name": "Service Episode Description",
                "Name1": ""
            },
            {
                "Tag": "(0038,0064)",
                "VR": "SQ",
                "Name": "Issuer of Service Episode ID Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0038,0100)",
                "VR": "SQ",
                "Name": "Pertinent Documents Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0038,0101)",
                "VR": "SQ",
                "Name": "Pertinent Resources Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0038,0102)",
                "VR": "LO",
                "Name": "Resource Description",
                "Name1": ""
            },
            {
                "Tag": "(0038,0300)",
                "VR": "LO",
                "Name": "Current Patient Location",
                "Name1": ""
            },
            {
                "Tag": "(0038,0400)",
                "VR": "LO",
                "Name": "Patient's Institution Residence",
                "Name1": ""
            },
            {
                "Tag": "(0038,0500)",
                "VR": "LO",
                "Name": "Patient State",
                "Name1": ""
            },
            {
                "Tag": "(0038,0502)",
                "VR": "SQ",
                "Name": "Patient Clinical Trial Participation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0038,4000)",
                "VR": "LT",
                "Name": "Visit Comments",
                "Name1": ""
            },
            {
                "Tag": "(003A,0004)",
                "VR": "CS",
                "Name": "Waveform Originality",
                "Name1": ""
            },
            {
                "Tag": "(003A,0005)",
                "VR": "US",
                "Name": "Number of Waveform Channels",
                "Name1": ""
            },
            {
                "Tag": "(003A,0010)",
                "VR": "UL",
                "Name": "Number of Waveform Samples",
                "Name1": ""
            },
            {
                "Tag": "(003A,001A)",
                "VR": "DS",
                "Name": "Sampling Frequency",
                "Name1": ""
            },
            {
                "Tag": "(003A,0020)",
                "VR": "SH",
                "Name": "Multiplex Group Label",
                "Name1": ""
            },
            {
                "Tag": "(003A,0200)",
                "VR": "SQ",
                "Name": "Channel Definition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,0202)",
                "VR": "IS",
                "Name": "Waveform Channel Number",
                "Name1": ""
            },
            {
                "Tag": "(003A,0203)",
                "VR": "SH",
                "Name": "Channel Label",
                "Name1": ""
            },
            {
                "Tag": "(003A,0205)",
                "VR": "CS",
                "Name": "Channel Status",
                "Name1": ""
            },
            {
                "Tag": "(003A,0208)",
                "VR": "SQ",
                "Name": "Channel Source Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,0209)",
                "VR": "SQ",
                "Name": "Channel Source Modifiers Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,020A)",
                "VR": "SQ",
                "Name": "Source Waveform Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,020C)",
                "VR": "LO",
                "Name": "Channel Derivation Description",
                "Name1": ""
            },
            {
                "Tag": "(003A,0210)",
                "VR": "DS",
                "Name": "Channel Sensitivity",
                "Name1": ""
            },
            {
                "Tag": "(003A,0211)",
                "VR": "SQ",
                "Name": "Channel Sensitivity Units Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,0212)",
                "VR": "DS",
                "Name": "Channel Sensitivity Correction Factor",
                "Name1": ""
            },
            {
                "Tag": "(003A,0213)",
                "VR": "DS",
                "Name": "Channel Baseline",
                "Name1": ""
            },
            {
                "Tag": "(003A,0214)",
                "VR": "DS",
                "Name": "Channel Time Skew",
                "Name1": ""
            },
            {
                "Tag": "(003A,0215)",
                "VR": "DS",
                "Name": "Channel Sample Skew",
                "Name1": ""
            },
            {
                "Tag": "(003A,0218)",
                "VR": "DS",
                "Name": "Channel Offset",
                "Name1": ""
            },
            {
                "Tag": "(003A,021A)",
                "VR": "US",
                "Name": "Waveform Bits Stored",
                "Name1": ""
            },
            {
                "Tag": "(003A,0220)",
                "VR": "DS",
                "Name": "Filter Low Frequency",
                "Name1": ""
            },
            {
                "Tag": "(003A,0221)",
                "VR": "DS",
                "Name": "Filter High Frequency",
                "Name1": ""
            },
            {
                "Tag": "(003A,0222)",
                "VR": "DS",
                "Name": "Notch Filter Frequency",
                "Name1": ""
            },
            {
                "Tag": "(003A,0223)",
                "VR": "DS",
                "Name": "Notch Filter Bandwidth",
                "Name1": ""
            },
            {
                "Tag": "(003A,0230)",
                "VR": "FL",
                "Name": "Waveform Data Display Scale",
                "Name1": ""
            },
            {
                "Tag": "(003A,0231)",
                "VR": "US",
                "Name": "Waveform Display Background CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(003A,0240)",
                "VR": "SQ",
                "Name": "Waveform Presentation Group Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,0241)",
                "VR": "US",
                "Name": "Presentation Group Number",
                "Name1": ""
            },
            {
                "Tag": "(003A,0242)",
                "VR": "SQ",
                "Name": "Channel Display Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,0244)",
                "VR": "US",
                "Name": "Channel Recommended Display CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(003A,0245)",
                "VR": "FL",
                "Name": "Channel Position",
                "Name1": ""
            },
            {
                "Tag": "(003A,0246)",
                "VR": "CS",
                "Name": "Display Shading Flag",
                "Name1": ""
            },
            {
                "Tag": "(003A,0247)",
                "VR": "FL",
                "Name": "Fractional Channel Display Scale",
                "Name1": ""
            },
            {
                "Tag": "(003A,0248)",
                "VR": "FL",
                "Name": "Absolute Channel Display Scale",
                "Name1": ""
            },
            {
                "Tag": "(003A,0300)",
                "VR": "SQ",
                "Name": "Multiplexed Audio Channels Description Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(003A,0301)",
                "VR": "IS",
                "Name": "Channel Identification Code",
                "Name1": ""
            },
            {
                "Tag": "(003A,0302)",
                "VR": "CS",
                "Name": "Channel Mode",
                "Name1": ""
            },
            {
                "Tag": "(0040,0001)",
                "VR": "AE",
                "Name": "Scheduled Station AE Title",
                "Name1": ""
            },
            {
                "Tag": "(0040,0002)",
                "VR": "DA",
                "Name": "Scheduled Procedure Step Start Date",
                "Name1": ""
            },
            {
                "Tag": "(0040,0003)",
                "VR": "TM",
                "Name": "Scheduled Procedure Step Start Time",
                "Name1": ""
            },
            {
                "Tag": "(0040,0004)",
                "VR": "DA",
                "Name": "Scheduled Procedure Step End Date",
                "Name1": ""
            },
            {
                "Tag": "(0040,0005)",
                "VR": "TM",
                "Name": "Scheduled Procedure Step End Time",
                "Name1": ""
            },
            {
                "Tag": "(0040,0006)",
                "VR": "PN",
                "Name": "Scheduled Performing Physician's Name",
                "Name1": ""
            },
            {
                "Tag": "(0040,0007)",
                "VR": "LO",
                "Name": "Scheduled Procedure Step Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,0008)",
                "VR": "SQ",
                "Name": "Scheduled Protocol Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0009)",
                "VR": "SH",
                "Name": "Scheduled Procedure Step ID",
                "Name1": ""
            },
            {
                "Tag": "(0040,000A)",
                "VR": "SQ",
                "Name": "Stage Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,000B)",
                "VR": "SQ",
                "Name": "Scheduled Performing Physician Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0010)",
                "VR": "SH",
                "Name": "Scheduled Station Name",
                "Name1": ""
            },
            {
                "Tag": "(0040,0011)",
                "VR": "SH",
                "Name": "Scheduled Procedure Step Location",
                "Name1": ""
            },
            {
                "Tag": "(0040,0012)",
                "VR": "LO",
                "Name": "Pre-Medication",
                "Name1": ""
            },
            {
                "Tag": "(0040,0020)",
                "VR": "CS",
                "Name": "Scheduled Procedure Step Status",
                "Name1": ""
            },
            {
                "Tag": "(0040,0026)",
                "VR": "SQ",
                "Name": "Order Placer Identifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0027)",
                "VR": "SQ",
                "Name": "Order Filler Identifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0031)",
                "VR": "UT",
                "Name": "Local Namespace Entity ID",
                "Name1": ""
            },
            {
                "Tag": "(0040,0032)",
                "VR": "UT",
                "Name": "Universal Entity ID",
                "Name1": ""
            },
            {
                "Tag": "(0040,0033)",
                "VR": "CS",
                "Name": "Universal Entity ID Type",
                "Name1": ""
            },
            {
                "Tag": "(0040,0035)",
                "VR": "CS",
                "Name": "Identifier Type Code",
                "Name1": ""
            },
            {
                "Tag": "(0040,0036)",
                "VR": "SQ",
                "Name": "Assigning Facility Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0039)",
                "VR": "SQ",
                "Name": "Assigning Jurisdiction Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,003A)",
                "VR": "SQ",
                "Name": "Assigning Agency or Department Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0100)",
                "VR": "SQ",
                "Name": "Scheduled Procedure Step Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0220)",
                "VR": "SQ",
                "Name": "Referenced Non-Image Composite SOP Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0241)",
                "VR": "AE",
                "Name": "Performed Station AE Title",
                "Name1": ""
            },
            {
                "Tag": "(0040,0242)",
                "VR": "SH",
                "Name": "Performed Station Name",
                "Name1": ""
            },
            {
                "Tag": "(0040,0243)",
                "VR": "SH",
                "Name": "Performed Location",
                "Name1": ""
            },
            {
                "Tag": "(0040,0244)",
                "VR": "DA",
                "Name": "Performed Procedure Step Start Date",
                "Name1": ""
            },
            {
                "Tag": "(0040,0245)",
                "VR": "TM",
                "Name": "Performed Procedure Step Start Time",
                "Name1": ""
            },
            {
                "Tag": "(0040,0250)",
                "VR": "DA",
                "Name": "Performed Procedure Step End Date",
                "Name1": ""
            },
            {
                "Tag": "(0040,0251)",
                "VR": "TM",
                "Name": "Performed Procedure Step End Time",
                "Name1": ""
            },
            {
                "Tag": "(0040,0252)",
                "VR": "CS",
                "Name": "Performed Procedure Step Status",
                "Name1": ""
            },
            {
                "Tag": "(0040,0253)",
                "VR": "SH",
                "Name": "Performed Procedure Step ID",
                "Name1": ""
            },
            {
                "Tag": "(0040,0254)",
                "VR": "LO",
                "Name": "Performed Procedure Step Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,0255)",
                "VR": "LO",
                "Name": "Performed Procedure Type Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,0260)",
                "VR": "SQ",
                "Name": "Performed Protocol Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0261)",
                "VR": "CS",
                "Name": "Performed Protocol Type",
                "Name1": ""
            },
            {
                "Tag": "(0040,0270)",
                "VR": "SQ",
                "Name": "Scheduled Step Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0275)",
                "VR": "SQ",
                "Name": "Request Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0280)",
                "VR": "ST",
                "Name": "Comments on the Performed Procedure Step",
                "Name1": ""
            },
            {
                "Tag": "(0040,0281)",
                "VR": "SQ",
                "Name": "Performed Procedure Step Discontinuation Reason Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0293)",
                "VR": "SQ",
                "Name": "Quantity Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0294)",
                "VR": "DS",
                "Name": "Quantity",
                "Name1": ""
            },
            {
                "Tag": "(0040,0295)",
                "VR": "SQ",
                "Name": "Measuring Units Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0296)",
                "VR": "SQ",
                "Name": "Billing Item Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0300)",
                "VR": "US",
                "Name": "Total Time of Fluoroscopy",
                "Name1": ""
            },
            {
                "Tag": "(0040,0301)",
                "VR": "US",
                "Name": "Total Number of Exposures",
                "Name1": ""
            },
            {
                "Tag": "(0040,0302)",
                "VR": "US",
                "Name": "Entrance Dose",
                "Name1": ""
            },
            {
                "Tag": "(0040,0303)",
                "VR": "US",
                "Name": "Exposed Area",
                "Name1": ""
            },
            {
                "Tag": "(0040,0306)",
                "VR": "DS",
                "Name": "Distance Source to Entrance",
                "Name1": ""
            },
            {
                "Tag": "(0040,0307)",
                "VR": "DS",
                "Name": "Distance Source to Support",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,030E)",
                "VR": "SQ",
                "Name": "Exposure Dose Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0310)",
                "VR": "ST",
                "Name": "Comments on Radiation Dose",
                "Name1": ""
            },
            {
                "Tag": "(0040,0312)",
                "VR": "DS",
                "Name": "X-Ray Output",
                "Name1": ""
            },
            {
                "Tag": "(0040,0314)",
                "VR": "DS",
                "Name": "Half Value Layer",
                "Name1": ""
            },
            {
                "Tag": "(0040,0316)",
                "VR": "DS",
                "Name": "Organ Dose",
                "Name1": ""
            },
            {
                "Tag": "(0040,0318)",
                "VR": "CS",
                "Name": "Organ Exposed",
                "Name1": ""
            },
            {
                "Tag": "(0040,0320)",
                "VR": "SQ",
                "Name": "Billing Procedure Step Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0321)",
                "VR": "SQ",
                "Name": "Film Consumption Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0324)",
                "VR": "SQ",
                "Name": "Billing Supplies and Devices Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0330)",
                "VR": "SQ",
                "Name": "Referenced Procedure Step Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,0340)",
                "VR": "SQ",
                "Name": "Performed Series Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0400)",
                "VR": "LT",
                "Name": "Comments on the Scheduled Procedure Step",
                "Name1": ""
            },
            {
                "Tag": "(0040,0440)",
                "VR": "SQ",
                "Name": "Protocol Context Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0441)",
                "VR": "SQ",
                "Name": "Content Item Modifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0500)",
                "VR": "SQ",
                "Name": "Scheduled Specimen Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,050A)",
                "VR": "LO",
                "Name": "Specimen Accession Number",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,0512)",
                "VR": "LO",
                "Name": "Container Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0040,0513)",
                "VR": "SQ",
                "Name": "Issuer of the Container Identifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0515)",
                "VR": "SQ",
                "Name": "Alternate Container Identifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0518)",
                "VR": "SQ",
                "Name": "Container Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,051A)",
                "VR": "LO",
                "Name": "Container Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,0520)",
                "VR": "SQ",
                "Name": "Container Component Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0550)",
                "VR": "SQ",
                "Name": "Specimen Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,0551)",
                "VR": "LO",
                "Name": "Specimen Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0040,0552)",
                "VR": "SQ",
                "Name": "Specimen Description Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,0553)",
                "VR": "ST",
                "Name": "Specimen Description (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,0554)",
                "VR": "UI",
                "Name": "Specimen UID",
                "Name1": ""
            },
            {
                "Tag": "(0040,0555)",
                "VR": "SQ",
                "Name": "Acquisition Context Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0556)",
                "VR": "ST",
                "Name": "Acquisition Context Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,059A)",
                "VR": "SQ",
                "Name": "Specimen Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0560)",
                "VR": "SQ",
                "Name": "Specimen Description Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0562)",
                "VR": "SQ",
                "Name": "Issuer of the Specimen Identifier Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0600)",
                "VR": "LO",
                "Name": "Specimen Short Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,0602)",
                "VR": "UT",
                "Name": "Specimen Detailed Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,0610)",
                "VR": "SQ",
                "Name": "Specimen Preparation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0612)",
                "VR": "SQ",
                "Name": "Specimen Preparation Step Content Item Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,0620)",
                "VR": "SQ",
                "Name": "Specimen Localization Content Item Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,06FA)",
                "VR": "LO",
                "Name": "Slide Identifier",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,071A)",
                "VR": "SQ",
                "Name": "Image Center Point Coordinates Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,072A)",
                "VR": "DS",
                "Name": "X Offset in Slide Coordinate System",
                "Name1": ""
            },
            {
                "Tag": "(0040,073A)",
                "VR": "DS",
                "Name": "Y Offset in Slide Coordinate System",
                "Name1": ""
            },
            {
                "Tag": "(0040,074A)",
                "VR": "DS",
                "Name": "Z Offset in Slide Coordinate System",
                "Name1": ""
            },
            {
                "Tag": "(0040,08D8)",
                "VR": "SQ",
                "Name": "Pixel Spacing Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,08DA)",
                "VR": "SQ",
                "Name": "Coordinate System Axis Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,08EA)",
                "VR": "SQ",
                "Name": "Measurement Units Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,09F8)",
                "VR": "SQ",
                "Name": "Vital Stain Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,1001)",
                "VR": "SH",
                "Name": "Requested Procedure ID",
                "Name1": ""
            },
            {
                "Tag": "(0040,1002)",
                "VR": "LO",
                "Name": "Reason for the Requested Procedure",
                "Name1": ""
            },
            {
                "Tag": "(0040,1003)",
                "VR": "SH",
                "Name": "Requested Procedure Priority",
                "Name1": ""
            },
            {
                "Tag": "(0040,1004)",
                "VR": "LO",
                "Name": "Patient Transport Arrangements",
                "Name1": ""
            },
            {
                "Tag": "(0040,1005)",
                "VR": "LO",
                "Name": "Requested Procedure Location",
                "Name1": ""
            },
            {
                "Tag": "(0040,1006)",
                "VR": "SH",
                "Name": "Placer Order Number / Procedure",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,1007)",
                "VR": "SH",
                "Name": "Filler Order Number / Procedure",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,1008)",
                "VR": "LO",
                "Name": "Confidentiality Code",
                "Name1": ""
            },
            {
                "Tag": "(0040,1009)",
                "VR": "SH",
                "Name": "Reporting Priority",
                "Name1": ""
            },
            {
                "Tag": "(0040,100A)",
                "VR": "SQ",
                "Name": "Reason for Requested Procedure Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,1010)",
                "VR": "PN",
                "Name": "Names of Intended Recipients of Results",
                "Name1": ""
            },
            {
                "Tag": "(0040,1011)",
                "VR": "SQ",
                "Name": "Intended Recipients of Results Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,1012)",
                "VR": "SQ",
                "Name": "Reason For Performed Procedure Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,1060)",
                "VR": "LO",
                "Name": "Requested Procedure Description (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,1101)",
                "VR": "SQ",
                "Name": "Person Identification Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,1102)",
                "VR": "ST",
                "Name": "Person's Address",
                "Name1": ""
            },
            {
                "Tag": "(0040,1103)",
                "VR": "LO",
                "Name": "Person's Telephone Numbers",
                "Name1": ""
            },
            {
                "Tag": "(0040,1104)",
                "VR": "LT",
                "Name": "Person's Telecom Information",
                "Name1": ""
            },
            {
                "Tag": "(0040,1400)",
                "VR": "LT",
                "Name": "Requested Procedure Comments",
                "Name1": ""
            },
            {
                "Tag": "(0040,2001)",
                "VR": "LO",
                "Name": "Reason for the Imaging Service Request",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,2004)",
                "VR": "DA",
                "Name": "Issue Date of Imaging Service Request",
                "Name1": ""
            },
            {
                "Tag": "(0040,2005)",
                "VR": "TM",
                "Name": "Issue Time of Imaging Service Request",
                "Name1": ""
            },
            {
                "Tag": "(0040,2006)",
                "VR": "SH",
                "Name": "Placer Order Number / Imaging Service Request (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,2007)",
                "VR": "SH",
                "Name": "Filler Order Number / Imaging Service Request (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,2008)",
                "VR": "PN",
                "Name": "Order Entered By",
                "Name1": ""
            },
            {
                "Tag": "(0040,2009)",
                "VR": "SH",
                "Name": "Order Enterer's Location",
                "Name1": ""
            },
            {
                "Tag": "(0040,2010)",
                "VR": "SH",
                "Name": "Order Callback Phone Number",
                "Name1": ""
            },
            {
                "Tag": "(0040,2011)",
                "VR": "LT",
                "Name": "Order Callback Telecom Information",
                "Name1": ""
            },
            {
                "Tag": "(0040,2016)",
                "VR": "LO",
                "Name": "Placer Order Number / Imaging Service Request",
                "Name1": ""
            },
            {
                "Tag": "(0040,2017)",
                "VR": "LO",
                "Name": "Filler Order Number / Imaging Service Request",
                "Name1": ""
            },
            {
                "Tag": "(0040,2400)",
                "VR": "LT",
                "Name": "Imaging Service Request Comments",
                "Name1": ""
            },
            {
                "Tag": "(0040,3001)",
                "VR": "LO",
                "Name": "Confidentiality Constraint on Patient Data Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,4001)",
                "VR": "CS",
                "Name": "General Purpose Scheduled Procedure Step Status",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4002)",
                "VR": "CS",
                "Name": "General Purpose Performed Procedure Step Status",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4003)",
                "VR": "CS",
                "Name": "General Purpose Scheduled Procedure Step Priority",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4004)",
                "VR": "SQ",
                "Name": "Scheduled Processing Applications Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4005)",
                "VR": "DT",
                "Name": "Scheduled Procedure Step Start DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,4006)",
                "VR": "CS",
                "Name": "Multiple Copies Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4007)",
                "VR": "SQ",
                "Name": "Performed Processing Applications Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4009)",
                "VR": "SQ",
                "Name": "Human Performer Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4010)",
                "VR": "DT",
                "Name": "Scheduled Procedure Step Modification DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,4011)",
                "VR": "DT",
                "Name": "Expected Completion DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,4015)",
                "VR": "SQ",
                "Name": "Resulting General Purpose Performed Procedure Steps Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4016)",
                "VR": "SQ",
                "Name": "Referenced General Purpose Scheduled Procedure Step Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4018)",
                "VR": "SQ",
                "Name": "Scheduled Workitem Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4019)",
                "VR": "SQ",
                "Name": "Performed Workitem Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4020)",
                "VR": "CS",
                "Name": "Input Availability Flag",
                "Name1": ""
            },
            {
                "Tag": "(0040,4021)",
                "VR": "SQ",
                "Name": "Input Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4022)",
                "VR": "SQ",
                "Name": "Relevant Information Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4023)",
                "VR": "UI",
                "Name": "Referenced General Purpose Scheduled Procedure Step Transaction UID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4025)",
                "VR": "SQ",
                "Name": "Scheduled Station Name Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4026)",
                "VR": "SQ",
                "Name": "Scheduled Station Class Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4027)",
                "VR": "SQ",
                "Name": "Scheduled Station Geographic Location Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4028)",
                "VR": "SQ",
                "Name": "Performed Station Name Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4029)",
                "VR": "SQ",
                "Name": "Performed Station Class Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4030)",
                "VR": "SQ",
                "Name": "Performed Station Geographic Location Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4031)",
                "VR": "SQ",
                "Name": "Requested Subsequent Workitem Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4032)",
                "VR": "SQ",
                "Name": "Non-DICOM Output Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,4033)",
                "VR": "SQ",
                "Name": "Output Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4034)",
                "VR": "SQ",
                "Name": "Scheduled Human Performers Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4035)",
                "VR": "SQ",
                "Name": "Actual Human Performers Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4036)",
                "VR": "LO",
                "Name": "Human Performer's Organization",
                "Name1": ""
            },
            {
                "Tag": "(0040,4037)",
                "VR": "PN",
                "Name": "Human Performer's Name",
                "Name1": ""
            },
            {
                "Tag": "(0040,4040)",
                "VR": "CS",
                "Name": "Raw Data Handling",
                "Name1": ""
            },
            {
                "Tag": "(0040,4041)",
                "VR": "CS",
                "Name": "Input Readiness State",
                "Name1": ""
            },
            {
                "Tag": "(0040,4050)",
                "VR": "DT",
                "Name": "Performed Procedure Step Start DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,4051)",
                "VR": "DT",
                "Name": "Performed Procedure Step End DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,4052)",
                "VR": "DT",
                "Name": "Procedure Step Cancellation DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,4070)",
                "VR": "SQ",
                "Name": "Output Destination Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4071)",
                "VR": "SQ",
                "Name": "DICOM Storage Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4072)",
                "VR": "SQ",
                "Name": "STOW-RS Storage Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,4073)",
                "VR": "UR",
                "Name": "Storage URL",
                "Name1": ""
            },
            {
                "Tag": "(0040,4074)",
                "VR": "SQ",
                "Name": "XDS Storage Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,8302)",
                "VR": "DS",
                "Name": "Entrance Dose in mGy",
                "Name1": ""
            },
            {
                "Tag": "(0040,9092)",
                "VR": "SQ",
                "Name": "Parametric Map Frame Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,9094)",
                "VR": "SQ",
                "Name": "Referenced Image Real World Value Mapping Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,9096)",
                "VR": "SQ",
                "Name": "Real World Value Mapping Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,9098)",
                "VR": "SQ",
                "Name": "Pixel Value Mapping Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,9210)",
                "VR": "SH",
                "Name": "LUT Label",
                "Name1": ""
            },
            {
                "Tag": "(0040,9211)",
                "VR": "US or SS",
                "Name": "Real World Value Last Value Mapped",
                "Name1": ""
            },
            {
                "Tag": "(0040,9212)",
                "VR": "FD",
                "Name": "Real World Value LUT Data",
                "Name1": ""
            },
            {
                "Tag": "(0040,9213)",
                "VR": "FD",
                "Name": "Double Float Real World Value Last Value Mapped",
                "Name1": ""
            },
            {
                "Tag": "(0040,9214)",
                "VR": "FD",
                "Name": "Double Float Real World Value First Value Mapped",
                "Name1": ""
            },
            {
                "Tag": "(0040,9216)",
                "VR": "US or SS",
                "Name": "Real World Value First Value Mapped",
                "Name1": ""
            },
            {
                "Tag": "(0040,9220)",
                "VR": "SQ",
                "Name": "Quantity Definition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,9224)",
                "VR": "FD",
                "Name": "Real World Value Intercept",
                "Name1": ""
            },
            {
                "Tag": "(0040,9225)",
                "VR": "FD",
                "Name": "Real World Value Slope",
                "Name1": ""
            },
            {
                "Tag": "(0040,A007)",
                "VR": "CS",
                "Name": "Findings Flag (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A010)",
                "VR": "CS",
                "Name": "Relationship Type",
                "Name1": ""
            },
            {
                "Tag": "(0040,A020)",
                "VR": "SQ",
                "Name": "Findings Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A021)",
                "VR": "UI",
                "Name": "Findings Group UID (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A022)",
                "VR": "UI",
                "Name": "Referenced Findings Group UID (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A023)",
                "VR": "DA",
                "Name": "Findings Group Recording Date (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A024)",
                "VR": "TM",
                "Name": "Findings Group Recording Time (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A026)",
                "VR": "SQ",
                "Name": "Findings Source Category Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A027)",
                "VR": "LO",
                "Name": "Verifying Organization",
                "Name1": ""
            },
            {
                "Tag": "(0040,A028)",
                "VR": "SQ",
                "Name": "Documenting Organization Identifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A030)",
                "VR": "DT",
                "Name": "Verification DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,A032)",
                "VR": "DT",
                "Name": "Observation DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,A040)",
                "VR": "CS",
                "Name": "Value Type",
                "Name1": ""
            },
            {
                "Tag": "(0040,A043)",
                "VR": "SQ",
                "Name": "Concept Name Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A047)",
                "VR": "LO",
                "Name": "Measurement Precision Description (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A050)",
                "VR": "CS",
                "Name": "Continuity Of Content",
                "Name1": ""
            },
            {
                "Tag": "(0040,A057)",
                "VR": "CS",
                "Name": "Urgency or Priority Alerts (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A060)",
                "VR": "LO",
                "Name": "Sequencing Indicator (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A066)",
                "VR": "SQ",
                "Name": "Document Identifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A067)",
                "VR": "PN",
                "Name": "Document Author (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A068)",
                "VR": "SQ",
                "Name": "Document Author Identifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A070)",
                "VR": "SQ",
                "Name": "Identifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A073)",
                "VR": "SQ",
                "Name": "Verifying Observer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A074)",
                "VR": "OB",
                "Name": "Object Binary Identifier (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A075)",
                "VR": "PN",
                "Name": "Verifying Observer Name",
                "Name1": ""
            },
            {
                "Tag": "(0040,A076)",
                "VR": "SQ",
                "Name": "Documenting Observer Identifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A078)",
                "VR": "SQ",
                "Name": "Author Observer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A07A)",
                "VR": "SQ",
                "Name": "Participant Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A07C)",
                "VR": "SQ",
                "Name": "Custodial Organization Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A080)",
                "VR": "CS",
                "Name": "Participation Type",
                "Name1": ""
            },
            {
                "Tag": "(0040,A082)",
                "VR": "DT",
                "Name": "Participation DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,A084)",
                "VR": "CS",
                "Name": "Observer Type",
                "Name1": ""
            },
            {
                "Tag": "(0040,A085)",
                "VR": "SQ",
                "Name": "Procedure Identifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A088)",
                "VR": "SQ",
                "Name": "Verifying Observer Identification Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A089)",
                "VR": "OB",
                "Name": "Object Directory Binary Identifier (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A090)",
                "VR": "SQ",
                "Name": "Equivalent CDA Document Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A0B0)",
                "VR": "US",
                "Name": "Referenced Waveform Channels",
                "Name1": ""
            },
            {
                "Tag": "(0040,A110)",
                "VR": "DA",
                "Name": "Date of Document or Verbal Transaction (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A112)",
                "VR": "TM",
                "Name": "Time of Document Creation or Verbal Transaction (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A120)",
                "VR": "DT",
                "Name": "DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,A121)",
                "VR": "DA",
                "Name": "Date",
                "Name1": ""
            },
            {
                "Tag": "(0040,A122)",
                "VR": "TM",
                "Name": "Time",
                "Name1": ""
            },
            {
                "Tag": "(0040,A123)",
                "VR": "PN",
                "Name": "Person Name",
                "Name1": ""
            },
            {
                "Tag": "(0040,A124)",
                "VR": "UI",
                "Name": "UID",
                "Name1": ""
            },
            {
                "Tag": "(0040,A125)",
                "VR": "CS",
                "Name": "Report Status ID (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A130)",
                "VR": "CS",
                "Name": "Temporal Range Type",
                "Name1": ""
            },
            {
                "Tag": "(0040,A132)",
                "VR": "UL",
                "Name": "Referenced Sample Positions",
                "Name1": ""
            },
            {
                "Tag": "(0040,A136)",
                "VR": "US",
                "Name": "Referenced Frame Numbers",
                "Name1": ""
            },
            {
                "Tag": "(0040,A138)",
                "VR": "DS",
                "Name": "Referenced Time Offsets",
                "Name1": ""
            },
            {
                "Tag": "(0040,A13A)",
                "VR": "DT",
                "Name": "Referenced DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0040,A160)",
                "VR": "UT",
                "Name": "Text Value",
                "Name1": ""
            },
            {
                "Tag": "(0040,A161)",
                "VR": "FD",
                "Name": "Floating Point Value",
                "Name1": ""
            },
            {
                "Tag": "(0040,A162)",
                "VR": "SL",
                "Name": "Rational Numerator Value",
                "Name1": ""
            },
            {
                "Tag": "(0040,A163)",
                "VR": "UL",
                "Name": "Rational Denominator Value",
                "Name1": ""
            },
            {
                "Tag": "(0040,A167)",
                "VR": "SQ",
                "Name": "Observation Category Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A168)",
                "VR": "SQ",
                "Name": "Concept Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A16A)",
                "VR": "ST",
                "Name": "Bibliographic Citation (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A170)",
                "VR": "SQ",
                "Name": "Purpose of Reference Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A171)",
                "VR": "UI",
                "Name": "Observation UID",
                "Name1": ""
            },
            {
                "Tag": "(0040,A172)",
                "VR": "UI",
                "Name": "Referenced Observation UID (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A173)",
                "VR": "CS",
                "Name": "Referenced Observation Class (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A174)",
                "VR": "CS",
                "Name": "Referenced Object Observation Class (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A180)",
                "VR": "US",
                "Name": "Annotation Group Number",
                "Name1": ""
            },
            {
                "Tag": "(0040,A192)",
                "VR": "DA",
                "Name": "Observation Date (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A193)",
                "VR": "TM",
                "Name": "Observation Time (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A194)",
                "VR": "CS",
                "Name": "Measurement Automation (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A195)",
                "VR": "SQ",
                "Name": "Modifier Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A224)",
                "VR": "ST",
                "Name": "Identification Description (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A290)",
                "VR": "CS",
                "Name": "Coordinates Set Geometric Type (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A296)",
                "VR": "SQ",
                "Name": "Algorithm Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A297)",
                "VR": "ST",
                "Name": "Algorithm Description (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A29A)",
                "VR": "SL",
                "Name": "Pixel Coordinates Set (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A300)",
                "VR": "SQ",
                "Name": "Measured Value Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A301)",
                "VR": "SQ",
                "Name": "Numeric Value Qualifier Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A307)",
                "VR": "PN",
                "Name": "Current Observer (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A30A)",
                "VR": "DS",
                "Name": "Numeric Value",
                "Name1": ""
            },
            {
                "Tag": "(0040,A313)",
                "VR": "SQ",
                "Name": "Referenced Accession Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A33A)",
                "VR": "ST",
                "Name": "Report Status Comment (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A340)",
                "VR": "SQ",
                "Name": "Procedure Context Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A352)",
                "VR": "PN",
                "Name": "Verbal Source (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A353)",
                "VR": "ST",
                "Name": "Address (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A354)",
                "VR": "LO",
                "Name": "Telephone Number (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A358)",
                "VR": "SQ",
                "Name": "Verbal Source Identifier Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A360)",
                "VR": "SQ",
                "Name": "Predecessor Documents Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A370)",
                "VR": "SQ",
                "Name": "Referenced Request Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A372)",
                "VR": "SQ",
                "Name": "Performed Procedure Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A375)",
                "VR": "SQ",
                "Name": "Current Requested Procedure Evidence Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A380)",
                "VR": "SQ",
                "Name": "Report Detail Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A385)",
                "VR": "SQ",
                "Name": "Pertinent Other Evidence Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A390)",
                "VR": "SQ",
                "Name": "HL7 Structured Document Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A402)",
                "VR": "UI",
                "Name": "Observation Subject UID (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A403)",
                "VR": "CS",
                "Name": "Observation Subject Class (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A404)",
                "VR": "SQ",
                "Name": "Observation Subject Type Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A491)",
                "VR": "CS",
                "Name": "Completion Flag",
                "Name1": ""
            },
            {
                "Tag": "(0040,A492)",
                "VR": "LO",
                "Name": "Completion Flag Description",
                "Name1": ""
            },
            {
                "Tag": "(0040,A493)",
                "VR": "CS",
                "Name": "Verification Flag",
                "Name1": ""
            },
            {
                "Tag": "(0040,A494)",
                "VR": "CS",
                "Name": "Archive Requested",
                "Name1": ""
            },
            {
                "Tag": "(0040,A496)",
                "VR": "CS",
                "Name": "Preliminary Flag",
                "Name1": ""
            },
            {
                "Tag": "(0040,A504)",
                "VR": "SQ",
                "Name": "Content Template Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A525)",
                "VR": "SQ",
                "Name": "Identical Documents Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A600)",
                "VR": "CS",
                "Name": "Observation Subject Context Flag (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A601)",
                "VR": "CS",
                "Name": "Observer Context Flag (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A603)",
                "VR": "CS",
                "Name": "Procedure Context Flag (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A730)",
                "VR": "SQ",
                "Name": "Content Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,A731)",
                "VR": "SQ",
                "Name": "Relationship Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A732)",
                "VR": "SQ",
                "Name": "Relationship Type Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A744)",
                "VR": "SQ",
                "Name": "Language Code Sequence (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,A992)",
                "VR": "ST",
                "Name": "Uniform Resource Locator (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,B020)",
                "VR": "SQ",
                "Name": "Waveform Annotation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,DB00)",
                "VR": "CS",
                "Name": "Template Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0040,DB06)",
                "VR": "DT",
                "Name": "Template Version",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,DB07)",
                "VR": "DT",
                "Name": "Template Local Version",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,DB0B)",
                "VR": "CS",
                "Name": "Template Extension Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,DB0C)",
                "VR": "UI",
                "Name": "Template Extension Organization UID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,DB0D)",
                "VR": "UI",
                "Name": "Template Extension Creator UID",
                "Name1": "Retired"
            },
            {
                "Tag": "(0040,DB73)",
                "VR": "UL",
                "Name": "Referenced Content Item Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0040,E001)",
                "VR": "ST",
                "Name": "HL7 Instance Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0040,E004)",
                "VR": "DT",
                "Name": "HL7 Document Effective Time",
                "Name1": ""
            },
            {
                "Tag": "(0040,E006)",
                "VR": "SQ",
                "Name": "HL7 Document Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,E008)",
                "VR": "SQ",
                "Name": "Document Class Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,E010)",
                "VR": "UR",
                "Name": "Retrieve URI",
                "Name1": ""
            },
            {
                "Tag": "(0040,E011)",
                "VR": "UI",
                "Name": "Retrieve Location UID",
                "Name1": ""
            },
            {
                "Tag": "(0040,E020)",
                "VR": "CS",
                "Name": "Type of Instances",
                "Name1": ""
            },
            {
                "Tag": "(0040,E021)",
                "VR": "SQ",
                "Name": "DICOM Retrieval Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,E022)",
                "VR": "SQ",
                "Name": "DICOM Media Retrieval Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,E023)",
                "VR": "SQ",
                "Name": "WADO Retrieval Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,E024)",
                "VR": "SQ",
                "Name": "XDS Retrieval Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,E025)",
                "VR": "SQ",
                "Name": "WADO-RS Retrieval Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0040,E030)",
                "VR": "UI",
                "Name": "Repository Unique ID",
                "Name1": ""
            },
            {
                "Tag": "(0040,E031)",
                "VR": "UI",
                "Name": "Home Community ID",
                "Name1": ""
            },
            {
                "Tag": "(0042,0010)",
                "VR": "ST",
                "Name": "Document Title",
                "Name1": ""
            },
            {
                "Tag": "(0042,0011)",
                "VR": "OB",
                "Name": "Encapsulated Document",
                "Name1": ""
            },
            {
                "Tag": "(0042,0012)",
                "VR": "LO",
                "Name": "MIME Type of Encapsulated Document",
                "Name1": ""
            },
            {
                "Tag": "(0042,0013)",
                "VR": "SQ",
                "Name": "Source Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0042,0014)",
                "VR": "LO",
                "Name": "List of MIME Types",
                "Name1": ""
            },
            {
                "Tag": "(0044,0001)",
                "VR": "ST",
                "Name": "Product Package Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0044,0002)",
                "VR": "CS",
                "Name": "Substance Administration Approval",
                "Name1": ""
            },
            {
                "Tag": "(0044,0003)",
                "VR": "LT",
                "Name": "Approval Status Further Description",
                "Name1": ""
            },
            {
                "Tag": "(0044,0004)",
                "VR": "DT",
                "Name": "Approval Status DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0044,0007)",
                "VR": "SQ",
                "Name": "Product Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0044,0008)",
                "VR": "LO",
                "Name": "Product Name",
                "Name1": ""
            },
            {
                "Tag": "(0044,0009)",
                "VR": "LT",
                "Name": "Product Description",
                "Name1": ""
            },
            {
                "Tag": "(0044,000A)",
                "VR": "LO",
                "Name": "Product Lot Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0044,000B)",
                "VR": "DT",
                "Name": "Product Expiration DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0044,0010)",
                "VR": "DT",
                "Name": "Substance Administration DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0044,0011)",
                "VR": "LO",
                "Name": "Substance Administration Notes",
                "Name1": ""
            },
            {
                "Tag": "(0044,0012)",
                "VR": "LO",
                "Name": "Substance Administration Device ID",
                "Name1": ""
            },
            {
                "Tag": "(0044,0013)",
                "VR": "SQ",
                "Name": "Product Parameter Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0044,0019)",
                "VR": "SQ",
                "Name": "Substance Administration Parameter Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0012)",
                "VR": "LO",
                "Name": "Lens Description",
                "Name1": ""
            },
            {
                "Tag": "(0046,0014)",
                "VR": "SQ",
                "Name": "Right Lens Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0015)",
                "VR": "SQ",
                "Name": "Left Lens Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0016)",
                "VR": "SQ",
                "Name": "Unspecified Laterality Lens Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0018)",
                "VR": "SQ",
                "Name": "Cylinder Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0028)",
                "VR": "SQ",
                "Name": "Prism Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0030)",
                "VR": "FD",
                "Name": "Horizontal Prism Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0032)",
                "VR": "CS",
                "Name": "Horizontal Prism Base",
                "Name1": ""
            },
            {
                "Tag": "(0046,0034)",
                "VR": "FD",
                "Name": "Vertical Prism Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0036)",
                "VR": "CS",
                "Name": "Vertical Prism Base",
                "Name1": ""
            },
            {
                "Tag": "(0046,0038)",
                "VR": "CS",
                "Name": "Lens Segment Type",
                "Name1": ""
            },
            {
                "Tag": "(0046,0040)",
                "VR": "FD",
                "Name": "Optical Transmittance",
                "Name1": ""
            },
            {
                "Tag": "(0046,0042)",
                "VR": "FD",
                "Name": "Channel Width",
                "Name1": ""
            },
            {
                "Tag": "(0046,0044)",
                "VR": "FD",
                "Name": "Pupil Size",
                "Name1": ""
            },
            {
                "Tag": "(0046,0046)",
                "VR": "FD",
                "Name": "Corneal Size",
                "Name1": ""
            },
            {
                "Tag": "(0046,0050)",
                "VR": "SQ",
                "Name": "Autorefraction Right Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0052)",
                "VR": "SQ",
                "Name": "Autorefraction Left Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0060)",
                "VR": "FD",
                "Name": "Distance Pupillary Distance",
                "Name1": ""
            },
            {
                "Tag": "(0046,0062)",
                "VR": "FD",
                "Name": "Near Pupillary Distance",
                "Name1": ""
            },
            {
                "Tag": "(0046,0063)",
                "VR": "FD",
                "Name": "Intermediate Pupillary Distance",
                "Name1": ""
            },
            {
                "Tag": "(0046,0064)",
                "VR": "FD",
                "Name": "Other Pupillary Distance",
                "Name1": ""
            },
            {
                "Tag": "(0046,0070)",
                "VR": "SQ",
                "Name": "Keratometry Right Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0071)",
                "VR": "SQ",
                "Name": "Keratometry Left Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0074)",
                "VR": "SQ",
                "Name": "Steep Keratometric Axis Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0075)",
                "VR": "FD",
                "Name": "Radius of Curvature",
                "Name1": ""
            },
            {
                "Tag": "(0046,0076)",
                "VR": "FD",
                "Name": "Keratometric Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0077)",
                "VR": "FD",
                "Name": "Keratometric Axis",
                "Name1": ""
            },
            {
                "Tag": "(0046,0080)",
                "VR": "SQ",
                "Name": "Flat Keratometric Axis Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0092)",
                "VR": "CS",
                "Name": "Background Color",
                "Name1": ""
            },
            {
                "Tag": "(0046,0094)",
                "VR": "CS",
                "Name": "Optotype",
                "Name1": ""
            },
            {
                "Tag": "(0046,0095)",
                "VR": "CS",
                "Name": "Optotype Presentation",
                "Name1": ""
            },
            {
                "Tag": "(0046,0097)",
                "VR": "SQ",
                "Name": "Subjective Refraction Right Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0098)",
                "VR": "SQ",
                "Name": "Subjective Refraction Left Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0100)",
                "VR": "SQ",
                "Name": "Add Near Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0101)",
                "VR": "SQ",
                "Name": "Add Intermediate Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0102)",
                "VR": "SQ",
                "Name": "Add Other Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0104)",
                "VR": "FD",
                "Name": "Add Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0106)",
                "VR": "FD",
                "Name": "Viewing Distance",
                "Name1": ""
            },
            {
                "Tag": "(0046,0121)",
                "VR": "SQ",
                "Name": "Visual Acuity Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0122)",
                "VR": "SQ",
                "Name": "Visual Acuity Right Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0123)",
                "VR": "SQ",
                "Name": "Visual Acuity Left Eye Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0124)",
                "VR": "SQ",
                "Name": "Visual Acuity Both Eyes Open Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0125)",
                "VR": "CS",
                "Name": "Viewing Distance Type",
                "Name1": ""
            },
            {
                "Tag": "(0046,0135)",
                "VR": "SS",
                "Name": "Visual Acuity Modifiers",
                "Name1": ""
            },
            {
                "Tag": "(0046,0137)",
                "VR": "FD",
                "Name": "Decimal Visual Acuity",
                "Name1": ""
            },
            {
                "Tag": "(0046,0139)",
                "VR": "LO",
                "Name": "Optotype Detailed Definition",
                "Name1": ""
            },
            {
                "Tag": "(0046,0145)",
                "VR": "SQ",
                "Name": "Referenced Refractive Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0146)",
                "VR": "FD",
                "Name": "Sphere Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0147)",
                "VR": "FD",
                "Name": "Cylinder Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0201)",
                "VR": "CS",
                "Name": "Corneal Topography Surface",
                "Name1": ""
            },
            {
                "Tag": "(0046,0202)",
                "VR": "FL",
                "Name": "Corneal Vertex Location",
                "Name1": ""
            },
            {
                "Tag": "(0046,0203)",
                "VR": "FL",
                "Name": "Pupil Centroid X-Coordinate",
                "Name1": ""
            },
            {
                "Tag": "(0046,0204)",
                "VR": "FL",
                "Name": "Pupil Centroid Y-Coordinate",
                "Name1": ""
            },
            {
                "Tag": "(0046,0205)",
                "VR": "FL",
                "Name": "Equivalent Pupil Radius",
                "Name1": ""
            },
            {
                "Tag": "(0046,0207)",
                "VR": "SQ",
                "Name": "Corneal Topography Map Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0208)",
                "VR": "IS",
                "Name": "Vertices of the Outline of Pupil",
                "Name1": ""
            },
            {
                "Tag": "(0046,0210)",
                "VR": "SQ",
                "Name": "Corneal Topography Mapping Normals Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0211)",
                "VR": "SQ",
                "Name": "Maximum Corneal Curvature Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0212)",
                "VR": "FL",
                "Name": "Maximum Corneal Curvature",
                "Name1": ""
            },
            {
                "Tag": "(0046,0213)",
                "VR": "FL",
                "Name": "Maximum Corneal Curvature Location",
                "Name1": ""
            },
            {
                "Tag": "(0046,0215)",
                "VR": "SQ",
                "Name": "Minimum Keratometric Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0218)",
                "VR": "SQ",
                "Name": "Simulated Keratometric Cylinder Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0220)",
                "VR": "FL",
                "Name": "Average Corneal Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0224)",
                "VR": "FL",
                "Name": "Corneal I-S Value",
                "Name1": ""
            },
            {
                "Tag": "(0046,0227)",
                "VR": "FL",
                "Name": "Analyzed Area",
                "Name1": ""
            },
            {
                "Tag": "(0046,0230)",
                "VR": "FL",
                "Name": "Surface Regularity Index",
                "Name1": ""
            },
            {
                "Tag": "(0046,0232)",
                "VR": "FL",
                "Name": "Surface Asymmetry Index",
                "Name1": ""
            },
            {
                "Tag": "(0046,0234)",
                "VR": "FL",
                "Name": "Corneal Eccentricity Index",
                "Name1": ""
            },
            {
                "Tag": "(0046,0236)",
                "VR": "FL",
                "Name": "Keratoconus Prediction Index",
                "Name1": ""
            },
            {
                "Tag": "(0046,0238)",
                "VR": "FL",
                "Name": "Decimal Potential Visual Acuity",
                "Name1": ""
            },
            {
                "Tag": "(0046,0242)",
                "VR": "CS",
                "Name": "Corneal Topography Map Quality Evaluation",
                "Name1": ""
            },
            {
                "Tag": "(0046,0244)",
                "VR": "SQ",
                "Name": "Source Image Corneal Processed Data Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0046,0247)",
                "VR": "FL",
                "Name": "Corneal Point Location",
                "Name1": ""
            },
            {
                "Tag": "(0046,0248)",
                "VR": "CS",
                "Name": "Corneal Point Estimated",
                "Name1": ""
            },
            {
                "Tag": "(0046,0249)",
                "VR": "FL",
                "Name": "Axial Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0250)",
                "VR": "FL",
                "Name": "Tangential Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0251)",
                "VR": "FL",
                "Name": "Refractive Power",
                "Name1": ""
            },
            {
                "Tag": "(0046,0252)",
                "VR": "FL",
                "Name": "Relative Elevation",
                "Name1": ""
            },
            {
                "Tag": "(0046,0253)",
                "VR": "FL",
                "Name": "Corneal Wavefront",
                "Name1": ""
            },
            {
                "Tag": "(0048,0001)",
                "VR": "FL",
                "Name": "Imaged Volume Width",
                "Name1": ""
            },
            {
                "Tag": "(0048,0002)",
                "VR": "FL",
                "Name": "Imaged Volume Height",
                "Name1": ""
            },
            {
                "Tag": "(0048,0003)",
                "VR": "FL",
                "Name": "Imaged Volume Depth",
                "Name1": ""
            },
            {
                "Tag": "(0048,0006)",
                "VR": "UL",
                "Name": "Total Pixel Matrix Columns",
                "Name1": ""
            },
            {
                "Tag": "(0048,0007)",
                "VR": "UL",
                "Name": "Total Pixel Matrix Rows",
                "Name1": ""
            },
            {
                "Tag": "(0048,0008)",
                "VR": "SQ",
                "Name": "Total Pixel Matrix Origin Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,0010)",
                "VR": "CS",
                "Name": "Specimen Label in Image",
                "Name1": ""
            },
            {
                "Tag": "(0048,0011)",
                "VR": "CS",
                "Name": "Focus Method",
                "Name1": ""
            },
            {
                "Tag": "(0048,0012)",
                "VR": "CS",
                "Name": "Extended Depth of Field",
                "Name1": ""
            },
            {
                "Tag": "(0048,0013)",
                "VR": "US",
                "Name": "Number of Focal Planes",
                "Name1": ""
            },
            {
                "Tag": "(0048,0014)",
                "VR": "FL",
                "Name": "Distance Between Focal Planes",
                "Name1": ""
            },
            {
                "Tag": "(0048,0015)",
                "VR": "US",
                "Name": "Recommended Absent Pixel CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0048,0100)",
                "VR": "SQ",
                "Name": "Illuminator Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,0102)",
                "VR": "DS",
                "Name": "Image Orientation (Slide)",
                "Name1": ""
            },
            {
                "Tag": "(0048,0105)",
                "VR": "SQ",
                "Name": "Optical Path Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,0106)",
                "VR": "SH",
                "Name": "Optical Path Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0048,0107)",
                "VR": "ST",
                "Name": "Optical Path Description",
                "Name1": ""
            },
            {
                "Tag": "(0048,0108)",
                "VR": "SQ",
                "Name": "Illumination Color Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,0110)",
                "VR": "SQ",
                "Name": "Specimen Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,0111)",
                "VR": "DS",
                "Name": "Condenser Lens Power",
                "Name1": ""
            },
            {
                "Tag": "(0048,0112)",
                "VR": "DS",
                "Name": "Objective Lens Power",
                "Name1": ""
            },
            {
                "Tag": "(0048,0113)",
                "VR": "DS",
                "Name": "Objective Lens Numerical Aperture",
                "Name1": ""
            },
            {
                "Tag": "(0048,0120)",
                "VR": "SQ",
                "Name": "Palette Color Lookup Table Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,0200)",
                "VR": "SQ",
                "Name": "Referenced Image Navigation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,0201)",
                "VR": "US",
                "Name": "Top Left Hand Corner of Localizer Area",
                "Name1": ""
            },
            {
                "Tag": "(0048,0202)",
                "VR": "US",
                "Name": "Bottom Right Hand Corner of Localizer Area",
                "Name1": ""
            },
            {
                "Tag": "(0048,0207)",
                "VR": "SQ",
                "Name": "Optical Path Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,021A)",
                "VR": "SQ",
                "Name": "Plane Position (Slide) Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0048,021E)",
                "VR": "SL",
                "Name": "Column Position In Total Image Pixel Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0048,021F)",
                "VR": "SL",
                "Name": "Row Position In Total Image Pixel Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0048,0301)",
                "VR": "CS",
                "Name": "Pixel Origin Interpretation",
                "Name1": ""
            },
            {
                "Tag": "(0050,0004)",
                "VR": "CS",
                "Name": "Calibration Image",
                "Name1": ""
            },
            {
                "Tag": "(0050,0010)",
                "VR": "SQ",
                "Name": "Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0050,0012)",
                "VR": "SQ",
                "Name": "Container Component Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0050,0013)",
                "VR": "FD",
                "Name": "Container Component Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0050,0014)",
                "VR": "DS",
                "Name": "Device Length",
                "Name1": ""
            },
            {
                "Tag": "(0050,0015)",
                "VR": "FD",
                "Name": "Container Component Width",
                "Name1": ""
            },
            {
                "Tag": "(0050,0016)",
                "VR": "DS",
                "Name": "Device Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0050,0017)",
                "VR": "CS",
                "Name": "Device Diameter Units",
                "Name1": ""
            },
            {
                "Tag": "(0050,0018)",
                "VR": "DS",
                "Name": "Device Volume",
                "Name1": ""
            },
            {
                "Tag": "(0050,0019)",
                "VR": "DS",
                "Name": "Inter-Marker Distance",
                "Name1": ""
            },
            {
                "Tag": "(0050,001A)",
                "VR": "CS",
                "Name": "Container Component Material",
                "Name1": ""
            },
            {
                "Tag": "(0050,001B)",
                "VR": "LO",
                "Name": "Container Component ID",
                "Name1": ""
            },
            {
                "Tag": "(0050,001C)",
                "VR": "FD",
                "Name": "Container Component Length",
                "Name1": ""
            },
            {
                "Tag": "(0050,001D)",
                "VR": "FD",
                "Name": "Container Component Diameter",
                "Name1": ""
            },
            {
                "Tag": "(0050,001E)",
                "VR": "LO",
                "Name": "Container Component Description",
                "Name1": ""
            },
            {
                "Tag": "(0050,0020)",
                "VR": "LO",
                "Name": "Device Description",
                "Name1": ""
            },
            {
                "Tag": "(0052,0001)",
                "VR": "FL",
                "Name": "Contrast/Bolus Ingredient Percent by Volume",
                "Name1": ""
            },
            {
                "Tag": "(0052,0002)",
                "VR": "FD",
                "Name": "OCT Focal Distance",
                "Name1": ""
            },
            {
                "Tag": "(0052,0003)",
                "VR": "FD",
                "Name": "Beam Spot Size",
                "Name1": ""
            },
            {
                "Tag": "(0052,0004)",
                "VR": "FD",
                "Name": "Effective Refractive Index",
                "Name1": ""
            },
            {
                "Tag": "(0052,0006)",
                "VR": "CS",
                "Name": "OCT Acquisition Domain",
                "Name1": ""
            },
            {
                "Tag": "(0052,0007)",
                "VR": "FD",
                "Name": "OCT Optical Center Wavelength",
                "Name1": ""
            },
            {
                "Tag": "(0052,0008)",
                "VR": "FD",
                "Name": "Axial Resolution",
                "Name1": ""
            },
            {
                "Tag": "(0052,0009)",
                "VR": "FD",
                "Name": "Ranging Depth",
                "Name1": ""
            },
            {
                "Tag": "(0052,0011)",
                "VR": "FD",
                "Name": "A-line Rate",
                "Name1": ""
            },
            {
                "Tag": "(0052,0012)",
                "VR": "US",
                "Name": "A-lines Per Frame",
                "Name1": ""
            },
            {
                "Tag": "(0052,0013)",
                "VR": "FD",
                "Name": "Catheter Rotational Rate",
                "Name1": ""
            },
            {
                "Tag": "(0052,0014)",
                "VR": "FD",
                "Name": "A-line Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(0052,0016)",
                "VR": "SQ",
                "Name": "Mode of Percutaneous Access Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0052,0025)",
                "VR": "SQ",
                "Name": "Intravascular OCT Frame Type Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0052,0026)",
                "VR": "CS",
                "Name": "OCT Z Offset Applied",
                "Name1": ""
            },
            {
                "Tag": "(0052,0027)",
                "VR": "SQ",
                "Name": "Intravascular Frame Content Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0052,0028)",
                "VR": "FD",
                "Name": "Intravascular Longitudinal Distance",
                "Name1": ""
            },
            {
                "Tag": "(0052,0029)",
                "VR": "SQ",
                "Name": "Intravascular OCT Frame Content Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0052,0030)",
                "VR": "SS",
                "Name": "OCT Z Offset Correction",
                "Name1": ""
            },
            {
                "Tag": "(0052,0031)",
                "VR": "CS",
                "Name": "Catheter Direction of Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0052,0033)",
                "VR": "FD",
                "Name": "Seam Line Location",
                "Name1": ""
            },
            {
                "Tag": "(0052,0034)",
                "VR": "FD",
                "Name": "First A-line Location",
                "Name1": ""
            },
            {
                "Tag": "(0052,0036)",
                "VR": "US",
                "Name": "Seam Line Index",
                "Name1": ""
            },
            {
                "Tag": "(0052,0038)",
                "VR": "US",
                "Name": "Number of Padded A-lines",
                "Name1": ""
            },
            {
                "Tag": "(0052,0039)",
                "VR": "CS",
                "Name": "Interpolation Type",
                "Name1": ""
            },
            {
                "Tag": "(0052,003A)",
                "VR": "CS",
                "Name": "Refractive Index Applied",
                "Name1": ""
            },
            {
                "Tag": "(0054,0010)",
                "VR": "US",
                "Name": "Energy Window Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0011)",
                "VR": "US",
                "Name": "Number of Energy Windows",
                "Name1": ""
            },
            {
                "Tag": "(0054,0012)",
                "VR": "SQ",
                "Name": "Energy Window Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0013)",
                "VR": "SQ",
                "Name": "Energy Window Range Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0014)",
                "VR": "DS",
                "Name": "Energy Window Lower Limit",
                "Name1": ""
            },
            {
                "Tag": "(0054,0015)",
                "VR": "DS",
                "Name": "Energy Window Upper Limit",
                "Name1": ""
            },
            {
                "Tag": "(0054,0016)",
                "VR": "SQ",
                "Name": "Radiopharmaceutical Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0017)",
                "VR": "IS",
                "Name": "Residual Syringe Counts",
                "Name1": ""
            },
            {
                "Tag": "(0054,0018)",
                "VR": "SH",
                "Name": "Energy Window Name",
                "Name1": ""
            },
            {
                "Tag": "(0054,0020)",
                "VR": "US",
                "Name": "Detector Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0021)",
                "VR": "US",
                "Name": "Number of Detectors",
                "Name1": ""
            },
            {
                "Tag": "(0054,0022)",
                "VR": "SQ",
                "Name": "Detector Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0030)",
                "VR": "US",
                "Name": "Phase Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0031)",
                "VR": "US",
                "Name": "Number of Phases",
                "Name1": ""
            },
            {
                "Tag": "(0054,0032)",
                "VR": "SQ",
                "Name": "Phase Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0033)",
                "VR": "US",
                "Name": "Number of Frames in Phase",
                "Name1": ""
            },
            {
                "Tag": "(0054,0036)",
                "VR": "IS",
                "Name": "Phase Delay",
                "Name1": ""
            },
            {
                "Tag": "(0054,0038)",
                "VR": "IS",
                "Name": "Pause Between Frames",
                "Name1": ""
            },
            {
                "Tag": "(0054,0039)",
                "VR": "CS",
                "Name": "Phase Description",
                "Name1": ""
            },
            {
                "Tag": "(0054,0050)",
                "VR": "US",
                "Name": "Rotation Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0051)",
                "VR": "US",
                "Name": "Number of Rotations",
                "Name1": ""
            },
            {
                "Tag": "(0054,0052)",
                "VR": "SQ",
                "Name": "Rotation Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0053)",
                "VR": "US",
                "Name": "Number of Frames in Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0054,0060)",
                "VR": "US",
                "Name": "R-R Interval Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0061)",
                "VR": "US",
                "Name": "Number of R-R Intervals",
                "Name1": ""
            },
            {
                "Tag": "(0054,0062)",
                "VR": "SQ",
                "Name": "Gated Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0063)",
                "VR": "SQ",
                "Name": "Data Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0070)",
                "VR": "US",
                "Name": "Time Slot Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0071)",
                "VR": "US",
                "Name": "Number of Time Slots",
                "Name1": ""
            },
            {
                "Tag": "(0054,0072)",
                "VR": "SQ",
                "Name": "Time Slot Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0073)",
                "VR": "DS",
                "Name": "Time Slot Time",
                "Name1": ""
            },
            {
                "Tag": "(0054,0080)",
                "VR": "US",
                "Name": "Slice Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0081)",
                "VR": "US",
                "Name": "Number of Slices",
                "Name1": ""
            },
            {
                "Tag": "(0054,0090)",
                "VR": "US",
                "Name": "Angular View Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0100)",
                "VR": "US",
                "Name": "Time Slice Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0101)",
                "VR": "US",
                "Name": "Number of Time Slices",
                "Name1": ""
            },
            {
                "Tag": "(0054,0200)",
                "VR": "DS",
                "Name": "Start Angle",
                "Name1": ""
            },
            {
                "Tag": "(0054,0202)",
                "VR": "CS",
                "Name": "Type of Detector Motion",
                "Name1": ""
            },
            {
                "Tag": "(0054,0210)",
                "VR": "IS",
                "Name": "Trigger Vector",
                "Name1": ""
            },
            {
                "Tag": "(0054,0211)",
                "VR": "US",
                "Name": "Number of Triggers in Phase",
                "Name1": ""
            },
            {
                "Tag": "(0054,0220)",
                "VR": "SQ",
                "Name": "View Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0222)",
                "VR": "SQ",
                "Name": "View Modifier Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0300)",
                "VR": "SQ",
                "Name": "Radionuclide Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0302)",
                "VR": "SQ",
                "Name": "Administration Route Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0304)",
                "VR": "SQ",
                "Name": "Radiopharmaceutical Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0306)",
                "VR": "SQ",
                "Name": "Calibration Data Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0308)",
                "VR": "US",
                "Name": "Energy Window Number",
                "Name1": ""
            },
            {
                "Tag": "(0054,0400)",
                "VR": "SH",
                "Name": "Image ID",
                "Name1": ""
            },
            {
                "Tag": "(0054,0410)",
                "VR": "SQ",
                "Name": "Patient Orientation Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0412)",
                "VR": "SQ",
                "Name": "Patient Orientation Modifier Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0414)",
                "VR": "SQ",
                "Name": "Patient Gantry Relationship Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0054,0500)",
                "VR": "CS",
                "Name": "Slice Progression Direction",
                "Name1": ""
            },
            {
                "Tag": "(0054,0501)",
                "VR": "CS",
                "Name": "Scan Progression Direction",
                "Name1": ""
            },
            {
                "Tag": "(0054,1000)",
                "VR": "CS",
                "Name": "Series Type",
                "Name1": ""
            },
            {
                "Tag": "(0054,1001)",
                "VR": "CS",
                "Name": "Units",
                "Name1": ""
            },
            {
                "Tag": "(0054,1002)",
                "VR": "CS",
                "Name": "Counts Source",
                "Name1": ""
            },
            {
                "Tag": "(0054,1004)",
                "VR": "CS",
                "Name": "Reprojection Method",
                "Name1": ""
            },
            {
                "Tag": "(0054,1006)",
                "VR": "CS",
                "Name": "SUV Type",
                "Name1": ""
            },
            {
                "Tag": "(0054,1100)",
                "VR": "CS",
                "Name": "Randoms Correction Method",
                "Name1": ""
            },
            {
                "Tag": "(0054,1101)",
                "VR": "LO",
                "Name": "Attenuation Correction Method",
                "Name1": ""
            },
            {
                "Tag": "(0054,1102)",
                "VR": "CS",
                "Name": "Decay Correction",
                "Name1": ""
            },
            {
                "Tag": "(0054,1103)",
                "VR": "LO",
                "Name": "Reconstruction Method",
                "Name1": ""
            },
            {
                "Tag": "(0054,1104)",
                "VR": "LO",
                "Name": "Detector Lines of Response Used",
                "Name1": ""
            },
            {
                "Tag": "(0054,1105)",
                "VR": "LO",
                "Name": "Scatter Correction Method",
                "Name1": ""
            },
            {
                "Tag": "(0054,1200)",
                "VR": "DS",
                "Name": "Axial Acceptance",
                "Name1": ""
            },
            {
                "Tag": "(0054,1201)",
                "VR": "IS",
                "Name": "Axial Mash",
                "Name1": ""
            },
            {
                "Tag": "(0054,1202)",
                "VR": "IS",
                "Name": "Transverse Mash",
                "Name1": ""
            },
            {
                "Tag": "(0054,1203)",
                "VR": "DS",
                "Name": "Detector Element Size",
                "Name1": ""
            },
            {
                "Tag": "(0054,1210)",
                "VR": "DS",
                "Name": "Coincidence Window Width",
                "Name1": ""
            },
            {
                "Tag": "(0054,1220)",
                "VR": "CS",
                "Name": "Secondary Counts Type",
                "Name1": ""
            },
            {
                "Tag": "(0054,1300)",
                "VR": "DS",
                "Name": "Frame Reference Time",
                "Name1": ""
            },
            {
                "Tag": "(0054,1310)",
                "VR": "IS",
                "Name": "Primary (Prompts) Counts Accumulated",
                "Name1": ""
            },
            {
                "Tag": "(0054,1311)",
                "VR": "IS",
                "Name": "Secondary Counts Accumulated",
                "Name1": ""
            },
            {
                "Tag": "(0054,1320)",
                "VR": "DS",
                "Name": "Slice Sensitivity Factor",
                "Name1": ""
            },
            {
                "Tag": "(0054,1321)",
                "VR": "DS",
                "Name": "Decay Factor",
                "Name1": ""
            },
            {
                "Tag": "(0054,1322)",
                "VR": "DS",
                "Name": "Dose Calibration Factor",
                "Name1": ""
            },
            {
                "Tag": "(0054,1323)",
                "VR": "DS",
                "Name": "Scatter Fraction Factor",
                "Name1": ""
            },
            {
                "Tag": "(0054,1324)",
                "VR": "DS",
                "Name": "Dead Time Factor",
                "Name1": ""
            },
            {
                "Tag": "(0054,1330)",
                "VR": "US",
                "Name": "Image Index",
                "Name1": ""
            },
            {
                "Tag": "(0054,1400)",
                "VR": "CS",
                "Name": "Counts Included",
                "Name1": "Retired"
            },
            {
                "Tag": "(0054,1401)",
                "VR": "CS",
                "Name": "Dead Time Correction Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(0060,3000)",
                "VR": "SQ",
                "Name": "Histogram Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0060,3002)",
                "VR": "US",
                "Name": "Histogram Number of Bins",
                "Name1": ""
            },
            {
                "Tag": "(0060,3004)",
                "VR": "US or SS",
                "Name": "Histogram First Bin Value",
                "Name1": ""
            },
            {
                "Tag": "(0060,3006)",
                "VR": "US or SS",
                "Name": "Histogram Last Bin Value",
                "Name1": ""
            },
            {
                "Tag": "(0060,3008)",
                "VR": "US",
                "Name": "Histogram Bin Width",
                "Name1": ""
            },
            {
                "Tag": "(0060,3010)",
                "VR": "LO",
                "Name": "Histogram Explanation",
                "Name1": ""
            },
            {
                "Tag": "(0060,3020)",
                "VR": "UL",
                "Name": "Histogram Data",
                "Name1": ""
            },
            {
                "Tag": "(0062,0001)",
                "VR": "CS",
                "Name": "Segmentation Type",
                "Name1": ""
            },
            {
                "Tag": "(0062,0002)",
                "VR": "SQ",
                "Name": "Segment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0062,0003)",
                "VR": "SQ",
                "Name": "Segmented Property Category Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0062,0004)",
                "VR": "US",
                "Name": "Segment Number",
                "Name1": ""
            },
            {
                "Tag": "(0062,0005)",
                "VR": "LO",
                "Name": "Segment Label",
                "Name1": ""
            },
            {
                "Tag": "(0062,0006)",
                "VR": "ST",
                "Name": "Segment Description",
                "Name1": ""
            },
            {
                "Tag": "(0062,0008)",
                "VR": "CS",
                "Name": "Segment Algorithm Type",
                "Name1": ""
            },
            {
                "Tag": "(0062,0009)",
                "VR": "LO",
                "Name": "Segment Algorithm Name",
                "Name1": ""
            },
            {
                "Tag": "(0062,000A)",
                "VR": "SQ",
                "Name": "Segment Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0062,000B)",
                "VR": "US",
                "Name": "Referenced Segment Number",
                "Name1": ""
            },
            {
                "Tag": "(0062,000C)",
                "VR": "US",
                "Name": "Recommended Display Grayscale Value",
                "Name1": ""
            },
            {
                "Tag": "(0062,000D)",
                "VR": "US",
                "Name": "Recommended Display CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0062,000E)",
                "VR": "US",
                "Name": "Maximum Fractional Value",
                "Name1": ""
            },
            {
                "Tag": "(0062,000F)",
                "VR": "SQ",
                "Name": "Segmented Property Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0062,0010)",
                "VR": "CS",
                "Name": "Segmentation Fractional Type",
                "Name1": ""
            },
            {
                "Tag": "(0062,0011)",
                "VR": "SQ",
                "Name": "Segmented Property Type Modifier Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0062,0012)",
                "VR": "SQ",
                "Name": "Used Segments Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0062,0020)",
                "VR": "UT",
                "Name": "Tracking ID",
                "Name1": ""
            },
            {
                "Tag": "(0062,0021)",
                "VR": "UI",
                "Name": "Tracking UID",
                "Name1": ""
            },
            {
                "Tag": "(0064,0002)",
                "VR": "SQ",
                "Name": "Deformable Registration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0064,0003)",
                "VR": "UI",
                "Name": "Source Frame of Reference UID",
                "Name1": ""
            },
            {
                "Tag": "(0064,0005)",
                "VR": "SQ",
                "Name": "Deformable Registration Grid Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0064,0007)",
                "VR": "UL",
                "Name": "Grid Dimensions",
                "Name1": ""
            },
            {
                "Tag": "(0064,0008)",
                "VR": "FD",
                "Name": "Grid Resolution",
                "Name1": ""
            },
            {
                "Tag": "(0064,0009)",
                "VR": "OF",
                "Name": "Vector Grid Data",
                "Name1": ""
            },
            {
                "Tag": "(0064,000F)",
                "VR": "SQ",
                "Name": "Pre Deformation Matrix Registration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0064,0010)",
                "VR": "SQ",
                "Name": "Post Deformation Matrix Registration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0001)",
                "VR": "UL",
                "Name": "Number of Surfaces",
                "Name1": ""
            },
            {
                "Tag": "(0066,0002)",
                "VR": "SQ",
                "Name": "Surface Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0003)",
                "VR": "UL",
                "Name": "Surface Number",
                "Name1": ""
            },
            {
                "Tag": "(0066,0004)",
                "VR": "LT",
                "Name": "Surface Comments",
                "Name1": ""
            },
            {
                "Tag": "(0066,0009)",
                "VR": "CS",
                "Name": "Surface Processing",
                "Name1": ""
            },
            {
                "Tag": "(0066,000A)",
                "VR": "FL",
                "Name": "Surface Processing Ratio",
                "Name1": ""
            },
            {
                "Tag": "(0066,000B)",
                "VR": "LO",
                "Name": "Surface Processing Description",
                "Name1": ""
            },
            {
                "Tag": "(0066,000C)",
                "VR": "FL",
                "Name": "Recommended Presentation Opacity",
                "Name1": ""
            },
            {
                "Tag": "(0066,000D)",
                "VR": "CS",
                "Name": "Recommended Presentation Type",
                "Name1": ""
            },
            {
                "Tag": "(0066,000E)",
                "VR": "CS",
                "Name": "Finite Volume",
                "Name1": ""
            },
            {
                "Tag": "(0066,0010)",
                "VR": "CS",
                "Name": "Manifold",
                "Name1": ""
            },
            {
                "Tag": "(0066,0011)",
                "VR": "SQ",
                "Name": "Surface Points Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0012)",
                "VR": "SQ",
                "Name": "Surface Points Normals Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0013)",
                "VR": "SQ",
                "Name": "Surface Mesh Primitives Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0015)",
                "VR": "UL",
                "Name": "Number of Surface Points",
                "Name1": ""
            },
            {
                "Tag": "(0066,0016)",
                "VR": "OF",
                "Name": "Point Coordinates Data",
                "Name1": ""
            },
            {
                "Tag": "(0066,0017)",
                "VR": "FL",
                "Name": "Point Position Accuracy",
                "Name1": ""
            },
            {
                "Tag": "(0066,0018)",
                "VR": "FL",
                "Name": "Mean Point Distance",
                "Name1": ""
            },
            {
                "Tag": "(0066,0019)",
                "VR": "FL",
                "Name": "Maximum Point Distance",
                "Name1": ""
            },
            {
                "Tag": "(0066,001A)",
                "VR": "FL",
                "Name": "Points Bounding Box Coordinates",
                "Name1": ""
            },
            {
                "Tag": "(0066,001B)",
                "VR": "FL",
                "Name": "Axis of Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0066,001C)",
                "VR": "FL",
                "Name": "Center of Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0066,001E)",
                "VR": "UL",
                "Name": "Number of Vectors",
                "Name1": ""
            },
            {
                "Tag": "(0066,001F)",
                "VR": "US",
                "Name": "Vector Dimensionality",
                "Name1": ""
            },
            {
                "Tag": "(0066,0020)",
                "VR": "FL",
                "Name": "Vector Accuracy",
                "Name1": ""
            },
            {
                "Tag": "(0066,0021)",
                "VR": "OF",
                "Name": "Vector Coordinate Data",
                "Name1": ""
            },
            {
                "Tag": "(0066,0023)",
                "VR": "OW",
                "Name": "Triangle Point Index List",
                "Name1": "Retired"
            },
            {
                "Tag": "(0066,0024)",
                "VR": "OW",
                "Name": "Edge Point Index List",
                "Name1": "Retired"
            },
            {
                "Tag": "(0066,0025)",
                "VR": "OW",
                "Name": "Vertex Point Index List",
                "Name1": "Retired"
            },
            {
                "Tag": "(0066,0026)",
                "VR": "SQ",
                "Name": "Triangle Strip Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0027)",
                "VR": "SQ",
                "Name": "Triangle Fan Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0028)",
                "VR": "SQ",
                "Name": "Line Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0029)",
                "VR": "OW",
                "Name": "Primitive Point Index List",
                "Name1": "Retired"
            },
            {
                "Tag": "(0066,002A)",
                "VR": "UL",
                "Name": "Surface Count",
                "Name1": ""
            },
            {
                "Tag": "(0066,002B)",
                "VR": "SQ",
                "Name": "Referenced Surface Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,002C)",
                "VR": "UL",
                "Name": "Referenced Surface Number",
                "Name1": ""
            },
            {
                "Tag": "(0066,002D)",
                "VR": "SQ",
                "Name": "Segment Surface Generation Algorithm Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,002E)",
                "VR": "SQ",
                "Name": "Segment Surface Source Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,002F)",
                "VR": "SQ",
                "Name": "Algorithm Family Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0030)",
                "VR": "SQ",
                "Name": "Algorithm Name Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0031)",
                "VR": "LO",
                "Name": "Algorithm Version",
                "Name1": ""
            },
            {
                "Tag": "(0066,0032)",
                "VR": "LT",
                "Name": "Algorithm Parameters",
                "Name1": ""
            },
            {
                "Tag": "(0066,0034)",
                "VR": "SQ",
                "Name": "Facet Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0035)",
                "VR": "SQ",
                "Name": "Surface Processing Algorithm Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0036)",
                "VR": "LO",
                "Name": "Algorithm Name",
                "Name1": ""
            },
            {
                "Tag": "(0066,0037)",
                "VR": "FL",
                "Name": "Recommended Point Radius",
                "Name1": ""
            },
            {
                "Tag": "(0066,0038)",
                "VR": "FL",
                "Name": "Recommended Line Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0066,0040)",
                "VR": "OL",
                "Name": "Long Primitive Point Index List",
                "Name1": ""
            },
            {
                "Tag": "(0066,0041)",
                "VR": "OL",
                "Name": "Long Triangle Point Index List",
                "Name1": ""
            },
            {
                "Tag": "(0066,0042)",
                "VR": "OL",
                "Name": "Long Edge Point Index List",
                "Name1": ""
            },
            {
                "Tag": "(0066,0043)",
                "VR": "OL",
                "Name": "Long Vertex Point Index List",
                "Name1": ""
            },
            {
                "Tag": "(0066,0101)",
                "VR": "SQ",
                "Name": "Track Set Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0102)",
                "VR": "SQ",
                "Name": "Track Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0103)",
                "VR": "OW",
                "Name": "Recommended Display CIELab Value List",
                "Name1": ""
            },
            {
                "Tag": "(0066,0104)",
                "VR": "SQ",
                "Name": "Tracking Algorithm Identification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0105)",
                "VR": "UL",
                "Name": "Track Set Number",
                "Name1": ""
            },
            {
                "Tag": "(0066,0106)",
                "VR": "LO",
                "Name": "Track Set Label",
                "Name1": ""
            },
            {
                "Tag": "(0066,0107)",
                "VR": "UT",
                "Name": "Track Set Description",
                "Name1": ""
            },
            {
                "Tag": "(0066,0108)",
                "VR": "SQ",
                "Name": "Track Set Anatomical Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0121)",
                "VR": "SQ",
                "Name": "Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0124)",
                "VR": "SQ",
                "Name": "Track Set Statistics Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0125)",
                "VR": "OF",
                "Name": "Floating Point Values",
                "Name1": ""
            },
            {
                "Tag": "(0066,0129)",
                "VR": "OL",
                "Name": "Track Point Index List",
                "Name1": ""
            },
            {
                "Tag": "(0066,0130)",
                "VR": "SQ",
                "Name": "Track Statistics Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0132)",
                "VR": "SQ",
                "Name": "Measurement Values Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0133)",
                "VR": "SQ",
                "Name": "Diffusion Acquisition Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0066,0134)",
                "VR": "SQ",
                "Name": "Diffusion Model Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6210)",
                "VR": "LO",
                "Name": "Implant Size",
                "Name1": ""
            },
            {
                "Tag": "(0068,6221)",
                "VR": "LO",
                "Name": "Implant Template Version",
                "Name1": ""
            },
            {
                "Tag": "(0068,6222)",
                "VR": "SQ",
                "Name": "Replaced Implant Template Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6223)",
                "VR": "CS",
                "Name": "Implant Type",
                "Name1": ""
            },
            {
                "Tag": "(0068,6224)",
                "VR": "SQ",
                "Name": "Derivation Implant Template Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6225)",
                "VR": "SQ",
                "Name": "Original Implant Template Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6226)",
                "VR": "DT",
                "Name": "Effective DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0068,6230)",
                "VR": "SQ",
                "Name": "Implant Target Anatomy Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6260)",
                "VR": "SQ",
                "Name": "Information From Manufacturer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6265)",
                "VR": "SQ",
                "Name": "Notification From Manufacturer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6270)",
                "VR": "DT",
                "Name": "Information Issue DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0068,6280)",
                "VR": "ST",
                "Name": "Information Summary",
                "Name1": ""
            },
            {
                "Tag": "(0068,62A0)",
                "VR": "SQ",
                "Name": "Implant Regulatory Disapproval Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,62A5)",
                "VR": "FD",
                "Name": "Overall Template Spatial Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(0068,62C0)",
                "VR": "SQ",
                "Name": "HPGL Document Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,62D0)",
                "VR": "US",
                "Name": "HPGL Document ID",
                "Name1": ""
            },
            {
                "Tag": "(0068,62D5)",
                "VR": "LO",
                "Name": "HPGL Document Label",
                "Name1": ""
            },
            {
                "Tag": "(0068,62E0)",
                "VR": "SQ",
                "Name": "View Orientation Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,62F0)",
                "VR": "FD",
                "Name": "View Orientation Modifier",
                "Name1": ""
            },
            {
                "Tag": "(0068,62F2)",
                "VR": "FD",
                "Name": "HPGL Document Scaling",
                "Name1": ""
            },
            {
                "Tag": "(0068,6300)",
                "VR": "OB",
                "Name": "HPGL Document",
                "Name1": ""
            },
            {
                "Tag": "(0068,6310)",
                "VR": "US",
                "Name": "HPGL Contour Pen Number",
                "Name1": ""
            },
            {
                "Tag": "(0068,6320)",
                "VR": "SQ",
                "Name": "HPGL Pen Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6330)",
                "VR": "US",
                "Name": "HPGL Pen Number",
                "Name1": ""
            },
            {
                "Tag": "(0068,6340)",
                "VR": "LO",
                "Name": "HPGL Pen Label",
                "Name1": ""
            },
            {
                "Tag": "(0068,6345)",
                "VR": "ST",
                "Name": "HPGL Pen Description",
                "Name1": ""
            },
            {
                "Tag": "(0068,6346)",
                "VR": "FD",
                "Name": "Recommended Rotation Point",
                "Name1": ""
            },
            {
                "Tag": "(0068,6347)",
                "VR": "FD",
                "Name": "Bounding Rectangle",
                "Name1": ""
            },
            {
                "Tag": "(0068,6350)",
                "VR": "US",
                "Name": "Implant Template 3D Model Surface Number",
                "Name1": ""
            },
            {
                "Tag": "(0068,6360)",
                "VR": "SQ",
                "Name": "Surface Model Description Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6380)",
                "VR": "LO",
                "Name": "Surface Model Label",
                "Name1": ""
            },
            {
                "Tag": "(0068,6390)",
                "VR": "FD",
                "Name": "Surface Model Scaling Factor",
                "Name1": ""
            },
            {
                "Tag": "(0068,63A0)",
                "VR": "SQ",
                "Name": "Materials Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,63A4)",
                "VR": "SQ",
                "Name": "Coating Materials Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,63A8)",
                "VR": "SQ",
                "Name": "Implant Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,63AC)",
                "VR": "SQ",
                "Name": "Fixation Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,63B0)",
                "VR": "SQ",
                "Name": "Mating Feature Sets Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,63C0)",
                "VR": "US",
                "Name": "Mating Feature Set ID",
                "Name1": ""
            },
            {
                "Tag": "(0068,63D0)",
                "VR": "LO",
                "Name": "Mating Feature Set Label",
                "Name1": ""
            },
            {
                "Tag": "(0068,63E0)",
                "VR": "SQ",
                "Name": "Mating Feature Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,63F0)",
                "VR": "US",
                "Name": "Mating Feature ID",
                "Name1": ""
            },
            {
                "Tag": "(0068,6400)",
                "VR": "SQ",
                "Name": "Mating Feature Degree of Freedom Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6410)",
                "VR": "US",
                "Name": "Degree of Freedom ID",
                "Name1": ""
            },
            {
                "Tag": "(0068,6420)",
                "VR": "CS",
                "Name": "Degree of Freedom Type",
                "Name1": ""
            },
            {
                "Tag": "(0068,6430)",
                "VR": "SQ",
                "Name": "2D Mating Feature Coordinates Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6440)",
                "VR": "US",
                "Name": "Referenced HPGL Document ID",
                "Name1": ""
            },
            {
                "Tag": "(0068,6450)",
                "VR": "FD",
                "Name": "2D Mating Point",
                "Name1": ""
            },
            {
                "Tag": "(0068,6460)",
                "VR": "FD",
                "Name": "2D Mating Axes",
                "Name1": ""
            },
            {
                "Tag": "(0068,6470)",
                "VR": "SQ",
                "Name": "2D Degree of Freedom Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6490)",
                "VR": "FD",
                "Name": "3D Degree of Freedom Axis",
                "Name1": ""
            },
            {
                "Tag": "(0068,64A0)",
                "VR": "FD",
                "Name": "Range of Freedom",
                "Name1": ""
            },
            {
                "Tag": "(0068,64C0)",
                "VR": "FD",
                "Name": "3D Mating Point",
                "Name1": ""
            },
            {
                "Tag": "(0068,64D0)",
                "VR": "FD",
                "Name": "3D Mating Axes",
                "Name1": ""
            },
            {
                "Tag": "(0068,64F0)",
                "VR": "FD",
                "Name": "2D Degree of Freedom Axis",
                "Name1": ""
            },
            {
                "Tag": "(0068,6500)",
                "VR": "SQ",
                "Name": "Planning Landmark Point Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6510)",
                "VR": "SQ",
                "Name": "Planning Landmark Line Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6520)",
                "VR": "SQ",
                "Name": "Planning Landmark Plane Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6530)",
                "VR": "US",
                "Name": "Planning Landmark ID",
                "Name1": ""
            },
            {
                "Tag": "(0068,6540)",
                "VR": "LO",
                "Name": "Planning Landmark Description",
                "Name1": ""
            },
            {
                "Tag": "(0068,6545)",
                "VR": "SQ",
                "Name": "Planning Landmark Identification Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6550)",
                "VR": "SQ",
                "Name": "2D Point Coordinates Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,6560)",
                "VR": "FD",
                "Name": "2D Point Coordinates",
                "Name1": ""
            },
            {
                "Tag": "(0068,6590)",
                "VR": "FD",
                "Name": "3D Point Coordinates",
                "Name1": ""
            },
            {
                "Tag": "(0068,65A0)",
                "VR": "SQ",
                "Name": "2D Line Coordinates Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,65B0)",
                "VR": "FD",
                "Name": "2D Line Coordinates",
                "Name1": ""
            },
            {
                "Tag": "(0068,65D0)",
                "VR": "FD",
                "Name": "3D Line Coordinates",
                "Name1": ""
            },
            {
                "Tag": "(0068,65E0)",
                "VR": "SQ",
                "Name": "2D Plane Coordinates Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0068,65F0)",
                "VR": "FD",
                "Name": "2D Plane Intersection",
                "Name1": ""
            },
            {
                "Tag": "(0068,6610)",
                "VR": "FD",
                "Name": "3D Plane Origin",
                "Name1": ""
            },
            {
                "Tag": "(0068,6620)",
                "VR": "FD",
                "Name": "3D Plane Normal",
                "Name1": ""
            },
            {
                "Tag": "(0070,0001)",
                "VR": "SQ",
                "Name": "Graphic Annotation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0002)",
                "VR": "CS",
                "Name": "Graphic Layer",
                "Name1": ""
            },
            {
                "Tag": "(0070,0003)",
                "VR": "CS",
                "Name": "Bounding Box Annotation Units",
                "Name1": ""
            },
            {
                "Tag": "(0070,0004)",
                "VR": "CS",
                "Name": "Anchor Point Annotation Units",
                "Name1": ""
            },
            {
                "Tag": "(0070,0005)",
                "VR": "CS",
                "Name": "Graphic Annotation Units",
                "Name1": ""
            },
            {
                "Tag": "(0070,0006)",
                "VR": "ST",
                "Name": "Unformatted Text Value",
                "Name1": ""
            },
            {
                "Tag": "(0070,0008)",
                "VR": "SQ",
                "Name": "Text Object Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0009)",
                "VR": "SQ",
                "Name": "Graphic Object Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0010)",
                "VR": "FL",
                "Name": "Bounding Box Top Left Hand Corner",
                "Name1": ""
            },
            {
                "Tag": "(0070,0011)",
                "VR": "FL",
                "Name": "Bounding Box Bottom Right Hand Corner",
                "Name1": ""
            },
            {
                "Tag": "(0070,0012)",
                "VR": "CS",
                "Name": "Bounding Box Text Horizontal Justification",
                "Name1": ""
            },
            {
                "Tag": "(0070,0014)",
                "VR": "FL",
                "Name": "Anchor Point",
                "Name1": ""
            },
            {
                "Tag": "(0070,0015)",
                "VR": "CS",
                "Name": "Anchor Point Visibility",
                "Name1": ""
            },
            {
                "Tag": "(0070,0020)",
                "VR": "US",
                "Name": "Graphic Dimensions",
                "Name1": ""
            },
            {
                "Tag": "(0070,0021)",
                "VR": "US",
                "Name": "Number of Graphic Points",
                "Name1": ""
            },
            {
                "Tag": "(0070,0022)",
                "VR": "FL",
                "Name": "Graphic Data",
                "Name1": ""
            },
            {
                "Tag": "(0070,0023)",
                "VR": "CS",
                "Name": "Graphic Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,0024)",
                "VR": "CS",
                "Name": "Graphic Filled",
                "Name1": ""
            },
            {
                "Tag": "(0070,0040)",
                "VR": "IS",
                "Name": "Image Rotation (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0070,0041)",
                "VR": "CS",
                "Name": "Image Horizontal Flip",
                "Name1": ""
            },
            {
                "Tag": "(0070,0042)",
                "VR": "US",
                "Name": "Image Rotation",
                "Name1": ""
            },
            {
                "Tag": "(0070,0050)",
                "VR": "US",
                "Name": "Displayed Area Top Left Hand Corner (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0070,0051)",
                "VR": "US",
                "Name": "Displayed Area Bottom Right Hand Corner (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0070,0052)",
                "VR": "SL",
                "Name": "Displayed Area Top Left Hand Corner",
                "Name1": ""
            },
            {
                "Tag": "(0070,0053)",
                "VR": "SL",
                "Name": "Displayed Area Bottom Right Hand Corner",
                "Name1": ""
            },
            {
                "Tag": "(0070,005A)",
                "VR": "SQ",
                "Name": "Displayed Area Selection Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0060)",
                "VR": "SQ",
                "Name": "Graphic Layer Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0062)",
                "VR": "IS",
                "Name": "Graphic Layer Order",
                "Name1": ""
            },
            {
                "Tag": "(0070,0066)",
                "VR": "US",
                "Name": "Graphic Layer Recommended Display Grayscale Value",
                "Name1": ""
            },
            {
                "Tag": "(0070,0067)",
                "VR": "US",
                "Name": "Graphic Layer Recommended Display RGB Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(0070,0068)",
                "VR": "LO",
                "Name": "Graphic Layer Description",
                "Name1": ""
            },
            {
                "Tag": "(0070,0080)",
                "VR": "CS",
                "Name": "Content Label",
                "Name1": ""
            },
            {
                "Tag": "(0070,0081)",
                "VR": "LO",
                "Name": "Content Description",
                "Name1": ""
            },
            {
                "Tag": "(0070,0082)",
                "VR": "DA",
                "Name": "Presentation Creation Date",
                "Name1": ""
            },
            {
                "Tag": "(0070,0083)",
                "VR": "TM",
                "Name": "Presentation Creation Time",
                "Name1": ""
            },
            {
                "Tag": "(0070,0084)",
                "VR": "PN",
                "Name": "Content Creator's Name",
                "Name1": ""
            },
            {
                "Tag": "(0070,0086)",
                "VR": "SQ",
                "Name": "Content Creator's Identification Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0087)",
                "VR": "SQ",
                "Name": "Alternate Content Description Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0100)",
                "VR": "CS",
                "Name": "Presentation Size Mode",
                "Name1": ""
            },
            {
                "Tag": "(0070,0101)",
                "VR": "DS",
                "Name": "Presentation Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(0070,0102)",
                "VR": "IS",
                "Name": "Presentation Pixel Aspect Ratio",
                "Name1": ""
            },
            {
                "Tag": "(0070,0103)",
                "VR": "FL",
                "Name": "Presentation Pixel Magnification Ratio",
                "Name1": ""
            },
            {
                "Tag": "(0070,0207)",
                "VR": "LO",
                "Name": "Graphic Group Label",
                "Name1": ""
            },
            {
                "Tag": "(0070,0208)",
                "VR": "ST",
                "Name": "Graphic Group Description",
                "Name1": ""
            },
            {
                "Tag": "(0070,0209)",
                "VR": "SQ",
                "Name": "Compound Graphic Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0226)",
                "VR": "UL",
                "Name": "Compound Graphic Instance ID",
                "Name1": ""
            },
            {
                "Tag": "(0070,0227)",
                "VR": "LO",
                "Name": "Font Name",
                "Name1": ""
            },
            {
                "Tag": "(0070,0228)",
                "VR": "CS",
                "Name": "Font Name Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,0229)",
                "VR": "LO",
                "Name": "CSS Font Name",
                "Name1": ""
            },
            {
                "Tag": "(0070,0230)",
                "VR": "FD",
                "Name": "Rotation Angle",
                "Name1": ""
            },
            {
                "Tag": "(0070,0231)",
                "VR": "SQ",
                "Name": "Text Style Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0232)",
                "VR": "SQ",
                "Name": "Line Style Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0233)",
                "VR": "SQ",
                "Name": "Fill Style Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0234)",
                "VR": "SQ",
                "Name": "Graphic Group Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0241)",
                "VR": "US",
                "Name": "Text Color CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0070,0242)",
                "VR": "CS",
                "Name": "Horizontal Alignment",
                "Name1": ""
            },
            {
                "Tag": "(0070,0243)",
                "VR": "CS",
                "Name": "Vertical Alignment",
                "Name1": ""
            },
            {
                "Tag": "(0070,0244)",
                "VR": "CS",
                "Name": "Shadow Style",
                "Name1": ""
            },
            {
                "Tag": "(0070,0245)",
                "VR": "FL",
                "Name": "Shadow Offset X",
                "Name1": ""
            },
            {
                "Tag": "(0070,0246)",
                "VR": "FL",
                "Name": "Shadow Offset Y",
                "Name1": ""
            },
            {
                "Tag": "(0070,0247)",
                "VR": "US",
                "Name": "Shadow Color CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0070,0248)",
                "VR": "CS",
                "Name": "Underlined",
                "Name1": ""
            },
            {
                "Tag": "(0070,0249)",
                "VR": "CS",
                "Name": "Bold",
                "Name1": ""
            },
            {
                "Tag": "(0070,0250)",
                "VR": "CS",
                "Name": "Italic",
                "Name1": ""
            },
            {
                "Tag": "(0070,0251)",
                "VR": "US",
                "Name": "Pattern On Color CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0070,0252)",
                "VR": "US",
                "Name": "Pattern Off Color CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0070,0253)",
                "VR": "FL",
                "Name": "Line Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0070,0254)",
                "VR": "CS",
                "Name": "Line Dashing Style",
                "Name1": ""
            },
            {
                "Tag": "(0070,0255)",
                "VR": "UL",
                "Name": "Line Pattern",
                "Name1": ""
            },
            {
                "Tag": "(0070,0256)",
                "VR": "OB",
                "Name": "Fill Pattern",
                "Name1": ""
            },
            {
                "Tag": "(0070,0257)",
                "VR": "CS",
                "Name": "Fill Mode",
                "Name1": ""
            },
            {
                "Tag": "(0070,0258)",
                "VR": "FL",
                "Name": "Shadow Opacity",
                "Name1": ""
            },
            {
                "Tag": "(0070,0261)",
                "VR": "FL",
                "Name": "Gap Length",
                "Name1": ""
            },
            {
                "Tag": "(0070,0262)",
                "VR": "FL",
                "Name": "Diameter of Visibility",
                "Name1": ""
            },
            {
                "Tag": "(0070,0273)",
                "VR": "FL",
                "Name": "Rotation Point",
                "Name1": ""
            },
            {
                "Tag": "(0070,0274)",
                "VR": "CS",
                "Name": "Tick Alignment",
                "Name1": ""
            },
            {
                "Tag": "(0070,0278)",
                "VR": "CS",
                "Name": "Show Tick Label",
                "Name1": ""
            },
            {
                "Tag": "(0070,0279)",
                "VR": "CS",
                "Name": "Tick Label Alignment",
                "Name1": ""
            },
            {
                "Tag": "(0070,0282)",
                "VR": "CS",
                "Name": "Compound Graphic Units",
                "Name1": ""
            },
            {
                "Tag": "(0070,0284)",
                "VR": "FL",
                "Name": "Pattern On Opacity",
                "Name1": ""
            },
            {
                "Tag": "(0070,0285)",
                "VR": "FL",
                "Name": "Pattern Off Opacity",
                "Name1": ""
            },
            {
                "Tag": "(0070,0287)",
                "VR": "SQ",
                "Name": "Major Ticks Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0288)",
                "VR": "FL",
                "Name": "Tick Position",
                "Name1": ""
            },
            {
                "Tag": "(0070,0289)",
                "VR": "SH",
                "Name": "Tick Label",
                "Name1": ""
            },
            {
                "Tag": "(0070,0294)",
                "VR": "CS",
                "Name": "Compound Graphic Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,0295)",
                "VR": "UL",
                "Name": "Graphic Group ID",
                "Name1": ""
            },
            {
                "Tag": "(0070,0306)",
                "VR": "CS",
                "Name": "Shape Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,0308)",
                "VR": "SQ",
                "Name": "Registration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0309)",
                "VR": "SQ",
                "Name": "Matrix Registration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,030A)",
                "VR": "SQ",
                "Name": "Matrix Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,030B)",
                "VR": "FD",
                "Name": "Frame of Reference to Displayed Coordinate System Transformation Matrix",
                "Name1": ""
            },
            {
                "Tag": "(0070,030C)",
                "VR": "CS",
                "Name": "Frame of Reference Transformation Matrix Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,030D)",
                "VR": "SQ",
                "Name": "Registration Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,030F)",
                "VR": "ST",
                "Name": "Fiducial Description",
                "Name1": ""
            },
            {
                "Tag": "(0070,0310)",
                "VR": "SH",
                "Name": "Fiducial Identifier",
                "Name1": ""
            },
            {
                "Tag": "(0070,0311)",
                "VR": "SQ",
                "Name": "Fiducial Identifier Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0312)",
                "VR": "FD",
                "Name": "Contour Uncertainty Radius",
                "Name1": ""
            },
            {
                "Tag": "(0070,0314)",
                "VR": "SQ",
                "Name": "Used Fiducials Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0318)",
                "VR": "SQ",
                "Name": "Graphic Coordinates Data Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,031A)",
                "VR": "UI",
                "Name": "Fiducial UID",
                "Name1": ""
            },
            {
                "Tag": "(0070,031C)",
                "VR": "SQ",
                "Name": "Fiducial Set Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,031E)",
                "VR": "SQ",
                "Name": "Fiducial Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0401)",
                "VR": "US",
                "Name": "Graphic Layer Recommended Display CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0070,0402)",
                "VR": "SQ",
                "Name": "Blending Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0403)",
                "VR": "FL",
                "Name": "Relative Opacity",
                "Name1": ""
            },
            {
                "Tag": "(0070,0404)",
                "VR": "SQ",
                "Name": "Referenced Spatial Registration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,0405)",
                "VR": "CS",
                "Name": "Blending Position",
                "Name1": ""
            },
            {
                "Tag": "(0070,1101)",
                "VR": "UI",
                "Name": "Presentation Display Collection UID",
                "Name1": ""
            },
            {
                "Tag": "(0070,1102)",
                "VR": "UI",
                "Name": "Presentation Sequence Collection UID",
                "Name1": ""
            },
            {
                "Tag": "(0070,1103)",
                "VR": "US",
                "Name": "Presentation Sequence Position Index",
                "Name1": ""
            },
            {
                "Tag": "(0070,1104)",
                "VR": "SQ",
                "Name": "Rendered Image Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1201)",
                "VR": "SQ",
                "Name": "Volumetric Presentation State Input Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1202)",
                "VR": "CS",
                "Name": "Presentation Input Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,1203)",
                "VR": "US",
                "Name": "Input Sequence Position Index",
                "Name1": ""
            },
            {
                "Tag": "(0070,1204)",
                "VR": "CS",
                "Name": "Crop",
                "Name1": ""
            },
            {
                "Tag": "(0070,1205)",
                "VR": "US",
                "Name": "Cropping Specification Index",
                "Name1": ""
            },
            {
                "Tag": "(0070,1206)",
                "VR": "CS",
                "Name": "Compositing Method",
                "Name1": ""
            },
            {
                "Tag": "(0070,1207)",
                "VR": "US",
                "Name": "Volumetric Presentation Input Number",
                "Name1": ""
            },
            {
                "Tag": "(0070,1208)",
                "VR": "CS",
                "Name": "Image Volume Geometry",
                "Name1": ""
            },
            {
                "Tag": "(0070,1301)",
                "VR": "SQ",
                "Name": "Volume Cropping Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1302)",
                "VR": "CS",
                "Name": "Volume Cropping Method",
                "Name1": ""
            },
            {
                "Tag": "(0070,1303)",
                "VR": "FD",
                "Name": "Bounding Box Crop",
                "Name1": ""
            },
            {
                "Tag": "(0070,1304)",
                "VR": "SQ",
                "Name": "Oblique Cropping Plane Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1305)",
                "VR": "FD",
                "Name": "Plane",
                "Name1": ""
            },
            {
                "Tag": "(0070,1306)",
                "VR": "FD",
                "Name": "Plane Normal",
                "Name1": ""
            },
            {
                "Tag": "(0070,1309)",
                "VR": "US",
                "Name": "Cropping Specification Number",
                "Name1": ""
            },
            {
                "Tag": "(0070,1501)",
                "VR": "CS",
                "Name": "Multi-Planar Reconstruction Style",
                "Name1": ""
            },
            {
                "Tag": "(0070,1502)",
                "VR": "CS",
                "Name": "MPR Thickness Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,1503)",
                "VR": "FD",
                "Name": "MPR Slab Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0070,1505)",
                "VR": "FD",
                "Name": "MPR Top Left Hand Corner",
                "Name1": ""
            },
            {
                "Tag": "(0070,1507)",
                "VR": "FD",
                "Name": "MPR View Width Direction",
                "Name1": ""
            },
            {
                "Tag": "(0070,1508)",
                "VR": "FD",
                "Name": "MPR View Width",
                "Name1": ""
            },
            {
                "Tag": "(0070,150C)",
                "VR": "UL",
                "Name": "Number of Volumetric Curve Points",
                "Name1": ""
            },
            {
                "Tag": "(0070,150D)",
                "VR": "OD",
                "Name": "Volumetric Curve Points",
                "Name1": ""
            },
            {
                "Tag": "(0070,1511)",
                "VR": "FD",
                "Name": "MPR View Height Direction",
                "Name1": ""
            },
            {
                "Tag": "(0070,1512)",
                "VR": "FD",
                "Name": "MPR View Height",
                "Name1": ""
            },
            {
                "Tag": "(0070,1801)",
                "VR": "SQ",
                "Name": "Presentation State Classification Component Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1802)",
                "VR": "CS",
                "Name": "Component Type",
                "Name1": ""
            },
            {
                "Tag": "(0070,1803)",
                "VR": "SQ",
                "Name": "Component Input Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1804)",
                "VR": "US",
                "Name": "Volumetric Presentation Input Index",
                "Name1": ""
            },
            {
                "Tag": "(0070,1805)",
                "VR": "SQ",
                "Name": "Presentation State Compositor Component Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1806)",
                "VR": "SQ",
                "Name": "Weighting Transfer Function Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1807)",
                "VR": "US",
                "Name": "Weighting Lookup Table Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(0070,1808)",
                "VR": "OB",
                "Name": "Weighting Lookup Table Data",
                "Name1": ""
            },
            {
                "Tag": "(0070,1901)",
                "VR": "SQ",
                "Name": "Volumetric Annotation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1903)",
                "VR": "SQ",
                "Name": "Referenced Structured Context Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1904)",
                "VR": "UI",
                "Name": "Referenced Content Item",
                "Name1": ""
            },
            {
                "Tag": "(0070,1905)",
                "VR": "SQ",
                "Name": "Volumetric Presentation Input Annotation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1907)",
                "VR": "CS",
                "Name": "Annotation Clipping",
                "Name1": ""
            },
            {
                "Tag": "(0070,1A01)",
                "VR": "CS",
                "Name": "Presentation Animation Style",
                "Name1": ""
            },
            {
                "Tag": "(0070,1A03)",
                "VR": "FD",
                "Name": "Recommended Animation Rate",
                "Name1": ""
            },
            {
                "Tag": "(0070,1A04)",
                "VR": "SQ",
                "Name": "Animation Curve Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0070,1A05)",
                "VR": "FD",
                "Name": "Animation Step Size",
                "Name1": ""
            },
            {
                "Tag": "(0072,0002)",
                "VR": "SH",
                "Name": "Hanging Protocol Name",
                "Name1": ""
            },
            {
                "Tag": "(0072,0004)",
                "VR": "LO",
                "Name": "Hanging Protocol Description",
                "Name1": ""
            },
            {
                "Tag": "(0072,0006)",
                "VR": "CS",
                "Name": "Hanging Protocol Level",
                "Name1": ""
            },
            {
                "Tag": "(0072,0008)",
                "VR": "LO",
                "Name": "Hanging Protocol Creator",
                "Name1": ""
            },
            {
                "Tag": "(0072,000A)",
                "VR": "DT",
                "Name": "Hanging Protocol Creation DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0072,000C)",
                "VR": "SQ",
                "Name": "Hanging Protocol Definition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,000E)",
                "VR": "SQ",
                "Name": "Hanging Protocol User Identification Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0010)",
                "VR": "LO",
                "Name": "Hanging Protocol User Group Name",
                "Name1": ""
            },
            {
                "Tag": "(0072,0012)",
                "VR": "SQ",
                "Name": "Source Hanging Protocol Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0014)",
                "VR": "US",
                "Name": "Number of Priors Referenced",
                "Name1": ""
            },
            {
                "Tag": "(0072,0020)",
                "VR": "SQ",
                "Name": "Image Sets Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0022)",
                "VR": "SQ",
                "Name": "Image Set Selector Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0024)",
                "VR": "CS",
                "Name": "Image Set Selector Usage Flag",
                "Name1": ""
            },
            {
                "Tag": "(0072,0026)",
                "VR": "AT",
                "Name": "Selector Attribute",
                "Name1": ""
            },
            {
                "Tag": "(0072,0028)",
                "VR": "US",
                "Name": "Selector Value Number",
                "Name1": ""
            },
            {
                "Tag": "(0072,0030)",
                "VR": "SQ",
                "Name": "Time Based Image Sets Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0032)",
                "VR": "US",
                "Name": "Image Set Number",
                "Name1": ""
            },
            {
                "Tag": "(0072,0034)",
                "VR": "CS",
                "Name": "Image Set Selector Category",
                "Name1": ""
            },
            {
                "Tag": "(0072,0038)",
                "VR": "US",
                "Name": "Relative Time",
                "Name1": ""
            },
            {
                "Tag": "(0072,003A)",
                "VR": "CS",
                "Name": "Relative Time Units",
                "Name1": ""
            },
            {
                "Tag": "(0072,003C)",
                "VR": "SS",
                "Name": "Abstract Prior Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,003E)",
                "VR": "SQ",
                "Name": "Abstract Prior Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0040)",
                "VR": "LO",
                "Name": "Image Set Label",
                "Name1": ""
            },
            {
                "Tag": "(0072,0050)",
                "VR": "CS",
                "Name": "Selector Attribute VR",
                "Name1": ""
            },
            {
                "Tag": "(0072,0052)",
                "VR": "AT",
                "Name": "Selector Sequence Pointer",
                "Name1": ""
            },
            {
                "Tag": "(0072,0054)",
                "VR": "LO",
                "Name": "Selector Sequence Pointer Private Creator",
                "Name1": ""
            },
            {
                "Tag": "(0072,0056)",
                "VR": "LO",
                "Name": "Selector Attribute Private Creator",
                "Name1": ""
            },
            {
                "Tag": "(0072,005E)",
                "VR": "AE",
                "Name": "Selector AE Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,005F)",
                "VR": "AS",
                "Name": "Selector AS Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0060)",
                "VR": "AT",
                "Name": "Selector AT Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0061)",
                "VR": "DA",
                "Name": "Selector DA Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0062)",
                "VR": "CS",
                "Name": "Selector CS Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0063)",
                "VR": "DT",
                "Name": "Selector DT Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0064)",
                "VR": "IS",
                "Name": "Selector IS Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0065)",
                "VR": "OB",
                "Name": "Selector OB Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0066)",
                "VR": "LO",
                "Name": "Selector LO Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0067)",
                "VR": "OF",
                "Name": "Selector OF Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0068)",
                "VR": "LT",
                "Name": "Selector LT Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0069)",
                "VR": "OW",
                "Name": "Selector OW Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,006A)",
                "VR": "PN",
                "Name": "Selector PN Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,006B)",
                "VR": "TM",
                "Name": "Selector TM Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,006C)",
                "VR": "SH",
                "Name": "Selector SH Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,006D)",
                "VR": "UN",
                "Name": "Selector UN Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,006E)",
                "VR": "ST",
                "Name": "Selector ST Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,006F)",
                "VR": "UC",
                "Name": "Selector UC Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0070)",
                "VR": "UT",
                "Name": "Selector UT Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0071)",
                "VR": "UR",
                "Name": "Selector UR Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0072)",
                "VR": "DS",
                "Name": "Selector DS Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0073)",
                "VR": "OD",
                "Name": "Selector OD Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0074)",
                "VR": "FD",
                "Name": "Selector FD Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0075)",
                "VR": "OL",
                "Name": "Selector OL Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0076)",
                "VR": "FL",
                "Name": "Selector FL Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0078)",
                "VR": "UL",
                "Name": "Selector UL Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,007A)",
                "VR": "US",
                "Name": "Selector US Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,007C)",
                "VR": "SL",
                "Name": "Selector SL Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,007E)",
                "VR": "SS",
                "Name": "Selector SS Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,007F)",
                "VR": "UI",
                "Name": "Selector UI Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0080)",
                "VR": "SQ",
                "Name": "Selector Code Sequence Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0100)",
                "VR": "US",
                "Name": "Number of Screens",
                "Name1": ""
            },
            {
                "Tag": "(0072,0102)",
                "VR": "SQ",
                "Name": "Nominal Screen Definition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0104)",
                "VR": "US",
                "Name": "Number of Vertical Pixels",
                "Name1": ""
            },
            {
                "Tag": "(0072,0106)",
                "VR": "US",
                "Name": "Number of Horizontal Pixels",
                "Name1": ""
            },
            {
                "Tag": "(0072,0108)",
                "VR": "FD",
                "Name": "Display Environment Spatial Position",
                "Name1": ""
            },
            {
                "Tag": "(0072,010A)",
                "VR": "US",
                "Name": "Screen Minimum Grayscale Bit Depth",
                "Name1": ""
            },
            {
                "Tag": "(0072,010C)",
                "VR": "US",
                "Name": "Screen Minimum Color Bit Depth",
                "Name1": ""
            },
            {
                "Tag": "(0072,010E)",
                "VR": "US",
                "Name": "Application Maximum Repaint Time",
                "Name1": ""
            },
            {
                "Tag": "(0072,0200)",
                "VR": "SQ",
                "Name": "Display Sets Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0202)",
                "VR": "US",
                "Name": "Display Set Number",
                "Name1": ""
            },
            {
                "Tag": "(0072,0203)",
                "VR": "LO",
                "Name": "Display Set Label",
                "Name1": ""
            },
            {
                "Tag": "(0072,0204)",
                "VR": "US",
                "Name": "Display Set Presentation Group",
                "Name1": ""
            },
            {
                "Tag": "(0072,0206)",
                "VR": "LO",
                "Name": "Display Set Presentation Group Description",
                "Name1": ""
            },
            {
                "Tag": "(0072,0208)",
                "VR": "CS",
                "Name": "Partial Data Display Handling",
                "Name1": ""
            },
            {
                "Tag": "(0072,0210)",
                "VR": "SQ",
                "Name": "Synchronized Scrolling Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0212)",
                "VR": "US",
                "Name": "Display Set Scrolling Group",
                "Name1": ""
            },
            {
                "Tag": "(0072,0214)",
                "VR": "SQ",
                "Name": "Navigation Indicator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0216)",
                "VR": "US",
                "Name": "Navigation Display Set",
                "Name1": ""
            },
            {
                "Tag": "(0072,0218)",
                "VR": "US",
                "Name": "Reference Display Sets",
                "Name1": ""
            },
            {
                "Tag": "(0072,0300)",
                "VR": "SQ",
                "Name": "Image Boxes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0302)",
                "VR": "US",
                "Name": "Image Box Number",
                "Name1": ""
            },
            {
                "Tag": "(0072,0304)",
                "VR": "CS",
                "Name": "Image Box Layout Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0306)",
                "VR": "US",
                "Name": "Image Box Tile Horizontal Dimension",
                "Name1": ""
            },
            {
                "Tag": "(0072,0308)",
                "VR": "US",
                "Name": "Image Box Tile Vertical Dimension",
                "Name1": ""
            },
            {
                "Tag": "(0072,0310)",
                "VR": "CS",
                "Name": "Image Box Scroll Direction",
                "Name1": ""
            },
            {
                "Tag": "(0072,0312)",
                "VR": "CS",
                "Name": "Image Box Small Scroll Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0314)",
                "VR": "US",
                "Name": "Image Box Small Scroll Amount",
                "Name1": ""
            },
            {
                "Tag": "(0072,0316)",
                "VR": "CS",
                "Name": "Image Box Large Scroll Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0318)",
                "VR": "US",
                "Name": "Image Box Large Scroll Amount",
                "Name1": ""
            },
            {
                "Tag": "(0072,0320)",
                "VR": "US",
                "Name": "Image Box Overlap Priority",
                "Name1": ""
            },
            {
                "Tag": "(0072,0330)",
                "VR": "FD",
                "Name": "Cine Relative to Real-Time",
                "Name1": ""
            },
            {
                "Tag": "(0072,0400)",
                "VR": "SQ",
                "Name": "Filter Operations Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0402)",
                "VR": "CS",
                "Name": "Filter-by Category",
                "Name1": ""
            },
            {
                "Tag": "(0072,0404)",
                "VR": "CS",
                "Name": "Filter-by Attribute Presence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0406)",
                "VR": "CS",
                "Name": "Filter-by Operator",
                "Name1": ""
            },
            {
                "Tag": "(0072,0420)",
                "VR": "US",
                "Name": "Structured Display Background CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0421)",
                "VR": "US",
                "Name": "Empty Image Box CIELab Value",
                "Name1": ""
            },
            {
                "Tag": "(0072,0422)",
                "VR": "SQ",
                "Name": "Structured Display Image Box Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0424)",
                "VR": "SQ",
                "Name": "Structured Display Text Box Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0427)",
                "VR": "SQ",
                "Name": "Referenced First Frame Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0430)",
                "VR": "SQ",
                "Name": "Image Box Synchronization Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0432)",
                "VR": "US",
                "Name": "Synchronized Image Box List",
                "Name1": ""
            },
            {
                "Tag": "(0072,0434)",
                "VR": "CS",
                "Name": "Type of Synchronization",
                "Name1": ""
            },
            {
                "Tag": "(0072,0500)",
                "VR": "CS",
                "Name": "Blending Operation Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0510)",
                "VR": "CS",
                "Name": "Reformatting Operation Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0512)",
                "VR": "FD",
                "Name": "Reformatting Thickness",
                "Name1": ""
            },
            {
                "Tag": "(0072,0514)",
                "VR": "FD",
                "Name": "Reformatting Interval",
                "Name1": ""
            },
            {
                "Tag": "(0072,0516)",
                "VR": "CS",
                "Name": "Reformatting Operation Initial View Direction",
                "Name1": ""
            },
            {
                "Tag": "(0072,0520)",
                "VR": "CS",
                "Name": "3D Rendering Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0600)",
                "VR": "SQ",
                "Name": "Sorting Operations Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0602)",
                "VR": "CS",
                "Name": "Sort-by Category",
                "Name1": ""
            },
            {
                "Tag": "(0072,0604)",
                "VR": "CS",
                "Name": "Sorting Direction",
                "Name1": ""
            },
            {
                "Tag": "(0072,0700)",
                "VR": "CS",
                "Name": "Display Set Patient Orientation",
                "Name1": ""
            },
            {
                "Tag": "(0072,0702)",
                "VR": "CS",
                "Name": "VOI Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0704)",
                "VR": "CS",
                "Name": "Pseudo-Color Type",
                "Name1": ""
            },
            {
                "Tag": "(0072,0705)",
                "VR": "SQ",
                "Name": "Pseudo-Color Palette Instance Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0072,0706)",
                "VR": "CS",
                "Name": "Show Grayscale Inverted",
                "Name1": ""
            },
            {
                "Tag": "(0072,0710)",
                "VR": "CS",
                "Name": "Show Image True Size Flag",
                "Name1": ""
            },
            {
                "Tag": "(0072,0712)",
                "VR": "CS",
                "Name": "Show Graphic Annotation Flag",
                "Name1": ""
            },
            {
                "Tag": "(0072,0714)",
                "VR": "CS",
                "Name": "Show Patient Demographics Flag",
                "Name1": ""
            },
            {
                "Tag": "(0072,0716)",
                "VR": "CS",
                "Name": "Show Acquisition Techniques Flag",
                "Name1": ""
            },
            {
                "Tag": "(0072,0717)",
                "VR": "CS",
                "Name": "Display Set Horizontal Justification",
                "Name1": ""
            },
            {
                "Tag": "(0072,0718)",
                "VR": "CS",
                "Name": "Display Set Vertical Justification",
                "Name1": ""
            },
            {
                "Tag": "(0074,0120)",
                "VR": "FD",
                "Name": "Continuation Start Meterset",
                "Name1": ""
            },
            {
                "Tag": "(0074,0121)",
                "VR": "FD",
                "Name": "Continuation End Meterset",
                "Name1": ""
            },
            {
                "Tag": "(0074,1000)",
                "VR": "CS",
                "Name": "Procedure Step State",
                "Name1": ""
            },
            {
                "Tag": "(0074,1002)",
                "VR": "SQ",
                "Name": "Procedure Step Progress Information Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1004)",
                "VR": "DS",
                "Name": "Procedure Step Progress",
                "Name1": ""
            },
            {
                "Tag": "(0074,1006)",
                "VR": "ST",
                "Name": "Procedure Step Progress Description",
                "Name1": ""
            },
            {
                "Tag": "(0074,1008)",
                "VR": "SQ",
                "Name": "Procedure Step Communications URI Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,100A)",
                "VR": "UR",
                "Name": "Contact URI",
                "Name1": ""
            },
            {
                "Tag": "(0074,100C)",
                "VR": "LO",
                "Name": "Contact Display Name",
                "Name1": ""
            },
            {
                "Tag": "(0074,100E)",
                "VR": "SQ",
                "Name": "Procedure Step Discontinuation Reason Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1020)",
                "VR": "SQ",
                "Name": "Beam Task Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1022)",
                "VR": "CS",
                "Name": "Beam Task Type",
                "Name1": ""
            },
            {
                "Tag": "(0074,1024)",
                "VR": "IS",
                "Name": "Beam Order Index (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0074,1025)",
                "VR": "CS",
                "Name": "Autosequence Flag",
                "Name1": ""
            },
            {
                "Tag": "(0074,1026)",
                "VR": "FD",
                "Name": "Table Top Vertical Adjusted Position",
                "Name1": ""
            },
            {
                "Tag": "(0074,1027)",
                "VR": "FD",
                "Name": "Table Top Longitudinal Adjusted Position",
                "Name1": ""
            },
            {
                "Tag": "(0074,1028)",
                "VR": "FD",
                "Name": "Table Top Lateral Adjusted Position",
                "Name1": ""
            },
            {
                "Tag": "(0074,102A)",
                "VR": "FD",
                "Name": "Patient Support Adjusted Angle",
                "Name1": ""
            },
            {
                "Tag": "(0074,102B)",
                "VR": "FD",
                "Name": "Table Top Eccentric Adjusted Angle",
                "Name1": ""
            },
            {
                "Tag": "(0074,102C)",
                "VR": "FD",
                "Name": "Table Top Pitch Adjusted Angle",
                "Name1": ""
            },
            {
                "Tag": "(0074,102D)",
                "VR": "FD",
                "Name": "Table Top Roll Adjusted Angle",
                "Name1": ""
            },
            {
                "Tag": "(0074,1030)",
                "VR": "SQ",
                "Name": "Delivery Verification Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1032)",
                "VR": "CS",
                "Name": "Verification Image Timing",
                "Name1": ""
            },
            {
                "Tag": "(0074,1034)",
                "VR": "CS",
                "Name": "Double Exposure Flag",
                "Name1": ""
            },
            {
                "Tag": "(0074,1036)",
                "VR": "CS",
                "Name": "Double Exposure Ordering",
                "Name1": ""
            },
            {
                "Tag": "(0074,1038)",
                "VR": "DS",
                "Name": "Double Exposure Meterset (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0074,103A)",
                "VR": "DS",
                "Name": "Double Exposure Field Delta (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(0074,1040)",
                "VR": "SQ",
                "Name": "Related Reference RT Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1042)",
                "VR": "SQ",
                "Name": "General Machine Verification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1044)",
                "VR": "SQ",
                "Name": "Conventional Machine Verification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1046)",
                "VR": "SQ",
                "Name": "Ion Machine Verification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1048)",
                "VR": "SQ",
                "Name": "Failed Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,104A)",
                "VR": "SQ",
                "Name": "Overridden Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,104C)",
                "VR": "SQ",
                "Name": "Conventional Control Point Verification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,104E)",
                "VR": "SQ",
                "Name": "Ion Control Point Verification Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1050)",
                "VR": "SQ",
                "Name": "Attribute Occurrence Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1052)",
                "VR": "AT",
                "Name": "Attribute Occurrence Pointer",
                "Name1": ""
            },
            {
                "Tag": "(0074,1054)",
                "VR": "UL",
                "Name": "Attribute Item Selector",
                "Name1": ""
            },
            {
                "Tag": "(0074,1056)",
                "VR": "LO",
                "Name": "Attribute Occurrence Private Creator",
                "Name1": ""
            },
            {
                "Tag": "(0074,1057)",
                "VR": "IS",
                "Name": "Selector Sequence Pointer Items",
                "Name1": ""
            },
            {
                "Tag": "(0074,1200)",
                "VR": "CS",
                "Name": "Scheduled Procedure Step Priority",
                "Name1": ""
            },
            {
                "Tag": "(0074,1202)",
                "VR": "LO",
                "Name": "Worklist Label",
                "Name1": ""
            },
            {
                "Tag": "(0074,1204)",
                "VR": "LO",
                "Name": "Procedure Step Label",
                "Name1": ""
            },
            {
                "Tag": "(0074,1210)",
                "VR": "SQ",
                "Name": "Scheduled Processing Parameters Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1212)",
                "VR": "SQ",
                "Name": "Performed Processing Parameters Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1216)",
                "VR": "SQ",
                "Name": "Unified Procedure Step Performed Procedure Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1220)",
                "VR": "SQ",
                "Name": "Related Procedure Step Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(0074,1222)",
                "VR": "LO",
                "Name": "Procedure Step Relationship Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(0074,1224)",
                "VR": "SQ",
                "Name": "Replaced Procedure Step Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1230)",
                "VR": "LO",
                "Name": "Deletion Lock",
                "Name1": ""
            },
            {
                "Tag": "(0074,1234)",
                "VR": "AE",
                "Name": "Receiving AE",
                "Name1": ""
            },
            {
                "Tag": "(0074,1236)",
                "VR": "AE",
                "Name": "Requesting AE",
                "Name1": ""
            },
            {
                "Tag": "(0074,1238)",
                "VR": "LT",
                "Name": "Reason for Cancellation",
                "Name1": ""
            },
            {
                "Tag": "(0074,1242)",
                "VR": "CS",
                "Name": "SCP Status",
                "Name1": ""
            },
            {
                "Tag": "(0074,1244)",
                "VR": "CS",
                "Name": "Subscription List Status",
                "Name1": ""
            },
            {
                "Tag": "(0074,1246)",
                "VR": "CS",
                "Name": "Unified Procedure Step List Status",
                "Name1": ""
            },
            {
                "Tag": "(0074,1324)",
                "VR": "UL",
                "Name": "Beam Order Index",
                "Name1": ""
            },
            {
                "Tag": "(0074,1338)",
                "VR": "FD",
                "Name": "Double Exposure Meterset",
                "Name1": ""
            },
            {
                "Tag": "(0074,133A)",
                "VR": "FD",
                "Name": "Double Exposure Field Delta",
                "Name1": ""
            },
            {
                "Tag": "(0074,1401)",
                "VR": "SQ",
                "Name": "Brachy Task Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1402)",
                "VR": "DS",
                "Name": "Continuation Start Total Reference Air Kerma",
                "Name1": ""
            },
            {
                "Tag": "(0074,1403)",
                "VR": "DS",
                "Name": "Continuation End Total Reference Air Kerma",
                "Name1": ""
            },
            {
                "Tag": "(0074,1404)",
                "VR": "IS",
                "Name": "Continuation Pulse Number",
                "Name1": ""
            },
            {
                "Tag": "(0074,1405)",
                "VR": "SQ",
                "Name": "Channel Delivery Order Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,1406)",
                "VR": "IS",
                "Name": "Referenced Channel Number",
                "Name1": ""
            },
            {
                "Tag": "(0074,1407)",
                "VR": "DS",
                "Name": "Start Cumulative Time Weight",
                "Name1": ""
            },
            {
                "Tag": "(0074,1408)",
                "VR": "DS",
                "Name": "End Cumulative Time Weight",
                "Name1": ""
            },
            {
                "Tag": "(0074,1409)",
                "VR": "SQ",
                "Name": "Omitted Channel Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,140A)",
                "VR": "CS",
                "Name": "Reason for Channel Omission",
                "Name1": ""
            },
            {
                "Tag": "(0074,140B)",
                "VR": "LO",
                "Name": "Reason for Channel Omission Description",
                "Name1": ""
            },
            {
                "Tag": "(0074,140C)",
                "VR": "IS",
                "Name": "Channel Delivery Order Index",
                "Name1": ""
            },
            {
                "Tag": "(0074,140D)",
                "VR": "SQ",
                "Name": "Channel Delivery Continuation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0074,140E)",
                "VR": "SQ",
                "Name": "Omitted Application Setup Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0001)",
                "VR": "LO",
                "Name": "Implant Assembly Template Name",
                "Name1": ""
            },
            {
                "Tag": "(0076,0003)",
                "VR": "LO",
                "Name": "Implant Assembly Template Issuer",
                "Name1": ""
            },
            {
                "Tag": "(0076,0006)",
                "VR": "LO",
                "Name": "Implant Assembly Template Version",
                "Name1": ""
            },
            {
                "Tag": "(0076,0008)",
                "VR": "SQ",
                "Name": "Replaced Implant Assembly Template Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,000A)",
                "VR": "CS",
                "Name": "Implant Assembly Template Type",
                "Name1": ""
            },
            {
                "Tag": "(0076,000C)",
                "VR": "SQ",
                "Name": "Original Implant Assembly Template Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,000E)",
                "VR": "SQ",
                "Name": "Derivation Implant Assembly Template Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0010)",
                "VR": "SQ",
                "Name": "Implant Assembly Template Target Anatomy Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0020)",
                "VR": "SQ",
                "Name": "Procedure Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0030)",
                "VR": "LO",
                "Name": "Surgical Technique",
                "Name1": ""
            },
            {
                "Tag": "(0076,0032)",
                "VR": "SQ",
                "Name": "Component Types Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0034)",
                "VR": "CS",
                "Name": "Component Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0036)",
                "VR": "CS",
                "Name": "Exclusive Component Type",
                "Name1": ""
            },
            {
                "Tag": "(0076,0038)",
                "VR": "CS",
                "Name": "Mandatory Component Type",
                "Name1": ""
            },
            {
                "Tag": "(0076,0040)",
                "VR": "SQ",
                "Name": "Component Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0055)",
                "VR": "US",
                "Name": "Component ID",
                "Name1": ""
            },
            {
                "Tag": "(0076,0060)",
                "VR": "SQ",
                "Name": "Component Assembly Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0076,0070)",
                "VR": "US",
                "Name": "Component 1 Referenced ID",
                "Name1": ""
            },
            {
                "Tag": "(0076,0080)",
                "VR": "US",
                "Name": "Component 1 Referenced Mating Feature Set ID",
                "Name1": ""
            },
            {
                "Tag": "(0076,0090)",
                "VR": "US",
                "Name": "Component 1 Referenced Mating Feature ID",
                "Name1": ""
            },
            {
                "Tag": "(0076,00A0)",
                "VR": "US",
                "Name": "Component 2 Referenced ID",
                "Name1": ""
            },
            {
                "Tag": "(0076,00B0)",
                "VR": "US",
                "Name": "Component 2 Referenced Mating Feature Set ID",
                "Name1": ""
            },
            {
                "Tag": "(0076,00C0)",
                "VR": "US",
                "Name": "Component 2 Referenced Mating Feature ID",
                "Name1": ""
            },
            {
                "Tag": "(0078,0001)",
                "VR": "LO",
                "Name": "Implant Template Group Name",
                "Name1": ""
            },
            {
                "Tag": "(0078,0010)",
                "VR": "ST",
                "Name": "Implant Template Group Description",
                "Name1": ""
            },
            {
                "Tag": "(0078,0020)",
                "VR": "LO",
                "Name": "Implant Template Group Issuer",
                "Name1": ""
            },
            {
                "Tag": "(0078,0024)",
                "VR": "LO",
                "Name": "Implant Template Group Version",
                "Name1": ""
            },
            {
                "Tag": "(0078,0026)",
                "VR": "SQ",
                "Name": "Replaced Implant Template Group Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0078,0028)",
                "VR": "SQ",
                "Name": "Implant Template Group Target Anatomy Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0078,002A)",
                "VR": "SQ",
                "Name": "Implant Template Group Members Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0078,002E)",
                "VR": "US",
                "Name": "Implant Template Group Member ID",
                "Name1": ""
            },
            {
                "Tag": "(0078,0050)",
                "VR": "FD",
                "Name": "3D Implant Template Group Member Matching Point",
                "Name1": ""
            },
            {
                "Tag": "(0078,0060)",
                "VR": "FD",
                "Name": "3D Implant Template Group Member Matching Axes",
                "Name1": ""
            },
            {
                "Tag": "(0078,0070)",
                "VR": "SQ",
                "Name": "Implant Template Group Member Matching 2D Coordinates Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0078,0090)",
                "VR": "FD",
                "Name": "2D Implant Template Group Member Matching Point",
                "Name1": ""
            },
            {
                "Tag": "(0078,00A0)",
                "VR": "FD",
                "Name": "2D Implant Template Group Member Matching Axes",
                "Name1": ""
            },
            {
                "Tag": "(0078,00B0)",
                "VR": "SQ",
                "Name": "Implant Template Group Variation Dimension Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0078,00B2)",
                "VR": "LO",
                "Name": "Implant Template Group Variation Dimension Name",
                "Name1": ""
            },
            {
                "Tag": "(0078,00B4)",
                "VR": "SQ",
                "Name": "Implant Template Group Variation Dimension Rank Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0078,00B6)",
                "VR": "US",
                "Name": "Referenced Implant Template Group Member ID",
                "Name1": ""
            },
            {
                "Tag": "(0078,00B8)",
                "VR": "US",
                "Name": "Implant Template Group Variation Dimension Rank",
                "Name1": ""
            },
            {
                "Tag": "(0080,0001)",
                "VR": "SQ",
                "Name": "Surface Scan Acquisition Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0080,0002)",
                "VR": "SQ",
                "Name": "Surface Scan Mode Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0080,0003)",
                "VR": "SQ",
                "Name": "Registration Method Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0080,0004)",
                "VR": "FD",
                "Name": "Shot Duration Time",
                "Name1": ""
            },
            {
                "Tag": "(0080,0005)",
                "VR": "FD",
                "Name": "Shot Offset Time",
                "Name1": ""
            },
            {
                "Tag": "(0080,0006)",
                "VR": "US",
                "Name": "Surface Point Presentation Value Data",
                "Name1": ""
            },
            {
                "Tag": "(0080,0007)",
                "VR": "US",
                "Name": "Surface Point Color CIELab Value Data",
                "Name1": ""
            },
            {
                "Tag": "(0080,0008)",
                "VR": "SQ",
                "Name": "UV Mapping Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0080,0009)",
                "VR": "SH",
                "Name": "Texture Label",
                "Name1": ""
            },
            {
                "Tag": "(0080,0010)",
                "VR": "OF",
                "Name": "U Value Data",
                "Name1": ""
            },
            {
                "Tag": "(0080,0011)",
                "VR": "OF",
                "Name": "V Value Data",
                "Name1": ""
            },
            {
                "Tag": "(0080,0012)",
                "VR": "SQ",
                "Name": "Referenced Texture Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0080,0013)",
                "VR": "SQ",
                "Name": "Referenced Surface Data Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0001)",
                "VR": "CS",
                "Name": "Assessment Summary",
                "Name1": ""
            },
            {
                "Tag": "(0082,0003)",
                "VR": "UT",
                "Name": "Assessment Summary Description",
                "Name1": ""
            },
            {
                "Tag": "(0082,0004)",
                "VR": "SQ",
                "Name": "Assessed SOP Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0005)",
                "VR": "SQ",
                "Name": "Referenced Comparison SOP Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0006)",
                "VR": "UL",
                "Name": "Number of Assessment Observations",
                "Name1": ""
            },
            {
                "Tag": "(0082,0007)",
                "VR": "SQ",
                "Name": "Assessment Observations Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0008)",
                "VR": "CS",
                "Name": "Observation Significance",
                "Name1": ""
            },
            {
                "Tag": "(0082,000A)",
                "VR": "UT",
                "Name": "Observation Description",
                "Name1": ""
            },
            {
                "Tag": "(0082,000C)",
                "VR": "SQ",
                "Name": "Structured Constraint Observation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0010)",
                "VR": "SQ",
                "Name": "Assessed Attribute Value Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0016)",
                "VR": "LO",
                "Name": "Assessment Set ID",
                "Name1": ""
            },
            {
                "Tag": "(0082,0017)",
                "VR": "SQ",
                "Name": "Assessment Requester Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0018)",
                "VR": "LO",
                "Name": "Selector Attribute Name",
                "Name1": ""
            },
            {
                "Tag": "(0082,0019)",
                "VR": "LO",
                "Name": "Selector Attribute Keyword",
                "Name1": ""
            },
            {
                "Tag": "(0082,0021)",
                "VR": "SQ",
                "Name": "Assessment Type Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0022)",
                "VR": "SQ",
                "Name": "Observation Basis Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0023)",
                "VR": "LO",
                "Name": "Assessment Label",
                "Name1": ""
            },
            {
                "Tag": "(0082,0032)",
                "VR": "CS",
                "Name": "Constraint Type",
                "Name1": ""
            },
            {
                "Tag": "(0082,0033)",
                "VR": "UT",
                "Name": "Specification Selection Guidance",
                "Name1": ""
            },
            {
                "Tag": "(0082,0034)",
                "VR": "SQ",
                "Name": "Constraint Value Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0035)",
                "VR": "SQ",
                "Name": "Recommended Default Value Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0082,0036)",
                "VR": "CS",
                "Name": "Constraint Violation Significance",
                "Name1": ""
            },
            {
                "Tag": "(0082,0037)",
                "VR": "UT",
                "Name": "Constraint Violation Condition",
                "Name1": ""
            },
            {
                "Tag": "(0088,0130)",
                "VR": "SH",
                "Name": "Storage Media File-set ID",
                "Name1": ""
            },
            {
                "Tag": "(0088,0140)",
                "VR": "UI",
                "Name": "Storage Media File-set UID",
                "Name1": ""
            },
            {
                "Tag": "(0088,0200)",
                "VR": "SQ",
                "Name": "Icon Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0088,0904)",
                "VR": "LO",
                "Name": "Topic Title",
                "Name1": "Retired"
            },
            {
                "Tag": "(0088,0906)",
                "VR": "ST",
                "Name": "Topic Subject",
                "Name1": "Retired"
            },
            {
                "Tag": "(0088,0910)",
                "VR": "LO",
                "Name": "Topic Author",
                "Name1": "Retired"
            },
            {
                "Tag": "(0088,0912)",
                "VR": "LO",
                "Name": "Topic Keywords",
                "Name1": "Retired"
            },
            {
                "Tag": "(0100,0410)",
                "VR": "CS",
                "Name": "SOP Instance Status",
                "Name1": ""
            },
            {
                "Tag": "(0100,0420)",
                "VR": "DT",
                "Name": "SOP Authorization DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0100,0424)",
                "VR": "LT",
                "Name": "SOP Authorization Comment",
                "Name1": ""
            },
            {
                "Tag": "(0100,0426)",
                "VR": "LO",
                "Name": "Authorization Equipment Certification Number",
                "Name1": ""
            },
            {
                "Tag": "(0400,0005)",
                "VR": "US",
                "Name": "MAC ID Number",
                "Name1": ""
            },
            {
                "Tag": "(0400,0010)",
                "VR": "UI",
                "Name": "MAC Calculation Transfer Syntax UID",
                "Name1": ""
            },
            {
                "Tag": "(0400,0015)",
                "VR": "CS",
                "Name": "MAC Algorithm",
                "Name1": ""
            },
            {
                "Tag": "(0400,0020)",
                "VR": "AT",
                "Name": "Data Elements Signed",
                "Name1": ""
            },
            {
                "Tag": "(0400,0100)",
                "VR": "UI",
                "Name": "Digital Signature UID",
                "Name1": ""
            },
            {
                "Tag": "(0400,0105)",
                "VR": "DT",
                "Name": "Digital Signature DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0400,0110)",
                "VR": "CS",
                "Name": "Certificate Type",
                "Name1": ""
            },
            {
                "Tag": "(0400,0115)",
                "VR": "OB",
                "Name": "Certificate of Signer",
                "Name1": ""
            },
            {
                "Tag": "(0400,0120)",
                "VR": "OB",
                "Name": "Signature",
                "Name1": ""
            },
            {
                "Tag": "(0400,0305)",
                "VR": "CS",
                "Name": "Certified Timestamp Type",
                "Name1": ""
            },
            {
                "Tag": "(0400,0310)",
                "VR": "OB",
                "Name": "Certified Timestamp",
                "Name1": ""
            },
            {
                "Tag": "(0400,0315)",
                "VR": "FL",
                "Name": "",
                "Name1": "Retired"
            },
            {
                "Tag": "(0400,0401)",
                "VR": "SQ",
                "Name": "Digital Signature Purpose Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0400,0402)",
                "VR": "SQ",
                "Name": "Referenced Digital Signature Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0400,0403)",
                "VR": "SQ",
                "Name": "Referenced SOP Instance MAC Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0400,0404)",
                "VR": "OB",
                "Name": "MAC",
                "Name1": ""
            },
            {
                "Tag": "(0400,0500)",
                "VR": "SQ",
                "Name": "Encrypted Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0400,0510)",
                "VR": "UI",
                "Name": "Encrypted Content Transfer Syntax UID",
                "Name1": ""
            },
            {
                "Tag": "(0400,0520)",
                "VR": "OB",
                "Name": "Encrypted Content",
                "Name1": ""
            },
            {
                "Tag": "(0400,0550)",
                "VR": "SQ",
                "Name": "Modified Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0400,0561)",
                "VR": "SQ",
                "Name": "Original Attributes Sequence",
                "Name1": ""
            },
            {
                "Tag": "(0400,0562)",
                "VR": "DT",
                "Name": "Attribute Modification DateTime",
                "Name1": ""
            },
            {
                "Tag": "(0400,0563)",
                "VR": "LO",
                "Name": "Modifying System",
                "Name1": ""
            },
            {
                "Tag": "(0400,0564)",
                "VR": "LO",
                "Name": "Source of Previous Values",
                "Name1": ""
            },
            {
                "Tag": "(0400,0565)",
                "VR": "CS",
                "Name": "Reason for the Attribute Modification",
                "Name1": ""
            },
            {
                "Tag": "(1000,xxx0)",
                "VR": "US",
                "Name": "Escape Triplet",
                "Name1": "Retired"
            },
            {
                "Tag": "(1000,xxx1)",
                "VR": "US",
                "Name": "Run Length Triplet",
                "Name1": "Retired"
            },
            {
                "Tag": "(1000,xxx2)",
                "VR": "US",
                "Name": "Huffman Table Size",
                "Name1": "Retired"
            },
            {
                "Tag": "(1000,xxx3)",
                "VR": "US",
                "Name": "Huffman Table Triplet",
                "Name1": "Retired"
            },
            {
                "Tag": "(1000,xxx4)",
                "VR": "US",
                "Name": "Shift Table Size",
                "Name1": "Retired"
            },
            {
                "Tag": "(1000,xxx5)",
                "VR": "US",
                "Name": "Shift Table Triplet",
                "Name1": "Retired"
            },
            {
                "Tag": "(1010,xxxx)",
                "VR": "US",
                "Name": "Zonal Map",
                "Name1": "Retired"
            },
            {
                "Tag": "(2000,0010)",
                "VR": "IS",
                "Name": "Number of Copies",
                "Name1": ""
            },
            {
                "Tag": "(2000,001E)",
                "VR": "SQ",
                "Name": "Printer Configuration Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2000,0020)",
                "VR": "CS",
                "Name": "Print Priority",
                "Name1": ""
            },
            {
                "Tag": "(2000,0030)",
                "VR": "CS",
                "Name": "Medium Type",
                "Name1": ""
            },
            {
                "Tag": "(2000,0040)",
                "VR": "CS",
                "Name": "Film Destination",
                "Name1": ""
            },
            {
                "Tag": "(2000,0050)",
                "VR": "LO",
                "Name": "Film Session Label",
                "Name1": ""
            },
            {
                "Tag": "(2000,0060)",
                "VR": "IS",
                "Name": "Memory Allocation",
                "Name1": ""
            },
            {
                "Tag": "(2000,0061)",
                "VR": "IS",
                "Name": "Maximum Memory Allocation",
                "Name1": ""
            },
            {
                "Tag": "(2000,0062)",
                "VR": "CS",
                "Name": "Color Image Printing Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(2000,0063)",
                "VR": "CS",
                "Name": "Collation Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(2000,0065)",
                "VR": "CS",
                "Name": "Annotation Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(2000,0067)",
                "VR": "CS",
                "Name": "Image Overlay Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(2000,0069)",
                "VR": "CS",
                "Name": "Presentation LUT Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(2000,006A)",
                "VR": "CS",
                "Name": "Image Box Presentation LUT Flag",
                "Name1": "Retired"
            },
            {
                "Tag": "(2000,00A0)",
                "VR": "US",
                "Name": "Memory Bit Depth",
                "Name1": ""
            },
            {
                "Tag": "(2000,00A1)",
                "VR": "US",
                "Name": "Printing Bit Depth",
                "Name1": ""
            },
            {
                "Tag": "(2000,00A2)",
                "VR": "SQ",
                "Name": "Media Installed Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2000,00A4)",
                "VR": "SQ",
                "Name": "Other Media Available Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2000,00A8)",
                "VR": "SQ",
                "Name": "Supported Image Display Formats Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2000,0500)",
                "VR": "SQ",
                "Name": "Referenced Film Box Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2000,0510)",
                "VR": "SQ",
                "Name": "Referenced Stored Print Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2010,0010)",
                "VR": "ST",
                "Name": "Image Display Format",
                "Name1": ""
            },
            {
                "Tag": "(2010,0030)",
                "VR": "CS",
                "Name": "Annotation Display Format ID",
                "Name1": ""
            },
            {
                "Tag": "(2010,0040)",
                "VR": "CS",
                "Name": "Film Orientation",
                "Name1": ""
            },
            {
                "Tag": "(2010,0050)",
                "VR": "CS",
                "Name": "Film Size ID",
                "Name1": ""
            },
            {
                "Tag": "(2010,0052)",
                "VR": "CS",
                "Name": "Printer Resolution ID",
                "Name1": ""
            },
            {
                "Tag": "(2010,0054)",
                "VR": "CS",
                "Name": "Default Printer Resolution ID",
                "Name1": ""
            },
            {
                "Tag": "(2010,0060)",
                "VR": "CS",
                "Name": "Magnification Type",
                "Name1": ""
            },
            {
                "Tag": "(2010,0080)",
                "VR": "CS",
                "Name": "Smoothing Type",
                "Name1": ""
            },
            {
                "Tag": "(2010,00A6)",
                "VR": "CS",
                "Name": "Default Magnification Type",
                "Name1": ""
            },
            {
                "Tag": "(2010,00A7)",
                "VR": "CS",
                "Name": "Other Magnification Types Available",
                "Name1": ""
            },
            {
                "Tag": "(2010,00A8)",
                "VR": "CS",
                "Name": "Default Smoothing Type",
                "Name1": ""
            },
            {
                "Tag": "(2010,00A9)",
                "VR": "CS",
                "Name": "Other Smoothing Types Available",
                "Name1": ""
            },
            {
                "Tag": "(2010,0100)",
                "VR": "CS",
                "Name": "Border Density",
                "Name1": ""
            },
            {
                "Tag": "(2010,0110)",
                "VR": "CS",
                "Name": "Empty Image Density",
                "Name1": ""
            },
            {
                "Tag": "(2010,0120)",
                "VR": "US",
                "Name": "Min Density",
                "Name1": ""
            },
            {
                "Tag": "(2010,0130)",
                "VR": "US",
                "Name": "Max Density",
                "Name1": ""
            },
            {
                "Tag": "(2010,0140)",
                "VR": "CS",
                "Name": "Trim",
                "Name1": ""
            },
            {
                "Tag": "(2010,0150)",
                "VR": "ST",
                "Name": "Configuration Information",
                "Name1": ""
            },
            {
                "Tag": "(2010,0152)",
                "VR": "LT",
                "Name": "Configuration Information Description",
                "Name1": ""
            },
            {
                "Tag": "(2010,0154)",
                "VR": "IS",
                "Name": "Maximum Collated Films",
                "Name1": ""
            },
            {
                "Tag": "(2010,015E)",
                "VR": "US",
                "Name": "Illumination",
                "Name1": ""
            },
            {
                "Tag": "(2010,0160)",
                "VR": "US",
                "Name": "Reflected Ambient Light",
                "Name1": ""
            },
            {
                "Tag": "(2010,0376)",
                "VR": "DS",
                "Name": "Printer Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(2010,0500)",
                "VR": "SQ",
                "Name": "Referenced Film Session Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2010,0510)",
                "VR": "SQ",
                "Name": "Referenced Image Box Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2010,0520)",
                "VR": "SQ",
                "Name": "Referenced Basic Annotation Box Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2020,0010)",
                "VR": "US",
                "Name": "Image Box Position",
                "Name1": ""
            },
            {
                "Tag": "(2020,0020)",
                "VR": "CS",
                "Name": "Polarity",
                "Name1": ""
            },
            {
                "Tag": "(2020,0030)",
                "VR": "DS",
                "Name": "Requested Image Size",
                "Name1": ""
            },
            {
                "Tag": "(2020,0040)",
                "VR": "CS",
                "Name": "Requested Decimate/Crop Behavior",
                "Name1": ""
            },
            {
                "Tag": "(2020,0050)",
                "VR": "CS",
                "Name": "Requested Resolution ID",
                "Name1": ""
            },
            {
                "Tag": "(2020,00A0)",
                "VR": "CS",
                "Name": "Requested Image Size Flag",
                "Name1": ""
            },
            {
                "Tag": "(2020,00A2)",
                "VR": "CS",
                "Name": "Decimate/Crop Result",
                "Name1": ""
            },
            {
                "Tag": "(2020,0110)",
                "VR": "SQ",
                "Name": "Basic Grayscale Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2020,0111)",
                "VR": "SQ",
                "Name": "Basic Color Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2020,0130)",
                "VR": "SQ",
                "Name": "Referenced Image Overlay Box Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2020,0140)",
                "VR": "SQ",
                "Name": "Referenced VOI LUT Box Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2030,0010)",
                "VR": "US",
                "Name": "Annotation Position",
                "Name1": ""
            },
            {
                "Tag": "(2030,0020)",
                "VR": "LO",
                "Name": "Text String",
                "Name1": ""
            },
            {
                "Tag": "(2040,0010)",
                "VR": "SQ",
                "Name": "Referenced Overlay Plane Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0011)",
                "VR": "US",
                "Name": "Referenced Overlay Plane Groups",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0020)",
                "VR": "SQ",
                "Name": "Overlay Pixel Data Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0060)",
                "VR": "CS",
                "Name": "Overlay Magnification Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0070)",
                "VR": "CS",
                "Name": "Overlay Smoothing Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0072)",
                "VR": "CS",
                "Name": "Overlay or Image Magnification",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0074)",
                "VR": "US",
                "Name": "Magnify to Number of Columns",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0080)",
                "VR": "CS",
                "Name": "Overlay Foreground Density",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0082)",
                "VR": "CS",
                "Name": "Overlay Background Density",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0090)",
                "VR": "CS",
                "Name": "Overlay Mode",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0100)",
                "VR": "CS",
                "Name": "Threshold Density",
                "Name1": "Retired"
            },
            {
                "Tag": "(2040,0500)",
                "VR": "SQ",
                "Name": "Referenced Image Box Sequence (Retired)",
                "Name1": "Retired"
            },
            {
                "Tag": "(2050,0010)",
                "VR": "SQ",
                "Name": "Presentation LUT Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2050,0020)",
                "VR": "CS",
                "Name": "Presentation LUT Shape",
                "Name1": ""
            },
            {
                "Tag": "(2050,0500)",
                "VR": "SQ",
                "Name": "Referenced Presentation LUT Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2100,0010)",
                "VR": "SH",
                "Name": "Print Job ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(2100,0020)",
                "VR": "CS",
                "Name": "Execution Status",
                "Name1": ""
            },
            {
                "Tag": "(2100,0030)",
                "VR": "CS",
                "Name": "Execution Status Info",
                "Name1": ""
            },
            {
                "Tag": "(2100,0040)",
                "VR": "DA",
                "Name": "Creation Date",
                "Name1": ""
            },
            {
                "Tag": "(2100,0050)",
                "VR": "TM",
                "Name": "Creation Time",
                "Name1": ""
            },
            {
                "Tag": "(2100,0070)",
                "VR": "AE",
                "Name": "Originator",
                "Name1": ""
            },
            {
                "Tag": "(2100,0140)",
                "VR": "AE",
                "Name": "Destination AE",
                "Name1": ""
            },
            {
                "Tag": "(2100,0160)",
                "VR": "SH",
                "Name": "Owner ID",
                "Name1": ""
            },
            {
                "Tag": "(2100,0170)",
                "VR": "IS",
                "Name": "Number of Films",
                "Name1": ""
            },
            {
                "Tag": "(2100,0500)",
                "VR": "SQ",
                "Name": "Referenced Print Job Sequence (Pull Stored Print)",
                "Name1": "Retired"
            },
            {
                "Tag": "(2110,0010)",
                "VR": "CS",
                "Name": "Printer Status",
                "Name1": ""
            },
            {
                "Tag": "(2110,0020)",
                "VR": "CS",
                "Name": "Printer Status Info",
                "Name1": ""
            },
            {
                "Tag": "(2110,0030)",
                "VR": "LO",
                "Name": "Printer Name",
                "Name1": ""
            },
            {
                "Tag": "(2110,0099)",
                "VR": "SH",
                "Name": "Print Queue ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(2120,0010)",
                "VR": "CS",
                "Name": "Queue Status",
                "Name1": "Retired"
            },
            {
                "Tag": "(2120,0050)",
                "VR": "SQ",
                "Name": "Print Job Description Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2120,0070)",
                "VR": "SQ",
                "Name": "Referenced Print Job Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,0010)",
                "VR": "SQ",
                "Name": "Print Management Capabilities Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,0015)",
                "VR": "SQ",
                "Name": "Printer Characteristics Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,0030)",
                "VR": "SQ",
                "Name": "Film Box Content Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,0040)",
                "VR": "SQ",
                "Name": "Image Box Content Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,0050)",
                "VR": "SQ",
                "Name": "Annotation Content Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,0060)",
                "VR": "SQ",
                "Name": "Image Overlay Box Content Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,0080)",
                "VR": "SQ",
                "Name": "Presentation LUT Content Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,00A0)",
                "VR": "SQ",
                "Name": "Proposed Study Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2130,00C0)",
                "VR": "SQ",
                "Name": "Original Image Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(2200,0001)",
                "VR": "CS",
                "Name": "Label Using Information Extracted From Instances",
                "Name1": ""
            },
            {
                "Tag": "(2200,0002)",
                "VR": "UT",
                "Name": "Label Text",
                "Name1": ""
            },
            {
                "Tag": "(2200,0003)",
                "VR": "CS",
                "Name": "Label Style Selection",
                "Name1": ""
            },
            {
                "Tag": "(2200,0004)",
                "VR": "LT",
                "Name": "Media Disposition",
                "Name1": ""
            },
            {
                "Tag": "(2200,0005)",
                "VR": "LT",
                "Name": "Barcode Value",
                "Name1": ""
            },
            {
                "Tag": "(2200,0006)",
                "VR": "CS",
                "Name": "Barcode Symbology",
                "Name1": ""
            },
            {
                "Tag": "(2200,0007)",
                "VR": "CS",
                "Name": "Allow Media Splitting",
                "Name1": ""
            },
            {
                "Tag": "(2200,0008)",
                "VR": "CS",
                "Name": "Include Non-DICOM Objects",
                "Name1": ""
            },
            {
                "Tag": "(2200,0009)",
                "VR": "CS",
                "Name": "Include Display Application",
                "Name1": ""
            },
            {
                "Tag": "(2200,000A)",
                "VR": "CS",
                "Name": "Preserve Composite Instances After Media Creation",
                "Name1": ""
            },
            {
                "Tag": "(2200,000B)",
                "VR": "US",
                "Name": "Total Number of Pieces of Media Created",
                "Name1": ""
            },
            {
                "Tag": "(2200,000C)",
                "VR": "LO",
                "Name": "Requested Media Application Profile",
                "Name1": ""
            },
            {
                "Tag": "(2200,000D)",
                "VR": "SQ",
                "Name": "Referenced Storage Media Sequence",
                "Name1": ""
            },
            {
                "Tag": "(2200,000E)",
                "VR": "AT",
                "Name": "Failure Attributes",
                "Name1": ""
            },
            {
                "Tag": "(2200,000F)",
                "VR": "CS",
                "Name": "Allow Lossy Compression",
                "Name1": ""
            },
            {
                "Tag": "(2200,0020)",
                "VR": "CS",
                "Name": "Request Priority",
                "Name1": ""
            },
            {
                "Tag": "(3002,0002)",
                "VR": "SH",
                "Name": "RT Image Label",
                "Name1": ""
            },
            {
                "Tag": "(3002,0003)",
                "VR": "LO",
                "Name": "RT Image Name",
                "Name1": ""
            },
            {
                "Tag": "(3002,0004)",
                "VR": "ST",
                "Name": "RT Image Description",
                "Name1": ""
            },
            {
                "Tag": "(3002,000A)",
                "VR": "CS",
                "Name": "Reported Values Origin",
                "Name1": ""
            },
            {
                "Tag": "(3002,000C)",
                "VR": "CS",
                "Name": "RT Image Plane",
                "Name1": ""
            },
            {
                "Tag": "(3002,000D)",
                "VR": "DS",
                "Name": "X-Ray Image Receptor Translation",
                "Name1": ""
            },
            {
                "Tag": "(3002,000E)",
                "VR": "DS",
                "Name": "X-Ray Image Receptor Angle",
                "Name1": ""
            },
            {
                "Tag": "(3002,0010)",
                "VR": "DS",
                "Name": "RT Image Orientation",
                "Name1": ""
            },
            {
                "Tag": "(3002,0011)",
                "VR": "DS",
                "Name": "Image Plane Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(3002,0012)",
                "VR": "DS",
                "Name": "RT Image Position",
                "Name1": ""
            },
            {
                "Tag": "(3002,0020)",
                "VR": "SH",
                "Name": "Radiation Machine Name",
                "Name1": ""
            },
            {
                "Tag": "(3002,0022)",
                "VR": "DS",
                "Name": "Radiation Machine SAD",
                "Name1": ""
            },
            {
                "Tag": "(3002,0024)",
                "VR": "DS",
                "Name": "Radiation Machine SSD",
                "Name1": ""
            },
            {
                "Tag": "(3002,0026)",
                "VR": "DS",
                "Name": "RT Image SID",
                "Name1": ""
            },
            {
                "Tag": "(3002,0028)",
                "VR": "DS",
                "Name": "Source to Reference Object Distance",
                "Name1": ""
            },
            {
                "Tag": "(3002,0029)",
                "VR": "IS",
                "Name": "Fraction Number",
                "Name1": ""
            },
            {
                "Tag": "(3002,0030)",
                "VR": "SQ",
                "Name": "Exposure Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3002,0032)",
                "VR": "DS",
                "Name": "Meterset Exposure",
                "Name1": ""
            },
            {
                "Tag": "(3002,0034)",
                "VR": "DS",
                "Name": "Diaphragm Position",
                "Name1": ""
            },
            {
                "Tag": "(3002,0040)",
                "VR": "SQ",
                "Name": "Fluence Map Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3002,0041)",
                "VR": "CS",
                "Name": "Fluence Data Source",
                "Name1": ""
            },
            {
                "Tag": "(3002,0042)",
                "VR": "DS",
                "Name": "Fluence Data Scale",
                "Name1": ""
            },
            {
                "Tag": "(3002,0050)",
                "VR": "SQ",
                "Name": "Primary Fluence Mode Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3002,0051)",
                "VR": "CS",
                "Name": "Fluence Mode",
                "Name1": ""
            },
            {
                "Tag": "(3002,0052)",
                "VR": "SH",
                "Name": "Fluence Mode ID",
                "Name1": ""
            },
            {
                "Tag": "(3004,0001)",
                "VR": "CS",
                "Name": "DVH Type",
                "Name1": ""
            },
            {
                "Tag": "(3004,0002)",
                "VR": "CS",
                "Name": "Dose Units",
                "Name1": ""
            },
            {
                "Tag": "(3004,0004)",
                "VR": "CS",
                "Name": "Dose Type",
                "Name1": ""
            },
            {
                "Tag": "(3004,0005)",
                "VR": "CS",
                "Name": "Spatial Transform of Dose",
                "Name1": ""
            },
            {
                "Tag": "(3004,0006)",
                "VR": "LO",
                "Name": "Dose Comment",
                "Name1": ""
            },
            {
                "Tag": "(3004,0008)",
                "VR": "DS",
                "Name": "Normalization Point",
                "Name1": ""
            },
            {
                "Tag": "(3004,000A)",
                "VR": "CS",
                "Name": "Dose Summation Type",
                "Name1": ""
            },
            {
                "Tag": "(3004,000C)",
                "VR": "DS",
                "Name": "Grid Frame Offset Vector",
                "Name1": ""
            },
            {
                "Tag": "(3004,000E)",
                "VR": "DS",
                "Name": "Dose Grid Scaling",
                "Name1": ""
            },
            {
                "Tag": "(3004,0010)",
                "VR": "SQ",
                "Name": "RT Dose ROI Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3004,0012)",
                "VR": "DS",
                "Name": "Dose Value",
                "Name1": ""
            },
            {
                "Tag": "(3004,0014)",
                "VR": "CS",
                "Name": "Tissue Heterogeneity Correction",
                "Name1": ""
            },
            {
                "Tag": "(3004,0040)",
                "VR": "DS",
                "Name": "DVH Normalization Point",
                "Name1": ""
            },
            {
                "Tag": "(3004,0042)",
                "VR": "DS",
                "Name": "DVH Normalization Dose Value",
                "Name1": ""
            },
            {
                "Tag": "(3004,0050)",
                "VR": "SQ",
                "Name": "DVH Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3004,0052)",
                "VR": "DS",
                "Name": "DVH Dose Scaling",
                "Name1": ""
            },
            {
                "Tag": "(3004,0054)",
                "VR": "CS",
                "Name": "DVH Volume Units",
                "Name1": ""
            },
            {
                "Tag": "(3004,0056)",
                "VR": "IS",
                "Name": "DVH Number of Bins",
                "Name1": ""
            },
            {
                "Tag": "(3004,0058)",
                "VR": "DS",
                "Name": "DVH Data",
                "Name1": ""
            },
            {
                "Tag": "(3004,0060)",
                "VR": "SQ",
                "Name": "DVH Referenced ROI Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3004,0062)",
                "VR": "CS",
                "Name": "DVH ROI Contribution Type",
                "Name1": ""
            },
            {
                "Tag": "(3004,0070)",
                "VR": "DS",
                "Name": "DVH Minimum Dose",
                "Name1": ""
            },
            {
                "Tag": "(3004,0072)",
                "VR": "DS",
                "Name": "DVH Maximum Dose",
                "Name1": ""
            },
            {
                "Tag": "(3004,0074)",
                "VR": "DS",
                "Name": "DVH Mean Dose",
                "Name1": ""
            },
            {
                "Tag": "(3006,0002)",
                "VR": "SH",
                "Name": "Structure Set Label",
                "Name1": ""
            },
            {
                "Tag": "(3006,0004)",
                "VR": "LO",
                "Name": "Structure Set Name",
                "Name1": ""
            },
            {
                "Tag": "(3006,0006)",
                "VR": "ST",
                "Name": "Structure Set Description",
                "Name1": ""
            },
            {
                "Tag": "(3006,0008)",
                "VR": "DA",
                "Name": "Structure Set Date",
                "Name1": ""
            },
            {
                "Tag": "(3006,0009)",
                "VR": "TM",
                "Name": "Structure Set Time",
                "Name1": ""
            },
            {
                "Tag": "(3006,0010)",
                "VR": "SQ",
                "Name": "Referenced Frame of Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0012)",
                "VR": "SQ",
                "Name": "RT Referenced Study Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0014)",
                "VR": "SQ",
                "Name": "RT Referenced Series Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0016)",
                "VR": "SQ",
                "Name": "Contour Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0018)",
                "VR": "SQ",
                "Name": "Predecessor Structure Set Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0020)",
                "VR": "SQ",
                "Name": "Structure Set ROI Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0022)",
                "VR": "IS",
                "Name": "ROI Number",
                "Name1": ""
            },
            {
                "Tag": "(3006,0024)",
                "VR": "UI",
                "Name": "Referenced Frame of Reference UID",
                "Name1": ""
            },
            {
                "Tag": "(3006,0026)",
                "VR": "LO",
                "Name": "ROI Name",
                "Name1": ""
            },
            {
                "Tag": "(3006,0028)",
                "VR": "ST",
                "Name": "ROI Description",
                "Name1": ""
            },
            {
                "Tag": "(3006,002A)",
                "VR": "IS",
                "Name": "ROI Display Color",
                "Name1": ""
            },
            {
                "Tag": "(3006,002C)",
                "VR": "DS",
                "Name": "ROI Volume",
                "Name1": ""
            },
            {
                "Tag": "(3006,0030)",
                "VR": "SQ",
                "Name": "RT Related ROI Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0033)",
                "VR": "CS",
                "Name": "RT ROI Relationship",
                "Name1": ""
            },
            {
                "Tag": "(3006,0036)",
                "VR": "CS",
                "Name": "ROI Generation Algorithm",
                "Name1": ""
            },
            {
                "Tag": "(3006,0038)",
                "VR": "LO",
                "Name": "ROI Generation Description",
                "Name1": ""
            },
            {
                "Tag": "(3006,0039)",
                "VR": "SQ",
                "Name": "ROI Contour Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0040)",
                "VR": "SQ",
                "Name": "Contour Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0042)",
                "VR": "CS",
                "Name": "Contour Geometric Type",
                "Name1": ""
            },
            {
                "Tag": "(3006,0044)",
                "VR": "DS",
                "Name": "Contour Slab Thickness",
                "Name1": ""
            },
            {
                "Tag": "(3006,0045)",
                "VR": "DS",
                "Name": "Contour Offset Vector",
                "Name1": ""
            },
            {
                "Tag": "(3006,0046)",
                "VR": "IS",
                "Name": "Number of Contour Points",
                "Name1": ""
            },
            {
                "Tag": "(3006,0048)",
                "VR": "IS",
                "Name": "Contour Number",
                "Name1": ""
            },
            {
                "Tag": "(3006,0049)",
                "VR": "IS",
                "Name": "Attached Contours",
                "Name1": ""
            },
            {
                "Tag": "(3006,0050)",
                "VR": "DS",
                "Name": "Contour Data",
                "Name1": ""
            },
            {
                "Tag": "(3006,0080)",
                "VR": "SQ",
                "Name": "RT ROI Observations Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0082)",
                "VR": "IS",
                "Name": "Observation Number",
                "Name1": ""
            },
            {
                "Tag": "(3006,0084)",
                "VR": "IS",
                "Name": "Referenced ROI Number",
                "Name1": ""
            },
            {
                "Tag": "(3006,0085)",
                "VR": "SH",
                "Name": "ROI Observation Label",
                "Name1": ""
            },
            {
                "Tag": "(3006,0086)",
                "VR": "SQ",
                "Name": "RT ROI Identification Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,0088)",
                "VR": "ST",
                "Name": "ROI Observation Description",
                "Name1": ""
            },
            {
                "Tag": "(3006,00A0)",
                "VR": "SQ",
                "Name": "Related RT ROI Observations Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,00A4)",
                "VR": "CS",
                "Name": "RT ROI Interpreted Type",
                "Name1": ""
            },
            {
                "Tag": "(3006,00A6)",
                "VR": "PN",
                "Name": "ROI Interpreter",
                "Name1": ""
            },
            {
                "Tag": "(3006,00B0)",
                "VR": "SQ",
                "Name": "ROI Physical Properties Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,00B2)",
                "VR": "CS",
                "Name": "ROI Physical Property",
                "Name1": ""
            },
            {
                "Tag": "(3006,00B4)",
                "VR": "DS",
                "Name": "ROI Physical Property Value",
                "Name1": ""
            },
            {
                "Tag": "(3006,00B6)",
                "VR": "SQ",
                "Name": "ROI Elemental Composition Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,00B7)",
                "VR": "US",
                "Name": "ROI Elemental Composition Atomic Number",
                "Name1": ""
            },
            {
                "Tag": "(3006,00B8)",
                "VR": "FL",
                "Name": "ROI Elemental Composition Atomic Mass Fraction",
                "Name1": ""
            },
            {
                "Tag": "(3006,00B9)",
                "VR": "SQ",
                "Name": "Additional RT ROI Identification Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3006,00C0)",
                "VR": "SQ",
                "Name": "Frame of Reference Relationship Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(3006,00C2)",
                "VR": "UI",
                "Name": "Related Frame of Reference UID",
                "Name1": "Retired"
            },
            {
                "Tag": "(3006,00C4)",
                "VR": "CS",
                "Name": "Frame of Reference Transformation Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(3006,00C6)",
                "VR": "DS",
                "Name": "Frame of Reference Transformation Matrix",
                "Name1": ""
            },
            {
                "Tag": "(3006,00C8)",
                "VR": "LO",
                "Name": "Frame of Reference Transformation Comment",
                "Name1": ""
            },
            {
                "Tag": "(3008,0010)",
                "VR": "SQ",
                "Name": "Measured Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0012)",
                "VR": "ST",
                "Name": "Measured Dose Description",
                "Name1": ""
            },
            {
                "Tag": "(3008,0014)",
                "VR": "CS",
                "Name": "Measured Dose Type",
                "Name1": ""
            },
            {
                "Tag": "(3008,0016)",
                "VR": "DS",
                "Name": "Measured Dose Value",
                "Name1": ""
            },
            {
                "Tag": "(3008,0020)",
                "VR": "SQ",
                "Name": "Treatment Session Beam Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0021)",
                "VR": "SQ",
                "Name": "Treatment Session Ion Beam Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0022)",
                "VR": "IS",
                "Name": "Current Fraction Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0024)",
                "VR": "DA",
                "Name": "Treatment Control Point Date",
                "Name1": ""
            },
            {
                "Tag": "(3008,0025)",
                "VR": "TM",
                "Name": "Treatment Control Point Time",
                "Name1": ""
            },
            {
                "Tag": "(3008,002A)",
                "VR": "CS",
                "Name": "Treatment Termination Status",
                "Name1": ""
            },
            {
                "Tag": "(3008,002B)",
                "VR": "SH",
                "Name": "Treatment Termination Code",
                "Name1": ""
            },
            {
                "Tag": "(3008,002C)",
                "VR": "CS",
                "Name": "Treatment Verification Status",
                "Name1": ""
            },
            {
                "Tag": "(3008,0030)",
                "VR": "SQ",
                "Name": "Referenced Treatment Record Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0032)",
                "VR": "DS",
                "Name": "Specified Primary Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,0033)",
                "VR": "DS",
                "Name": "Specified Secondary Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,0036)",
                "VR": "DS",
                "Name": "Delivered Primary Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,0037)",
                "VR": "DS",
                "Name": "Delivered Secondary Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,003A)",
                "VR": "DS",
                "Name": "Specified Treatment Time",
                "Name1": ""
            },
            {
                "Tag": "(3008,003B)",
                "VR": "DS",
                "Name": "Delivered Treatment Time",
                "Name1": ""
            },
            {
                "Tag": "(3008,0040)",
                "VR": "SQ",
                "Name": "Control Point Delivery Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0041)",
                "VR": "SQ",
                "Name": "Ion Control Point Delivery Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0042)",
                "VR": "DS",
                "Name": "Specified Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,0044)",
                "VR": "DS",
                "Name": "Delivered Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,0045)",
                "VR": "FL",
                "Name": "Meterset Rate Set",
                "Name1": ""
            },
            {
                "Tag": "(3008,0046)",
                "VR": "FL",
                "Name": "Meterset Rate Delivered",
                "Name1": ""
            },
            {
                "Tag": "(3008,0047)",
                "VR": "FL",
                "Name": "Scan Spot Metersets Delivered",
                "Name1": ""
            },
            {
                "Tag": "(3008,0048)",
                "VR": "DS",
                "Name": "Dose Rate Delivered",
                "Name1": ""
            },
            {
                "Tag": "(3008,0050)",
                "VR": "SQ",
                "Name": "Treatment Summary Calculated Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0052)",
                "VR": "DS",
                "Name": "Cumulative Dose to Dose Reference",
                "Name1": ""
            },
            {
                "Tag": "(3008,0054)",
                "VR": "DA",
                "Name": "First Treatment Date",
                "Name1": ""
            },
            {
                "Tag": "(3008,0056)",
                "VR": "DA",
                "Name": "Most Recent Treatment Date",
                "Name1": ""
            },
            {
                "Tag": "(3008,005A)",
                "VR": "IS",
                "Name": "Number of Fractions Delivered",
                "Name1": ""
            },
            {
                "Tag": "(3008,0060)",
                "VR": "SQ",
                "Name": "Override Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0061)",
                "VR": "AT",
                "Name": "Parameter Sequence Pointer",
                "Name1": ""
            },
            {
                "Tag": "(3008,0062)",
                "VR": "AT",
                "Name": "Override Parameter Pointer",
                "Name1": ""
            },
            {
                "Tag": "(3008,0063)",
                "VR": "IS",
                "Name": "Parameter Item Index",
                "Name1": ""
            },
            {
                "Tag": "(3008,0064)",
                "VR": "IS",
                "Name": "Measured Dose Reference Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0065)",
                "VR": "AT",
                "Name": "Parameter Pointer",
                "Name1": ""
            },
            {
                "Tag": "(3008,0066)",
                "VR": "ST",
                "Name": "Override Reason",
                "Name1": ""
            },
            {
                "Tag": "(3008,0068)",
                "VR": "SQ",
                "Name": "Corrected Parameter Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,006A)",
                "VR": "FL",
                "Name": "Correction Value",
                "Name1": ""
            },
            {
                "Tag": "(3008,0070)",
                "VR": "SQ",
                "Name": "Calculated Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0072)",
                "VR": "IS",
                "Name": "Calculated Dose Reference Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0074)",
                "VR": "ST",
                "Name": "Calculated Dose Reference Description",
                "Name1": ""
            },
            {
                "Tag": "(3008,0076)",
                "VR": "DS",
                "Name": "Calculated Dose Reference Dose Value",
                "Name1": ""
            },
            {
                "Tag": "(3008,0078)",
                "VR": "DS",
                "Name": "Start Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,007A)",
                "VR": "DS",
                "Name": "End Meterset",
                "Name1": ""
            },
            {
                "Tag": "(3008,0080)",
                "VR": "SQ",
                "Name": "Referenced Measured Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0082)",
                "VR": "IS",
                "Name": "Referenced Measured Dose Reference Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0090)",
                "VR": "SQ",
                "Name": "Referenced Calculated Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0092)",
                "VR": "IS",
                "Name": "Referenced Calculated Dose Reference Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,00A0)",
                "VR": "SQ",
                "Name": "Beam Limiting Device Leaf Pairs Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00B0)",
                "VR": "SQ",
                "Name": "Recorded Wedge Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00C0)",
                "VR": "SQ",
                "Name": "Recorded Compensator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00D0)",
                "VR": "SQ",
                "Name": "Recorded Block Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00E0)",
                "VR": "SQ",
                "Name": "Treatment Summary Measured Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00F0)",
                "VR": "SQ",
                "Name": "Recorded Snout Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00F2)",
                "VR": "SQ",
                "Name": "Recorded Range Shifter Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00F4)",
                "VR": "SQ",
                "Name": "Recorded Lateral Spreading Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,00F6)",
                "VR": "SQ",
                "Name": "Recorded Range Modulator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0100)",
                "VR": "SQ",
                "Name": "Recorded Source Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0105)",
                "VR": "LO",
                "Name": "Source Serial Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0110)",
                "VR": "SQ",
                "Name": "Treatment Session Application Setup Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0116)",
                "VR": "CS",
                "Name": "Application Setup Check",
                "Name1": ""
            },
            {
                "Tag": "(3008,0120)",
                "VR": "SQ",
                "Name": "Recorded Brachy Accessory Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0122)",
                "VR": "IS",
                "Name": "Referenced Brachy Accessory Device Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0130)",
                "VR": "SQ",
                "Name": "Recorded Channel Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0132)",
                "VR": "DS",
                "Name": "Specified Channel Total Time",
                "Name1": ""
            },
            {
                "Tag": "(3008,0134)",
                "VR": "DS",
                "Name": "Delivered Channel Total Time",
                "Name1": ""
            },
            {
                "Tag": "(3008,0136)",
                "VR": "IS",
                "Name": "Specified Number of Pulses",
                "Name1": ""
            },
            {
                "Tag": "(3008,0138)",
                "VR": "IS",
                "Name": "Delivered Number of Pulses",
                "Name1": ""
            },
            {
                "Tag": "(3008,013A)",
                "VR": "DS",
                "Name": "Specified Pulse Repetition Interval",
                "Name1": ""
            },
            {
                "Tag": "(3008,013C)",
                "VR": "DS",
                "Name": "Delivered Pulse Repetition Interval",
                "Name1": ""
            },
            {
                "Tag": "(3008,0140)",
                "VR": "SQ",
                "Name": "Recorded Source Applicator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0142)",
                "VR": "IS",
                "Name": "Referenced Source Applicator Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0150)",
                "VR": "SQ",
                "Name": "Recorded Channel Shield Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0152)",
                "VR": "IS",
                "Name": "Referenced Channel Shield Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0160)",
                "VR": "SQ",
                "Name": "Brachy Control Point Delivered Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0162)",
                "VR": "DA",
                "Name": "Safe Position Exit Date",
                "Name1": ""
            },
            {
                "Tag": "(3008,0164)",
                "VR": "TM",
                "Name": "Safe Position Exit Time",
                "Name1": ""
            },
            {
                "Tag": "(3008,0166)",
                "VR": "DA",
                "Name": "Safe Position Return Date",
                "Name1": ""
            },
            {
                "Tag": "(3008,0168)",
                "VR": "TM",
                "Name": "Safe Position Return Time",
                "Name1": ""
            },
            {
                "Tag": "(3008,0171)",
                "VR": "SQ",
                "Name": "Pulse Specific Brachy Control Point Delivered Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0172)",
                "VR": "US",
                "Name": "Pulse Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0173)",
                "VR": "SQ",
                "Name": "Brachy Pulse Control Point Delivered Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0200)",
                "VR": "CS",
                "Name": "Current Treatment Status",
                "Name1": ""
            },
            {
                "Tag": "(3008,0202)",
                "VR": "ST",
                "Name": "Treatment Status Comment",
                "Name1": ""
            },
            {
                "Tag": "(3008,0220)",
                "VR": "SQ",
                "Name": "Fraction Group Summary Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0223)",
                "VR": "IS",
                "Name": "Referenced Fraction Number",
                "Name1": ""
            },
            {
                "Tag": "(3008,0224)",
                "VR": "CS",
                "Name": "Fraction Group Type",
                "Name1": ""
            },
            {
                "Tag": "(3008,0230)",
                "VR": "CS",
                "Name": "Beam Stopper Position",
                "Name1": ""
            },
            {
                "Tag": "(3008,0240)",
                "VR": "SQ",
                "Name": "Fraction Status Summary Sequence",
                "Name1": ""
            },
            {
                "Tag": "(3008,0250)",
                "VR": "DA",
                "Name": "Treatment Date",
                "Name1": ""
            },
            {
                "Tag": "(3008,0251)",
                "VR": "TM",
                "Name": "Treatment Time",
                "Name1": ""
            },
            {
                "Tag": "(300A,0002)",
                "VR": "SH",
                "Name": "RT Plan Label",
                "Name1": ""
            },
            {
                "Tag": "(300A,0003)",
                "VR": "LO",
                "Name": "RT Plan Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,0004)",
                "VR": "ST",
                "Name": "RT Plan Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0006)",
                "VR": "DA",
                "Name": "RT Plan Date",
                "Name1": ""
            },
            {
                "Tag": "(300A,0007)",
                "VR": "TM",
                "Name": "RT Plan Time",
                "Name1": ""
            },
            {
                "Tag": "(300A,0009)",
                "VR": "LO",
                "Name": "Treatment Protocols",
                "Name1": ""
            },
            {
                "Tag": "(300A,000A)",
                "VR": "CS",
                "Name": "Plan Intent",
                "Name1": ""
            },
            {
                "Tag": "(300A,000B)",
                "VR": "LO",
                "Name": "Treatment Sites",
                "Name1": ""
            },
            {
                "Tag": "(300A,000C)",
                "VR": "CS",
                "Name": "RT Plan Geometry",
                "Name1": ""
            },
            {
                "Tag": "(300A,000E)",
                "VR": "ST",
                "Name": "Prescription Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0010)",
                "VR": "SQ",
                "Name": "Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0012)",
                "VR": "IS",
                "Name": "Dose Reference Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0013)",
                "VR": "UI",
                "Name": "Dose Reference UID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0014)",
                "VR": "CS",
                "Name": "Dose Reference Structure Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0015)",
                "VR": "CS",
                "Name": "Nominal Beam Energy Unit",
                "Name1": ""
            },
            {
                "Tag": "(300A,0016)",
                "VR": "LO",
                "Name": "Dose Reference Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0018)",
                "VR": "DS",
                "Name": "Dose Reference Point Coordinates",
                "Name1": ""
            },
            {
                "Tag": "(300A,001A)",
                "VR": "DS",
                "Name": "Nominal Prior Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0020)",
                "VR": "CS",
                "Name": "Dose Reference Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0021)",
                "VR": "DS",
                "Name": "Constraint Weight",
                "Name1": ""
            },
            {
                "Tag": "(300A,0022)",
                "VR": "DS",
                "Name": "Delivery Warning Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0023)",
                "VR": "DS",
                "Name": "Delivery Maximum Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0025)",
                "VR": "DS",
                "Name": "Target Minimum Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0026)",
                "VR": "DS",
                "Name": "Target Prescription Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0027)",
                "VR": "DS",
                "Name": "Target Maximum Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0028)",
                "VR": "DS",
                "Name": "Target Underdose Volume Fraction",
                "Name1": ""
            },
            {
                "Tag": "(300A,002A)",
                "VR": "DS",
                "Name": "Organ at Risk Full-volume Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,002B)",
                "VR": "DS",
                "Name": "Organ at Risk Limit Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,002C)",
                "VR": "DS",
                "Name": "Organ at Risk Maximum Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,002D)",
                "VR": "DS",
                "Name": "Organ at Risk Overdose Volume Fraction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0040)",
                "VR": "SQ",
                "Name": "Tolerance Table Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0042)",
                "VR": "IS",
                "Name": "Tolerance Table Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0043)",
                "VR": "SH",
                "Name": "Tolerance Table Label",
                "Name1": ""
            },
            {
                "Tag": "(300A,0044)",
                "VR": "DS",
                "Name": "Gantry Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0046)",
                "VR": "DS",
                "Name": "Beam Limiting Device Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0048)",
                "VR": "SQ",
                "Name": "Beam Limiting Device Tolerance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,004A)",
                "VR": "DS",
                "Name": "Beam Limiting Device Position Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,004B)",
                "VR": "FL",
                "Name": "Snout Position Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,004C)",
                "VR": "DS",
                "Name": "Patient Support Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,004E)",
                "VR": "DS",
                "Name": "Table Top Eccentric Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,004F)",
                "VR": "FL",
                "Name": "Table Top Pitch Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0050)",
                "VR": "FL",
                "Name": "Table Top Roll Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0051)",
                "VR": "DS",
                "Name": "Table Top Vertical Position Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0052)",
                "VR": "DS",
                "Name": "Table Top Longitudinal Position Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0053)",
                "VR": "DS",
                "Name": "Table Top Lateral Position Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0055)",
                "VR": "CS",
                "Name": "RT Plan Relationship",
                "Name1": ""
            },
            {
                "Tag": "(300A,0070)",
                "VR": "SQ",
                "Name": "Fraction Group Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0071)",
                "VR": "IS",
                "Name": "Fraction Group Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0072)",
                "VR": "LO",
                "Name": "Fraction Group Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0078)",
                "VR": "IS",
                "Name": "Number of Fractions Planned",
                "Name1": ""
            },
            {
                "Tag": "(300A,0079)",
                "VR": "IS",
                "Name": "Number of Fraction Pattern Digits Per Day",
                "Name1": ""
            },
            {
                "Tag": "(300A,007A)",
                "VR": "IS",
                "Name": "Repeat Fraction Cycle Length",
                "Name1": ""
            },
            {
                "Tag": "(300A,007B)",
                "VR": "LT",
                "Name": "Fraction Pattern",
                "Name1": ""
            },
            {
                "Tag": "(300A,0080)",
                "VR": "IS",
                "Name": "Number of Beams",
                "Name1": ""
            },
            {
                "Tag": "(300A,0082)",
                "VR": "DS",
                "Name": "Beam Dose Specification Point",
                "Name1": ""
            },
            {
                "Tag": "(300A,0084)",
                "VR": "DS",
                "Name": "Beam Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0086)",
                "VR": "DS",
                "Name": "Beam Meterset",
                "Name1": ""
            },
            {
                "Tag": "(300A,0088)",
                "VR": "FL",
                "Name": "Beam Dose Point Depth",
                "Name1": "Retired"
            },
            {
                "Tag": "(300A,0089)",
                "VR": "FL",
                "Name": "Beam Dose Point Equivalent Depth",
                "Name1": "Retired"
            },
            {
                "Tag": "(300A,008A)",
                "VR": "FL",
                "Name": "Beam Dose Point SSD",
                "Name1": "Retired"
            },
            {
                "Tag": "(300A,008B)",
                "VR": "CS",
                "Name": "Beam Dose Meaning",
                "Name1": ""
            },
            {
                "Tag": "(300A,008C)",
                "VR": "SQ",
                "Name": "Beam Dose Verification Control Point Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,008D)",
                "VR": "FL",
                "Name": "Average Beam Dose Point Depth",
                "Name1": ""
            },
            {
                "Tag": "(300A,008E)",
                "VR": "FL",
                "Name": "Average Beam Dose Point Equivalent Depth",
                "Name1": ""
            },
            {
                "Tag": "(300A,008F)",
                "VR": "FL",
                "Name": "Average Beam Dose Point SSD",
                "Name1": ""
            },
            {
                "Tag": "(300A,0090)",
                "VR": "CS",
                "Name": "Beam Dose Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0091)",
                "VR": "DS",
                "Name": "Alternate Beam Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,0092)",
                "VR": "CS",
                "Name": "Alternate Beam Dose Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00A0)",
                "VR": "IS",
                "Name": "Number of Brachy Application Setups",
                "Name1": ""
            },
            {
                "Tag": "(300A,00A2)",
                "VR": "DS",
                "Name": "Brachy Application Setup Dose Specification Point",
                "Name1": ""
            },
            {
                "Tag": "(300A,00A4)",
                "VR": "DS",
                "Name": "Brachy Application Setup Dose",
                "Name1": ""
            },
            {
                "Tag": "(300A,00B0)",
                "VR": "SQ",
                "Name": "Beam Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,00B2)",
                "VR": "SH",
                "Name": "Treatment Machine Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,00B3)",
                "VR": "CS",
                "Name": "Primary Dosimeter Unit",
                "Name1": ""
            },
            {
                "Tag": "(300A,00B4)",
                "VR": "DS",
                "Name": "Source-Axis Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00B6)",
                "VR": "SQ",
                "Name": "Beam Limiting Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,00B8)",
                "VR": "CS",
                "Name": "RT Beam Limiting Device Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00BA)",
                "VR": "DS",
                "Name": "Source to Beam Limiting Device Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00BB)",
                "VR": "FL",
                "Name": "Isocenter to Beam Limiting Device Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00BC)",
                "VR": "IS",
                "Name": "Number of Leaf/Jaw Pairs",
                "Name1": ""
            },
            {
                "Tag": "(300A,00BE)",
                "VR": "DS",
                "Name": "Leaf Position Boundaries",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C0)",
                "VR": "IS",
                "Name": "Beam Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C2)",
                "VR": "LO",
                "Name": "Beam Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C3)",
                "VR": "ST",
                "Name": "Beam Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C4)",
                "VR": "CS",
                "Name": "Beam Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C5)",
                "VR": "FD",
                "Name": "Beam Delivery Duration Limit",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C6)",
                "VR": "CS",
                "Name": "Radiation Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C7)",
                "VR": "CS",
                "Name": "High-Dose Technique Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00C8)",
                "VR": "IS",
                "Name": "Reference Image Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,00CA)",
                "VR": "SQ",
                "Name": "Planned Verification Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,00CC)",
                "VR": "LO",
                "Name": "Imaging Device-Specific Acquisition Parameters",
                "Name1": ""
            },
            {
                "Tag": "(300A,00CE)",
                "VR": "CS",
                "Name": "Treatment Delivery Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D0)",
                "VR": "IS",
                "Name": "Number of Wedges",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D1)",
                "VR": "SQ",
                "Name": "Wedge Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D2)",
                "VR": "IS",
                "Name": "Wedge Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D3)",
                "VR": "CS",
                "Name": "Wedge Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D4)",
                "VR": "SH",
                "Name": "Wedge ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D5)",
                "VR": "IS",
                "Name": "Wedge Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D6)",
                "VR": "DS",
                "Name": "Wedge Factor",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D7)",
                "VR": "FL",
                "Name": "Total Wedge Tray Water-Equivalent Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D8)",
                "VR": "DS",
                "Name": "Wedge Orientation",
                "Name1": ""
            },
            {
                "Tag": "(300A,00D9)",
                "VR": "FL",
                "Name": "Isocenter to Wedge Tray Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00DA)",
                "VR": "DS",
                "Name": "Source to Wedge Tray Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00DB)",
                "VR": "FL",
                "Name": "Wedge Thin Edge Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,00DC)",
                "VR": "SH",
                "Name": "Bolus ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,00DD)",
                "VR": "ST",
                "Name": "Bolus Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,00DE)",
                "VR": "DS",
                "Name": "Effective Wedge Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E0)",
                "VR": "IS",
                "Name": "Number of Compensators",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E1)",
                "VR": "SH",
                "Name": "Material ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E2)",
                "VR": "DS",
                "Name": "Total Compensator Tray Factor",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E3)",
                "VR": "SQ",
                "Name": "Compensator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E4)",
                "VR": "IS",
                "Name": "Compensator Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E5)",
                "VR": "SH",
                "Name": "Compensator ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E6)",
                "VR": "DS",
                "Name": "Source to Compensator Tray Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E7)",
                "VR": "IS",
                "Name": "Compensator Rows",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E8)",
                "VR": "IS",
                "Name": "Compensator Columns",
                "Name1": ""
            },
            {
                "Tag": "(300A,00E9)",
                "VR": "DS",
                "Name": "Compensator Pixel Spacing",
                "Name1": ""
            },
            {
                "Tag": "(300A,00EA)",
                "VR": "DS",
                "Name": "Compensator Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,00EB)",
                "VR": "DS",
                "Name": "Compensator Transmission Data",
                "Name1": ""
            },
            {
                "Tag": "(300A,00EC)",
                "VR": "DS",
                "Name": "Compensator Thickness Data",
                "Name1": ""
            },
            {
                "Tag": "(300A,00ED)",
                "VR": "IS",
                "Name": "Number of Boli",
                "Name1": ""
            },
            {
                "Tag": "(300A,00EE)",
                "VR": "CS",
                "Name": "Compensator Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00EF)",
                "VR": "SH",
                "Name": "Compensator Tray ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F0)",
                "VR": "IS",
                "Name": "Number of Blocks",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F2)",
                "VR": "DS",
                "Name": "Total Block Tray Factor",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F3)",
                "VR": "FL",
                "Name": "Total Block Tray Water-Equivalent Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F4)",
                "VR": "SQ",
                "Name": "Block Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F5)",
                "VR": "SH",
                "Name": "Block Tray ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F6)",
                "VR": "DS",
                "Name": "Source to Block Tray Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F7)",
                "VR": "FL",
                "Name": "Isocenter to Block Tray Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F8)",
                "VR": "CS",
                "Name": "Block Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,00F9)",
                "VR": "LO",
                "Name": "Accessory Code",
                "Name1": ""
            },
            {
                "Tag": "(300A,00FA)",
                "VR": "CS",
                "Name": "Block Divergence",
                "Name1": ""
            },
            {
                "Tag": "(300A,00FB)",
                "VR": "CS",
                "Name": "Block Mounting Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,00FC)",
                "VR": "IS",
                "Name": "Block Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,00FE)",
                "VR": "LO",
                "Name": "Block Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,0100)",
                "VR": "DS",
                "Name": "Block Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,0102)",
                "VR": "DS",
                "Name": "Block Transmission",
                "Name1": ""
            },
            {
                "Tag": "(300A,0104)",
                "VR": "IS",
                "Name": "Block Number of Points",
                "Name1": ""
            },
            {
                "Tag": "(300A,0106)",
                "VR": "DS",
                "Name": "Block Data",
                "Name1": ""
            },
            {
                "Tag": "(300A,0107)",
                "VR": "SQ",
                "Name": "Applicator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0108)",
                "VR": "SH",
                "Name": "Applicator ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0109)",
                "VR": "CS",
                "Name": "Applicator Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,010A)",
                "VR": "LO",
                "Name": "Applicator Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,010C)",
                "VR": "DS",
                "Name": "Cumulative Dose Reference Coefficient",
                "Name1": ""
            },
            {
                "Tag": "(300A,010E)",
                "VR": "DS",
                "Name": "Final Cumulative Meterset Weight",
                "Name1": ""
            },
            {
                "Tag": "(300A,0110)",
                "VR": "IS",
                "Name": "Number of Control Points",
                "Name1": ""
            },
            {
                "Tag": "(300A,0111)",
                "VR": "SQ",
                "Name": "Control Point Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0112)",
                "VR": "IS",
                "Name": "Control Point Index",
                "Name1": ""
            },
            {
                "Tag": "(300A,0114)",
                "VR": "DS",
                "Name": "Nominal Beam Energy",
                "Name1": ""
            },
            {
                "Tag": "(300A,0115)",
                "VR": "DS",
                "Name": "Dose Rate Set",
                "Name1": ""
            },
            {
                "Tag": "(300A,0116)",
                "VR": "SQ",
                "Name": "Wedge Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0118)",
                "VR": "CS",
                "Name": "Wedge Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,011A)",
                "VR": "SQ",
                "Name": "Beam Limiting Device Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,011C)",
                "VR": "DS",
                "Name": "Leaf/Jaw Positions",
                "Name1": ""
            },
            {
                "Tag": "(300A,011E)",
                "VR": "DS",
                "Name": "Gantry Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,011F)",
                "VR": "CS",
                "Name": "Gantry Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0120)",
                "VR": "DS",
                "Name": "Beam Limiting Device Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,0121)",
                "VR": "CS",
                "Name": "Beam Limiting Device Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0122)",
                "VR": "DS",
                "Name": "Patient Support Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,0123)",
                "VR": "CS",
                "Name": "Patient Support Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0124)",
                "VR": "DS",
                "Name": "Table Top Eccentric Axis Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0125)",
                "VR": "DS",
                "Name": "Table Top Eccentric Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,0126)",
                "VR": "CS",
                "Name": "Table Top Eccentric Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0128)",
                "VR": "DS",
                "Name": "Table Top Vertical Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,0129)",
                "VR": "DS",
                "Name": "Table Top Longitudinal Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,012A)",
                "VR": "DS",
                "Name": "Table Top Lateral Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,012C)",
                "VR": "DS",
                "Name": "Isocenter Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,012E)",
                "VR": "DS",
                "Name": "Surface Entry Point",
                "Name1": ""
            },
            {
                "Tag": "(300A,0130)",
                "VR": "DS",
                "Name": "Source to Surface Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0131)",
                "VR": "FL",
                "Name": "Average Beam Dose Point Source to External Contour Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0132)",
                "VR": "FL",
                "Name": "Source to External Contour Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0133)",
                "VR": "FL",
                "Name": "External Contour Entry Point",
                "Name1": ""
            },
            {
                "Tag": "(300A,0134)",
                "VR": "DS",
                "Name": "Cumulative Meterset Weight",
                "Name1": ""
            },
            {
                "Tag": "(300A,0140)",
                "VR": "FL",
                "Name": "Table Top Pitch Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,0142)",
                "VR": "CS",
                "Name": "Table Top Pitch Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0144)",
                "VR": "FL",
                "Name": "Table Top Roll Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,0146)",
                "VR": "CS",
                "Name": "Table Top Roll Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0148)",
                "VR": "FL",
                "Name": "Head Fixation Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,014A)",
                "VR": "FL",
                "Name": "Gantry Pitch Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,014C)",
                "VR": "CS",
                "Name": "Gantry Pitch Rotation Direction",
                "Name1": ""
            },
            {
                "Tag": "(300A,014E)",
                "VR": "FL",
                "Name": "Gantry Pitch Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0150)",
                "VR": "CS",
                "Name": "Fixation Eye",
                "Name1": ""
            },
            {
                "Tag": "(300A,0151)",
                "VR": "DS",
                "Name": "Chair Head Frame Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,0152)",
                "VR": "DS",
                "Name": "Head Fixation Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0153)",
                "VR": "DS",
                "Name": "Chair Head Frame Position Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0154)",
                "VR": "DS",
                "Name": "Fixation Light Azimuthal Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0155)",
                "VR": "DS",
                "Name": "Fixation Light Polar Angle Tolerance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0180)",
                "VR": "SQ",
                "Name": "Patient Setup Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0182)",
                "VR": "IS",
                "Name": "Patient Setup Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0183)",
                "VR": "LO",
                "Name": "Patient Setup Label",
                "Name1": ""
            },
            {
                "Tag": "(300A,0184)",
                "VR": "LO",
                "Name": "Patient Additional Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,0190)",
                "VR": "SQ",
                "Name": "Fixation Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0192)",
                "VR": "CS",
                "Name": "Fixation Device Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0194)",
                "VR": "SH",
                "Name": "Fixation Device Label",
                "Name1": ""
            },
            {
                "Tag": "(300A,0196)",
                "VR": "ST",
                "Name": "Fixation Device Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0198)",
                "VR": "SH",
                "Name": "Fixation Device Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,0199)",
                "VR": "FL",
                "Name": "Fixation Device Pitch Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,019A)",
                "VR": "FL",
                "Name": "Fixation Device Roll Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,01A0)",
                "VR": "SQ",
                "Name": "Shielding Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,01A2)",
                "VR": "CS",
                "Name": "Shielding Device Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,01A4)",
                "VR": "SH",
                "Name": "Shielding Device Label",
                "Name1": ""
            },
            {
                "Tag": "(300A,01A6)",
                "VR": "ST",
                "Name": "Shielding Device Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,01A8)",
                "VR": "SH",
                "Name": "Shielding Device Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,01B0)",
                "VR": "CS",
                "Name": "Setup Technique",
                "Name1": ""
            },
            {
                "Tag": "(300A,01B2)",
                "VR": "ST",
                "Name": "Setup Technique Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,01B4)",
                "VR": "SQ",
                "Name": "Setup Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,01B6)",
                "VR": "CS",
                "Name": "Setup Device Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,01B8)",
                "VR": "SH",
                "Name": "Setup Device Label",
                "Name1": ""
            },
            {
                "Tag": "(300A,01BA)",
                "VR": "ST",
                "Name": "Setup Device Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,01BC)",
                "VR": "DS",
                "Name": "Setup Device Parameter",
                "Name1": ""
            },
            {
                "Tag": "(300A,01D0)",
                "VR": "ST",
                "Name": "Setup Reference Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,01D2)",
                "VR": "DS",
                "Name": "Table Top Vertical Setup Displacement",
                "Name1": ""
            },
            {
                "Tag": "(300A,01D4)",
                "VR": "DS",
                "Name": "Table Top Longitudinal Setup Displacement",
                "Name1": ""
            },
            {
                "Tag": "(300A,01D6)",
                "VR": "DS",
                "Name": "Table Top Lateral Setup Displacement",
                "Name1": ""
            },
            {
                "Tag": "(300A,0200)",
                "VR": "CS",
                "Name": "Brachy Treatment Technique",
                "Name1": ""
            },
            {
                "Tag": "(300A,0202)",
                "VR": "CS",
                "Name": "Brachy Treatment Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0206)",
                "VR": "SQ",
                "Name": "Treatment Machine Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0210)",
                "VR": "SQ",
                "Name": "Source Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0212)",
                "VR": "IS",
                "Name": "Source Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0214)",
                "VR": "CS",
                "Name": "Source Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0216)",
                "VR": "LO",
                "Name": "Source Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(300A,0218)",
                "VR": "DS",
                "Name": "Active Source Diameter",
                "Name1": ""
            },
            {
                "Tag": "(300A,021A)",
                "VR": "DS",
                "Name": "Active Source Length",
                "Name1": ""
            },
            {
                "Tag": "(300A,021B)",
                "VR": "SH",
                "Name": "Source Model ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,021C)",
                "VR": "LO",
                "Name": "Source Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0222)",
                "VR": "DS",
                "Name": "Source Encapsulation Nominal Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,0224)",
                "VR": "DS",
                "Name": "Source Encapsulation Nominal Transmission",
                "Name1": ""
            },
            {
                "Tag": "(300A,0226)",
                "VR": "LO",
                "Name": "Source Isotope Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,0228)",
                "VR": "DS",
                "Name": "Source Isotope Half Life",
                "Name1": ""
            },
            {
                "Tag": "(300A,0229)",
                "VR": "CS",
                "Name": "Source Strength Units",
                "Name1": ""
            },
            {
                "Tag": "(300A,022A)",
                "VR": "DS",
                "Name": "Reference Air Kerma Rate",
                "Name1": ""
            },
            {
                "Tag": "(300A,022B)",
                "VR": "DS",
                "Name": "Source Strength",
                "Name1": ""
            },
            {
                "Tag": "(300A,022C)",
                "VR": "DA",
                "Name": "Source Strength Reference Date",
                "Name1": ""
            },
            {
                "Tag": "(300A,022E)",
                "VR": "TM",
                "Name": "Source Strength Reference Time",
                "Name1": ""
            },
            {
                "Tag": "(300A,0230)",
                "VR": "SQ",
                "Name": "Application Setup Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0232)",
                "VR": "CS",
                "Name": "Application Setup Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0234)",
                "VR": "IS",
                "Name": "Application Setup Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0236)",
                "VR": "LO",
                "Name": "Application Setup Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,0238)",
                "VR": "LO",
                "Name": "Application Setup Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(300A,0240)",
                "VR": "IS",
                "Name": "Template Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0242)",
                "VR": "SH",
                "Name": "Template Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0244)",
                "VR": "LO",
                "Name": "Template Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,0250)",
                "VR": "DS",
                "Name": "Total Reference Air Kerma",
                "Name1": ""
            },
            {
                "Tag": "(300A,0260)",
                "VR": "SQ",
                "Name": "Brachy Accessory Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0262)",
                "VR": "IS",
                "Name": "Brachy Accessory Device Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0263)",
                "VR": "SH",
                "Name": "Brachy Accessory Device ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0264)",
                "VR": "CS",
                "Name": "Brachy Accessory Device Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0266)",
                "VR": "LO",
                "Name": "Brachy Accessory Device Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,026A)",
                "VR": "DS",
                "Name": "Brachy Accessory Device Nominal Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,026C)",
                "VR": "DS",
                "Name": "Brachy Accessory Device Nominal Transmission",
                "Name1": ""
            },
            {
                "Tag": "(300A,0280)",
                "VR": "SQ",
                "Name": "Channel Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0282)",
                "VR": "IS",
                "Name": "Channel Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0284)",
                "VR": "DS",
                "Name": "Channel Length",
                "Name1": ""
            },
            {
                "Tag": "(300A,0286)",
                "VR": "DS",
                "Name": "Channel Total Time",
                "Name1": ""
            },
            {
                "Tag": "(300A,0288)",
                "VR": "CS",
                "Name": "Source Movement Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,028A)",
                "VR": "IS",
                "Name": "Number of Pulses",
                "Name1": ""
            },
            {
                "Tag": "(300A,028C)",
                "VR": "DS",
                "Name": "Pulse Repetition Interval",
                "Name1": ""
            },
            {
                "Tag": "(300A,0290)",
                "VR": "IS",
                "Name": "Source Applicator Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0291)",
                "VR": "SH",
                "Name": "Source Applicator ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0292)",
                "VR": "CS",
                "Name": "Source Applicator Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0294)",
                "VR": "LO",
                "Name": "Source Applicator Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,0296)",
                "VR": "DS",
                "Name": "Source Applicator Length",
                "Name1": ""
            },
            {
                "Tag": "(300A,0298)",
                "VR": "LO",
                "Name": "Source Applicator Manufacturer",
                "Name1": ""
            },
            {
                "Tag": "(300A,029C)",
                "VR": "DS",
                "Name": "Source Applicator Wall Nominal Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,029E)",
                "VR": "DS",
                "Name": "Source Applicator Wall Nominal Transmission",
                "Name1": ""
            },
            {
                "Tag": "(300A,02A0)",
                "VR": "DS",
                "Name": "Source Applicator Step Size",
                "Name1": ""
            },
            {
                "Tag": "(300A,02A2)",
                "VR": "IS",
                "Name": "Transfer Tube Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,02A4)",
                "VR": "DS",
                "Name": "Transfer Tube Length",
                "Name1": ""
            },
            {
                "Tag": "(300A,02B0)",
                "VR": "SQ",
                "Name": "Channel Shield Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,02B2)",
                "VR": "IS",
                "Name": "Channel Shield Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,02B3)",
                "VR": "SH",
                "Name": "Channel Shield ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,02B4)",
                "VR": "LO",
                "Name": "Channel Shield Name",
                "Name1": ""
            },
            {
                "Tag": "(300A,02B8)",
                "VR": "DS",
                "Name": "Channel Shield Nominal Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,02BA)",
                "VR": "DS",
                "Name": "Channel Shield Nominal Transmission",
                "Name1": ""
            },
            {
                "Tag": "(300A,02C8)",
                "VR": "DS",
                "Name": "Final Cumulative Time Weight",
                "Name1": ""
            },
            {
                "Tag": "(300A,02D0)",
                "VR": "SQ",
                "Name": "Brachy Control Point Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,02D2)",
                "VR": "DS",
                "Name": "Control Point Relative Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,02D4)",
                "VR": "DS",
                "Name": "Control Point 3D Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,02D6)",
                "VR": "DS",
                "Name": "Cumulative Time Weight",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E0)",
                "VR": "CS",
                "Name": "Compensator Divergence",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E1)",
                "VR": "CS",
                "Name": "Compensator Mounting Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E2)",
                "VR": "DS",
                "Name": "Source to Compensator Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E3)",
                "VR": "FL",
                "Name": "Total Compensator Tray Water-Equivalent Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E4)",
                "VR": "FL",
                "Name": "Isocenter to Compensator Tray Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E5)",
                "VR": "FL",
                "Name": "Compensator Column Offset",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E6)",
                "VR": "FL",
                "Name": "Isocenter to Compensator Distances",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E7)",
                "VR": "FL",
                "Name": "Compensator Relative Stopping Power Ratio",
                "Name1": ""
            },
            {
                "Tag": "(300A,02E8)",
                "VR": "FL",
                "Name": "Compensator Milling Tool Diameter",
                "Name1": ""
            },
            {
                "Tag": "(300A,02EA)",
                "VR": "SQ",
                "Name": "Ion Range Compensator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,02EB)",
                "VR": "LT",
                "Name": "Compensator Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0302)",
                "VR": "IS",
                "Name": "Radiation Mass Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0304)",
                "VR": "IS",
                "Name": "Radiation Atomic Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0306)",
                "VR": "SS",
                "Name": "Radiation Charge State",
                "Name1": ""
            },
            {
                "Tag": "(300A,0308)",
                "VR": "CS",
                "Name": "Scan Mode",
                "Name1": ""
            },
            {
                "Tag": "(300A,0309)",
                "VR": "CS",
                "Name": "Modulated Scan Mode Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,030A)",
                "VR": "FL",
                "Name": "Virtual Source-Axis Distances",
                "Name1": ""
            },
            {
                "Tag": "(300A,030C)",
                "VR": "SQ",
                "Name": "Snout Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,030D)",
                "VR": "FL",
                "Name": "Snout Position",
                "Name1": ""
            },
            {
                "Tag": "(300A,030F)",
                "VR": "SH",
                "Name": "Snout ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0312)",
                "VR": "IS",
                "Name": "Number of Range Shifters",
                "Name1": ""
            },
            {
                "Tag": "(300A,0314)",
                "VR": "SQ",
                "Name": "Range Shifter Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0316)",
                "VR": "IS",
                "Name": "Range Shifter Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0318)",
                "VR": "SH",
                "Name": "Range Shifter ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0320)",
                "VR": "CS",
                "Name": "Range Shifter Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0322)",
                "VR": "LO",
                "Name": "Range Shifter Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0330)",
                "VR": "IS",
                "Name": "Number of Lateral Spreading Devices",
                "Name1": ""
            },
            {
                "Tag": "(300A,0332)",
                "VR": "SQ",
                "Name": "Lateral Spreading Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0334)",
                "VR": "IS",
                "Name": "Lateral Spreading Device Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0336)",
                "VR": "SH",
                "Name": "Lateral Spreading Device ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0338)",
                "VR": "CS",
                "Name": "Lateral Spreading Device Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,033A)",
                "VR": "LO",
                "Name": "Lateral Spreading Device Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,033C)",
                "VR": "FL",
                "Name": "Lateral Spreading Device Water Equivalent Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,0340)",
                "VR": "IS",
                "Name": "Number of Range Modulators",
                "Name1": ""
            },
            {
                "Tag": "(300A,0342)",
                "VR": "SQ",
                "Name": "Range Modulator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0344)",
                "VR": "IS",
                "Name": "Range Modulator Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0346)",
                "VR": "SH",
                "Name": "Range Modulator ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0348)",
                "VR": "CS",
                "Name": "Range Modulator Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,034A)",
                "VR": "LO",
                "Name": "Range Modulator Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,034C)",
                "VR": "SH",
                "Name": "Beam Current Modulation ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0350)",
                "VR": "CS",
                "Name": "Patient Support Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0352)",
                "VR": "SH",
                "Name": "Patient Support ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0354)",
                "VR": "LO",
                "Name": "Patient Support Accessory Code",
                "Name1": ""
            },
            {
                "Tag": "(300A,0355)",
                "VR": "LO",
                "Name": "Tray Accessory Code",
                "Name1": ""
            },
            {
                "Tag": "(300A,0356)",
                "VR": "FL",
                "Name": "Fixation Light Azimuthal Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,0358)",
                "VR": "FL",
                "Name": "Fixation Light Polar Angle",
                "Name1": ""
            },
            {
                "Tag": "(300A,035A)",
                "VR": "FL",
                "Name": "Meterset Rate",
                "Name1": ""
            },
            {
                "Tag": "(300A,0360)",
                "VR": "SQ",
                "Name": "Range Shifter Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0362)",
                "VR": "LO",
                "Name": "Range Shifter Setting",
                "Name1": ""
            },
            {
                "Tag": "(300A,0364)",
                "VR": "FL",
                "Name": "Isocenter to Range Shifter Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0366)",
                "VR": "FL",
                "Name": "Range Shifter Water Equivalent Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,0370)",
                "VR": "SQ",
                "Name": "Lateral Spreading Device Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0372)",
                "VR": "LO",
                "Name": "Lateral Spreading Device Setting",
                "Name1": ""
            },
            {
                "Tag": "(300A,0374)",
                "VR": "FL",
                "Name": "Isocenter to Lateral Spreading Device Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0380)",
                "VR": "SQ",
                "Name": "Range Modulator Settings Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0382)",
                "VR": "FL",
                "Name": "Range Modulator Gating Start Value",
                "Name1": ""
            },
            {
                "Tag": "(300A,0384)",
                "VR": "FL",
                "Name": "Range Modulator Gating Stop Value",
                "Name1": ""
            },
            {
                "Tag": "(300A,0386)",
                "VR": "FL",
                "Name": "Range Modulator Gating Start Water Equivalent Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,0388)",
                "VR": "FL",
                "Name": "Range Modulator Gating Stop Water Equivalent Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,038A)",
                "VR": "FL",
                "Name": "Isocenter to Range Modulator Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0390)",
                "VR": "SH",
                "Name": "Scan Spot Tune ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0391)",
                "VR": "IS",
                "Name": "Scan Spot Prescribed Indices",
                "Name1": ""
            },
            {
                "Tag": "(300A,0392)",
                "VR": "IS",
                "Name": "Number of Scan Spot Positions",
                "Name1": ""
            },
            {
                "Tag": "(300A,0393)",
                "VR": "CS",
                "Name": "Scan Spot Reordered",
                "Name1": ""
            },
            {
                "Tag": "(300A,0394)",
                "VR": "FL",
                "Name": "Scan Spot Position Map",
                "Name1": ""
            },
            {
                "Tag": "(300A,0395)",
                "VR": "CS",
                "Name": "Scan Spot Reordering Allowed",
                "Name1": ""
            },
            {
                "Tag": "(300A,0396)",
                "VR": "FL",
                "Name": "Scan Spot Meterset Weights",
                "Name1": ""
            },
            {
                "Tag": "(300A,0398)",
                "VR": "FL",
                "Name": "Scanning Spot Size",
                "Name1": ""
            },
            {
                "Tag": "(300A,039A)",
                "VR": "IS",
                "Name": "Number of Paintings",
                "Name1": ""
            },
            {
                "Tag": "(300A,03A0)",
                "VR": "SQ",
                "Name": "Ion Tolerance Table Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,03A2)",
                "VR": "SQ",
                "Name": "Ion Beam Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,03A4)",
                "VR": "SQ",
                "Name": "Ion Beam Limiting Device Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,03A6)",
                "VR": "SQ",
                "Name": "Ion Block Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,03A8)",
                "VR": "SQ",
                "Name": "Ion Control Point Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,03AA)",
                "VR": "SQ",
                "Name": "Ion Wedge Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,03AC)",
                "VR": "SQ",
                "Name": "Ion Wedge Position Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0401)",
                "VR": "SQ",
                "Name": "Referenced Setup Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0402)",
                "VR": "ST",
                "Name": "Setup Image Comment",
                "Name1": ""
            },
            {
                "Tag": "(300A,0410)",
                "VR": "SQ",
                "Name": "Motion Synchronization Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0412)",
                "VR": "FL",
                "Name": "Control Point Orientation",
                "Name1": ""
            },
            {
                "Tag": "(300A,0420)",
                "VR": "SQ",
                "Name": "General Accessory Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0421)",
                "VR": "SH",
                "Name": "General Accessory ID",
                "Name1": ""
            },
            {
                "Tag": "(300A,0422)",
                "VR": "ST",
                "Name": "General Accessory Description",
                "Name1": ""
            },
            {
                "Tag": "(300A,0423)",
                "VR": "CS",
                "Name": "General Accessory Type",
                "Name1": ""
            },
            {
                "Tag": "(300A,0424)",
                "VR": "IS",
                "Name": "General Accessory Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0425)",
                "VR": "FL",
                "Name": "Source to General Accessory Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0431)",
                "VR": "SQ",
                "Name": "Applicator Geometry Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0432)",
                "VR": "CS",
                "Name": "Applicator Aperture Shape",
                "Name1": ""
            },
            {
                "Tag": "(300A,0433)",
                "VR": "FL",
                "Name": "Applicator Opening",
                "Name1": ""
            },
            {
                "Tag": "(300A,0434)",
                "VR": "FL",
                "Name": "Applicator Opening X",
                "Name1": ""
            },
            {
                "Tag": "(300A,0435)",
                "VR": "FL",
                "Name": "Applicator Opening Y",
                "Name1": ""
            },
            {
                "Tag": "(300A,0436)",
                "VR": "FL",
                "Name": "Source to Applicator Mounting Position Distance",
                "Name1": ""
            },
            {
                "Tag": "(300A,0440)",
                "VR": "IS",
                "Name": "Number of Block Slab Items",
                "Name1": ""
            },
            {
                "Tag": "(300A,0441)",
                "VR": "SQ",
                "Name": "Block Slab Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0442)",
                "VR": "DS",
                "Name": "Block Slab Thickness",
                "Name1": ""
            },
            {
                "Tag": "(300A,0443)",
                "VR": "US",
                "Name": "Block Slab Number",
                "Name1": ""
            },
            {
                "Tag": "(300A,0450)",
                "VR": "SQ",
                "Name": "Device Motion Control Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0451)",
                "VR": "CS",
                "Name": "Device Motion Execution Mode",
                "Name1": ""
            },
            {
                "Tag": "(300A,0452)",
                "VR": "CS",
                "Name": "Device Motion Observation Mode",
                "Name1": ""
            },
            {
                "Tag": "(300A,0453)",
                "VR": "SQ",
                "Name": "Device Motion Parameter Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0501)",
                "VR": "FL",
                "Name": "Distal Depth Fraction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0502)",
                "VR": "FL",
                "Name": "Distal Depth",
                "Name1": ""
            },
            {
                "Tag": "(300A,0503)",
                "VR": "FL",
                "Name": "Nominal Range Modulation Fractions",
                "Name1": ""
            },
            {
                "Tag": "(300A,0504)",
                "VR": "FL",
                "Name": "Nominal Range Modulated Region Depths",
                "Name1": ""
            },
            {
                "Tag": "(300A,0505)",
                "VR": "SQ",
                "Name": "Depth Dose Parameters Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0506)",
                "VR": "SQ",
                "Name": "Delivered Depth Dose Parameters Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300A,0507)",
                "VR": "FL",
                "Name": "Delivered Distal Depth Fraction",
                "Name1": ""
            },
            {
                "Tag": "(300A,0508)",
                "VR": "FL",
                "Name": "Delivered Distal Depth",
                "Name1": ""
            },
            {
                "Tag": "(300A,0509)",
                "VR": "FL",
                "Name": "Delivered Nominal Range Modulation Fractions",
                "Name1": ""
            },
            {
                "Tag": "(300A,0510)",
                "VR": "FL",
                "Name": "Delivered Nominal Range Modulated Region Depths",
                "Name1": ""
            },
            {
                "Tag": "(300A,0511)",
                "VR": "CS",
                "Name": "Delivered Reference Dose Definition",
                "Name1": ""
            },
            {
                "Tag": "(300A,0512)",
                "VR": "CS",
                "Name": "Reference Dose Definition",
                "Name1": ""
            },
            {
                "Tag": "(300C,0002)",
                "VR": "SQ",
                "Name": "Referenced RT Plan Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0004)",
                "VR": "SQ",
                "Name": "Referenced Beam Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0006)",
                "VR": "IS",
                "Name": "Referenced Beam Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0007)",
                "VR": "IS",
                "Name": "Referenced Reference Image Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0008)",
                "VR": "DS",
                "Name": "Start Cumulative Meterset Weight",
                "Name1": ""
            },
            {
                "Tag": "(300C,0009)",
                "VR": "DS",
                "Name": "End Cumulative Meterset Weight",
                "Name1": ""
            },
            {
                "Tag": "(300C,000A)",
                "VR": "SQ",
                "Name": "Referenced Brachy Application Setup Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,000C)",
                "VR": "IS",
                "Name": "Referenced Brachy Application Setup Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,000E)",
                "VR": "IS",
                "Name": "Referenced Source Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0020)",
                "VR": "SQ",
                "Name": "Referenced Fraction Group Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0022)",
                "VR": "IS",
                "Name": "Referenced Fraction Group Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0040)",
                "VR": "SQ",
                "Name": "Referenced Verification Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0042)",
                "VR": "SQ",
                "Name": "Referenced Reference Image Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0050)",
                "VR": "SQ",
                "Name": "Referenced Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0051)",
                "VR": "IS",
                "Name": "Referenced Dose Reference Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0055)",
                "VR": "SQ",
                "Name": "Brachy Referenced Dose Reference Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0060)",
                "VR": "SQ",
                "Name": "Referenced Structure Set Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,006A)",
                "VR": "IS",
                "Name": "Referenced Patient Setup Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0080)",
                "VR": "SQ",
                "Name": "Referenced Dose Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,00A0)",
                "VR": "IS",
                "Name": "Referenced Tolerance Table Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,00B0)",
                "VR": "SQ",
                "Name": "Referenced Bolus Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,00C0)",
                "VR": "IS",
                "Name": "Referenced Wedge Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,00D0)",
                "VR": "IS",
                "Name": "Referenced Compensator Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,00E0)",
                "VR": "IS",
                "Name": "Referenced Block Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,00F0)",
                "VR": "IS",
                "Name": "Referenced Control Point Index",
                "Name1": ""
            },
            {
                "Tag": "(300C,00F2)",
                "VR": "SQ",
                "Name": "Referenced Control Point Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,00F4)",
                "VR": "IS",
                "Name": "Referenced Start Control Point Index",
                "Name1": ""
            },
            {
                "Tag": "(300C,00F6)",
                "VR": "IS",
                "Name": "Referenced Stop Control Point Index",
                "Name1": ""
            },
            {
                "Tag": "(300C,0100)",
                "VR": "IS",
                "Name": "Referenced Range Shifter Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0102)",
                "VR": "IS",
                "Name": "Referenced Lateral Spreading Device Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0104)",
                "VR": "IS",
                "Name": "Referenced Range Modulator Number",
                "Name1": ""
            },
            {
                "Tag": "(300C,0111)",
                "VR": "SQ",
                "Name": "Omitted Beam Task Sequence",
                "Name1": ""
            },
            {
                "Tag": "(300C,0112)",
                "VR": "CS",
                "Name": "Reason for Omission",
                "Name1": ""
            },
            {
                "Tag": "(300C,0113)",
                "VR": "LO",
                "Name": "Reason for Omission Description",
                "Name1": ""
            },
            {
                "Tag": "(300E,0002)",
                "VR": "CS",
                "Name": "Approval Status",
                "Name1": ""
            },
            {
                "Tag": "(300E,0004)",
                "VR": "DA",
                "Name": "Review Date",
                "Name1": ""
            },
            {
                "Tag": "(300E,0005)",
                "VR": "TM",
                "Name": "Review Time",
                "Name1": ""
            },
            {
                "Tag": "(300E,0008)",
                "VR": "PN",
                "Name": "Reviewer Name",
                "Name1": ""
            },
            {
                "Tag": "(4000,0010)",
                "VR": "LT",
                "Name": "Arbitrary",
                "Name1": "Retired"
            },
            {
                "Tag": "(4000,4000)",
                "VR": "LT",
                "Name": "Text Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0040)",
                "VR": "SH",
                "Name": "Results ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0042)",
                "VR": "LO",
                "Name": "Results ID Issuer",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0050)",
                "VR": "SQ",
                "Name": "Referenced Interpretation Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,00FF)",
                "VR": "CS",
                "Name": "Report Production Status (Trial)",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0100)",
                "VR": "DA",
                "Name": "Interpretation Recorded Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0101)",
                "VR": "TM",
                "Name": "Interpretation Recorded Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0102)",
                "VR": "PN",
                "Name": "Interpretation Recorder",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0103)",
                "VR": "LO",
                "Name": "Reference to Recorded Sound",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0108)",
                "VR": "DA",
                "Name": "Interpretation Transcription Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0109)",
                "VR": "TM",
                "Name": "Interpretation Transcription Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,010A)",
                "VR": "PN",
                "Name": "Interpretation Transcriber",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,010B)",
                "VR": "ST",
                "Name": "Interpretation Text",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,010C)",
                "VR": "PN",
                "Name": "Interpretation Author",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0111)",
                "VR": "SQ",
                "Name": "Interpretation Approver Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0112)",
                "VR": "DA",
                "Name": "Interpretation Approval Date",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0113)",
                "VR": "TM",
                "Name": "Interpretation Approval Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0114)",
                "VR": "PN",
                "Name": "Physician Approving Interpretation",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0115)",
                "VR": "LT",
                "Name": "Interpretation Diagnosis Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0117)",
                "VR": "SQ",
                "Name": "Interpretation Diagnosis Code Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0118)",
                "VR": "SQ",
                "Name": "Results Distribution List Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0119)",
                "VR": "PN",
                "Name": "Distribution Name",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,011A)",
                "VR": "LO",
                "Name": "Distribution Address",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0200)",
                "VR": "SH",
                "Name": "Interpretation ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0202)",
                "VR": "LO",
                "Name": "Interpretation ID Issuer",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0210)",
                "VR": "CS",
                "Name": "Interpretation Type ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0212)",
                "VR": "CS",
                "Name": "Interpretation Status ID",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,0300)",
                "VR": "ST",
                "Name": "Impressions",
                "Name1": "Retired"
            },
            {
                "Tag": "(4008,4000)",
                "VR": "ST",
                "Name": "Results Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(4010,0001)",
                "VR": "CS",
                "Name": "Low Energy Detectors",
                "Name1": ""
            },
            {
                "Tag": "(4010,0002)",
                "VR": "CS",
                "Name": "High Energy Detectors",
                "Name1": ""
            },
            {
                "Tag": "(4010,0004)",
                "VR": "SQ",
                "Name": "Detector Geometry Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1001)",
                "VR": "SQ",
                "Name": "Threat ROI Voxel Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1004)",
                "VR": "FL",
                "Name": "Threat ROI Base",
                "Name1": ""
            },
            {
                "Tag": "(4010,1005)",
                "VR": "FL",
                "Name": "Threat ROI Extents",
                "Name1": ""
            },
            {
                "Tag": "(4010,1006)",
                "VR": "OB",
                "Name": "Threat ROI Bitmap",
                "Name1": ""
            },
            {
                "Tag": "(4010,1007)",
                "VR": "SH",
                "Name": "Route Segment ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,1008)",
                "VR": "CS",
                "Name": "Gantry Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1009)",
                "VR": "CS",
                "Name": "OOI Owner Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,100A)",
                "VR": "SQ",
                "Name": "Route Segment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1010)",
                "VR": "US",
                "Name": "Potential Threat Object ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,1011)",
                "VR": "SQ",
                "Name": "Threat Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1012)",
                "VR": "CS",
                "Name": "Threat Category",
                "Name1": ""
            },
            {
                "Tag": "(4010,1013)",
                "VR": "LT",
                "Name": "Threat Category Description",
                "Name1": ""
            },
            {
                "Tag": "(4010,1014)",
                "VR": "CS",
                "Name": "ATD Ability Assessment",
                "Name1": ""
            },
            {
                "Tag": "(4010,1015)",
                "VR": "CS",
                "Name": "ATD Assessment Flag",
                "Name1": ""
            },
            {
                "Tag": "(4010,1016)",
                "VR": "FL",
                "Name": "ATD Assessment Probability",
                "Name1": ""
            },
            {
                "Tag": "(4010,1017)",
                "VR": "FL",
                "Name": "Mass",
                "Name1": ""
            },
            {
                "Tag": "(4010,1018)",
                "VR": "FL",
                "Name": "Density",
                "Name1": ""
            },
            {
                "Tag": "(4010,1019)",
                "VR": "FL",
                "Name": "Z Effective",
                "Name1": ""
            },
            {
                "Tag": "(4010,101A)",
                "VR": "SH",
                "Name": "Boarding Pass ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,101B)",
                "VR": "FL",
                "Name": "Center of Mass",
                "Name1": ""
            },
            {
                "Tag": "(4010,101C)",
                "VR": "FL",
                "Name": "Center of PTO",
                "Name1": ""
            },
            {
                "Tag": "(4010,101D)",
                "VR": "FL",
                "Name": "Bounding Polygon",
                "Name1": ""
            },
            {
                "Tag": "(4010,101E)",
                "VR": "SH",
                "Name": "Route Segment Start Location ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,101F)",
                "VR": "SH",
                "Name": "Route Segment End Location ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,1020)",
                "VR": "CS",
                "Name": "Route Segment Location ID Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1021)",
                "VR": "CS",
                "Name": "Abort Reason",
                "Name1": ""
            },
            {
                "Tag": "(4010,1023)",
                "VR": "FL",
                "Name": "Volume of PTO",
                "Name1": ""
            },
            {
                "Tag": "(4010,1024)",
                "VR": "CS",
                "Name": "Abort Flag",
                "Name1": ""
            },
            {
                "Tag": "(4010,1025)",
                "VR": "DT",
                "Name": "Route Segment Start Time",
                "Name1": ""
            },
            {
                "Tag": "(4010,1026)",
                "VR": "DT",
                "Name": "Route Segment End Time",
                "Name1": ""
            },
            {
                "Tag": "(4010,1027)",
                "VR": "CS",
                "Name": "TDR Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1028)",
                "VR": "CS",
                "Name": "International Route Segment",
                "Name1": ""
            },
            {
                "Tag": "(4010,1029)",
                "VR": "LO",
                "Name": "Threat Detection Algorithm and Version",
                "Name1": ""
            },
            {
                "Tag": "(4010,102A)",
                "VR": "SH",
                "Name": "Assigned Location",
                "Name1": ""
            },
            {
                "Tag": "(4010,102B)",
                "VR": "DT",
                "Name": "Alarm Decision Time",
                "Name1": ""
            },
            {
                "Tag": "(4010,1031)",
                "VR": "CS",
                "Name": "Alarm Decision",
                "Name1": ""
            },
            {
                "Tag": "(4010,1033)",
                "VR": "US",
                "Name": "Number of Total Objects",
                "Name1": ""
            },
            {
                "Tag": "(4010,1034)",
                "VR": "US",
                "Name": "Number of Alarm Objects",
                "Name1": ""
            },
            {
                "Tag": "(4010,1037)",
                "VR": "SQ",
                "Name": "PTO Representation Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1038)",
                "VR": "SQ",
                "Name": "ATD Assessment Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1039)",
                "VR": "CS",
                "Name": "TIP Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,103A)",
                "VR": "CS",
                "Name": "Version",
                "Name1": ""
            },
            {
                "Tag": "(4010,1041)",
                "VR": "DT",
                "Name": "OOI Owner Creation Time",
                "Name1": ""
            },
            {
                "Tag": "(4010,1042)",
                "VR": "CS",
                "Name": "OOI Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1043)",
                "VR": "FL",
                "Name": "OOI Size",
                "Name1": ""
            },
            {
                "Tag": "(4010,1044)",
                "VR": "CS",
                "Name": "Acquisition Status",
                "Name1": ""
            },
            {
                "Tag": "(4010,1045)",
                "VR": "SQ",
                "Name": "Basis Materials Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1046)",
                "VR": "CS",
                "Name": "Phantom Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1047)",
                "VR": "SQ",
                "Name": "OOI Owner Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1048)",
                "VR": "CS",
                "Name": "Scan Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1051)",
                "VR": "LO",
                "Name": "Itinerary ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,1052)",
                "VR": "SH",
                "Name": "Itinerary ID Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1053)",
                "VR": "LO",
                "Name": "Itinerary ID Assigning Authority",
                "Name1": ""
            },
            {
                "Tag": "(4010,1054)",
                "VR": "SH",
                "Name": "Route ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,1055)",
                "VR": "SH",
                "Name": "Route ID Assigning Authority",
                "Name1": ""
            },
            {
                "Tag": "(4010,1056)",
                "VR": "CS",
                "Name": "Inbound Arrival Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1058)",
                "VR": "SH",
                "Name": "Carrier ID",
                "Name1": ""
            },
            {
                "Tag": "(4010,1059)",
                "VR": "CS",
                "Name": "Carrier ID Assigning Authority",
                "Name1": ""
            },
            {
                "Tag": "(4010,1060)",
                "VR": "FL",
                "Name": "Source Orientation",
                "Name1": ""
            },
            {
                "Tag": "(4010,1061)",
                "VR": "FL",
                "Name": "Source Position",
                "Name1": ""
            },
            {
                "Tag": "(4010,1062)",
                "VR": "FL",
                "Name": "Belt Height",
                "Name1": ""
            },
            {
                "Tag": "(4010,1064)",
                "VR": "SQ",
                "Name": "Algorithm Routing Code Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1067)",
                "VR": "CS",
                "Name": "Transport Classification",
                "Name1": ""
            },
            {
                "Tag": "(4010,1068)",
                "VR": "LT",
                "Name": "OOI Type Descriptor",
                "Name1": ""
            },
            {
                "Tag": "(4010,1069)",
                "VR": "FL",
                "Name": "Total Processing Time",
                "Name1": ""
            },
            {
                "Tag": "(4010,106C)",
                "VR": "OB",
                "Name": "Detector Calibration Data",
                "Name1": ""
            },
            {
                "Tag": "(4010,106D)",
                "VR": "CS",
                "Name": "Additional Screening Performed",
                "Name1": ""
            },
            {
                "Tag": "(4010,106E)",
                "VR": "CS",
                "Name": "Additional Inspection Selection Criteria",
                "Name1": ""
            },
            {
                "Tag": "(4010,106F)",
                "VR": "SQ",
                "Name": "Additional Inspection Method Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1070)",
                "VR": "CS",
                "Name": "AIT Device Type",
                "Name1": ""
            },
            {
                "Tag": "(4010,1071)",
                "VR": "SQ",
                "Name": "QR Measurements Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1072)",
                "VR": "SQ",
                "Name": "Target Material Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1073)",
                "VR": "FD",
                "Name": "SNR Threshold",
                "Name1": ""
            },
            {
                "Tag": "(4010,1075)",
                "VR": "DS",
                "Name": "Image Scale Representation",
                "Name1": ""
            },
            {
                "Tag": "(4010,1076)",
                "VR": "SQ",
                "Name": "Referenced PTO Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1077)",
                "VR": "SQ",
                "Name": "Referenced TDR Instance Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,1078)",
                "VR": "ST",
                "Name": "PTO Location Description",
                "Name1": ""
            },
            {
                "Tag": "(4010,1079)",
                "VR": "SQ",
                "Name": "Anomaly Locator Indicator Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,107A)",
                "VR": "FL",
                "Name": "Anomaly Locator Indicator",
                "Name1": ""
            },
            {
                "Tag": "(4010,107B)",
                "VR": "SQ",
                "Name": "PTO Region Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,107C)",
                "VR": "CS",
                "Name": "Inspection Selection Criteria",
                "Name1": ""
            },
            {
                "Tag": "(4010,107D)",
                "VR": "SQ",
                "Name": "Secondary Inspection Method Sequence",
                "Name1": ""
            },
            {
                "Tag": "(4010,107E)",
                "VR": "DS",
                "Name": "PRCS to RCS Orientation",
                "Name1": ""
            },
            {
                "Tag": "(4FFE,0001)",
                "VR": "SQ",
                "Name": "MAC Parameters Sequence",
                "Name1": ""
            },
            {
                "Tag": "(50xx,0005)",
                "VR": "US",
                "Name": "Curve Dimensions",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0010)",
                "VR": "US",
                "Name": "Number of Points",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0020)",
                "VR": "CS",
                "Name": "Type of Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0022)",
                "VR": "LO",
                "Name": "Curve Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0030)",
                "VR": "SH",
                "Name": "Axis Units",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0040)",
                "VR": "SH",
                "Name": "Axis Labels",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0103)",
                "VR": "US",
                "Name": "Data Value Representation",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0104)",
                "VR": "US",
                "Name": "Minimum Coordinate Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0105)",
                "VR": "US",
                "Name": "Maximum Coordinate Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0106)",
                "VR": "SH",
                "Name": "Curve Range",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0110)",
                "VR": "US",
                "Name": "Curve Data Descriptor",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0112)",
                "VR": "US",
                "Name": "Coordinate Start Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,0114)",
                "VR": "US",
                "Name": "Coordinate Step Value",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,1001)",
                "VR": "CS",
                "Name": "Curve Activation Layer",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2000)",
                "VR": "US",
                "Name": "Audio Type",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2002)",
                "VR": "US",
                "Name": "Audio Sample Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2004)",
                "VR": "US",
                "Name": "Number of Channels",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2006)",
                "VR": "UL",
                "Name": "Number of Samples",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2008)",
                "VR": "UL",
                "Name": "Sample Rate",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,200A)",
                "VR": "UL",
                "Name": "Total Time",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,200C)",
                "VR": "OB or OW",
                "Name": "Audio Sample Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,200E)",
                "VR": "LT",
                "Name": "Audio Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2500)",
                "VR": "LO",
                "Name": "Curve Label",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2600)",
                "VR": "SQ",
                "Name": "Curve Referenced Overlay Sequence",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,2610)",
                "VR": "US",
                "Name": "Curve Referenced Overlay Group",
                "Name1": "Retired"
            },
            {
                "Tag": "(50xx,3000)",
                "VR": "OB or OW",
                "Name": "Curve Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(5200,9229)",
                "VR": "SQ",
                "Name": "Shared Functional Groups Sequence",
                "Name1": ""
            },
            {
                "Tag": "(5200,9230)",
                "VR": "SQ",
                "Name": "Per-frame Functional Groups Sequence",
                "Name1": ""
            },
            {
                "Tag": "(5400,0100)",
                "VR": "SQ",
                "Name": "Waveform Sequence",
                "Name1": ""
            },
            {
                "Tag": "(5400,0110)",
                "VR": "OB or OW",
                "Name": "Channel Minimum Value",
                "Name1": ""
            },
            {
                "Tag": "(5400,0112)",
                "VR": "OB or OW",
                "Name": "Channel Maximum Value",
                "Name1": ""
            },
            {
                "Tag": "(5400,1004)",
                "VR": "US",
                "Name": "Waveform Bits Allocated",
                "Name1": ""
            },
            {
                "Tag": "(5400,1006)",
                "VR": "CS",
                "Name": "Waveform Sample Interpretation",
                "Name1": ""
            },
            {
                "Tag": "(5400,100A)",
                "VR": "OB or OW",
                "Name": "Waveform Padding Value",
                "Name1": ""
            },
            {
                "Tag": "(5400,1010)",
                "VR": "OB or OW",
                "Name": "Waveform Data",
                "Name1": ""
            },
            {
                "Tag": "(5600,0010)",
                "VR": "OF",
                "Name": "First Order Phase Correction Angle",
                "Name1": ""
            },
            {
                "Tag": "(5600,0020)",
                "VR": "OF",
                "Name": "Spectroscopy Data",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0010)",
                "VR": "US",
                "Name": "Overlay Rows",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0011)",
                "VR": "US",
                "Name": "Overlay Columns",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0012)",
                "VR": "US",
                "Name": "Overlay Planes",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0015)",
                "VR": "IS",
                "Name": "Number of Frames in Overlay",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0022)",
                "VR": "LO",
                "Name": "Overlay Description",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0040)",
                "VR": "CS",
                "Name": "Overlay Type",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0045)",
                "VR": "LO",
                "Name": "Overlay Subtype",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0050)",
                "VR": "SS",
                "Name": "Overlay Origin",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0051)",
                "VR": "US",
                "Name": "Image Frame Origin",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0052)",
                "VR": "US",
                "Name": "Overlay Plane Origin",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0060)",
                "VR": "CS",
                "Name": "Overlay Compression Code",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0061)",
                "VR": "SH",
                "Name": "Overlay Compression Originator",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0062)",
                "VR": "SH",
                "Name": "Overlay Compression Label",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0063)",
                "VR": "CS",
                "Name": "Overlay Compression Description",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0066)",
                "VR": "AT",
                "Name": "Overlay Compression Step Pointers",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0068)",
                "VR": "US",
                "Name": "Overlay Repeat Interval",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0069)",
                "VR": "US",
                "Name": "Overlay Bits Grouped",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0100)",
                "VR": "US",
                "Name": "Overlay Bits Allocated",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0102)",
                "VR": "US",
                "Name": "Overlay Bit Position",
                "Name1": ""
            },
            {
                "Tag": "(60xx,0110)",
                "VR": "CS",
                "Name": "Overlay Format",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0200)",
                "VR": "US",
                "Name": "Overlay Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0800)",
                "VR": "CS",
                "Name": "Overlay Code Label",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0802)",
                "VR": "US",
                "Name": "Overlay Number of Tables",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0803)",
                "VR": "AT",
                "Name": "Overlay Code Table Location",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,0804)",
                "VR": "US",
                "Name": "Overlay Bits For Code Word",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1001)",
                "VR": "CS",
                "Name": "Overlay Activation Layer",
                "Name1": ""
            },
            {
                "Tag": "(60xx,1100)",
                "VR": "US",
                "Name": "Overlay Descriptor - Gray",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1101)",
                "VR": "US",
                "Name": "Overlay Descriptor - Red",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1102)",
                "VR": "US",
                "Name": "Overlay Descriptor - Green",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1103)",
                "VR": "US",
                "Name": "Overlay Descriptor - Blue",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1200)",
                "VR": "US",
                "Name": "Overlays - Gray",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1201)",
                "VR": "US",
                "Name": "Overlays - Red",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1202)",
                "VR": "US",
                "Name": "Overlays - Green",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1203)",
                "VR": "US",
                "Name": "Overlays - Blue",
                "Name1": "Retired"
            },
            {
                "Tag": "(60xx,1301)",
                "VR": "IS",
                "Name": "ROI Area",
                "Name1": ""
            },
            {
                "Tag": "(60xx,1302)",
                "VR": "DS",
                "Name": "ROI Mean",
                "Name1": ""
            },
            {
                "Tag": "(60xx,1303)",
                "VR": "DS",
                "Name": "ROI Standard Deviation",
                "Name1": ""
            },
            {
                "Tag": "(60xx,1500)",
                "VR": "LO",
                "Name": "Overlay Label",
                "Name1": ""
            },
            {
                "Tag": "(60xx,3000)",
                "VR": "OB or OW",
                "Name": "Overlay Data",
                "Name1": ""
            },
            {
                "Tag": "(60xx,4000)",
                "VR": "LT",
                "Name": "Overlay Comments",
                "Name1": "Retired"
            },
            {
                "Tag": "(7FE0,0008)",
                "VR": "OF",
                "Name": "Float Pixel Data",
                "Name1": ""
            },
            {
                "Tag": "(7FE0,0009)",
                "VR": "OD",
                "Name": "Double Float Pixel Data",
                "Name1": ""
            },
            {
                "Tag": "(7FE0,0010)",
                "VR": "OB or OW",
                "Name": "Pixel Data",
                "Name1": ""
            },
            {
                "Tag": "(7FE0,0020)",
                "VR": "OW",
                "Name": "Coefficients SDVN",
                "Name1": "Retired"
            },
            {
                "Tag": "(7FE0,0030)",
                "VR": "OW",
                "Name": "Coefficients SDHN",
                "Name1": "Retired"
            },
            {
                "Tag": "(7FE0,0040)",
                "VR": "OW",
                "Name": "Coefficients SDDN",
                "Name1": "Retired"
            },
            {
                "Tag": "(7Fxx,0010)",
                "VR": "OB or OW",
                "Name": "Variable Pixel Data",
                "Name1": "Retired"
            },
            {
                "Tag": "(7Fxx,0011)",
                "VR": "US",
                "Name": "Variable Next Data Group",
                "Name1": "Retired"
            },
            {
                "Tag": "(7Fxx,0020)",
                "VR": "OW",
                "Name": "Variable Coefficients SDVN",
                "Name1": "Retired"
            },
            {
                "Tag": "(7Fxx,0030)",
                "VR": "OW",
                "Name": "Variable Coefficients SDHN",
                "Name1": "Retired"
            },
            {
                "Tag": "(7Fxx,0040)",
                "VR": "OW",
                "Name": "Variable Coefficients SDDN",
                "Name1": "Retired"
            },
            {
                "Tag": "(FFFA,FFFA)",
                "VR": "SQ",
                "Name": "Digital Signatures Sequence",
                "Name1": ""
            },
            {
                "Tag": "(FFFC,FFFC)",
                "VR": "OB",
                "Name": "Data Set Trailing Padding",
                "Name1": ""
            },
            {
                "Tag": "(FFFE,E000)",
                "VR": "",
                "Name": "Item",
                "Name1": ""
            },
            {
                "Tag": "(FFFE,E00D)",
                "VR": "",
                "Name": "Item Delimitation Item",
                "Name1": ""
            },
            {
                "Tag": "(FFFE,E0DD)",
                "VR": "",
                "Name": "Sequence Delimitation Item",
                "Name1": ""
            }
        ];
