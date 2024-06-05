// generator is a special kind of function

function* generatorFunction() {
  yield "hello";
  yield "world";
}

// calling generator
const obj = generatorFunction();

for (const word of obj) {
  console.log(word);
}
