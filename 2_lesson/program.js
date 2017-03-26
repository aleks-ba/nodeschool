const fs = require('fs');
const bufferString = fs.readFileSync(process.argv[2], 'utf-8');
const numberOfLineBreak = bufferString.split('\n').length - 1;

console.log(numberOfLineBreak);

