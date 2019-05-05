"use strict";
exports.__esModule = true;
var readline = require("readline");
var valFromRuntime = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
valFromRuntime.question('Please enter a no:', function (num) {
    var fact = 1;
    for (var i = 1; i <= Number.parseInt(num.toString()); i++)
        fact = fact * i;
    console.log('factorial:' + fact);
    valFromRuntime.close();
});
