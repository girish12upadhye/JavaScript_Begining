let address = "Kajaleshwar"

let altAddress = address
altAddress = "Pune"

console.log(address)
console.log(altAddress);

let applicantOne = {
    email : "applicant_one@samsung.com",
    upi : "applicantOne@sbi"
}

let applicantTwo = applicantOne;

applicantTwo.email = "applicant_two@tata.com";

console.log(applicantOne.email);
console.log(applicantTwo.email);

