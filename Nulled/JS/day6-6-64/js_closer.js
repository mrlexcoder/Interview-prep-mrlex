// // // // console.log("This is a message from the main thread.");

// // // // // what is js and is it single threaded or multi threaded

// // // // const arraydata = [1, 2, 3, 4, 5,4,5,6,7,8,9,10];
// // // // //  filter mathod ge the values frm here

// // // // const filterdata = arraydata.filter((item)=> item<6);
// // // // // console.log(filterdata);

// // // // console.log(arraydata.indexOf(5));


// // // // //  i want now filter  get all the values from array but should not duplication how i do ?
// // // // // 
// // // // const notduplicate=[];
// // // // const filtergetdata= arraydata.filter((item)=>{
// // // //     if(!notduplicate.includes(item)){
// // // //         notduplicate.push(item);
// // // //         return true;
// // // //     }
// // // //     return false;

// // // //     // how its works ?
// // // //     // 1. We start with an empty array called notduplicate.
// // // //     // 2. We use the filter method to iterate through each item in the arraydata array.
// // // //     // 3. For each item, we check if it already exists in the notduplicate array using the includes method.
// // // //     // 4. If the item is not present in notduplicate, we add it to the notduplicate array using the push method and return true to include it in the filtered results.
// // // //     // 5. If the item is already present in notduplicate, we return false to exclude it from the filtered results.
// // // //     // 6. After iterating through all items in arraydata, we will have a new array that contains only unique values, and any duplicates will have been excluded from the results.
// // // // })  
// // // // console.log(notduplicate);



// // // // const numbermain=[];
// // // // const foreachgetdata= filterdata.forEach((item)=>{
// // // //     // get all that duplicate values
// // // // //    only get duplicate values

// // // //    if(numbermain.includes(item)){
// // // //     console.log("duplicate value is ",item);
// // // //    }
// // // //    else{
// // // //     numbermain.push(item);
// // // //     // what is push method in js
// // // //     // The push method in JavaScript is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array after the elements have been added. For example:
// // // //    }
// // // //     console.log(numbermain.indexOf(5));
// // // // // how index of works ?
// // // // // The indexOf method in JavaScript is used to find the index of the first occurrence of a specified value in an array. It returns the index of the first occurrence of the value, or -1 if the value is not found in the array. For example:
// // // // // const array = [1, 2, 3, 4, 5];
// // // // // console.log(array.indexOf(3)); // Output: 2
// // // // // console.log(array.indexOf(6)); // Output: -1
// // // // // how this works?
// // // // // 1. We start with an empty array called numbermain.
// // // // // 2. We use the forEach method to iterate through each item in the filterdata array.
// // // // // 3. For each item, we check if it already exists in the numbermain array using the includes method.
// // // // // 4. If the item is already present in numbermain, it means it's a duplicate, and we log it to the console.
// // // // // 5. If the item is not present in numbermain, we add it to the numbermain array using the push method.
// // // // // 6. After iterating through all items in filterdata, we will have a list of unique values in numbermain and any duplicates will have been logged to the console.


// // // // })
// // // // console.log(numbermain);



// // // //  map method in js
// // // var dataarray = [1, 2, 3, 4, 5];
// // // var mapdata = dataarray.map((item) => item * 2);
// // // console.log(mapdata);
// // // // how map method works ?
// // // // The map method in JavaScript is used to create a new array by applying a provided function to each element of the original array. It does not modify the original array but returns a new array with the transformed values. For example:
// // // // const array = [1, 2, 3, 4, 5];
// // // // const mappedArray = array.map((item) => item * 2);
// // // // console.log(mappedArray); // Output: [2, 4, 6, 8, 10]
// // // // how this works?
// // // // 1. We start with an array called dataarray containing the values [1, 2, 3, 4, 5].
// // // // 2. We use the map method to iterate through each item in the dataarray.
// // // // 3. For each item, we apply a function that multiplies the item by 2.
// // // // 4. The map method creates a new array called mapdata that contains the results of applying the function to each item in dataarray.
// // // // 5. Finally, we log the mapdata array to the console, which outputs [2, 4, 6, 8, 10].


// // // // the real dsa question is how to find the duplicate values in an array and how to remove the duplicate values from an array in JavaScript.

// // // // To find duplicate values in an array in JavaScript, you can use a combination of the filter and indexOf methods. Here's an example:

// // // const arrayWithDuplicates = [1, 2, 3, 4, 5, 2, 3];




