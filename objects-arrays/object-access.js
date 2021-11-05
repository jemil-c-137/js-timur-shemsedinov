const person = {
  name: 'marcus',
  city: 'Roma',
  born: 121
}

console.log(person['born'])

delete person.city

console.log(person)

const person2 = {
  name: 'Marcus',
  get city() {
    return 'Roma'
  },
  set city(value) {
    console.log('Marcus remains in Roma')
  }
}

console.log(person2)