const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {

    let str = input;
    let reversedStr = '';

    process.stdout.write('Reversed string: ');
    for(let i = str.length - 1; i >= 0; i--){
        process.stdout.write(str[i]);
        reversedStr += str[i];
    }

    console.log(); // Print a newline after the reversed string

    if(str === reversedStr){
        console.log('The string is a palindrome.');
    } else {
        console.log('The string is not a palindrome.');
    }

    rl.close();

});