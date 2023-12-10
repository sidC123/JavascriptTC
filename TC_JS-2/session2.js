var num1 = 5;
var num2 = 2;

//Mathematical Operators

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);

// console.log(1 + 2);// 2
// console.log("1" + 2);// 12
// console.log(1 + 2 + 3);// 6
// console.log("1" + 2 + 3);// 123
// console.log(1 + 2 + "3");// 33



var age = Number("20");
// var age = Number("20abc");
// var age = Number("Twenty");

// console.log(typeof age);
// console.log(age);


var randomNum = String(20);
// console.log(randomNum);
// console.log(typeof randomNum);


var isLoggedIn = Boolean(1);// true
var isLoggedIn = Boolean(0);// false
var isLoggedIn = Boolean("Hey");// true
var isLoggedIn = Boolean("");// true
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);



var student = {
    stdName: "Siddhesh",
    lastName: "Chavan",
    age: 27,
    marks: [
        {
            subject: "CSS",
            grade: "A",
        },
        {
            subject: "JS",
            grade: "B"
        }
    ],
    isPass: true,
    "date of birth": "28 jan 2000",
}
// Print following: "Siddhesh chavan scored A in CSS"
// console.log(student.stdName + " " + student.lastName + " " + "scrored" + " " + student.marks[0].grade + " " + student.marks[0].subject);

// String literals
// console.log(`${student.stdName} ${student.lastName} scored ${student.marks[0].grade} in ${student.marks[0].subject}`);


// var x = 5;
// console.log(x, "⭕Initial value");
// x++; // Postfix increment (x is now 6)
// console.log(x, "⭕++ postfix value");
// x--; // Postfix decrement (x is now 5)
// console.log(x, "⭕-- postfix value");


// var x = 5;
// console.log(x, "⭕Initial value");
// ++x; // Prefix increment (x is now 6)
// console.log(x, "⭕++ Prefix value");
// --x; // Prefix decrement (x is now 5)
// console.log(x, "⭕-- Prefix value");



// var x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// var a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"


// var randomNum = Math.random();
// console.log(randomNum);

// console.log(Math.floor(3.5));
// console.log(Math.ceil(3.5));


let numbers = [23, 88, 1, 42, 99, 7];

console.log(Math.min.apply(null, numbers))

// let largest = Math.max.apply(null, numbers);

// console.log("The largest number is:", largest);  // Output: The largest number is: 99
