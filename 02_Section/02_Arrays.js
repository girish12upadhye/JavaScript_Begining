const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_Heros);

const num_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flat_num_arr = num_arr.flat(Infinity);
// console.log(flat_num_arr);


// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("girish"));

// console.log(Array.from({name : "Girish"})); // exceptional

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3));





