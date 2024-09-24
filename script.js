let img1;
let img2;
let button;
let gameMode;
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  
  
}
function preload() {
  img1 = loadImage('bridge-7504605_1920.jpg');
  img2 = loadImage('hyacinth-macaw-7501470_640.jpg');
}

function setup() {
  createCanvas(400, 400);
  drawPage1();
  gameMode = 1;
}

function draw() {

  
}
function drawPage1(){
  removeElements();
  button = createButton('click me at page 1');
  button.position(50, 50);
  button.mousePressed(changeBG);
  image(img1, 0, 0, 200, 200);
  gameMode = 2
}
function drawPage2(){
  removeElements();
  button = createButton('click me at page 2');
  button.position(80, 80);
  button.mousePressed(changeBG);
  image(img2, 0, 0);
  gameMode = 1
}

function changeBG() {
  if (gameMode == 1) {
    drawPage1();
  } else if (gameMode == 2){
    drawPage2();
  }
}