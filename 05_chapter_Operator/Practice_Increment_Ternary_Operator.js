let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);

//Expression Result Table
// NA            i=1
//A = i++        A=1   Increment i=2
//Ternary Operator = false, so ++i is executed 
//B = ++i        B=3   Increment i=3
//C = Ternary Result      C=3
console.log(i);