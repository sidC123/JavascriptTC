function showMessage() {
    alert("Button clicked!");
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "red";
}

document.getElementById("myButton1").onclick = showMessage; //No parenthesis should be addded to the function

document.getElementById("myButton2").onclick = function () {
    alert("Button clicked!");
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "red";
};

document.getElementById("myButton3").addEventListener("click", showMessage)


//Event delegation
document.getElementById("myList").addEventListener("click", function (event) {
    // alert("hELLO");

    if (event.target.tagName === "LI") {
        alert("List item clicked: " + event.target.textContent);
    } else {
        alert("List item clicked: " + event.target.textContent);
    }
});

document.getElementById("myButton4").addEventListener("click", function (event) {
    var arr = document.getElementsByClassName("myDiv");

    for (var i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "pink";
        arr[i].className += " newClass";
    }
});

function onFocus() {
    console.log("inout is on focus");
}

function onBlur() {
    console.log("input is on blur");
}

function onChange(event) {
    console.log(event.value);
}

function funDbClick() {
    console.log("Button Double clicked!");
    document.getElementById('demo5').style.backgroundColor = "blue";
}

function handleMouseOver() {
    // alert("Mouse over the div!");
}

function handleMouseOut() {
    // alert("Mouse out of the div!");
}

function handleMouseDown() {
    // alert("Mouse button pressed!");
}


var mousemoveContainer = document.getElementById("mouseMove")
var mouseMoveResult = document.getElementById("mouseMoveResult")
mousemoveContainer.addEventListener('mousemove', function (event) {
    var randomNumber = Math.floor(Math.random() * 100);
    mouseMoveResult.textContent = `Random Number: ${randomNumber}`;
    console.log(randomNumber);
});

function onSelect() {
    document.getElementById('demo9').style.display = "block";
}


var height = 5;
var patternHTML = '';

for (var i = 1; i <= height; i++) {
    var pattern = '';
    for (var j = 1; j <= i; j++) {
        pattern += '⭕';
    }
    console.log(pattern);
    patternHTML += `<p>${pattern}</p>`;
}
// Display the pattern in the "pyramid-container" div
var pyramidContainer = document.getElementById("pyramid-container");
pyramidContainer.innerHTML = patternHTML;


var size = 8;
for (var i = 1; i <= size; i++) {
    var row = '';
    for (var j = 1; j <= size; j++) {
        if ((i + j) % 2 === 0) {
            row += '■ '; // Black square
        } else {
            row += '□ '; // White square
        }
    }
    console.log(row);
}