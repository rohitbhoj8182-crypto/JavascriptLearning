//var part of Es5
//window mai add karega
//function scope 
//redeclaration allowed
var name = "John";




//part of Es6
//let
//block scope
//redeclaration not allowed
let age = 25;
// let age = 30; // Error: Redeclaration not allowed
let city = "New York";
{
    let city = "Los Angeles"; // block scope
}

//const
const dob = 1998;
const country = "USA";


//decleration and initialization
let score; //declaration
score = 100; //initialization
let profession = "Developer";
const language = "JavaScript";

//Temporal Dead Zone TDZ

console.log(tempVar);
let tempVar = "Hello"; // ReferenceError: Cannot access 'tempVar' before initialization


//hosting ek variable ko use karne se pehle uski declaration ko upar le aata hai intialization nahi part goes on top and values


//added feautres in braanch