/**File systems
 * Node implements file i/o using simple wrappers around standard posix function.
 * Node file system (fs) module can be imported using 
 * let fs = require('fs');
 * 
 * Synchronous vs Asynchronous
 * It is recommended to use asynchronous methods instead of 
 * synchronous method because it does not block the program
 * during execution.
 * 
 * asynchronous method take the last parameter as complete callback
 * and the first parameter as error.
 */

//for example as asynchronous
let fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Async read: " + data.toString());
    }

});

let res = fs.readFileSync('input.txt');
console.log("sync read: " + res.toString());

console.log("Program Ended.");

