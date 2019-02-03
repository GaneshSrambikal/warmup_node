/**Node.js uses Express as a web application framework that provides
 * a robust set of features to develop web and mobile applications.
 * It allows to setup a middleware to responds to http methods.
 * define a routing table which is used to perform different actions
 * based on http method and url.
 * 
 */
//How to install express
// $npm i express --save
//this would save the express locally in the node_modules directory
//and creates a directory express inside node_modules.
/** body-parser - this is a node.js middleware for handling json,raw,text and url encoded form data.
 *  cookie-parser - It Parse cookies header and populate req.cookies with an object-keyed by the cookie names.
 *  multer - This middleware handles multipart/form-data.
 */
//to import modules of express
//let express = require('express');
//for example let try the hello world 
let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send("Hello world !.");
});

app.listen(8081, function () {
    console.log("server started at 8081");
});

/** cookie parser
 * here is an example of cookie-parser
 */
let cookies = require('cookie-parser');
app.use(cookies());

app.get('/cookies',function(req,res){
    console.log("cookies : ", req.cookies);
});


