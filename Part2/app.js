//DataTypes in JavaScript


//Primitive Data Types
//copy karne mai value copy hoti hai
//String
let name = "John";
//Number
let age = 25;
//Boolean shi ya galat
let isActive = true;
//Null jaan bujh kar khali karna
let emptyValue = null;
//Undefined ex variable declare karne ke baad value assign na karne par
let undefinedValue;
//Symbol (ES6) unique identifier
const sym = Symbol("description");
//BigInt (ES2020)
const bigIntValue = 123456789012345678901234567890n;

//non-primitive Data Types /reference data types 
//copy karne mai reference copy hoti hai change in b cause also changes in a

let a = { name: "Alice", age: 30 }; //Object
let b = a; // b references the same object as a
b.age = 31; // Modifying b also affects a
//Array
let numbers = [1, 2, 3, 4, 5];

//dynamic typing ->js mai variable ki type change ho sakti hai

//typeof operator
console.log(typeof name);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof emptyValue); // object (this is a known quirk in JavaScript)
console.log(typeof undefinedValue);
console.log(typeof sym);
console.log(typeof bigIntValue);
console.log(typeof a);
console.log(typeof numbers);
console.log(typeof(null) === 'object'); // true

//type conversion
//type coercion
console.log(1 == '1');
console.log(1 === '1');
console.log('Rohit ' + 25);
console.log('5' - 2);
console.log("rohit" * 2); // NaN

//truthy and falsy values
//falsy values: false, 0, "", null, undefined, NaN .
//save other values are truthy values
//[part 2]