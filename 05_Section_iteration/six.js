const coding = ['js', 'ruby', 'python', 'java', 'cpp']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const numArr = [2, 6, 4, 5, 7, 9, 1, 8, 10, 3]

// const newNumArray = numArr.filter((num) => num > 4);

// const newNumArray = numArr.filter((num) => {
//     return num > 4
// })

// let newNumArray = []

// numArr.forEach((num) => {
//     if(num > 4){
//         newNumArray.push(num)
//     }
// })

// console.log(newNumArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let filterBooks =  books.filter((book) => book.genre === 'History');

filterBooks = books.filter((book) => book.publish >= 2000)

filterBooks = books.filter((book) => book.publish >= 1995 && book.genre === 'History')

console.log(filterBooks)
