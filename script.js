const board = document.querySelector('.board');

//Create 256 boxes and insert them into the board div
for(let i = 0; i < 256; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    board.appendChild(box);
}