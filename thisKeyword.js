//implicit binding of this keyword
const person = {
  name: "kalyan",
  sayName: function () {
    console.log("My name is ", this.name);
  },
};
person.sayName();
// explicit binding of this keyword
function sayName() {
  console.log("My name is ", this.name);
}
sayName.call(person);
// new binding
function Person(name) {
  this.name = name;
}
const p1 = new Person("KLN");
const p2 = new Person("Kalyan");
console.log(p1.name);
console.log(p2.name);

//default binding

//const address = "plm"; this will works in browser
globalThis.address = "plm";
function sayAddress() {
  console.log(this.address);
}
sayAddress();

// prototyping
function Person(firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName;
}
const person1 = new Person("kalyan", "ch"); // this is called constructor function
const person2 = new Person("kali", "cher"); // constructor function
console.log(person1.fname, person2.fname);
// let us assign a new property to person1
// person1.getFullName = function () {
//   return this.fname + " " + this.lname;
// };
Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};
console.log(person1.getFullName());
console.log(person2.getFullName()); // this will throw TypeError becase person2 doesn't have any property
