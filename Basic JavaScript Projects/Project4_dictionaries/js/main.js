function myDictionary() {
    // Define a JavaScript object (dictionary) for car information
    var car = {
        Make: "Toyota",
        Model: "Camry",
        Year: 2020,
        Color: "Blue"
    };
    delete car.Color;
    document.getElementById("Dictionary").innerHTML = car.Color;
}