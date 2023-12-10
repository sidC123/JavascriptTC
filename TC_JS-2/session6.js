// Create function that accepts 2 numbers and 1 string for doing mathematical operations.

// Seperate numbers and strings from an array and return two separate arrays.
{
    // var array = ["hello", 80, "world", 10, "number", 0, "array", 15, "hii", "hey"];

    // function seperator(arr) {
    //     var string = [];
    //     var numbers = [];

    //     for (var i = 0; i < arr.length; i++) {
    //         if (typeof arr[i] === 'string') {
    //             string.push(arr[i]);
    //         } if (typeof arr[i] === 'number') {
    //             numbers.push(arr[i]);
    //         }
    //     }
    //     console.log(string);
    //     console.log(numbers);
    // }

    // seperator(array)
}

// function checkEvenNumber() {
//     var input;

//     do {
//         input = prompt("Enter a number:");
//         if (input === null) return "No input provided.";

//         if (!isNaN(input)) {
//             input = parseInt(input);
//             break;
//         } else {
//             alert("Invalid input. Please enter a valid number.");
//         }
//     } while (true);

//     if (input % 2 === 0) {
//         return `${input} is an even number.`;
//     } else {
//         return `${input} is not an even number.`;
//     }
// }
// var result = checkEvenNumber();
// console.log(result);

// function doMaths(num1, num2, operation) {
//     if (operation === "add") {
//         console.log(num1 + num2);
//     } else if (operation === "multiply") {
//         console.log(num1 * num2);
//     } else if (operation === "divide") {
//         console.log(num1 / num2);
//     } else if (operation === "subtract") {
//         console.log(num1 - num2);
//     }
// }

// doMaths(10, 5, "division")


// function printTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} X ${i} = ${num * i}`);
//     }
// }
// printTable(7);



// ○ var arr = [19, 56, 4, 78, 5, 63, 45, 210, 57];
// ○ arr = deleteElement(arr, 56)
// ○ console.log(arr); //[23, 4, 78, 5, 63, 45, 210]


function deleteElement(arr, elementToDelete) {
    // Create a new array to store the elements without the specified element
    const newArray = [];

    // Iterate through the original array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is not equal to the element to delete
        if (arr[i] !== elementToDelete) {
            // If it's not equal, add it to the new array
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// Example usage:
var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
arr = deleteElement(arr, 56);
console.log(arr); // [23, 4, 78, 5, 63, 45, 210]