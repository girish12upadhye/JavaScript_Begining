const numArr = [1, 2, 3];

let total = numArr.reduce( function (acc, currval){
    // console.log(`acc: ${acc} and currval: ${currval}`);
    // return acc + currval
}, 0)

total = numArr.reduce((acc, currval) => acc + currval, 0)

// console.log(total);


const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'py course',
        price : 999
    },
    {
        itemName : 'mob dev course',
        price : 5999
    },
    {
        itemName : 'data science course',
        price : 12999
    },
]

let grandTotal = shoppingCart.reduce(( acc, item) => (acc + item.price), 0);

console.log(grandTotal);
