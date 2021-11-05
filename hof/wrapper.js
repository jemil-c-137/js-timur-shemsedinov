const logable = fn => (...args) => {
  const res = fn(...args)
  console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res} `);
  return res
}

const sum = (a, b) => (a + b)

const wrapped = logable(sum)
console.log(wrapped(3, 5));