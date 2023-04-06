//variáveis 
var canvas;
var backgroundImage;
var database;
var form, player;
var playerCount;
var game;
//declaração de vars
var car1, car2, car1_img, car2_img, cars, track;
var gameState;
var allPlayers;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  //carregar as imagens em: car1_img, car2_img, track
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Iniciando banco de dados
  database = firebase.database();

  //objeto de jogo é criado
  game = new Game();
  //chamando um método da classe game
  game.start();

}

function draw() {
  background(backgroundImage);

   //os if's
   if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }


 
}

//sempre que há atualização ela ajusta automaticamente o tamanho da tela. 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
