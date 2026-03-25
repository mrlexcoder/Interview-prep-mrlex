30 Days JavaScript Interview Target

Goal
- Prepare for JS interviews with a focused 30-day plan: fundamentals → advanced → system-design/practical projects.

How to use
- Spend one day per topic. Each day includes: 2–3 interview-style questions and a short practice task.
- Do whiteboard-style answers, write runnable code, and explain time/space trade-offs.

Day 1 — JS Basics & Types
- Q: Differences between `var`, `let`, and `const`? When use each?
- Q: Primitive vs. reference types — memory and copying semantics?
- Practice: Implement `deepClone(obj)` for typical JS objects.

Day 2 — Scope & Hoisting
- Q: Function scope vs block scope; hoisting examples.
- Q: Temporal Dead Zone — explain and demo.
- Practice: Show hoisting pitfalls with `var` and fix with `let`.

Day 3 — Closures
- Q: What is a closure? Use-cases and memory concerns.
- Q: How to avoid common closure pitfalls in loops?
- Practice: Implement a `memoize(fn)` using closures.

Day 4 — Functions & `this`
- Q: How `this` is bound in arrow vs normal functions?
- Q: Differences between call/apply/bind.
- Practice: Create a simple event emitter and bind contexts.

Day 5 — Prototypes & Inheritance
- Q: Prototype chain lookup and `__proto__` vs `prototype`.
- Q: Class syntax vs prototypal inheritance trade-offs.
- Practice: Implement inheritance without `class` using prototypes.

Day 6 — ES6+ Syntax
- Q: Common ES6 features (destructuring, spread, rest) and use-cases.
- Q: Modules: named vs default exports and circular imports.
- Practice: Refactor a small module to use ES modules and destructuring.

Day 7 — Array Methods & Iteration
- Q: Differences between `for`, `for...of`, `forEach`, `map`, `reduce`.
- Q: When to use `reduce` vs explicit loop.
- Practice: Implement `groupBy(arr, fn)` using `reduce`.

Day 8 — Objects, Maps, Sets
- Q: When use `Map`/`Set` vs plain objects.
- Q: Property descriptors and immutability (`Object.freeze`).
- Practice: Build a small LRU cache using `Map`.

Day 9 — Error Handling & Types
- Q: Error propagation, custom error classes, best practices.
- Q: When to throw vs return error results.
- Practice: Create a small validator that returns rich error objects.

Day 10 — Asynchronous JS: Callbacks
- Q: Callback hell causes + strategies to avoid it.
- Q: Event loop basics and microtask vs macrotask.
- Practice: Implement a callback-based retry wrapper.

Day 11 — Promises
- Q: Promise states, chaining, common anti-patterns.
- Q: `Promise.all` vs `Promise.allSettled` vs `race`.
- Practice: Convert a callback API into Promise-based with `promisify`.

Day 12 — Async/Await
- Q: How async/await is syntactic sugar over Promises; error handling.
- Q: Concurrency patterns with `Promise.all` and `for await`.
- Practice: Write an `async` pipeline that fetches data in batches.

Day 13 — Event Loop Deep Dive
- Q: Explain the event loop, microtasks, macrotasks, and rendering.
- Q: Priority problems: starvation and long tasks.
- Practice: Create code demonstrating microtask vs macrotask ordering.

Day 14 — Network & Fetch API
- Q: Fetch vs XHR; streaming responses; CORS basics.
- Q: How to handle retries, timeouts, and cancellation.
- Practice: Build a fetch wrapper with timeout and exponential backoff.

Day 15 — DOM & Browser APIs
- Q: Event delegation, repaint vs reflow, memory leaks in DOM.
- Q: Shadow DOM and accessibility basics.
- Practice: Implement a virtualized list to handle large DOM efficiently.

Day 16 — Forms & Validation
- Q: Controlled vs uncontrolled components (if using frameworks).
- Q: Security: avoid XSS with form handling.
- Practice: Build a small form with client-side validation and sanitization.

Day 17 — Performance & Optimization
- Q: Common bottlenecks: rendering, JS CPU, memory; profiling approach.
- Q: Debounce vs throttle; when to use each.
- Practice: Optimize a slow loop and demonstrate the improvement.

Day 18 — Memory & Garbage Collection
- Q: How GC works in V8; common memory leak sources.
- Q: WeakMap/WeakSet uses.
- Practice: Find and fix a memory leak in a sample app.

Day 19 — Modules & Build Tools
- Q: Bundlers (webpack/rollup/vite) and tree-shaking basics.
- Q: Source maps and why they matter.
- Practice: Configure a tiny build with bundler and dev server.

Day 20 — Testing Fundamentals
- Q: Unit vs integration vs e2e tests; mocking strategies.
- Q: Test coverage interpretation and limits.
- Practice: Write unit tests (Jest/Mocha) for core utils.

Day 21 — Debugging & Tooling
- Q: How to use Chrome DevTools for JS debugging and performance.
- Q: Source map debugging and breakpoint techniques.
- Practice: Reproduce and fix a bug using DevTools step-through.

Day 22 — Security Basics
- Q: XSS, CSRF, content security policy basics.
- Q: Securely storing tokens in SPAs.
- Practice: Harden a small app against XSS vectors.

Day 23 — Functional Programming in JS
- Q: Pure functions, immutability, higher-order functions.
- Q: Pros/cons of FP in JS.
- Practice: Refactor imperative code to declarative functional style.

Day 24 — Design Patterns
- Q: Common JS patterns: module, factory, observer, singleton.
- Q: When to apply patterns vs simple composition.
- Practice: Implement observable pattern and use it in a small app.

Day 25 — Data Structures & Algorithms (JS)
- Q: Implement and analyze linked list, stack, queue, tree basics.
- Q: Big-O trade-offs for common operations in arrays/objects/maps.
- Practice: Implement a trie for prefix lookup.

Day 26 — Algorithms: Sorting & Searching
- Q: Implement quicksort/mergesort and explain complexity and stability.
- Q: When to choose which algorithm in practice.
- Practice: Implement an efficient sort for objects by multiple keys.

Day 27 — Real-world APIs & Pagination
- Q: Cursor vs offset pagination; rate limiting strategies.
- Q: API versioning and backward compatibility.
- Practice: Implement client-side pagination and caching layer.

Day 28 — Architecture & System Design (Frontend)
- Q: Designing scalable frontend: code-splitting, SSR vs SPA.
- Q: State management choices and trade-offs.
- Practice: Sketch an architecture for a medium app and justify choices.

Day 29 — Build a Small Project
- Task: Build a small app (Todo, Notes, or Weather) covering fetch, state, tests.
- Interview: Explain component breakdown, data flow, edge cases, and deployment.

Day 30 — Mock Interview & Review
- Task: Do a 45–60 minute mock interview: one algorithm, one system design, one behavior question.
- Review: Revisit weak topics, redo problems, and prepare cheat-sheet of answers.

Extras & Resources
- Recommended reading: MDN, "You Don’t Know JS" (book series), V8 blog.
- Practice platforms: LeetCode (JS), Frontend Mentor, CodeSignal.

Notes
- For each day: timebox to 1–3 hours depending on depth. Pair practice with writing code and explaining aloud.
- Save answers and code samples in a personal repo or `30 days target/make` for artifacts.
