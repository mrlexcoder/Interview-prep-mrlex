/*
===========================================
SINGLE THREAD vs MULTI THREAD
===========================================

SINGLE THREAD:
- Executes one task at a time in sequence
- JavaScript (Node.js) is single-threaded by default
- Uses Event Loop for async operations
- Simpler, no race conditions
- Limited by one CPU core

MULTI THREAD:
- Multiple tasks execute simultaneously
- Each thread runs independently
- Can utilize multiple CPU cores
- Complex (race conditions, deadlocks)
- Better for CPU-intensive tasks
*/

// ============================================
// EXAMPLE 1: SINGLE THREADED (JavaScript Default)
// ============================================

console.log("=== SINGLE THREADED EXAMPLE ===");

function heavyTask(name, duration) {
    console.log(`${name} started`);
    const start = Date.now();
    // Simulate CPU-intensive work
    while (Date.now() - start < duration) {
        // Blocking operation
    }
    console.log(`${name} completed`);
}

// These run one after another (blocking)
console.log("Start");
heavyTask("Task 1", 1000);  // Takes 1 second
heavyTask("Task 2", 1000);  // Takes 1 second
console.log("End");
// Total time: ~2 seconds (sequential)


// ============================================
// EXAMPLE 2: SINGLE THREAD WITH ASYNC (Non-blocking)
// ============================================

console.log("\n=== SINGLE THREAD WITH ASYNC ===");

function asyncTask(name, duration) {
    console.log(`${name} started`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${name} completed`);
            resolve();
        }, duration);
    });
}

async function runAsyncTasks() {
    console.log("Start");
    // These don't block the thread, but still run on single thread
    await Promise.all([
        asyncTask("Async Task 1", 1000),
        asyncTask("Async Task 2", 1000)
    ]);
    console.log("End");
    // Total time: ~1 second (concurrent but single-threaded)
}

// runAsyncTasks();


// ============================================
// EXAMPLE 3: MULTI THREADING (Worker Threads in Node.js)
// ============================================

const { Worker } = require('worker_threads');

console.log("\n=== MULTI THREADING EXAMPLE ===");

// Worker thread code (normally in separate file)
function createWorker(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(`
            const { parentPort, workerData } = require('worker_threads');
            
            // Heavy computation in separate thread
            function fibonacci(n) {
                if (n <= 1) return n;
                return fibonacci(n - 1) + fibonacci(n - 2);
            }
            
            const result = fibonacci(workerData.num);
            parentPort.postMessage({ 
                thread: workerData.id, 
                result: result 
            });
        `, { eval: true, workerData });

        worker.on('message', resolve);
        worker.on('error', reject);
    });
}

async function runMultiThreaded() {
    console.log("Starting multi-threaded tasks...");
    const start = Date.now();
    
    // Run on separate threads simultaneously
    const results = await Promise.all([
        createWorker({ id: 'Thread 1', num: 40 }),
        createWorker({ id: 'Thread 2', num: 40 }),
        createWorker({ id: 'Thread 3', num: 40 })
    ]);
    
    console.log("Results:", results);
    console.log(`Time taken: ${Date.now() - start}ms`);
}

// runMultiThreaded();


/*
===========================================
SINGLE PROCESS vs MULTI PROCESS
===========================================

SINGLE PROCESS:
- One instance of program running
- All code shares same memory space
- Simpler communication between parts
- Limited to one process resources
- If it crashes, everything stops

MULTI PROCESS:
- Multiple instances running independently
- Each has separate memory space
- Better isolation and stability
- Can utilize all CPU cores
- Inter-process communication needed
*/

// ============================================
// EXAMPLE 4: SINGLE PROCESS
// ============================================

console.log("\n=== SINGLE PROCESS EXAMPLE ===");

class SingleProcessApp {
    constructor() {
        this.users = [];
        this.orders = [];
    }
    
    addUser(user) {
        this.users.push(user);
        console.log(`User added in process ${process.pid}`);
    }
    
    addOrder(order) {
        this.orders.push(order);
        console.log(`Order added in process ${process.pid}`);
    }
    
    getStats() {
        return {
            processId: process.pid,
            users: this.users.length,
            orders: this.orders.length
        };
    }
}

const app = new SingleProcessApp();
app.addUser({ name: "John" });
app.addOrder({ item: "Laptop" });
console.log("Stats:", app.getStats());


// ============================================
// EXAMPLE 5: MULTI PROCESS (Cluster Module)
// ============================================

const cluster = require('cluster');
const os = require('os');

console.log("\n=== MULTI PROCESS EXAMPLE ===");

if (cluster.isMaster) {
    // Master process
    const numCPUs = os.cpus().length;
    console.log(`Master process ${process.pid} is running`);
    console.log(`Forking ${numCPUs} workers...`);
    
    // Fork workers (create child processes)
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork();
        
        // Communication between processes
        worker.on('message', (msg) => {
            console.log(`Master received from worker ${worker.process.pid}:`, msg);
        });
    }
    
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        console.log('Starting a new worker...');
        cluster.fork(); // Restart failed worker
    });
    
} else {
    // Worker process
    console.log(`Worker ${process.pid} started`);
    
    // Simulate work
    setInterval(() => {
        const work = Math.floor(Math.random() * 100);
        process.send({ 
            workerId: process.pid, 
            workDone: work 
        });
    }, 2000);
}


// ============================================
// EXAMPLE 6: CHILD PROCESS (Spawn separate processes)
// ============================================

const { spawn } = require('child_process');

console.log("\n=== CHILD PROCESS EXAMPLE ===");

function runChildProcess() {
    // Spawn a separate Node.js process
    const child = spawn('node', ['-e', `
        console.log('Child process ${process.pid} running');
        
        // Heavy computation in separate process
        function calculatePrimes(max) {
            const primes = [];
            for (let i = 2; i < max; i++) {
                let isPrime = true;
                for (let j = 2; j < i; j++) {
                    if (i % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) primes.push(i);
            }
            return primes.length;
        }
        
        const result = calculatePrimes(10000);
        console.log('Primes found:', result);
    `]);
    
    child.stdout.on('data', (data) => {
        console.log(`Child output: ${data}`);
    });
    
    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
}

// runChildProcess();


/*
===========================================
COMPARISON SUMMARY
===========================================

SINGLE THREAD:
✓ Simple to code and debug
✓ No race conditions
✗ Can't utilize multiple cores
✗ Blocking operations freeze everything
Example: Basic Node.js app

MULTI THREAD:
✓ True parallelism on multi-core CPUs
✓ Better for CPU-intensive tasks
✗ Complex (synchronization needed)
✗ Race conditions possible
Example: Image processing, video encoding

SINGLE PROCESS:
✓ Simple memory sharing
✓ Easy communication
✗ Single point of failure
✗ Limited scalability
Example: Small applications

MULTI PROCESS:
✓ Better isolation and stability
✓ Can use all CPU cores
✓ One crash doesn't kill all
✗ More memory usage
✗ Complex inter-process communication
Example: Web servers, microservices

===========================================
REAL-WORLD ANALOGY
===========================================

SINGLE THREAD:
One chef cooking multiple dishes one at a time

MULTI THREAD:
One chef with multiple hands cooking simultaneously

SINGLE PROCESS:
One restaurant with one kitchen

MULTI PROCESS:
Multiple restaurant branches, each independent
*/
