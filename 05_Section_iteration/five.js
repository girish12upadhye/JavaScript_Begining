// for each

const coding = ['js', 'ruby', 'python', 'java', 'cpp']

// coding.forEach(function (element) {
//     console.log(element);
// })

// coding.forEach( (element) => {
//     console.log(element)
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const users = [
    {
        username : 'pratiksha',
        email : 'pratiksha_r_patil@infosys.com',
        mobNo : '9878667655'
    },

    {
        username : 'shubham',
        email : 'shubham_mahajan@wipro.com',
        mobNo : '9855667655'
    },
    {
        username : 'Raghavendra',
        email : 'raghavendra_shinde@hcl.com',
        mobNo : '9878662455'
    }
]

users.forEach( (user) =>{
    console.log(user.username);
})
