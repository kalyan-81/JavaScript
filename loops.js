// for loop

for (let i = 0; i < 10; i++) {
  console.log("iteration Number ", i);
}
// while loop
let i = 1;
while (i < 5) {
  console.log("finite loop");
  i++;
}

// do while
let k = 1;
do {
  console.log("do-while finite loop");
  k++;
} while (k < 5);

// for of loop
const names = ["kalyan", "kali", "kumar", 10, 20];
for (const nm of names) {
  console.log(nm);
}

//for in loop

const items = ["tamato", "onion", "ginger", "garlic"];
for (const item in items) {
  console.log(items[item]);
}
