const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {

    let str = input;
    for(let i = str.length - 1; i >= 0; i--){
        process.stdout.write(str[i]);
    }
   
    rl.close();
});