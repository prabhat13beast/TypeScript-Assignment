"use strict";
exports.__esModule = true;
var readline = require("readline");
var valFromRuntime = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
valFromRuntime.question('Please enter a no:', function (num) {
    var n = parseInt(num);
    var sum = 0;
    var rem;
    while (n != 0) {
        rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10);
    }
    console.log("sum of digit is: " + sum);
    valFromRuntime.close();
});
