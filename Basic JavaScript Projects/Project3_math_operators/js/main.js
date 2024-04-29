// Function to perform addition operation
function performAddition() {
    var num1 = 5; 
    var num2 = 3; 
    var result = num1 + num2; // Addition operation
    var mathParagraph = document.getElementById("Math");
    mathParagraph.textContent = "The result of the addition operation is: " + result;
}

// Function to perform subtraction operation
function performSubtraction() {
    var num1 = 10; 
    var num2 = 7; 
    var result = num1 - num2; // Subtraction operation
    var mathParagraph = document.getElementById("Math");
    mathParagraph.textContent += "\nThe result of the subtraction operation is: " + result;
}

// Function to perform multiplication operation
function performMultiplication() {
    var num1 = 6; 
    var num2 = 4; 
    var result = num1 * num2; // Multiplication operation
    var mathParagraph = document.getElementById("Math");
    mathParagraph.textContent += "\nThe result of the multiplication operation is: " + result;
}

// Function to perform division operation
function performDivision() {
    var num1 = 20; 
    var num2 = 5; 
    var result = num1 / num2; // Division operation
    var mathParagraph = document.getElementById("Math");
    mathParagraph.textContent += "\nThe result of the division operation is: " + result;
}

// Function to perform more mathematical operations and display the result
function more_Math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "Result of multiplying, subtracting, adding, and dividing numbers all at once: " + simple_math;
}

// Function to calculate modulus operation and display the result
function modulus_Operator() {
    var simple_math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remider of: " + simple_math;
}

// Function for negation
function negation_Operator() {                                    
    var X = 10;                                                         
    document.getElementById("Math").innerHTML = -X;
}


// Function to perform increment and decrement operations
function performIncrementDecrement() {
var y = 5;
y++;
document.getElementById("result").innerHTML += "After incrementing: " + y + "<br>";

var z = 5; 
z--;
    document.getElementById("result").innerHTML += "After decrementing: " + z;
}

// Function to show random number in an alert
function showRandomNumber() {
    var randomNumber = Math.random() * 100;
    window.alert("Random Number: " + randomNumber);
}

// Function to show value of PI in an alert
function showPI() {
    window.alert("PI: " + Math.PI);
}
