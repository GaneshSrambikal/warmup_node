/** To open a file in asynchronous mode
 * syntax
 * fs.open(path, flags[] ,callback)
 * Parameters :-
 * path- the file name /including path
 * flags-the behavior of the file to be opened. for ex. read or write
 * callback- function which two parameters err ,fd
 */
let fs = require('fs');

fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("file opened to read.");
    }
});

// Some of the flags 
/**
 * r - open file for reading. An exception occurs if the file does not exist.
 * r+ -open file for reading and writing. An exception occurs if the file does not exist.
 * w -open file for writing. The file is created if it doesnt exist or truncated if it exists.
 * w+ -open file for  reading and writing. The file is created if it doesnt exist or truncated if it exists.
 * a - oopen a file for append. file is created if doesnt exists.
 * a+ open a file for read and append. file is created if doesnt exists.
 */
