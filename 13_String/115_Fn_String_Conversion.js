// String Conversion


// To string
console.log((200).toString()); // "200"
console.log(true.toString());  // "true"

console.log(Number("42"));  //  42

console.log(parseInt("42px"));  // 42
console.log(parseFloat("3.14rem")); //3.14

let str = "hello"; //. Things are immutable in nature in JS.
str[0] = "H";
console.log(str);
console.log(str[0]); // "h" — no effect, still "h"
str = "Hello"; // valid, because you reassign the variable
console.log(str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper);
