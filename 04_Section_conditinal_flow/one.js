// if
const isUserloggedIn = true
const temperature = 41;

// if(temperature === 50){
//     console.log("temperature is less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }


// <, >, <=, >=, ==, ===, !=

const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`); // throwing error power is not defined

// const balance = 1000

// if(balance > 500) console.log("balance is grater than 500"); console.log("test"); // bad practice

// if(balance > 1500) console.log("balance is grater than 500"); // implicit scope

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 950) {
//     console.log("less than 950");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

// if(userLoggedIn && debitCard && 14 == 13){
//     console.log("Allowed to buy courses");
// }

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



