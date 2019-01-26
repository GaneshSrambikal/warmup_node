/**
 * TO delete a file use the sysntax
 * fs.unlink('filename',callback)
 * This method will delete the file and the callback has argument will have
 * a exception .
 */
//example
let fs = require('fs');

fs.unlink('delete.txt', function (err) {
    if (err)
        console.log("delete operation failed." + err.stack);
});
console.log("Program ended.");
