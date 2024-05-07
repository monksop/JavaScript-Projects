//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square. 
function placeXORo(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if(activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        //This function plays placement sound.
        audio('./media/place.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    //This function results in a random square being selected by the computer.
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXORo(pickASquare)) {
                placeXORo(pickASquare);
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 500);
    }

    //This functions checks if an array includes 3 strings. It is used to check for each win condtion.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for placement sound('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on the canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is. 
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    
        //This function interacts with the canvas.
        function animateLineDrawing() {
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            c.clearRect(0, 0, 608, 608);
            c.beginPath();
            c.moveTo(x1, y1);
            c.lineTo(x, y);
            c.lineWidth = 10;
            c.strokeStyle = 'rgba(70, 255, 33, .8';
            c.stroke();
            //This condition checks if we've reached the endpoints.
            if (x1 <= x2 && y1 <= y2) {
                //This condition adds 10 to the previous end x endpoint.
                if (x < x2) { x += 10; }
                //This condition adds 10 to the previous end y endpoint.
                if (y < y2) { y += 10; }
                //This condition is similar to the one above.
                //This is necessary for the 6, 4, 2 win condtions.
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) { x += 10; }
                if (y > y2) { y -= 10; }
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }
        }

        //This function clears our canvas after our win line is drawn. 
        function clear() {
            //This line starts our animation loop.
            const animationLoop = requestAnimationFrame(clear);
            //This line clears our canvas.
            c.clearRect(0, 0, 608, 608);
            //This line stops our animation loop.
            cancelAnimationFrame(animationLoop);
        }
        //This line disallows clicking while the win sound is playing.
        disableClick();
        //This line plays the win sounds.
        audio('./media/wingame.mp3');
        //This line calls our main animation loop.
        animateLineDrawing();
        //This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
        setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or win.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This variable get the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}