// // // // filternumber only odd Number

// // // // @ Input: nums = [2,7,11,15], target = 9
// // // // Output: [0,1]
// // // // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // // // how i solv ?


// // // // queztoion  Input: nums = [2,7,11,15], target = 9?





// // // // const duplicatefind = arrayWithDuplicates.filter((item, index)=>{
// // // //     return arrayWithDuplicates.indexOf(item)!==index;


// // // //     // console.log(duplicatefind);
// // // // })
// // // //     console.log(duplicatefind);

// // // //     const numsfiltered =[];
// // // // const getdiuplicate= arrayWithDuplicates.forEach((item, index)=>{
// // // //     if(arrayWithDuplicates.indexOf(item)!==index){
// // // //         console.log("duplicate value is ",item);
// // // //         numsfiltered.push(item);

// // // //     }

// // // //     if(!numsfiltered.includes(item)){
// // // //         numsfiltered.push(item);
// // // //     }
// // // // })
// // // // console.log(numsfiltered);



// // // // how it works?
// // // // 1. We start with an array called arrayWithDuplicates that contains some duplicate values.        
// // // // 2. We use the filter method to iterate through each item in the arrayWithDuplicates.
// // // // 3. For each item, we check if the index of the first occurrence of that item in the array is not equal to the current index. This means that if the item has appeared before in the array, it will be considered a duplicate.
// // // // 4. The filter method creates a new array called duplicates that contains only the duplicate values from the original array.
// // // // 5. Finally, we log the duplicates array to the console, which outputs the duplicate values found in the original array.

// // // // how index ? not  understand this line of code

// // // map method in js
// // var dataarray = [1, 2, 3, 4, 5];
// // var mapdata = dataarray.map((item) => item * 2);
// // console.log(mapdata);
// // // how map method works ?
// // // The map method in JavaScript is used to create a new array by applying a provided function to each element of the original array. It does not modify the original array but returns a new array with the transformed values. For example:
// // // const array = [1, 2, 3, 4, 5];



// // const arraydata=[
// //     {name:"Alice",
// //     age:25},
// //     {name:"Bob",
// //     age:30
// //     },
// // ]

// // var mapdata= arraydata.map(item=>[{name:item.name,
// //     age:item.age}]
// // );
// // console.log(mapdata);
// // // how get multiple values in map method ?
// // // The map method in JavaScript can only return a single value for each element in the original array. If you want to return multiple values, you can return an object or an array that contains the desired values. For example:
// // // const arraydata = [
// // //     { name: "Alice", age: 25 },
// // //     { name: "Bob", age: 30 }
// // // ];   
// // // var mapdata = arraydata.map(item => ({ name: item.name, age: item.age }));
// // // console.log(mapdata); // Output: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
// // // how this works?

// // // i want second person name only in map method ?
// // var mapdata = arraydata.map((item, index) => {
// //     if (index === 1) {  // Check if the current index is 1 (second person)  
// //         return item.name;  // Return the name of the second person
// //     }   
// //     return null;  // Return null for all other items
// // });
// // console.log(mapdata); // Output: [null, "Bob"]
// // // how this works?
// // // 1. We start with an array called arraydata that contains objects representing people with their names and ages.
// // // 2. We use the map method to iterate through each item in the arraydata.
// // // 3. For each item, we check if the current index is equal to 1, which corresponds to the second person in the array.
// // // 4. If the index is 1, we return the name of that person using item.name.
// // // 5. For all other items (where the index is not 1), we return null.
// // // 6. The map method creates a new array called mapdata that contains the results of applying the function to each item in arraydata, resulting in an array where only the second person's name is included and all other values are null.

// // // i want find the age of the array if b/q then print that users name only?
// // var mapdata = arraydata.map((item) => {
// //     if (item.age > 28) {  // Check if the age of the person is greater than 28
// //         return item.name;  // Return the name of the person if the condition is true
// //     }   
// //     return null;  // Return null for all other items
// // }); 
// // console.log(mapdata); // Output: [null, "Bob"]
// // // how this works?
// // // 1. We start with an array called arraydata that contains objects representing people with their names and ages.




