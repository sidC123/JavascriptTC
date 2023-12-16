// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;

//     if (len1 !== len2) {
//         console.log('Invalid Input');
//         return
//     }

//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     console.log(str1);
//     console.log(str2);

//     if (str1 === str2) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// checkStringsAnagram("traingle", "internal")


// function compressString(str) {
//     var compressed = "";
//     var count = 1;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//             console.log("if condition", count);
//         } else {
//             compressed += str[i] + count;
//             console.log("else condition", compressed);
//             count = 1;
//         }
//     }
//     return compressed;
// }

// // Example usage:
// const originalString = "aabbbcdd"; //a2b3cd2
// console.log(compressString(originalString));



// function countChar(str) {
//     var wordCount = 1;
//     var charCount = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             wordCount++;
//         } else {
//             charCount++;
//         }
//     }
//     document.write(`words count is ${wordCount}, char count is ${charCount}`)
// }

var myStr = "i love javascript";
// countChar(myStr)

console.log(myStr.includes("love"));


var passStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
var passLength = 8;
var password = ""

for (var i = 0; i < passLength; i++) {
    password += passStr[Math.floor(Math.random() * passStr.length)];
}

console.log(password);


