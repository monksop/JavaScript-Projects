// Define a function that assigns two variables and utilizes document.getElementById method
function updateParagraph() {
    var var1 = "Variable 1";
    var var2 = "Variable 2";
    
    // Concatenate the variables
    var concatenatedVars = var1 + " and " + var2;
    
    // Get the paragraph element by its id
    var paragraphElement = document.getElementById("output");
    
    // Utilize the += operator to concatenate a string
    concatenatedVars += " - Additional String";
    
    // Update the paragraph content
    paragraphElement.textContent = concatenatedVars;
}
