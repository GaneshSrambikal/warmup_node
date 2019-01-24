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
    if (!readerStream.eof) { console.log("end of file") }
});
readerStream.on('end', function () {
    console.log(data);

});


console.log("Program Ended");
/**streams emits following events
 * data - this event fires when there is data available to read
 * end - this event fires when there is end of data to read
 * error - this event fires when there an error during read and write operation.
 * 
 */

//Write to a Stream

//let fs = require('fs');
// data ='hi there, this output test';
//create a write stream
let writeStream = fs.createWriteStream('output.txt');

//write to file
writeStream.write(data, 'utf8');
//set end of file
writeStream.end();
//handle events 
writeStream.on('finish', function () {
    console.log("done writing.");
});
writeStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended.");


