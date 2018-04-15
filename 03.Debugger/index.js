console.log('Arithmetic Mean');
debugger;

// Arrow function
var arthimeticMean = (numbers) => {
    var total = 0;
    debugger;
    for (let number in numbers) {
        total += parseFloat(number);
        debugger;
    }

    return total/numbers.length;
}

// node inspect to use debugger
// press 'c' to continue to next entry point debugger
// use repl in debugger to show value you want
// use list(number) to show number rows around entry point debugger
console.log(`Arthimetic mean is ${arthimeticMean([1, 2, 3, 4, 5])}`);