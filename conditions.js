// if
// else
// else if
// switch
// ternary

//example for if
const num = 5;
if (num > 0) {
  console.log("positive");
}
//example for if else
if (num > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

// example for else if
if (num > 0) {
  console.log("positive num");
} else if (num < 0) {
  console.log("negative num");
} else {
  console.log("zero num");
}

// switch example
const color = "green";
switch (color) {
  case "red":
    console.log("red color");
    break;
  case "blue":
    console.log("blue color");
    break;
  case "green":
    console.log("green color");
    break;
  default:
    console.log("not valid color");
}
