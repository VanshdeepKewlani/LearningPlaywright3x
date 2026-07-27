// Adding and Removing Elements

let arr = [1, 2, 3];
arr.push(4);      // [1, 2, 3, 4]  - add to end
console.log(arr)
arr.pop();        // [1, 2, 3]     - remove from end
console.log(arr)
arr.unshift(0);   // [0, 1, 2, 3]  - add to start
console.log(arr)
arr.shift();      // [1, 2, 3]     - remove from start
console.log(arr)

//Iteration
arr.forEach(item => console.log(item));

//Searching
console.log(arr.includes(2));         // true
console.log(arr.indexOf(2));          // 1
console.log(arr.lastIndexOf(2));      // last occurrence index
console.log(arr.find(x => x > 2));    // first matching value
console.log(arr.findIndex(x => x > 2)); // first matching index
console.log(arr.some(x => x > 2));    // true if any match
console.log(arr.every(x => x > 0));   // true if all match

// Transforming Arrays
console.log([1, 2, 3].map(x => x * 2));  // [2, 4, 6]
console.log([1, 2, 3, 4].filter(x => x % 2 === 0)); // [2, 4]
// reduce()         Reduces array to a single value.
console.log([1, 2, 3, 4].reduce((sum, x) => sum + x, 0)); // 10
// flat()           Flattens nested arrays.
console.log([1, [2, 3], [4]].flat());        // [1, 2, 3, 4]
// flatMap()        Maps and flattens one level.
console.log([1, 2, 3].flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

//Extracting and Modifying

// slice()          Returns a portion of an array.
let arr1 = [1, 2, 3, 4];
console.log(arr1.slice(1, 3));   // [2, 3]

// splice()         Adds/removes elements in place.
let arr2 = [1, 2, 3, 4];
arr2.splice(1, 2);
// removes [2, 3]
// arr becomes [1, 4]
console.log(arr2);

// Sorting and Reversing

console.log([3, 1, 2].sort());             // [1, 2, 3] (strings by default)
console.log([3, 1, 2].sort((a, b) => a - b)); // [1, 2, 3] numeric sort
console.log([1, 2, 3].reverse());   // [3, 2, 1]


//Joining and Converting

console.log(['a', 'b', 'c'].join('-'));      // "a-b-c"

console.log(Array.from('hello'));    // ['h', 'e', 'l', 'l', 'o']

console.log(Array.isArray([1, 2]));  // true

// Combining Arrays
console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]

console.log([... [1, 2], ... [3, 4]]);  // [1, 2, 3, 4]


// Modern Array Methods (ES2023+)
console.log(arr)
console.log(arr.toSorted());      // sorted copy
console.log(arr.toReversed());    // reversed copy
console.log(arr.toSpliced(1, 2));     // spliced copy
console.log(arr.with(1, 100));    // replace item at index 1