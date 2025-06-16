console.log("Arrow function");

const user = {
    username : "Ruchita",
    price : 999.00,
    welcomeMsg : function(){
        console.log(`${this.username}, Welcome to GirishTech`);
        console.log(this);
        
    }
}

// user.welcomeMsg()
// user.username = "Venky"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let username = "Shital"
//     console.log(this.username);
// }

// const chai = function(){
//     let username = "Shital"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Shital"
//     console.log(this.username);
// }
// chai()

// const calculateSum = (num1, num2) => {
//     return num1 + num2;
// }

// const calculateSum = (num1, num2) => num1 + num2;

// const calculateSum = (num1, num2) => (num1 + num2);

const calculateSum = (num1, num2) => ({ username : num1, location : num2});

console.log(calculateSum("sammit", "Chandigarh"))