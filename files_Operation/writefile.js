/** To write a file use the syntax
 * fs.writeFile(filename,data,callback)
 * This method will over write the file if the file already 
 * exists.
 * */

let fs = require('fs');

fs.writeFile('ouput.txt', 'Hi there, this is a test file.', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("file being written.");
    }
});
/**
 * Parameters
 * filename- the filename of the file to which it has to write
 * data- data which is to be written
 * callback- it will has only one argument err.
 */