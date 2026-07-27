JavaScript arrays come with many built-in methods. Here are the most commonly used ones grouped by purpose:

Adding and Removing Elements

let arr = [1, 2, 3];

arr.push(4);      // [1, 2, 3, 4]  - add to end
arr.pop();        // [1, 2, 3]     - remove from end

arr.unshift(0);   // [0, 1, 2, 3]  - add to start
arr.shift();      // [1, 2, 3]     - remove from start

----------------------------------------------------------------

Iteration

arr.forEach(item => console.log(item));

Executes a function for each element.

----------------------------------------------------------------

Searching

arr.includes(2);         // true
arr.indexOf(2);          // 1
arr.lastIndexOf(2);      // last occurrence index

arr.find(x => x > 2);    // first matching value
arr.findIndex(x => x > 2); // first matching index

arr.some(x => x > 2);    // true if any match
arr.every(x => x > 0);   // true if all match

----------------------------------------------------------------

Transforming Arrays

map()
Creates a new array.

[1, 2, 3].map(x => x * 2);
// [2, 4, 6]

filter()

[1, 2, 3, 4].filter(x => x % 2 === 0);
// [2, 4]

reduce()
Reduces array to a single value.

[1, 2, 3, 4].reduce((sum, x) => sum + x, 0);
// 10

flat()
Flattens nested arrays.

[1, [2, 3], [4]].flat();
// [1, 2, 3, 4]

flatMap()
Maps and flattens one level.

[1, 2, 3].flatMap(x => [x, x * 2]);
// [1, 2, 2, 4, 3, 6]

----------------------------------------------------------------

Extracting and Modifying

slice()
Returns a portion of an array.

let arr = [1, 2, 3, 4];

arr.slice(1, 3);
// [2, 3]

splice()
Adds/removes elements in place.
let arr = [1, 2, 3, 4];

arr.splice(1, 2);
// removes [2, 3]
// arr becomes [1, 4]

----------------------------------------------------------------

Sorting and Reversing

[3, 1, 2].sort();             // [1, 2, 3] (strings by default)

[3, 1, 2].sort((a, b) => a - b);
// [1, 2, 3] numeric sort

[1, 2, 3].reverse();
// [3, 2, 1]

----------------------------------------------------------------

Joining and Converting

['a', 'b', 'c'].join('-');
// "a-b-c"

Array.from('hello');
// ['h', 'e', 'l', 'l', 'o']

Array.isArray([1, 2]);
// true


----------------------------------------------------------------

Combining Arrays

[1, 2].concat([3, 4]);
// [1, 2, 3, 4]

[... [1, 2], ... [3, 4]];
// [1, 2, 3, 4]

----------------------------------------------------------------

Modern Array Methods (ES2023+)

arr.toSorted();      // sorted copy
arr.toReversed();    // reversed copy
arr.toSpliced();     // spliced copy
arr.with(1, 100);    // replace item at index 1

Example:
const arr = [1, 2, 3];

arr.with(1, 100);
// [1, 100, 3]