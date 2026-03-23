// Example 1 (var)
console.log(a);
var a = 10;

// Example 2 (let)
try {
  console.log(b);
} catch (e) {
  console.log("Error:", e.message);
}
let b = 20;

// Example 3 (const)
try {
  console.log(c);
} catch (e) {
  console.log("Error:", e.message);
}
const c = 30;

// Example 4 (var inside function)
function test() {
  console.log(x);
  var x = 5;
}
test();

// Example 5 (let inside block)
try {
  {
    console.log(y);
    let y = 15;
  }
} catch (e) {
  console.log("Error:", e.message);
}

// Example 6 (function declaration)
sayHello();
function sayHello() {
  console.log("Hello");
}

// Example 7 (function expression with var)
try {
  sayHi();
} catch (e) {
  console.log("Error:", e.message);
}
var sayHi = function () {
  console.log("Hi");
};

// Example 8 (arrow function with let)
try {
  greet();
} catch (e) {
  console.log("Error:", e.message);
}
let greet = () => {
  console.log("Hi");
};

// Example 9 (var re-declaration)
var a = 10;
var a = 20;
console.log(a);

// Example 10 (let re-declaration)
try {
  eval('let b = 10; let b = 20;');
} catch (err) {
  console.log("Error:", err.message);
}