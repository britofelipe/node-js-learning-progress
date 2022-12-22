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
console.log("Hello People");

// IMPORTANT: CREATE A GIT IGNORE

// When we simply use "npm install", the program reads da .json files and install the dependencies

// Dev dependencies:
// npm install nodemon -D

// With this code line:
// "start": "node app.js",
// on package.json, we can simply write "npm start" on terminal

// npm run dev:
// wait for the changes to happen

// uninstalling:
// npm uninstall bootstrap

// UNINSTALLING - NUCLEAR OPTION
// remove the node modules folder
// remove the "bootstrap" on .json folder
// Gatsby for example can be one of use cases

// INSTALL GLOBALLY
// example: create react ap

// ABOUT DEPENDENCIES VERSION
// version AA.BB.CC
// AA - major changes
// BB - minor changes (don't break)
// CC - bug fixes

// IMPORTANT SOURCE: https://nodesource.com/blog/the-basics-of-package-json

// EVENT LOOP
// non-blocking I/O -> offloads operations to the system kernel whenever possible
// SOURCE: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
// Morning Keynote- Everything You Need to Know About Node.js Event Loop - Bert Belder, IBM - https://www.youtube.com/watch?v=PNa9OMajw9w
// Philip Roberts -> https://www.youtube.com/watch?v=8aGhZQkoFbQ

