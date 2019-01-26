//To read from a directory
//fs.readdir(path,callback)

let fs  =require('fs');

fs.readdir('C:/Users/Gnshsrmbkl/Desktop/warmup_node/',function(err,files){
    if (err) {
        console.log(err.stack);
    } else {
        files.forEach(function (file){
            console.log(file);
        })
    }
})