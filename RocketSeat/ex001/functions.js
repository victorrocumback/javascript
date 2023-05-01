function Person(name) {
    this.name = name
    this.age = 22
}

const victor = new Person("Victor")
const alemao = new Person("Alemão")
const valdeci = new Person("Valdeci")

console.log(valdeci.name)
console.log(victor.name)
console.log(alemao.name)