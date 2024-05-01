// Function to create a full sentence by concatenating individual strings
function fullSentance() { 
    var string1 = "I have ";
    var string2 = "made this ";
    var string3 = "into a complete ";
    var string4 = "sentence! ";
    var combined = string1.concat(string2, string3, string4);
    document.getElementById("Sentance").innerHTML = combined;
}

// Function to demonstrate the slice method on a string
function slice_Function() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    // Display the sliced section in uppercase
    document.getElementById("Slice").innerHTML = Section.toUpperCase();
    // Display the index of the first occurrence of the word "dull"
    document.getElementById("Search").innerHTML = Sentence.search(/dull/);
}

// Function to convert a number to a string
function string_Method() { 
    var X = 182;
    // Convert the number to a string and display it
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Function to demonstrate precision-related methods on numbers
function precision_Method() { 
    var X = 12938.3012987376112; 
    // Convert the number to a string with precision of 10 and display it
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
    var num = 2.232423;
    // Display the number with default precision
    document.getElementById("to_Fixed").innerHTML = num.toFixed(); 
    var string1 = "Happy JS!"; 
    // Display the primitive value of the string
    document.getElementById("value_Of").innerHTML = string1.valueOf();
}