// // reduce method in js
// // why what is do ?
// // The reduce method in JavaScript is used to reduce an array to a single value by applying a provided function to each element of the array. It takes a callback function and an optional initial value as arguments. The callback function is executed for each element in the array, and it receives the accumulated result from the previous iteration and the current element as parameters. The final result of the reduce method is a single value that represents the cumulative result of applying the function to all elements in the array. For example:
// // const array = [1, 2, 3, 4, 5];
// // const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // what menas cumulative result ?
// // The cumulative result refers to the ongoing total or accumulated value that is being calculated as the reduce method iterates through the elements of the array. In the context of the reduce method, the cumulative result is updated with each iteration based on the logic defined in the callback function. For example, if you are using reduce to calculate the sum of an array, the cumulative result would be the running total that is updated with each addition of the current element to the accumulator.

// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((total, n) => {
//   return total + n;
// }, 0);

// console.log(sum); // 10


// const fruits = ["apple", "banana", "apple"];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count); // { apple: 2, banana: 1 }
// // how this works?
// // 1. We start with an array called fruits that contains the values ["apple", "banana", "apple"].




// // remove duplicacy from array 
// // merge two array and remove duplicate values from array
// //  reverse an array wthout reverse method
// // find second largest number in an array
// // find second smallest number in an array
// // flatter nested Array
// // group Object by property


// // 1. ans to remove duplicacy from array
// // const arrayWithDuplicates = [1, 2, 3, 4, 5, 2, 3];
// const arrayWithDuplicates = [1, 2, 3, 4, 5, 2, 3];
// const onlyduplicates =[];
// const uniqueArray = arrayWithDuplicates.filter((item, index)=>{
//     if (arrayWithDuplicates.indexOf(item)===index){
//         return true;
//     }

//     if (!onlyduplicates.includes(item)){
//         onlyduplicates.push(item);
//             console.log(onlyduplicates);

//     }
// })

// console.log(uniqueArray); // [1, 2, 3, 4, 5]
// // how this works?
// // 1. We start with an array called arrayWithDuplicates that contains some duplicate values.
// // 2. We use the reduce method to iterate through each item in the arrayWithDuplicates.
// // 3. For each item, we check if it is not already included in the accumulator array (acc) using the includes method.
// // 4. If the item is not included in acc, we push it into acc using the push method.
// // 5. The reduce method returns the accumulator array (acc) which now contains only unique values from the original array.
// // 6. Finally, we log the uniqueArray to the console, which outputs an array with duplicates removed. 


// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const mergearray =[...arr1,...arr2];
// console.log(mergearray); // [1, 2, 3, 3, 4, 5]

// const mergedUniqueArray = [...new Set(mergearray)];
// console.log(mergedUniqueArray); // [1, 2, 3, 4, 5]
// // how this works?

// // find bigger and secons bigger number in array mergedUniqueArray
// const max = Math.max(...mergedUniqueArray);
// const secondMax = Math.max(...mergedUniqueArray.filter(num => num !== max));
// console.log("Largest number:", max); // 5
// console.log("Second largest number:", secondMax); // 4
// // how this works? without math method

// const nowdate = new Date();
// console.log(nowdate);

// const maxvaluefromarray= Math.min(...mergedUniqueArray);
// console.log("Smallest number:", maxvaluefromarray); // 1

// console.log(arr1.push(...arr2)); // [1, 2, 3, 3, 4, 5]

// // what push do ?
// // The push method in JavaScript is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array after the elements have been added. For example:


// // how add all number form array
// const sumofarray = mergearray.reduce((hold,num)=>hold-num,0)
// console.log("Sum of array:", sumofarray); // 15
// // how this works?
// // 1. We start with an array called mergedUniqueArray that contains the values [1, 2, 3, 4, 5].
// // 2. We use the reduce method to iterate through each number in the mergedUniqueArray.
// // 3. The reduce method takes a callback function that receives an accumulator (acc) and the current number (num) as parameters.





// remove duplicacy from array 
// merge two array and remove duplicate values from array
//  reverse an array wthout reverse method
// find second largest number in an array
// find second smallest number in an array
// flatter nested Array
// group Object by property
// flatter nested Array answer
// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

// without reduce method
// const flattenArray = (arr) => {
//     const result = [];
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             result.push(...flattenArray(item)); // Recursively flatten nested arrays
//         } else {
//             result.push(item); // Push non-array items directly to the result
//         }   

//     });
//     return result;
// }



const nestedArrasy = [1, [2, 3], [4, [5, 6]], 7];

const flat = nestedArrasy.flat(Infinity);

console.log(flat);
// [1, 2, 3, 4, 5, 6, 7]