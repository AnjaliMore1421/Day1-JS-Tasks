// Example 1 (var)
console.log(a); // undefined
var a = 10;
// Explanation: 'var' is hoisted. Only the declaration is hoisted, not the assignment. So 'a' exists but is undefined at this point.


// Example 2 (let)
try {
  console.log(b);
} catch (e) {
  console.log("Error:", e.message); // Error: Cannot access 'b' before initialization
}
let b = 20;
// Explanation: 'let' is hoisted but in the Temporal Dead Zone (TDZ). Cannot access it before declaration.


// Example 3 (const)
try {
  console.log(c);
} catch (e) {
  console.log("Error:", e.message); // Error: Cannot access 'c' before initialization
}
const c = 30;
// Explanation: 'const' is similar to 'let' in hoisting. TDZ prevents access before initialization.


// Example 4 (var inside function)
function test() {
  console.log(x); // undefined
  var x = 5;
}
test();
// Explanation: 'var' is function-scoped. Declaration is hoisted to top of function, so x exists but is undefined until assignment.


// Example 5 (let inside block)
try {
  {
    console.log(y);
    let y = 15;
  }
} catch (e) {
  console.log("Error:", e.message); // Error: Cannot access 'y' before initialization
}
// Explanation: 'let' is block-scoped and hoisted in TDZ. Cannot use it before initialization.


// Example 6 (function declaration)
sayHello(); // Hello
function sayHello() {
  console.log("Hello");
}
// Explanation: Function declarations are fully hoisted (declaration + body). Can call before definition.


// Example 7 (function expression with var)
try {
  sayHi();
} catch (e) {
  console.log("Error:", e.message); // Error: sayHi is not a function
}
var sayHi = function () {
  console.log("Hi");
};
// Explanation: var 'sayHi' is hoisted as undefined. Calling it before assignment → TypeError.


// Example 8 (arrow function with let)
try {
  greet();
} catch (e) {
  console.log("Error:", e.message); // Error: Cannot access 'greet' before initialization
}
let greet = () => {
  console.log("Hi");
};
// Explanation: let hoisting + arrow function = TDZ. Cannot access before declaration.


// Example 9 (var re-declaration)
var a = 10;
var a = 20;
console.log(a); // 20
// Explanation: 'var' can be re-declared in the same scope. Last assignment wins.


// Example 10 (let re-declaration)
try {
  eval('let b = 10; let b = 20;');
} catch (err) {
  console.log("Error:", err.message); // Error: Identifier 'b' has already been declared
}
// Explanation: 'let' cannot be re-declared in the same scope. Throws SyntaxError.
