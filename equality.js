// == operator in js it acts as equality operator without type checking.
console.log(10 == "10"); //true   type coersion
console.log(true == true); //true
console.log("" == 0); //true
console.log(true == 1); //true
console.log(false == 0); //true

// ==== operator in js it acts as equality operator with type.
console.log(100 === "100"); //false
console.log(100 === 100); //true
console.log("" === 0); //false
