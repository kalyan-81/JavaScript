class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayName() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = new Person("kalya", "kali");
console.log(person1.sayName());
class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    return "fighting crime";
  }
}
const superHero1 = new SuperHero("Pavan", "kalyan");
console.log(superHero1.sayName());
console.log(superHero1.fightCrime());
