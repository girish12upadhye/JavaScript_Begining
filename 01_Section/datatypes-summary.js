console.log("Hello Girish");


// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 748976432476358744n

// console.log(typeof bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "Nagraj", "Vijay"]

let myData = {
    userName: "girish",
    age: 26,
    mobNo : 9623194356
}

console.log(heros.length);
console.log(myData.userName.length);

let myFun = function(){
    console.log("My function"); 
}

console.log(typeof myFun);
