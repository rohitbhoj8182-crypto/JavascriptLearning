// //array -> data structure that stores multiple values in a single variable
// //ordered collection of items
// //can store any data type
// // //can store mixed data types


// // //creating an array
// // let arr = [1, 2, 3, 4, 5];
// // console.log(arr); // [1, 2, 3, 4, 5]


// // //accessing array elements
// // console.log(arr[2]); // 3

// // //modifying array elements
// // arr[2] = 10;
// // console.log(arr); // [1, 2, 10, 4, 5]


// // //array methods

// // //push() - adds an element to the end of the array
// // arr.push(6);
// // console.log(arr); // [1, 2, 10, 4, 5, 6]
// // arr1=[7,8,9];
// // arr.push(...arr1);

// // //pop() - removes the last element of the array
// // arr.pop();
// // console.log(arr); // [1, 2, 10, 4, 5]


// // //shift() - removes the first element of the array
// // arr.shift();
// // console.log(arr); // [2, 10, 4, 5]

// // //unshift() - adds an element to the beginning of the array
// // arr.unshift(0);
// // console.log(arr); // [0, 2, 10, 4, 5]
// // arr.unshift(-2, -1);
// // console.log(arr); // [-2, -1, 0, 2, 10, 4, 5]

// // //splice() - adds/removes elements from the array
// // arr.splice(2, 0, 3, 4); // adds 3 and 4 at index 2
// // console.log(arr); // [-2, -1, 3, 4, 0, 2, 10, 4, 5]
// // arr.splice(4, 2); // removes 2 elements from index 4
// // console.log(arr); // [-2, -1, 3, 4, 10, 4, 5]


// // //slice() - returns a portion of the array
// // let newArr = arr.slice(2, 5); // from index 2 to 4
// // console.log(newArr); // [3, 4, 10]


// // //reverse() - reverses the array
// // arr.reverse();
// // console.log(arr); // [5, 4, 10, 4, 3, -1, -2]


// // //sort() - sorts the array
// // arr.sort(function(a, b) { return a - b; }); // ascending order
// // //a-ascending order
// // //b-descending order
// // console.log(arr); // [-2, -1, 3, 4, 4, 5, 10]


// //for each loop
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(val){
//     console.log(val);
// });


// //map srf tab use karna jab ak naya array chahiye ho pichle array se kuch transformation k baad

// //map dekhte hi blank array bna lo

// //when to use map
// //1. when you want to transform each element of an array and create a new array with the transformed elements.
// //2. when you want to apply a function to each element of an array and create a new array with the results.
// let newArr = arr.map(function(val){
//     return  val;
// });
// console.log(newArr); // [2, 4, 6, 8, 10]


// //filter ->kuch member naye array me chahiye based on condition
// //when to use filter
// //1. when you want to select a subset of elements from an array based on a specific condition.
// arr.forEach(function(val){  
//     console.log(val);
// });

// let even =arr.filter(function(val){
//     return val%2 == 0; //condition
// });

// even.forEach(function(val){
//     console.log(val);
// });


//reduce -> single value chahiye based on array members
//ek badhe array ko chhote me convert karna ho
//when to use reduce
//1. when you want to accumulate or combine all elements of an array into a single value.

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(accumulator, val){
    return accumulator + val;
}, 0); //initial value of accumulator is 0
console.log(sum); // 15

//find -> first match chahiye based on condition

let found = arr.find(function(val){
    return val > 3;
});
console.log(found); // 4


//some -> true/false based on condition

let hasEven = arr.some(function(val){
    return val % 2 == 0;
});
console.log(hasEven); // true

//destructuring arrays
let [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

//spread operator
let arr2 = [...arr, 6, 7, 8];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8]