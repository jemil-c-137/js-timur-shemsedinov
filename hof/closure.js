const fn = a => {
  const b = 'Closure variable';
  return c => {
    console.log({a, b ,c});
  }
}

const f1 = fn('Parameter')
f1('Parameter 2')

const f2 = fn('Parameter X')
f2('Parameter Y')