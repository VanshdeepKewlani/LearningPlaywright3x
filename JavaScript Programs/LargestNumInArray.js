let arr = [10, 20, 30, 40, 50, 60, 90, 70, 80];
let largestNum = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] > largestNum){
        largestNum = arr[i];
    }
}
console.log('The largest number in the array is: ' + largestNum);
