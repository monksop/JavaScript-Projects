// Function to determine if the user is tall enough to ride based on input height
function Ride_Function() {
    // Declare variables
    var Height, Can_ride;
    // Get the user's height input
    Height = document.getElementById("Height").value;
    // Use ternary operator to check height and set message
    Can_ride = (Height < 57) ? "You are too short" : "You are tall enough";
    // Display message in HTML element
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Function to check voting eligibility based on user's age
function checkEligibility() {
    // Declare variables
    var age, can_vote;
    // Get the user's age input
    age = document.getElementById("age").value;
    // Use ternary operator to check age and set message
    can_vote = (age > 18) ? "You are old enough" : "You are not old enough";
    // Display message in HTML element
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

// Constructor function for creating Vehicle objects
function Vehicle(Make, Model, Year, Color) { 
    // Define properties of the Vehicle object
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create instances of Vehicle objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display information about a Vehicle object
function myFunction() {
    // Display information about Erik's vehicle
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// Nested Function
function add_Strings() {
    // Declare and initialize outer variable
    var star_string = "Hello";

    // Define inner function
    function Adding(str) {
        // Modify outer variable
        star_string = star_string + " " + str;
    }

    // Call inner function
    Adding("World");

    // Display modified variable
    document.getElementById("Nested_function").innerHTML = star_string;
}
