/** Nodejs OS Modules
 * os module provides some the operating system related functions.
 * to import os module use syntax 
 * let os = require('os');
 */
let os = require('os');

let hostname = os.hostname();//return the hostname
let temp = os.tmpdir();//returns temporary folder of the system
let platform = os.platform();//returns the os platform
let _type = os.type();//returns the os type
let arch = os.arch();//returns the architecture of os
let rels = os.release();//returns the release of os
let upTime = os.uptime();//return up time in milliseconds
let lodavg = os.loadavg();//returns the averge  load in array
let memory = os.totalmem();//returns the total memoery of the system
let avail_mem = os.freemem();//returns the free memory
let cpus = os.cpus();//return info of each cpu cores
let interfac = os.networkInterfaces();// returns the details of netowrks of the systems
let enofline = os.EOL;//return the end of process of system ,not a function its a properties.
