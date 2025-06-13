console.log("Learning Object in JS");

const mySym = Symbol("key1")

const user = {
    name : "Prachi",
    'full name'  : "Patil Prachi Pravin",
    [mySym] : "myKey1",
    age : "17",
    location : "Akola",
    email : "prachi_patil@walmart.com",
    isLoggedIn : false,
    mobNo : ["9865744461", "8897655440"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

user.email = "prachi_patil@chatgpt.com"
// Object.freeze(user);
user.email = "prachipatil@microsoft.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello Js user!!");
}

user.greetingTwo = function(){
    console.log(`Hello Js user!!, ${this.name}`);
}

// console.log(user.greeting());
// console.log(user.greetingTwo());
console.log(user['mobNo'][0]);


