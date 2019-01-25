/** Normally to read a file we use the following syntax
 * fs.readFile('filename',function(err,data){})
 * 
 * But there is another method available which is
 * fs.read(fd,buf,0ffset,length,position,callback)
 * fd- a file descriptor returned by fs.open()
 * buf- buffer where the data will be written to.
 * offset- the index in buffer from where it 
 * will start writing onto the buffer.
 * position- specify from where to read from the file.
 * callback- function which has three arguments(err,bytesRead,buffer).
 * 
*/
//for exmple
let fs = require('fs'),
    buffer = new Buffer(2000);
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("file opened.");
        fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
            if (err) {
                console.log(err);
            } else {
                console.log("Bytes read: " + bytes);
                if (bytes > 0) {
                    console.log(buffer.slice(0, bytes).toString());
                }
            }
        });
    }
});
/**
 * here the method will use file descriptor to read the file.
 */
