function Hello() {
    alert("Hello")
}

// PRIMITIVE DATA TYPES:
var lastName; // Only declaration
var StudentName;
// console.log(StudentName);

// console.log(lastName); // console prints the given value in dev tools(undefined)

var firstName = "Hema"; //type: String
var age = 32; // type: Number
var isMarried = false; //type: Boolean

// console.log(typeof StudentName)

lastName = "Sharma";

// console.log(firstName, age, isMarried); // Multiple consoles
// console.log(lastName); // Sharma

// CONCATINATION
// console.log("My first name is" + " " + firstName + " " + "and last name is" + lastName);


// The data type can be change after declaration for var. For example:
var bankBalance = "No balance";
// var bbType = typeof (bankBalance)
// console.log("checking bank balance type", bbType);

bankBalance = 70000000;
// console.log(bankBalance);


// NON-PRIMITIVE DATA TYPES:

// Array:
var students = ["rahul", "salman", "sagar", "prerna", "Dhawal", 1, true];
// console.log(students); console.log(students[2])
// console.log(students[3]);

// Object:
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

console.log(student["date of birth"]);
// Print following: "Siddhesh chavan scored A in CSS"

console.log(student);
// console.log(student["date of birth"]);
// console.log(student.stdName);
// console.log("JS GRADE" + " " + student.marks[1].grade);

// Student got A grade in CSS;

// Date 
var date = Date();
// console.log(date);









