const board = document.querySelector('.board');
createNewBoxes(16, 16); //Create 16x16 board when the page starts
setRowsAndCols(16, 16); //Sets the amount of rows and columns in the board
mouseOverEvent();       //Gives the board a mouseover effect

//Creates the number of boxes needed to fill the dimensions of the board
function createNewBoxes(rows, cols){
    let dimensions = rows * cols;
    for(let i = 0; i < dimensions; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        board.appendChild(box);
    }
}

//Sets the amount of rows and columns in the grid of the board
function setRowsAndCols(rows, cols){
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
}

//Adds a hover event to each box, onhover it's background color will change
function mouseOverEvent(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener("mouseenter", function( event ) {
            
            // the mouseenter target will become a random color if none was assigned
            if(box.style.backgroundColor === ''){
                event.target.style.backgroundColor = getRandomColor();
            }
        });
    });
}

//Returns a string that represents a random hsl color
function getRandomColor() {
    let color;
    let hue = getRandomInt(1, 360);         //number on the color wheel
    let saturation = getRandomInt(50, 100); //percentage from grey to full color
    let lightness = getRandomInt(25, 90);   //lightness from black to white
    color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    return color;
}

//Returns a random number between the range min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const resetBtn = document.querySelector('#reset-btn');
//When the reset button is clicked, create a new board.
resetBtn.addEventListener("click", function(){
    createNewBoard();
});

function createNewBoard(){
    let rows = getRows();
    let cols = getCols();
    removeAllBoxes();
    createNewBoxes(rows, cols);
    setRowsAndCols(rows, cols);
    mouseOverEvent();
}

//Prompts user to enter a number of rows that is less than 100
function getRows(){
    while(true){
        let rows = prompt('How many rows? (Enter a number less than 100)', 16);
        if(rows > 0 && rows < 101)
            return rows;
    }
}

//Prompts user to enter a number of cols that is less than 100
function getCols(){
    while(true){
        let cols = prompt('How many columns? (Enter a number less than 100)', 16);
        if(cols > 0 && cols < 101)
            return cols;
    }
}

//Removes all boxes from the board
function removeAllBoxes(){
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}