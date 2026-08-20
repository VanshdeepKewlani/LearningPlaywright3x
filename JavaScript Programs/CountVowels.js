const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {

    let str = input;

    let count = 0;
    const vowels = 'aeiouAEIOU';

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }

    console.log('Number of vowels in the string: ' + count);
    rl.close();
});     