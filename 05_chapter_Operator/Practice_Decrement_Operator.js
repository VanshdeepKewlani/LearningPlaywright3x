let a = 5; 
let b = a-- - --a; 
console.log(b, a);

//Expression Result Table
// NA            a=5
//A = a--        A=5   Decrement a=4
//B = --a        B=3   Decrement a=3
//C = A - B      C=2
console.log(a);