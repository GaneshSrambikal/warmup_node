/**Global objects in nodejs are global in nature and they
 * are available in all modules.
 * Global objects are not needed to import into the application.
 * They can be modules,function,string and objects.
 */

/** __filename
 * This global object returns the current filename .
 */

//example
console.log(__filename);
// this will log the entire file path includeing directory

// to log only the file name do this.
let path = __filename;

let filename =path.split(/(\\|\/)/g).pop();//pops out the last element in the array which is the filename.
console.log("Filename: "+filename);

/**__dirname
 * this global object returns the current directory
 */
//__dirname
console.log(__dirname);


/**Global time functions
 * setTimeout(cb,ms) - the function takes two arguments callback and milliseconds.
 *                      callback(cb) which is to be executed after millisecond(ms).
 *                      the set time span can last upto 24.8 days.
 *                      Its retruens a opque value the represents the timer which can be used to clear the timer.
 * 
 * clearTimeout(t) - the function is used to clear timeout which was created using setTimeout.
 *                   t is the time returned by setTimeout().
 * 
 * setInterval() - the function takes similar argument as setTimeout but it is used to run the callback(cb) repeatedly
 *                  after millisecond(ms).
 * 
*/
//example for setTimeout() and clearTimeout()
function example1(){
    console.log("Example 1");
    
}
function example2(){
    console.log("Example 2");
    
}

setTimeout(example2,2000);
let t = setTimeout(example2,2000);
clearTimeout(t);
example1();

//Example for setInterval()
setInterval(example2,1000);
let c = setInterval(example2,1000);
