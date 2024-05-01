// Countdown function for setting an alarm
function countdown() { 
    // Get the value of seconds from the input field
    var seconds = document.getElementById("seconds").value;

    // Function to decrement seconds and update the timer
    function tick() {
        seconds = seconds - 1; 
        // Update the timer element with the remaining seconds
        document.getElementById("timer").innerHTML = seconds; 
        // Set a timeout to call tick function every second
        var time = setTimeout(tick, 1000);
        // If seconds reach -1, display an alert and clear the timeout
        if (seconds == -1) { 
            alert("Time's up");
            clearTimeout(time);
            // Clear the timer element
            document.getElementById("timer").innerHTML = "";
        }
    }
    // Initial call to tick function
    tick();
}

// Initialize slideIndex and timer variables
let slideIndex = 0;
let timer;

// Function to display slides
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // If slideIndex exceeds the number of slides, reset it to 0
  if (slideIndex >= slides.length) {slideIndex = 0}    
  // If slideIndex is less than 0, set it to the last slide
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  
  // Hide all slides and remove the "active" class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and add the "active" class to its dot
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  
  // Set a timeout to advance to the next slide every 3 seconds
  timer = setTimeout(function() {
    slideIndex++;
    showSlides();
  }, 3000);
}

// Function to navigate to the previous slide
function plusSlides(n) {
  // Clear the current timeout
  clearTimeout(timer);
  // Increment or decrement the slideIndex
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
    // Clear the current timeout
    clearTimeout(timer);
    // Set the slideIndex to the given value and show the corresponding slide
    showSlides(slideIndex = n - 1); 
}

// Start the slideshow when the page loads
showSlides();
