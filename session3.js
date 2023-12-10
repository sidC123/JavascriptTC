// // console.log("Session 3 JS"); // prints output in dev tools.

// document.write('<h2>This is the session 3 of Javascript</h2>'); // Prints output in the document either as an HTML or string

// // alert('Session 3 JS');

// //Declaring variables

// // var company = "Try Catch";
// // console.log(company);
// // alert(company);

// var SName; // JS assigns the the defalut value as undefined in first phase. This is declaration
// SName = "Siddhesh"; // This is assignment
// // console.log(SName);
// SName = [1, 2, 3];
// // console.log(SName);

// var bigNumber = BigInt("1234567890123456789012345678901234567890");
// // console.log(bigNumber);

// var num1 = 10;
// var num2 = 5;

// console.log("Addition", num1 + num2);
// console.log("Substraction", num1 - num2);
// console.log("Multiplication", num1 * num2);
// console.log("Division", num1 / num2);
// console.log("Modulus", num1 % num2);


// var s1 = "Rahul";
// var s2 = "Salman";
// var lectureNum = 3;
// Rahul and Salman are learning javascript and this is their 3rd lecture.
// document.write(`${s1} and ${s2} are learning javascript and this is their ${lectureNum}rd lecture`)


// var val1 = prompt("Please enter first number");//2
// var val2 = prompt("Please enter second number");//3

// function addition(num1, num2) {
//     console.log(typeof (num1));
//     console.log(typeof (num2));

//     var cNum1 = Number(num1);
//     var cNum2 = Number(num2);
//     console.log(typeof (cNum1));
//     console.log(typeof (cNum2));

//     var sum = 0;
//     sum = cNum1 + cNum2;
//     console.log(sum);
// }

// addition(2, 5);
// addition(10, 5, 17);
// addition(val1, val2);


// var val3 = Number(prompt("Please enter number1"));
// var val4 = Number(prompt("Please enter number1"));

// function substract(num1, num2) {
//     console.log("Substraction answer", num1 - num2);
// }
// substract(val3, val4);


// var prodVal1 = Number(prompt("Please enter a first number for MULTIPLICATION"));
// var prodVal2 = Number(prompt("Please enter a second number for MULTIPLICATION"));
// var divVal1 = Number(prompt("Please enter a first number for DIVISION"));
// var divVal2 = Number(prompt("Please enter a second number for DIVISION"));

// function multiDiv(m1, m2, d1, d2) {
//     var multiplication = 0;
//     multiplication = m1 * m2;

//     var division = 0;
//     division = d1 / d2;

//     document.write(`<p>${m1} x ${m2} = ${multiplication}</p><p>${d1} / ${d2} = ${division}</p>`)
// }

// multiDiv(prodVal1, prodVal2, divVal1, divVal2);


// var num = Number(prompt("Please enter a number"));

// function checkNum(x) {
//     if (x % 2 === 0) {
//         console.log(`${x} is an even number`);
//     } else {
//         console.log(`${x} is an odd number`);
//     }
// }

// checkNum(num);
