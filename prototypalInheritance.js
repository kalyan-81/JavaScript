// prototyping
function Person(firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName;
}
const person1 = new Person("kalyan", "ch"); // this is called constructor function
const person2 = new Person("kali", "cher"); // constructor function
console.log(person1.fname, person2.fname);
Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};
function SuperHero(firstName, lastName) {
  //this={}
  Person.call(this, firstName, lastName);
  this.isSuperHero = true;
}
// defining prototype for superHero function
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting Crime");
};
SuperHero.prototype = Object.create(Person.prototype); //
const batsman = new SuperHero("kalyan", "ch");
SuperHero.prototype.constructor = SuperHero;
console.log(batsman.isSuperHero);
console.log(batsman.getFullName());
