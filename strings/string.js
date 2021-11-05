const tag = (string, ...values) => {
  console.dir({string, values});
  return''
}


const greeting = "Hello";
const person = {name: "Marcus Aurelius"}

const text = tag`${greeting} ${person.name}!`
console.log({text});