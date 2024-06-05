//function without return value
function greet(name) {
  console.log("hi", name);
}
greet("kalyan");
greet("kali");

// function with return value
function add(a, b) {
  return a + b;
}
//calling function
const sum = add(2, 5);
console.log(sum);

// arrow functions
const arrowAdd = (a, b) => {
  return a + b;
};
// calling arrow function

const result = arrowAdd(30, 20);
console.log(result);
