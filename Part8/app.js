//object ->{} blank object with key and value
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}
person.age = 31;

//lopping through object
for (let key in person) {
    console.log(key + ": " + person[key]);
}

let {name, age} = person;
console.log(name);  
console.log(age);  //undefined
//object assign
const person2 = Object.assign({}, person);

//deep clone
const person3 = JSON.parse(JSON.stringify(person));

//?optional chaining
console.log(person?.address?.street); //undefined no error