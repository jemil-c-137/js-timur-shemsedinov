

function all(a,b,c,d) {
  return a + b + c + d;
}

const powName = "pow"

console.log(all.length);

const obj1 = {
  fn1: function inc(a) {
    return ++a;
  },
  sum: function(a, b) {
    return a + b
  },
  max: (a, b) => {
    return a > b ? a : b;
  },
  min: (a, b) => (a < b ? a : b),
  dec: a => --a,
  [powName](a, b) {
    return Math.pow(a,b)
  }
}

console.log(obj1.fn1.name)
console.log(obj1.sum.name)
console.log(obj1.max.name)
console.log(obj1.min.name)
console.log(obj1.dec.name)
console.log(obj1[powName].name)

const Context = function() {
  this.name = 'Marcus';
  const city = {
    name: 'Kiev',
    year: 482,
    f1: function() {
      return this.name
    },
    f2: () => {
      return this.name
    },
    f3() {
      return this.name
    }
  }
  return city
}

const city = new Context();

console.log(city.f1())
console.log(city.f2())
console.log(city.f3())

function f10(a,b) {
  console.log('f1 ('+ a + ', ' + b + ')');
}

f10(2,3)
f10.call(null, 2,3)

const arr = [2,3]

f10(...arr);
f10.apply(null, arr)

const hash = () => {
  const data = {};
  let counter = 0;
  return (key, value) => {
    data[key] = value;
    counter++;
    console.dir({counter})
    return data
  }
}

const h1 = hash();
console.log('h1', h1('name', 'Marcus').name)
h1('city', 'Roma')
const obj2 = h1('born', 121)

const hashTwo = () => {
  const data = {}
  Object.defineProperty(data, 'add', {
    enumerable: false,
    value: function(key, value) {
      data[key] = value;
      return data
    }
  })
  return data;
}

console.log(hashTwo().add('name', 'Marcus').add('city', 'Rome'))

const add = x => y => x + y

const adder = x => y => {
  const z = x + y;
  console.log(x + ' + ' + y + ' = ' + z)
  return adder(z)
}

const a1 = adder(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10)

console.log(a1,a2,a3,a4,a5)

const rs = adder(1)(4)(8)(8)

console.log(rs)