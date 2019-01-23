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

//Reading to buffer
/** buf.toString([encoding][,start][,end]);
 * decodes and returns a string from buffer data encoded
 * using the specified character set encoding.
 * 
 * Parameters:-
 * encoding: encoding default utf8
 * start:the begining index to start reading defualts to 0
 * end:end index to end reading
 * 
 */
//example
buf = new Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii', 0, 7));

//Convert buffer to Json
/**buf.toJSON(buf)
 * returns a JSON representation of buffer instances
 */
//Example
let buf = new Buffer.from('hello there'),
    json = buf.toJSON(buf);
console.log(json);

/** Concatenate Buffers
 * buffer.concat([list][totallength])
 * methods returns buffer instance
 */
//Example
let buffer1 = new Buffer.from('Hi there,');
let buffer2 = new Buffer.from('im learning NodeJs.');
let buffer3 = Buffer.concat([buffer1, buffer2]);

// console.log(buffer3.toString());

/**Compare a buffer
 * buffer.compare(otherbuffer)
 * return a number which indicates wheather it comes before or after or the same.
 */
var buffer1 = new Buffer('BC');
var buffer2 = new Buffer('aBC');
var result = buffer1.compare(buffer2);
console.log(result)
if (result < 0) {
    console.log(buffer1 + " comes before " + buffer2);
} else if (result === 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(buffer1 + " comes after " + buffer2);
}

//Copy buffer
/**buffer.copy(otherbuffer)
 * copies data from target buffer to the destination 
 * 
 */

