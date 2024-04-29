var myVariable = "Hello, world!";
document.write("Data type of myVariable is: ");
document.write(typeof myVariable + "<br>");


// Define a variable with a numeric value
var x = 10;

// Define a variable with a string value
var y = "5";

// Perform addition operation
var result = x + y;

// Use document.write() method to display the result
document.write("Result of addition with type coercion: " + result + "<br>");


// Assign a variable with NaN value
var myNaN = NaN;
document.write("NaN value: " + myNaN + "<br>");

// Check if a value is NaN using isNaN() function
var value1 = NaN;
var isValue1NaN = isNaN(value1);
document.write("Is value1 NaN? " + isValue1NaN + "<br>");

// Check if a value is NaN using isNaN() function
var value2 = 10;
var isValue2NaN = isNaN(value2);
document.write("Is value2 NaN? " + isValue2NaN + "<br>");


document.write(2E310 + "<br>"); // will display infinity
document.write(-3E310 + "<br>"); // will display -infinity

document.write((8 > 2) + "<br>");  // true
document.write((8 < 2) + "<br>"); // false

console.log(2 + 2);   // will show 4 in console
console.log(10 > 15); // will show false in console

document.write((12 == 13) + "<br>"); // false
document.write((12 == 12) + "<br><br>"); // true



// Declare variables
var a = 10;                                                
var b = "text";                                            
var c = "10";                                              

document.write(a === 10);                                   // Output: true (Same data type and value)
document.write("<br>");
document.write(a === b);                                    // Output: false (Different data type and value)
document.write("<br>");
document.write(a === c);                                    // Output: false (Different data type but same value)
document.write("<br>");
document.write(b === c);                                    // Output: false (Same data type but different value)
document.write("<br>");


document.write(6 > 3 && 3 < 6);                            // Output: true because both statements are true
document.write("<br>");
document.write(6 < 3 && 3 > 6);                            // Output: false because one statement is false
document.write("<br>");
document.write(6 > 3 || 3 > 6);                            // Output: true because one statement is true
document.write("<br>");
document.write(6 < 3 || 3 > 6);                            // Output: false because both statements are false
document.write("<br>");
document.write(!(20 > 15));                               // Output: false because 20 is greater than 15 and we are comparing it with the not !
document.write("<br>");
document.write(!(20 < 15));                               // Output: true because 20 is greater than 15 and we are comparing it with the not !
document.write("<br>");

var x = 10;
var y = 15;
document.write(y + x);                                     // Output: 35