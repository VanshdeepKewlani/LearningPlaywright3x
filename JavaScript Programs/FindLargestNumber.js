const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (input) => {
    let num1 = Number(input);
    rl.question('Enter second number: ', (input) => {
        let num2 = Number(input);
        rl.question('Enter third number: ', (input) => {
            let num3 = Number(input);
            let largest = num1;
            if(num2 > largest){
                largest = num2;
            }
            if(num3 > largest){
                largest = num3;
            }
            console.log('The largest number is: ' + largest);
            rl.close();
        });
    });
});