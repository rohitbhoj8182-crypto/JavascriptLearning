//Arithmatic ,comparison,logical Operators ,unary Operators,ternary Operators


//Arithmatic Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); //15 in String use for concatenation
console.log("Subtraction: " + (a - b)); //5
console.log("Multiplication: " + (a * b)); //50
console.log("Division: " + (a / b)); //2
console.log("Modulus: " + (a % b)); //0
console.log("Exponentiation: " + (a ** b)); //100000 a to the power b

//Comparison Operators
//= means value assignment 
console.log("Equal to: " + (a == b)); //false
console.log("Not equal to: " + (a != b)); //true
console.log("Strict equal to: " + (a === b)); //false
console.log("Greater than: " + (a > b)); //true
console.log("Less than: " + (a < b)); //false
console.log("Greater than or equal to: " + (a >= b)); //true
console.log("Less than or equal to: " + (a <= b)); //false

//Logical Operators
let x = true;
let y = false;
console.log("Logical AND: " + (x && y)); //false
console.log("Logical OR: " + (x || y)); //true
console.log("Logical NOT: " + (!x)); //false

//Unary Operators
let c = 10;
console.log("Unary Plus: " + (+c)); //10
console.log("Unary Minus: " + (-c)); //-10
console.log("Increment: " + (++c)); //11
console.log("Decrement: " + (--c)); //10

//Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can Vote: " + canVote); //Yes, can vote

//typeof and instanceof
console.log("Type of a: " + typeof a); //number
console.log("Type of x: " + typeof x); //boolean
console.log("Type of canVote: " + typeof canVote); //string

a instanceof Number; //false because a is a primitive number, not an object