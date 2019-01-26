/**To close the file use syntax
 * fs.close(fd,callback)
 * fd- the file descriptor returned by file fs.open() method.
 * 
 */
//example
let fs = require('fs'),
    buffer = new Buffer(2000);
//opening a file..
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        console.log(err.stack)
    } else {
        console.log("File Opened successfully.");
        //reading a file
        fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
            if (err) {
                console.log(err.stack)
            } else {
                console.log("reading file..")
                if (bytes > 0) {
                    console.log("File data: \n" + buffer.slice(0, bytes).toString());
                    console.log("File read successfully.");
                }
            }
        });
        //closing a file..
        fs.close(fd, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("File closed successfully.");
            }
        });
    }

});



