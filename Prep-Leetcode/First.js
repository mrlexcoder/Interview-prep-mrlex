// add two arrays in js

let a = [3,33,6,3,1,2,3];
let b = [2,3,4,5];

let result = [...a,...b];

let resultwithnorepeat=[...new Set([...a,...b])];

console.log(result);



// want to get only repeated numbers from arrays
let repeated = result.filter((value, index, arr) => 
  arr.indexOf(value) !== index
);

console.log([...new Set(repeated)]);
