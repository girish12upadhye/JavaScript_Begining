console.log("Hello Girish");

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null != 0);
// console.log(null >= 0);
// console.log(null <= 0);

console.log(undefined != 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);




/* Note : The reason is that an equality check == and comparisons >, <, >= and <= work differently.
Comparisons convert null to a Number, treating it as 0. That's why null >= 0 and null <= 0 is true, and null > 0 false
*/

console.log("2" === 2);