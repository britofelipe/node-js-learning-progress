// Asyncronous
const { readFile, writeFile } = require('fs')

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log("done with the task");
            }     
        )
    })
})

// Look at the order of the console logs

console.log("starting new task");

// Note that if you don't write the UTF enconding, the code will apper strange

// In asynchronous mode, the fs.writeFile() function will write the data to the file in the background, allowing the program to continue executing other operations while the file is being written. 
// This can make the program more efficient and responsive, but it can also make it more complex, as the program must be designed to handle the asynchronous nature of the file writing operation.

// In general, asynchronous mode is preferred over synchronous mode, as it allows the program to take advantage of the non-blocking nature of Node.js. 
