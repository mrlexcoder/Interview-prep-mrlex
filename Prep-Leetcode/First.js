// add two arrays in js

let a = [1,2,3];
let b = [2,3,4,5];

let result = [...a,...b];

let resultwithnorepeat=[...new Set([...a,...b])];

console.log(result);