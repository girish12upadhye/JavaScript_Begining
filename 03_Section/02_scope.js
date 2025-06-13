console.log("Scope in JS");
// var c = 300;

// let a = 200

// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 5;
//     console.log("INNER : ",a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "girish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
    // console.log(website);
    
}

// one()

// if(true){
//     const username = "Rutu"
//     if( username === "Rutu"){
//         const website = " whatsappWeb"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);

// ++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}


console.log(addtwo(5));

const addtwo = function(num){
    return num + 2
}




