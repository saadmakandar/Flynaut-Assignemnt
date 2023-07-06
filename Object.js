//Declare a variable obj1 and assign it an object with a property "greeting" set to "hello".
let obj1 = { greeting: "hello" };
// Assign the reference of obj1 to obj2
let obj2 = obj1;
// Modify the value of the "greeting" property of obj1
obj1["greeting"] = "Bye";

console.log(obj1); // Output: { greeting: 'Bye' }
console.log(obj2); // Output: { greeting: 'Bye' }
