//get necessary elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;
//st up canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
const {width, height} = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function
function draw({key}) {
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
   switch(key) {
       case 'ArrowUp':
           y -= MOVE_AMOUNT;
           break;
       case 'ArrowDown':
           y += MOVE_AMOUNT;
           break;
       case 'ArrowLeft':
           x -= MOVE_AMOUNT;
           break;
       case 'ArrowRight':
           x += MOVE_AMOUNT;
           break;
       default:
           break;}
    ctx.lineTo(x, y);
    ctx.stroke();
}
//write a handler for the keys
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
       
    }
}
window.addEventListener('keydown', handleKey);
//clear or shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
   canvas.addEventListener("animationend", function() {
    console.log("done the shake");
    canvas.classList.remove('shake');
   }, 
    {once: true}
  ); 
  shakebutton.addEventListener('click', clearCanvas);
}
//listen for arrow keys
