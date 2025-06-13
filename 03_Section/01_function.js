console.log("Function in JS");

// function sayMyName(){
//     console.log("G");
//     console.log("I");
//     console.log("R");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result   
    return number1 + number2 
}

// addTwoNumbers() // NaN
// addTwoNumbers(3, 8)

// let result = addTwoNumbers(4, 5)

// console.log("Result : ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username")
        return 
    }
    return `${username} just logged in`
}

// let result = loginUserMessage("Prachi") 
let result = loginUserMessage() 
console.log(result);
