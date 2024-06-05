// implicit coversion or type coersion
console.log(2 + "3"); //23
console.log("2" + "4"); //24
console.log("3" + 2); //32
console.log(5 - "2"); //3
console.log("5" * 2); //10
console.log("10" % 2); //0
console.log(true + 3); //4
console.log(true + "3"); //true3
console.log("5" - true); //4  here true is treated as 1
console.log("6" - false); //6 here false is treated as 0
console.log("Kalyan" + "kali"); //Kalyankali
console.log("Kalyan" - "kali"); //NaN
console.log("5" + null); //5null
console.log("5" - null); // here null is treated as 0
console.log("6" + undefined); //6undefined
console.log("6" - undefined); // Nan
//
//Explicit conversion
console.log("Explicit Conversion");
console.log(Number("5")); // return 5 which is of type number
console.log(Number(false)); //0
console.log(Number(true)); //1
console.log(Number("")); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(parseInt("5")); // 5
console.log(parseFloat("5")); //5.0
//global String() method
console.log(String(500)); //"500"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); //"undefined"
// toString() method
console.log((500).toString()); // "500"
console.log(true.toString()); // "true"
console.log(false.toString()); //"false"

//console.log(undefined.toString()); // throws exception
//console.log(null.toString()); // throws exception

//global Boolean method
console.log("global Boolean method");
console.log(Boolean(500)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean("kalyan")); // true
console.log(Boolean(undefined)); // false
