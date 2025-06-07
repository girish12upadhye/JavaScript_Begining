let score = null

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 / false => 0
// undefined => Nan
// null => 0

console.log("=========================================")

let isLoggedIn = undefined

console.log(typeof isLoggedIn)
console.log(isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// 1 => true; 0 => false
// ''/"" => false; 'abc'/"abc" => true
// null => false
// undefined => false

console.log("=========================================")
let someNumber = 565

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
