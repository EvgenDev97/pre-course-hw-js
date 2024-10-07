let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedCopy = JSON.parse(JSON.stringify(passportMarried));
passportMarriedCopy.married = true
console.log(passportMarried)
console.log("///")
console.log(passportMarriedCopy);