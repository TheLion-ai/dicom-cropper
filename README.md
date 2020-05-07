#  Dicom reader
App for reading anonymizing cropping and uploading data to the server

# Changelog

## Version 1.1
 * Added validation for request: before saving the data server check if request contains following fiels: Image, Tumor Size, Tumor Type, Phase
 * Added validation on server side: the reader check if you moved the windom form 0,0 ( :P ) and if you put the Tumor Size in befre sending the data
 * Added Tumor Size field with regexp validation
 * Added "show more" button for unused fields
 
 ## Version 2.0
 * Added private tag support
 * Added SQ VR support
 * Added multiformat Pixel Data support
 * Changed saving image to send only the cropped area.
 * Added "File Name" tag to json file sent to server.
 * Changed the source of extracting date from Series Date to Study Date. 