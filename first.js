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
// Added operater examples.

let a = 5;
let b = 3;
console.log("a + b = ",a+b);
console.log("a ** b = ",a ** b);//exponential 5 to the power 3.

// Comparison Operators

let c="5"//String
console.log(a==b);//false
console.log(a!=b);//true
console.log(a==c);//true
console.log(b!=c);//true

// comparison operator with type of variable.

console.log(a===c);//false
console.log(b!==c);//true
console.log(b>a);//false
console.log(b<a);//true
console.log(b>=a);//false
console.log(b<=a);//true


//Q1. Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 5 or not.

let number = prompt("Enter a number");
if(number % 5 === 0)
{
    console.log(number," is multiple of 5");
}else{
    console.log(number," is not multiple of 5");
}


/* Q2. Write a code which can give grades to student according to thier scores.
90-100 -> A
89-70 -> B
69-60 -> C
59-50 -> D
49-0 -> F */

let num = 70;
let grade;
if(num >= 90 && num <= 100){
    grade = "A";
}else if(num >= 70 && num <= 89){
    grade = "B";
}else if(num >= 60 && num <= 69){
    grade = "C";
}else if(num >= 50 && num <= 59){
    grade = "D";
}else if(num >= 0 && num <= 49){
    grade = "F";
}
console.log("Your grade according to your score " + num +" is " +grade);