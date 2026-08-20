const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let num = Number(input);
    let factorial = 1;

    for(let i = 1; i <= num; i++){
        factorial *= i;
    }

    console.log(`The factorial of ${num} is ${factorial}`);

    rl.close();
});