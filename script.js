const board = document.querySelector('.board');

//Create 256 boxes and insert them into the board div
for(let i = 0; i < 256; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    board.appendChild(box);
}

const boxes = document.querySelectorAll('.box');

//Adds a hover event to each box, onhover it's background color will change
boxes.forEach(box => {
    box.addEventListener("mouseenter", function( event ) {
        // the mouseenter target will become orange
        event.target.style.backgroundColor = "orange";
      });
});