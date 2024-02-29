//to print a message.
console.log("I love javaScript");

//to declare a primitive variable and print it value in console.
let fullName = "Abhay Kumar";
let price = BigInt("123");
let y = Symbol("Hello");
console.log(fullName);
console.log(typeof(fullName));
console.log(price);
console.log(y);

//how to declare non primitive variables.
const student = {
    firstName : "Abhay",
    age : 24,
    roll : 513
};

console.log(student.firstName);
console.log(student["firstName"]);

// how to comment.

//This is single line comment.
/*This is 
    multiple 
    line
    comments.
*/