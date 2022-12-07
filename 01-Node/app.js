// npm - global comman, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// glogal dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by setp, press enter to skip)
// npm init -y (everything default)

// npm i lodash

// node_modules: all the dependencies are there

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); // flatten the array
console.log(newItems); 

// IMPORTANT: CREATE A GIT IGNORE