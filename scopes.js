// global scope

const myName = "kali";
function greetMorning() {
  console.log(myName);
}
greetMorning();
//block scope
if (true) {
  const myName = "kalyan";
  console.log(myName); // inside block
}
console.log(myName); // outside the block throws reference error
// function scope
function greet() {
  const myName = "kalyan";
  console.log(myName); // inside the function
}
greet();
console.log(myName); // accessing myName outside the function will throw an error
