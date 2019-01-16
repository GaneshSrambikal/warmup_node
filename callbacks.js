/**What is Callback
Callback is an asynchronous equivalent for a function. 
A callback function is called at the completion of a given task.
Node makes heavy use of callbacks. 
All the APIs of Node are written in such a way that they support callbacks.
 */



//blocking
var fs  = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());

console.log("Program Ended.");

/**------------------------------------ */

//non-blocking
var fs = require('fs');
fs.readFile('input.txt',function(err,data){
    if(err){console.log(err)}
    else{console.log(data.toString())}
});

console.log("Program Ended.");




/** This two examples of blocking and non-blocking code
    1.shows how the code blocks untill it reads the file and only then it prints the program ended
    statement.
    2. show how the code works asynchronously by directly printing Program ended statement and at the 
    same the program reads the file 

 */