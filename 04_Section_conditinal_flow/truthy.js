// const userEmail = "girish_g_upadhye@chatgpt.com";
// const userEmail = ""
const userEmail = []



// if(userEmail){
//     console.log("Got user email");  
// } else{
//     console.log("Don't have user email");
// }

// Falsy Values

// false, 0, -0, BigInt 0n, '', "", null, undefined, NaN

// Truthy Values

// true, " ", "xyz", "0", "-0", 'false', [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length == 0){
//     console.log("Empty Object");
// }

// Nullish collesion operator(??) : null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;

// val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");

