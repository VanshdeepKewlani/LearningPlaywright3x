const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let num = Number(input);

    let a = 0, b = 1, c;

    console.log(a);
    console.log(b);

    for(let i = 2; i < num; i++){
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }

    rl.close();

});