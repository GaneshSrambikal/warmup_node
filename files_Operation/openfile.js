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
})