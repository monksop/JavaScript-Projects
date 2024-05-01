// Declare a global variable
var x = 5;
console.log(x); // Output: 5

// Declare a function to log a local variable
function localVar() { 
    var y = 10;
    console.log(y); // Output: 10
}

// Declare a function to demonstrate an error
function errorFunction() {
    // Intentionally misspelled variable name to cause an error
    var z = y + 5; // This will cause a ReferenceError
    console.log(z);
}

// Call the function to log a local variable
localVar(); // Output: 10

// Call the function to demonstrate an error
errorFunction(); // This will throw a ReferenceError

// Function to greet based on the time of the day
function get_myif() {  
    if (new Date().getHours() < 13) { 
        document.getElementById("myifstatement").innerHTML = "Good morning! [because its before 13:00]";
    } else {
        document.getElementById("myifstatement").innerHTML = "Good afternoon! [because its after 13:00]";
    }
}

// Function to display a message based on user input
function displayMessage() {
    var name = document.getElementById("nameInput").value;
    var outputParagraph = document.getElementById("output");

    if (name) {
        outputParagraph.textContent = "Hello, " + name + "!";
    } else {
        outputParagraph.textContent = "Please enter a valid name!";
    }
}

// Function to display a greeting based on the time of the day
function Time_function() {
    var time = new Date().getHours(); // Get the current hour of the day (0-23)

    var message; // Declare a variable to hold the message

    if (time < 12) {
        message = "Good morning!"; // If the time is before 12:00 PM
    } else if (time < 18) {
        message = "Good afternoon!"; // If the time is between 12:00 PM and 6:00 PM
    } else {
        message = "Good evening!"; // If the time is after 6:00 PM
    }

    // Display the message in the element with id "Time"
    document.getElementById("Time").innerHTML = message;
}
