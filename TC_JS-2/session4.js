// {
//     var num = Number(prompt("Please enter a number"));

//     function checkLeap(year) {
//         if (year % 4 === 0) {
//             console.log(`${year} is a leap year`);
//         } else {
//             console.log(`${year} is not a leap year`);
//         }
//     }

//     checkLeap(num);
// }


// var colors = ["red", "green", "yellow", "blue"]
var colors = new Array("red", "green", "yellow", "blue")
// console.log(colors);


var fruits = ["banana", "apple", "cherry"]
// console.log(fruits[1]);
fruits[1] = "strawberry";
// console.log(fruits[1]);

// var fruitsString = fruits.toString()
// console.log(fruitsString) //"banana, apple, cherry"

// var joinedFruits = fruits.join("😱")
// console.log(joinedFruits)

// console.log(fruits.pop());
// console.log(fruits);

// console.log(fruits.push("kiwi"));

// console.log(fruits.shift());

// console.log(fruits.unshift("orange"));

// var fruits = ["apple", "banana"];
var moreFruits = ["orange", "date"];

var combinedFruits = fruits.concat(moreFruits)
// console.log(combinedFruits);
// console.log(combinedFruits.slice(1, 3));

// var spliced = combinedFruits.splice(1, 2, "dragion fruit", "tomato");
// console.log(spliced);
// console.log(combinedFruits);

// console.log(combinedFruits.sort());

// console.log([11, 2, 22, 1].sort((a, b) => a - b));// ascending order
// console.log([11, 2, 22, 1].sort((a, b) => b - a));// descending order


let person = {
    name: "John",
    age: 30,
    city: "New York",
    "date of birth": "2/08/1990",
    scoreCard: [
        {
            subject: "HTML",
            marks: 85
        },
        {
            subject: "CSS",
            marks: 20
        },
        {
            subject: "JS",
            marks: 65
        },
        {
            subject: "REACT",
            marks: 70,
            topics: [
                { topic1: "Introduction" },
                { topic2: "Props" },
                { topic3: "Form Validation" },
            ]
        },
    ]
};

// person.scoreCard[3].topics[3] = { topic4: "Hooks" };
// console.log(person.scoreCard[3].topics);


// Take input from user in number ( 1 - 100)
// 80 - 100 : A grade
// 60 - 80 : B grade
// 40 - 60 : C grade
// 20 - 40 : D grade

// var userScore = Number(prompt("Enter your score"))
// var checkGrade = function (score) {
//     // console.log(score);
//     if (score >= 80 && score <= 100) {
//         console.warn(`student has scored A grade with ${score}`);
//     } else if (score >= 60 && score < 80) {
//         console.warn(`student has scored B grade with ${score}`);
//     } else if (score >= 40 && score < 60) {
//         console.warn(`student has scored C grade with ${score}`);
//     } else if (score >= 20 && score < 40) {
//         console.warn(`student has scored D grade with ${score}`);
//     } else {
//         console.warn(`student has failed with ${score}`);
//     }
// }
// checkGrade(userScore)

var userHeight = Number(prompt("enter user height"))
var userWeight = Number(prompt("enter user weight"))

function calculateBMI(weight, height) {
    var bmi = (weight / (height * height));
    console.log(bmi)

    if (bmi < 18.5) {
        alert("Underweight")
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        alert("Normal weight")
    } else if (bmi >= 25 && bmi <= 29.9) {
        alert("Overweight")
    } else {
        alert("Obesity")
    }
}

calculateBMI(userWeight, userHeight);