// Most-Used Predefined (Built-in) JS Functions --------------------------
// console.log()
// setTimeout()
// setInterval()
// parseInt()
// parseFloat()
// isNaN()
// JSON.stringify()
// JSON.parse()
// alert()
// prompt()
// Most-Used JavaScript Data Types --------------------------
// Number
// String
// Boolean
// Undefined
// Null
// Object
// Array
// Function
// Symbol
// BigInt

const worker = new Worker("worker.js");

worker.postMessage(5);

worker.onmessage = (e) => {
  console.log("Result:", e.data);
};
onmessage = (e) => {
  let n = e.data;
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  postMessage(sum);
};
