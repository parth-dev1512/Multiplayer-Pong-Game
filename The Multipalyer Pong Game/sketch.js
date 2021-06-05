var databse;
var gamestate=0;
var playerCount=0;
var player1, player2;
var allPlayers;

var form, game, player;
var ball_img;
var ball;

function setup() {
  createCanvas(displayWidth,displatHeight);
  
  databse=firebase.databse();

}

function draw() {
  background(255,255,255);  
  drawSprites();
}