// Function to call the loop
function call_Loop() {
    // Start the loop
    let count = 1; // Initialize a counter variable

    // While the count is less than or equal to 10
    while (count <= 10) {
        document.getElementById("Loop").innerText += count + " "; 
        count++;
    }
}

// Array of musical instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; // Initialize an empty string to store content

// Function to display musical instruments
function for_Loop() {
    // Loop through the array of instruments
    for (var i = 0; i < Instruments.length; i++) {
        Content += Instruments[i] + "<br>"; // Concatenate instrument names with line breaks
    }
    // Display the instruments in an HTML element
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Function to display an array of fruits
function displayArray() {
    // Define an array within the function
    var fruits = ["Apple", "Banana", "Orange", "Mango"];

    // Use document.getElementById().innerHTML to display the array in an HTML element
    document.getElementById("fruitsList").innerHTML = fruits.join(", ");
}

// Function to demonstrate constants and object properties
function constant_function() {
    // Define a constant object representing a musical instrument
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue"; // Change the color property
    Musical_Instrument.price = "$900"; // Add a new property
    var new_Price = "$300"; // Define a local variable

    // Display information about the musical instrument
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price +
        ". It is " + Musical_Instrument.color + ", however it should be reduced in price to " + new_Price;
}

// Function to return the sum of two numbers
function return_Function(x, y) {
    return x + y;
}
console.log(return_Function(3, 4)); // Log the result to the console

// Function to describe a car using object properties and a method
function description() {
    let car = {
        make: "Dodge ",
        model: "Ram 1500",
        year: "2011 ",
        color: "Black ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
document.getElementById("Car_Object").innerHTML = car.description(); 
}

// Function to demonstrate the break statement
function breakExample() {
    var text = ""; // Initialize an empty string to store the output

    // Loop from 0 to 4
    for (let i = 0; i < 5; i++) {
        // If the value of i is equal to 3, exit the loop
        if (i === 3) {
            break; // Exit the loop
        }

        // Concatenate the current value of i to the text variable with a line break
        text += "The number is " + i + "<br>";
    }

    // Display the output in an HTML element with id "breakOutput"
    document.getElementById("breakOutput").innerHTML = text;
}

// Function to demonstrate the continue statement
function continueExample() {
    var text = ""; // Initialize an empty string to store the output

    // Loop from 0 to 4
    for (let i = 0; i < 5; i++) {
        // If the value of i is equal to 2, skip to the next iteration
        if (i === 2) {
            continue; // Skip to the next iteration
        }

        // Concatenate the current value of i to the text variable with a line break
        text += "The number is " + i + "<br>";
    }

    // Display the output in an HTML element with id "continueOutput"
    document.getElementById("continueOutput").innerHTML = text;
}
