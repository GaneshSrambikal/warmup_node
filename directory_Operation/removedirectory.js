//To remove directory use syntax
//fs.rmdir(path,callback)

let fs = require('fs');

fs.rmdir('/warmup_node/directory_Operation/test', function (err) {
    if (err) {
        console.log(err.stack)
    } else {
        console.log("directory deleted.");
        fs.readdir('C:/Users/Gnshsrmbkl/Desktop/warmup_node/directory_Operation/', function (err, files) {
            if (err) {
                console.log(err.stack)
            } else {
                files.forEach(function (file) {
                    console.log(file);
                });
            }
        });


    }
});