// Targetting by classname
var myDiv = document.getElementsByClassName("myDiv");
// console.log(myDiv);

// Targetting by ID
var text = document.getElementById("text");
// text.className = "myTextClass";
text.style.backgroundColor = "Blue";
console.log(text.innerHTML);
text.innerHTML = "My new text";


// Targetting by Tagname
console.log(document.getElementsByTagName("h1"));


document.getElementById("box").innerHTML = "<p>Hey this is inner p tag</p>";


var myInput = document.getElementById("textInput");
myInput.value = "nEW VALUE"
console.log(myInput.value);


var myImg = document.getElementById("img");
console.log(myImg.src);
myImg.src = "../TC_JS-1/images/slider2.jpg"
