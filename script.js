const board = document.querySelector('.board');
createNewBoxes(16, 16); //Create 16x16 board when the page starts
setRowsAndCols(16, 16); //Sets the amount of rows and columns in the board
mouseOverEvent();       //Gives the board a mouseover effect
let toggleBlack = false;       // Boolean var for if the black button was clicked
let toggleEraser = false;      // Boolean var for if the eraser button was clicked

//Creates the number of boxes needed to fill the dimensions of the board
function createNewBoxes(rows, cols){
    let dimensions = rows * cols;
    for(let i = 0; i < dimensions; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = 'white';
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
        box.addEventListener("mouseenter", function() {
            if(toggleBlack === true){
                box.style.backgroundColor = 'black';
            }
            else if(toggleEraser === true){
                box.style.backgroundColor = 'white';
            }
            else if(box.style.backgroundColor === 'black' || 
                    box.style.backgroundColor === 'white'){
                box.style.backgroundColor = getRandomColor();
            }else
                decreaseLightness(box);
        });
    });
}

//Decreases the box's rgb value by 10% until it is black
function decreaseLightness(box){
    const NUMERIC_REGEXP = /\d+/g;  // Regex for numbers
    let rgbValue = box.style.backgroundColor.match(NUMERIC_REGEXP); //Stores each number from the rgb value into an array
    let red = rgbValue[0];
    let green = rgbValue[1];
    let blue = rgbValue[2]; 

    //Decreases the rgb value by 10 until we get rgb(0, 0, 0), in otherwords, black
    if(red >= 0 || blue >= 0 || green >= 0){
        box.style.backgroundColor = `rgb(${red - 10}, ${green - 10}, ${blue - 10})`;
    }
}

//Returns a string that represents a random rgb color
function getRandomColor() {
    let color;
    let red = getRandomInt(0, 255);     //intensity of red
    let green = getRandomInt(0, 255);   //intensity of green
    let blue = getRandomInt(0, 255);    //intensity of blue
    color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

//Returns a random number between the range min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const eraserBtn = document.querySelector('#eraser-btn');
const toggleBlackBtn = document.querySelector('#color-picker-btn');

eraserBtn.addEventListener("click", function(){
    eraserBtn.classList.toggle('down');        //Changes the style of the button on click
    
    if(eraserBtn.classList.contains('down')){
        
        //Switch the toggle black button off when eraser button is on
        if(toggleBlackBtn.classList.contains('down')){
            toggleBlack = false;
            toggleBlackBtn.classList.toggle('down');
        }
        toggleEraser = true;             
    }
    else
        toggleEraser = false;
});

toggleBlackBtn.addEventListener("click", function(){
    toggleBlackBtn.classList.toggle('down');        //Changes the style of the button on click
    
    if(toggleBlackBtn.classList.contains('down')){
        
        //Switch the eraser button off when toggle black is on
        if(eraserBtn.classList.contains('down')){
            toggleEraser = false;
            eraserBtn.classList.toggle('down');
        }
        toggleBlack = true;             
    }
    else
        toggleBlack = false;
});

const resetBtn = document.querySelector('#reset-btn');
//When the reset button is clicked, create a new board.
resetBtn.addEventListener("click", function(){
    createNewBoard();
});

function createNewBoard(){
    let rows = getRows();
    
    //Do not create a new board if rows or cols is null
    if (rows === null)
        return;
    
    let cols = getCols();

    if(cols === null)
        return;
    
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
        else if(rows === null)      //Return null when the user cancels the prompt
            return null;
    }
}

//Prompts user to enter a number of cols that is less than 100
function getCols(){
    while(true){
        let cols = prompt('How many columns? (Enter a number less than 100)', 16);
        if(cols > 0 && cols < 101)
            return cols;
        else if(cols === null)      //Return null when the user cancels the prompt
            return null;
    }
}

//Removes all boxes from the board
function removeAllBoxes(){
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}