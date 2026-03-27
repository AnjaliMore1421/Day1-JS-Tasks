// memory.js - Object Reference Example

let obj1 = { name: "Anjali" };
let obj2 = obj1; // obj2 references the same object as obj1

obj2.name = "Rahul"; // modifying obj2 also affects obj1

console.log(obj1.name); // Rahul

Explanation:

Objects are stored in the heap.
obj1 and obj2 both point to the same memory location.
Changing obj2.name updates the object in memory, so obj1.name also reflects the change.
This demonstrates pass-by-sharing (reference behavior).
