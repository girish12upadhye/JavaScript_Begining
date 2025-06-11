// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);


// let myCreationDate = new Date(2023, 0, 23);
// let myCreationDate = new Date(2023, 0, 23, 5, 3);
// let myCreationDate = new Date("2023-01-14");
let myCreationDate = new Date("01-14-2023");

console.log(myCreationDate.toLocaleString('default', {
    weekday: "long"
}));

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreationDate.getTime());
console.log(Math.floor(Date.now()/1000));





