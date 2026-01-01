//function 
//what is function -> jo ceez hami code mai kaam ati jis time chaiye uss time chale vo function hai


function dance(){
    console.log("I am dancing");
}

function sing(){
    console.log("I am singing");

}

function sing(){
    console.log("I am singing a song");
}


//other way to declare function
let jump = function(){ //function expression
    console.log("I am jumping");
}

//arrow function
let run = ()=>{
    console.log("I am running");
}

//value return function

let talk =(name) =>{
    console.log(`${name } is talking`);
}


//default parameter function -> jab koi argument na ho to default value le lega
let eat = (food = "apple")=>{
    console.log(`I am eating ${food}`);
}

//rest parameter function -> jab hame pata na ho kitne argument aane wale hai to hum rest parameter use karte hai

let eatAll = (...foods)=>{
    console.log(`I am eating ${foods.join(", ")}`);
}
eatAll("pizza", "burger", "pasta");

//spread operator -> jab hame array ko individual element mai todna hota hai to hum spread operator use karte hai


//returning value from function
let add = (a, b)=>{
    return a + b;
}

//first class function -> function ko variable mai store karna, function ko argument ke roop mai dena, function se return karna

let multiply = (a, b)=>{
    return a * b;
}
//higher order function -> jo function dusre function ko argument ke roop mai leta hai ya function ko return karta hai

function calculator(a, b, operation){
    return operation(a, b);
}

let sum = calculator(5, 10, add);
console.log(`Sum: ${sum}`);


//pure function -> jo function same input par hamesha same output de aur jiska koi side effect na ho
let fnc =()=>{
    return 5 + 3;
}

//impure function -> jo function same input par alag output de sakta hai ya jiska side effect ho sakta hai

let impureFnc =()=>{
    return Math.random();
}

//closure -> jab ek function dusre function ke andar define hota hai aur inner function outer function ke variables ko access kar sakta hai

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(`Count: ${count}`);
    }
    return inner;
}

//letical scope -> jab variable function ke andar declare hota hai to vo sirf usi function ke andar accessible hota hai

function lexicalScope(){
    let message = "Hello, World!";
    function printMessage(){
        console.log(message);
        y =12;
        console.log("Hello from inner function");
    }
    printMessage();
    //console.log(y); //error
}

//iIFE -> Immediately Invoked Function Expression
(function(){
    console.log("IIFE executed");
})();

//hoisting -> function declaration ko hum function ke use karne se pehle bhi call kar sakte hai kyunki vo hoisted hota hai

hoistedFunction();

function hoistedFunction(){
    console.log("This function is hoisted");
}

//counter using closure

//making counter

function makeCounter(){
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

// let counter1 = makeCounter();
// console.log(counter1());
// console.log(counter1());
