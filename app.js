// let name = 'Andrew';

//template string
// console.log(`Hello ${ name }`);

//tell the node to pause at the specific line
//debugger;

/*
sh-3.2# node --inspect app.js
Debugger listening on port 9229.
Warning: This is an experimental feature and could change at any time.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/fa66345f-3af6-401c-bc9
a-ff1dcaf3db67

this can be opened on Chrome
chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/180e5058-c11e-43f6-b41
9-03f78990a0f5

 */

//creating an Express App
//npm init
//npm install express --save
const express = require('express');
const app = express();

//route
app.get('/', (req, res) => {
    debugger;
    res.send('Hey it worked.');
});

app.listen(3000, () => console.log('Server is running.'));

//node --debug-brk --inspect app.js

//on Console
//req - to see HTTP Req and other useful informations

//Debugger Menu (on the left of VSCode)
//launch.json configuration
//https://code.visualstudio.com/docs/editor/debugging

//Using Attach Process to use with Nodemon
//using with Nodemon - nodemon --debug-brk app.js
