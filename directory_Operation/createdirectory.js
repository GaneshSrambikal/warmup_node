//To dreate directory use sysntax
//fs.mkdir(path,callback)

//example
let fs = require('fs');

fs.mkdir('/warmup_node/directory_Operation/test', function (err) {
    if (err) {
        console.log(err.stack);
    } else {
        console.log("Directory made successfully..");
    }
});