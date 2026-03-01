// Worker.js
// This is the code for the Web Worker
self.onmessage = function(event) {
    console.log("Message received from main thread: " + event.data);    
    // Perform some computation or task
    let result = event.data + " - Processed by Worker";
    // Send the result back to the main thread
    self.postMessage(result);
}