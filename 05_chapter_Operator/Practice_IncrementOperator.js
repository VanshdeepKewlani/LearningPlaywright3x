let a = 100;

console.log(a++ + ++a +a++ + ++a);

//Expression Result Table
// NA            a=100    
//A = a++        A=100   Increment a=101
//B = ++a        B=102   Increment a=102
//C = a++        C=102   Increment a=103
//D = ++a        D=104   Increment a=104
//100 + 102 + 102 + 104 = 408
console.log(a);