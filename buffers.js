/**BUFFERS
 * Node provides Buffer class which provides instances to store raw data
 * similar to an array of integer but corresponds to a raw memory allocation
 * outside the V8 heap.
 * Buffer class is a global class that can be accessed in an application 
 * without importing the buffer module. 
 * */
//Create buffer
//Method 1
var buffer = new buffer(10);//creates an unintiated buffer of 10 octets

//Method 2
var buffer = new Buffer([10, 20, 45, 78]);//create and buffer from given array

//Method 3
var budder = new Buffer("HI there!,buffer", "utf-8");//with optional encoding

//Writing to Buffer
/** buf.write(string[,offset][,length][,encoding]) 
 * This method returns the number of octets written.
 * if there is not enough space in the buffer to fit the entrire 
 * string , it will wrtite a part of the string.
*/
/** Parameters:-
 * string : the string to be written to the buffer.
 * offset: the index of the buffer to start wrtting at.default is 0
 * length:the number of bytes to write
 * encoding:Encoding to use."utf-8" is the default
 */
//Example
let buffer = new Buffer.alloc(20), //using alloc because buffer() is deprecated
    data = buffer.write("HI there!,buffer");
console.log("wrtten data: " + data);


