"use strict";
exports.__esModule = true;
var readline = require("readline");
var valFromRuntime = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// valFromRuntime.question('Please enter your choice: (y/n) ', (answer) => {
// switch(answer) {
//  case 'y':
//   console.log('Continuing...!');
//   break;
// case 'n':
//  console.log('Sorry to see you go :(');
//  break;
// default:
//   console.log('Not the right choice!');
// }
// valFromRuntime.close();
// });
valFromRuntime.question('Please enter your choice: (y/n) ', function (answer) {
    if (answer == 'y')
        console.log('working');
    else
        console.log('not working');
    valFromRuntime.close();
});
