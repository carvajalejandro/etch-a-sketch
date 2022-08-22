let color ='black';
let click= false;
let error= document.querySelector('error')

function populateBoard(size){
    //Set important variables
let board = document.querySelector(".board");
let squares = board.querySelectorAll('div')
// This removes the squares so that they can be set again with the new specified size
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
board.style.gridTemplateRows= `repeat(${size}, 1fr)`;
board.style.border = "2px solid black";
//start of code
let amount =size * size;
for(i=0;i<amount;i++){
    let square= document.createElement("div");
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor='white';
    board.insertAdjacentElement("beforeend",square);
    }
}
populateBoard(64);

function changeSize(input){
    if(input>=2 && input<=100){
        document.getElementById("error").textContent = ''

        populateBoard(input); 
    }
    else{
        document.getElementById("error").textContent = 'Error! Size must be between 2 and 100.'
    }
}
// this makes it so that when the mouse hovers over a square, the color of the square changes.
function colorSquare(){
  if (click){
    if (color ==='random'){
        this.style.backgroundColor= `hsl(${Math.random()* 360}, 100%, 50%)`;
        } else{
        this.style.backgroundColor= color;
        }
  }
}
function changeColor(choice){
    color= choice;
}
function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor='white');
}
//This makes it so that you can 'click' stops coloring
document.querySelector('body').addEventListener('click', (e)=>{
    if(e.target.tagName!='BUTTON'){
        click= !click;
if(click){
    document.querySelector('.mode').textContent='Mode: Coloring'
} else{
    document.querySelector('.mode').textContent='Mode: Not Coloring'
    }
}
});