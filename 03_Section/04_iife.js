console.log("Immediately invoked function expression");

(function code(){
    console.log('DB Connected');
})();

(function techUniverse(){
    // named iife
    console.log("DB connected two")
})();

(() => {
    // anonimous iife
    console.log("DB connected three")
})();

((dbName) => {
    console.log(`Connected to DB ${dbName}`)
})('Oracle');

// ()() // to avoid global scope polution problem, so to remove global scope variable and declaration polution problem, we are using IIFE 