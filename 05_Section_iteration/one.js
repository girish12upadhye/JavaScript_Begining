// for loop
// let table = []

// for(let i = 1; i <= 10 ; i++){
//     // console.log(i);
//     table.push(i * 2)
// }

// console.log(table);

// let user = {
//     name : "user1",
//     email : "user1@chatgpt.com",
//     jobRole : "system engineer",
//     mobNo : 9623417521
// }

// for(let i in user){
//     console.log(`${i} : ${user[i]}`);
// }

// let num = [9, 5, 2, 7, 1, 0, 4]

// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//         if (num[i] < num[j]) {

//             let temp = num[i];
//             num[i] = num[j];
//             num[j] = temp;
            
//         } 
//     }
// }

// console.log(num);

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and outer loop ${i}`);
//         console.log(`${i}*${j} = ${i * j}`); 
//     }
// }

let myArray = ['Flash', 'Batman', 'Superman'];

console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
    
// }
 
// for(let index of myArray){
//     console.log(index);
// }

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break 
//     }
//     console.log(`Value of i is ${i}`);
// }
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue 
    }
    console.log(`Value of i is ${i}`);
}
