const board = document.querySelector('.board');

//Create 256 boxes and insert them into the board div
for(let i = 0; i < 256; i++){
    let box = document.createElement('div');
    box.style.border = 'grey 1px solid';
    box.style.backgroundColor = 'white';
    box.style.width = '20px';
    box.style.height = '20px';
    board.appendChild(box);
}