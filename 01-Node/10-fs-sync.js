// const {readFileSync, writeFileSync} = require('fs');

const fs = require('fs')

console.log('start');

// Check if the file exists
if(!fs.existsSync('./content/first.txt')) {
    // Create tge fuke uf ut doesn't exist
    fs.writeFileSync('./content/first.txt', "This is the first file")
}
if(!fs.existsSync('./content/second.txt')) {
    // Create tge fuke uf ut doesn't exist
    fs.writeFileSync('./content/second.txt', "This is the second file")
}

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');

console.log(first, '\n', second); 

fs.writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');

// In synchronous mode, the fs.writeFile() function will block the execution of the program until the file has been written to.
// This means that the program will wait until the file has been completely written before moving on to the next operation. This can be useful in certain scenarios, but it can also make the program slower and less responsive.

// In some cases, synchronous mode may be necessary, such as when the program needs to wait for the file to be written before continuing.