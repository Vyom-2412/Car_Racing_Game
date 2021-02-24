var database;
var home, game, player, allPlayers;
var gameState = 0, playerCount = 0;
var Car1,Car2,Car3,Car4,cars;
var car1,car2,car3,car4;
var ground, track;

function preload()
{
   Car1 = loadImage('Images/car1.png');
   Car2 = loadImage('Images/car2.png');
   Car3 = loadImage('Images/car3.png');
   Car4 = loadImage('Images/car4.png');
   ground = loadImage('Images/ground.png');
   track = loadImage('Images/track.jpg');
}
function setup()
{
   createCanvas(displayWidth,displayHeight);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
}

function draw()
{
   background("white");
   if(playerCount==4)
   {
      game.update(1);
   }
   if(gameState==1)
   {
      clear();
      game.play();
   }
   if(gameState==2)
   {
      game.end();
   }
}