var sum = 0;
for (var num = 1; num <= 100; num++) {
    sum = Number.parseInt(sum.toString()) + Number.parseInt(num.toString());
}
console.log('addition of numbers is:' + sum);
