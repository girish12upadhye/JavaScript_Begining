console.log("Mastering Objects in JS");

// const whtappUser = new Object(); // singleton object

const whtappUser = {} // Non singleton object

whtappUser.id = "giri_upadhye00"
whtappUser.name = "Girish"
whtappUser.isLoggedIn = false

// console.log(whtappUser);

const user = {
    email : "nutan_upadhye001",
    fullName : {
        userFullName : {
            firstName : "Nutan",
            middleName : "Tushar",
            LastName : "Upadhye"
        }
    }
}

// console.log(user.fullName.userFullName.firstName);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj4 = {
    5 : "a",
    6 : "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(whtappUser);
// console.log(Object.keys(whtappUser));
// console.log(Object.values(whtappUser));
// console.log(Object.entries(whtappUser));

console.log(whtappUser.hasOwnProperty('isLogged'));






