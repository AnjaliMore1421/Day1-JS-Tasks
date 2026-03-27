// Define the first function
function first() {
  // first() calls second()
  second();
}

// Define the second function
function second() {
  // second() calls third()
  third();
}

// Define the third function
function third() {
  // console.trace prints the current call stack
  console.trace("Call Stack");
}

// Start the execution by calling first()
// This triggers the chain: first() -> second() -> third()
first();

Output (console):

Call Stack
    at third (filename.js:12)
    at second (filename.js:8)
    at first (filename.js:4)
    at <anonymous>:1:1

Explanation:

third() is currently executing → top of the stack
second() called third() → below third()
first() called second() → below second()
Global execution context → bottom of stack
Shows LIFO (Last In, First Out) order of the call stack.
