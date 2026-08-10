const prompt = require("prompt-sync")();

let num = prompt("Enter a number:");
console.log(num);
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}