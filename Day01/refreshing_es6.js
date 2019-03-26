// Create an arrow function called hello that takes your name and displays it on the console

let hello = (name) => console.log(`Hi ${name}`);
hello('Sam');

//Extract the name and age and store them in variables using destructuring
let person1 = { name: "Sam", age: 12 };
let { name, age } = person1;
console.log(name, age);

//Create a copy of person1 object
let person2 = Object.assign({}, person1);
person2.name = "Ram";
console.log(person1.name);