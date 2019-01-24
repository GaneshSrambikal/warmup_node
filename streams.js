/**What is Streams?
 * Streams are Objects.
 * it lets you read data from source and write data to destination in continuous fashion.
 * 
 * There are three types of streams in nodejs:-
 * Readable - Stream which is used for read operation.
 * Writeable - stream which are used for write operation.
 * Duplex - used for both read and write operations.
 * transform - A duplex stream where the output is computd based on the input.
 * 
 * All type of streams are instances of eventEmitter and emits events at different instances of time.
 */

//Reading from stream
let fs = require('fs'),
    data = '';

//Create a readable stream
let readerStream = fs.createReadStream('input.txt');

//set the encoding of readstream
readerStream.setEncoding('utf8');

//handle stream events 
readerStream.on('error', function (err) {
    console.log(err.stack);
});
readerStream.on('data', function (chunk) {
    data += chunk;
    if(!readerStream.eof){console.log("end of file")}
});
readerStream.on('end', function () {
    console.log(data);
    
});


console.log("Program Ended");
/**streams emits following events
 * data - this 
 */
