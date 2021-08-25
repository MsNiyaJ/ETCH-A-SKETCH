const board = document.querySelector('.board');

//Create 256 boxes and insert them into the board div
for(let i = 0; i < 256; i++){
    let box = document.createElement('div');
    box.style.border = 'grey 1px solid';
    box.style.backgroundColor = 'white';
    box.style.width = '50px';
    box.style.height = '50px';
    board.appendChild(box);
}