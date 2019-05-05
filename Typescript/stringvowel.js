"use strict";
exports.__esModule = true;
var readline = require("readline");
var runtimeVal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
runtimeVal.question("Enter string to count all vowels repeatition: ", function (answer) {
    var count_a = 0;
    var count_e = 0;
    var count_i = 0;
    var count_o = 0;
    var count_u = 0;
    for (var i = 0; i < answer.length; ++i) {
        if (answer[i] == 'a' || answer[i] == 'A')
            ++count_a;
        else if (answer[i] == 'e' || answer[i] == 'E')
            ++count_e;
        else if (answer[i] == 'i' || answer[i] == 'I')
            ++count_i;
        else if (answer[i] == 'o' || answer[i] == 'O')
            ++count_o;
        else if (answer[i] == 'u' || answer[i] == 'U')
            ++count_u;
    }
    console.log("\n\na occured: " + count_a + " times.\n\ne occured: " + count_e + " times.\n\ni occured: " + count_i + " times.\n\no occured: " + count_o + " times.\n\nu occured: " + count_u + " times.\n\n");
    runtimeVal.close();
});
