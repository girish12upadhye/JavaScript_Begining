// for of

// ['', '', '', '']
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const element of arr) {
//     console.log(element);
// }

const greetings = "Hello world"

// for (const greet of greetings) {
//     if(greet == ' '){
//         continue;
//     }
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map();
map.set('MH', 'Maharashtra')
map.set('ZH', 'Zarkhand')
map.set('KA', 'Karnataka')
map.set('MP', 'Madhy Pradesh')
map.set('HR', 'Hariyana')
map.set('PB', 'Punjab')

// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }

const user = {
    name : "girish",
    email : "girish_g@walmart.com",
    mobNo : 9623194356
}

// for (const element of user) {
//     console.log(user[element]); // object is not iterable in JS
// }