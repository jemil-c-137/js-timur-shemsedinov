const curry = fn => (...args) => {
  if (fn.length > args.length ) {
    const f = fn.bind(null, ...args)
    return curry(f)
  } else {
    return fn(...args)
  }
}


const sum4 = (a,b,c,d) => (a + b + c + d)

const f = curry(sum4)
const y1 = sum4(1,2,3,4)
const y2 = f(1,2,3,4)
const y3 = f(1)(2)(3)(4)