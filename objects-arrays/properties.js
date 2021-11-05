'use strict';

const fieldValue = 'Roma';

const person4 = {
  name: 'Marcus',
  ['city' + 'Born']: fieldValue,
};

function fn(s) {
  return s + 'Born';
}

const person5 = {
  name: 'Marcus',
  [fn('city')]: fieldValue
}

console.log(person5)