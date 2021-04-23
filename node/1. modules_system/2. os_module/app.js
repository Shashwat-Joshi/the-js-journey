const os = require("os");

const host = os.hostname();
console.log(host);

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total memory - ${totalMem}\nFree Memory - ${freeMem}`);
