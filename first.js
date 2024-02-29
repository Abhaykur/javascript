// //to print a message.
// console.log("I love javaScript");

// //to declare a primitive variable and print it value in console.
// let fullName = "Abhay Kumar";
// let price = BigInt("123");
// let y = Symbol("Hello");
// console.log(fullName);
// console.log(typeof(fullName));
// console.log(price);
// console.log(y);

// //how to declare non primitive variables.
// const student = {
//     firstName : "Abhay",
//     age : 24,
//     roll : 513
// };

// console.log(student.firstName);
// console.log(student["firstName"]);

// // how to comment.

// //This is single line comment.
// /*This is 
//     multiple 
//     line
//     comments.
// */
// // Added operater examples.

// let a = 5;
// let b = 3;
// console.log("a + b = ",a+b);
// console.log("a ** b = ",a ** b);//exponential 5 to the power 3.

// // Comparison Operators

// let c="5"//String
// console.log(a==b);//false
// console.log(a!=b);//true
// console.log(a==c);//true
// console.log(b!=c);//true

// // comparison operator with type of variable.

// console.log(a===c);//false
// console.log(b!==c);//true
// console.log(b>a);//false
// console.log(b<a);//true
// console.log(b>=a);//false
// console.log(b<=a);//true


// //Q1. Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 5 or not.

// let number = prompt("Enter a number");
// if(number % 5 === 0)
// {
//     console.log(number," is multiple of 5");
// }else{
//     console.log(number," is not multiple of 5");
// }


// /* Q2. Write a code which can give grades to student according to thier scores.
// 90-100 -> A
// 89-70 -> B
// 69-60 -> C
// 59-50 -> D
// 49-0 -> F */

// let num = 70;
// let grade;
// if(num >= 90 && num <= 100){
//     grade = "A";
// }else if(num >= 70 && num <= 89){
//     grade = "B";
// }else if(num >= 60 && num <= 69){
//     grade = "C";
// }else if(num >= 50 && num <= 59){
//     grade = "D";
// }else if(num >= 0 && num <= 49){
//     grade = "F";
// }
// console.log("Your grade according to your score " + num +" is " +grade);

// // Types of loops and its feature.


// // for loop

// for(let i = 1; i <= 5; i++){
//     console.log("Apna college");
// }

// //Sum of number n natural number;

// let num1 = prompt("Enter a natural number");
// let sum = 0;
// for(let i =1;i<=num1;i++){
//     sum = sum +i;
// }
// console.log("sum of "+ num1 +" natural number is "+sum);

// //while loop.

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// /************************************* */
// //do while


// do{
//     console.log(i);
//     i++;
// }while(i<=5);
// /********************************************** */

// // for-of loop. This loop is to itterate both string and arrays values.

// let str = "Abhay kumar";
// for(let i of str){
//     console.log(i);
// }

// /********************************************************** */

// // for-in loop: is used to iterate objects.

// let student1 = {
//     name:"Abhay Kumar",
//     class: "MCA",
//     roll:103,
//     phone_no:8083153058,
//     email:"abhaykur123@gmail.com"
// };

// for(let key in student1){
//     console.log("Key = ",key," value = ",student1[key]);
// }


// //Print all even numbers between 0 to 100.

// for(let i=0;i<=100;i++){
//     if(i%2===0 && i != 0){
//         console.log(i);
//     }
// }

// Strings.

let str = "Anisha Kumari";
console.log(str); // to print string as it is.
console.log(str.length); // to find length of string.
console.log(str[2]);// to print indexed character from string.

//Templates Literals in JS.

let template = `This is example of template literal`;
console.log(template);

//String Interpolation.

let obj = {
    item : "Pen",
    price : 10
};

//Simply print.
console.log("The cost of ",obj.item," is ",obj.price," Ruppes");

//Same we can print through template literal.

let output = `The cost of ${obj.item} is ${obj.price} Rupees`;
console.log(output);

let specialString =`The sum of 3 numbers is ${1+2+3}`;
console.log(specialString);

//String methods.

let str1 = "  AbhAy KumaAr";
console.log(str1);
console.log (str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1);
console.log(str1.trim());

console.log(str.slice(1,7));//exclude value at end position.(bhay k)

console.log(str.concat(str1));//contination of two strings.
console.log(str1.trim().concat(str));//trim the first string and then concatinate.
console.log(str1.replace("y","i"))// to replace any single character.
console.log(str1.replace("Abh","An"));// to replace more than one character.
console.log(str1.replace("A","S"));// through this we can only replace the first character which found.
console.log(str1.replaceAll("A","s"));//through thi we can replace all the charater which found same.
console.log(str1.charAt(4));// to find the character at the given index.

// Practice question.

let fullName = prompt("please enter you full name without using space");
let userName = `@${fullName}${fullName.length}`;
console.log(userName);
