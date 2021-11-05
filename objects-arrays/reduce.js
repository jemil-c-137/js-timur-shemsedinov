let count = 0;
const arr = [7,10,1,5,2]

const sum = (acc, val) => (count++, console.log(count, acc, val), acc + val)
const res = arr.reduce(sum)
console.log({res, count});

console.log((() => (console.log('bbbb'), 'aaaa'))())