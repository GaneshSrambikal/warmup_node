/** Nodejs Path Modules
 * path module is used to handle and transform file paths.
 * To import path modules use syntax
 * let path = require('path');
 */

let path = require('path');

//path.normalize - normalizes the paths(for ex. '//','..')
// console.log(path.normalize("Desktop\\warmup_node\\buffers.js"));

//path.resolve - returns the whole fil paths
// console.log(path.resolve('buffers.js'));

//returns the extension of the specified filename
// console.log(path.extname('buffers.js'));

//path.join(path1,path2) - joins the paths
// console.log(path.join('\Desktop\warmup_node','utility_modules'));