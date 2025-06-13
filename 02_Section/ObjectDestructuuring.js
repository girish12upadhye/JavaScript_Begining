console.log("Learning Object Destructuring");

const course = {
    coursename : 'js beginner to advanced',
    price : '999',
    courseInstructor : "Girish"
}

const {courseInstructor : trainer} = course

console.log(trainer);

// {
//     "name" : "Rutuja",
//     "cousrseName" : "Manual Testing",
//     "price" : "free"
// }
