const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number greater than 1: ', (input) => {
    let num = Number(input);

    if(num <= 1){
        console.log('Please enter a number greater than 1');
        rl.close();
        return;
    }

    let isPrime = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){          
            isPrime = false;
            break;
        }   
    }

    if(isPrime){
        console.log(num + ' is a prime number');
    } else {
        console.log(num + ' is not a prime number');
    }
    rl.close();
}); 