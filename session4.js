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

// var combinedFruits = fruits.concat(moreFruits)
// console.log(combinedFruits);
// console.log(fruits.slice(1, 3));

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
        }, {
            subject: "CSS",
            marks: 20
        }, {
            subject: "JS",
            marks: 65
        }, {
            subject: "REACT",
            marks: 70,
            topics: [
                { topic1: "Introduction" },
                { topic2: "Props" },
                { topic3: "Hooks" },
            ]
        },
    ]
};
