function populateBoard(size){
    //Set important variables
let board = document.querySelector(".board");
let squares = board.querySelectorAll('div')
// This removes the squares so that they can be set again with the new specified size
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
board.style.gridTemplateRows= `repeat(${size}, 1fr)`;

//start of code
let amount =size * size;
for(i=0;i<amount;i++){
    let square= document.createElement('div');
// this makes it so that when the mouse hovers over a square, the color of the square changes.
    square.addEventListener('mouseover', ()=> {
        square.style.backgroundColor= 'black';
    });
    square.style.backgroundColor='white';
    board.insertAdjacentElement("beforeend",square);
    }
}
populateBoard(16);

function changeSize(input){
    if(input>=2 && input<=100){
        populateBoard(input); 
    }
    else{
        console.log('too many squares');
    }
}