//Variablar som skapar bilarna (blue och orange), samt skotten och bilarnas separata skott.
let blue,
  orange,
  bullets,
  blueBullets,
  orangeBullets,
  oljeF,
  oilGroup,
  expoGroup,
  barrel,
  explosion,
  tryckVåg,
  explosionA,
  oAmmo,
  bAmmo,
  gAmmo,
  checkP1,
  checkP2;
//lagrar rotationen för den blå bilen
let blueRotation = -90;
//lagrar rotationen för den oranga bilen
let orangeRotation = -90;

let blueTA = false; // Variable to track animation state
let orangeTA = false; // Variable to track animation state
let tCollisionCalledB = false; // Flag to track if tCollision has been called
let tCollisionCalledO = false; // Flag to track if tCollision has been called
let sizeChange = 0.06; // Rate of size change

//hastigheten för den orange som börjar på 0
let speedO = 0;
//hastigheten för den blue som börjar på 0
let speedB = 0;
//Används i momvent.js för att minska hastigheten för bilarna
let decreaseRate = 0.04;

//LIV
let livesB = 3;
let livesO = 3;

//AMMO
let oAmmoGroup;
//GENERELL
let ammoB = 0;
let ammoO = 0;
//SPECIFIK

let oAmmoB = 0;
let oAmmoO = 0;
let bAmmoB = 0;
let bAmmoO = 0;
let gAmmoB = 0;
let gAmmoO = 0;

let canShootB = true; // Add a flag to track whether shooting is allowed

let currentCheckpoint = 0;

//START_TIMER!!
var timer = 7;

let dead = false;

function preload() {
  //texturerna för blocken banan är uppbyggd av. själva texturerna används inte längre då de är satta till hidden men kan behövas ifall banan ska redigeras.
  // wallImg = loadImage('wall.png');
  orangeImg = loadImage("Grafik/bilO.svg");
  blueImg = loadImage("Grafik/bilB.svg");
  boostImg = loadImage("Grafik/boost.png");
  oilSImg = loadImage("Grafik/oilS.png");

  barrel1 = loadImage("Grafik/tunna.png");
  explosionA = loadAni("Grafik/expo.png", "Grafik/bränn.png");
  explosionA.frameDelay = 20;
  // explosionA.noLoop();

  //AMMO BOXAR
  oilBImg = loadImage("Grafik/oil.png");
  barrelBImg = loadImage("Grafik/barrelABox.png");
  gunBImg = loadImage("Grafik/gunABox.png");
}

function setup() {
  tryckVåg = millis();
  frameRate(60);
  createCanvas(1920, 1080);
  //sätter skugga på bilarna. Detta för att de också ska få känslan av 3D som allt annat.
  drawingContext.shadowOffsetX = 4;
  drawingContext.shadowOffsetY = 4;
  drawingContext.shadowColor = "rgb(15,15,15)";

  blueBullets = new Group();
  orangeBullets = new Group();

  oilGroup = new Group(); // Initialize the oil sprite group
  expoGroup = new Group();

  // Detaljerna för blue med storlek och placering.
  blue = new Sprite(390, 1920, 100, 60);
  //Färgen används inte längre men ligger kvar ifall grafik behöver skiftas
  blue.color = "blue";
  //kopplar bilden på bilen till formen
  blue.img = blueImg;
  //Sätter den på lager 3 för att åka över andra objekt. Även denna är i stunden inte så relevant men bra att ha kvar.
  blue.layer = 3;
  //minskning av bilen för att passa banan.
  blue.scale = 0.5;

  // Detaljerna för orange med storlek och placering.
  orange = new Sprite(480, 1920, 100, 60);
  //Färgen används inte längre men ligger kvar ifall grafik behöver skiftas
  orange.color = "orange";
  //kopplar bilden på bilen till formen
  orange.img = orangeImg;
  //minskning av bilen för att passa banan.
  orange.scale = 0.5;

  checkP1 = new Sprite(715, 150, 150, 150);
  checkP1.debug = true;
  checkP1.overlaps(allSprites);

  checkP2 = new Sprite(1050, 2450, 150, 220);
  checkP2.debug = true;
  checkP2.overlaps(allSprites);

  setInterval(timeIt, 1000);

  mTiles();

  // Skapandet av gruppen för bullets
  bullets = new Group();

  //Skotten går över banans inramning men kommer studsa på väggarna runt
  bullets.overlaps(grind);

  //funktionen karta kallas att köras från map.js
  karta();

  //debug funktionen avnändes för att se hur hitboxarna interagerade med omgivningen.
  //  blue.debug = true;
  //  orange.debug = true;
}

function toggleFullscreen() {
  if (mouseX > 0 && mouseX < 1920 && mouseY > 0 && mouseY < 1080) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
//AKTIVERA SENARE!!!!

function draw() {
  let Xposition = (blue.x + orange.x) /2 +200;
  let Yposition = (blue.y + orange.y) / 2;

  //let Xposition = blue.x;
  // let Yposition = blue.y;
  //FÖR TEST AV BANA

  // Calculate the distance between blue and orange
  checkDistance();
  //console.log(Xposition)
  //console.log(Yposition)
  camera.on();
  camera.x = Xposition;
  camera.y = Yposition;

  clear();
  //background(vägImg)
  background("rgb(24,23,23)");
  //png som är texturen för hela banan körs.

  blueOilF(blue, oAmmo, ammoB);
  blueOilF(blue, gAmmo, ammoB);
  blueOilF(blue, bAmmo, ammoB);

  blueOilF(orange, oAmmo, ammoO);
  blueOilF(orange, gAmmo, ammoO);
  blueOilF(orange, bAmmo, ammoO);
  //orangeOilF();

  //kallar och kör en rad funktioner i movement.js, och bullet.js
  puB();
  puO();
  tunna();

  if ((timer > 0) & !dead) {
    textSize(64);
    text(timer, camera.x, camera.y - 150);
  } else if (timer == 0) {
    if (!dead) {
      moveO();
      moveB();
    }
  }

  // Lagrar rotationen för styrning och rikning för skjutning.
  blue.rotation = blueRotation;
  orange.rotation = orangeRotation;

  //kör funktionen bullet123 från bullet.js
  bullet123();

  if (blue.overlap(oilGroup)) {
    // Om bilen åker över ett oilblock
    speedB *= 0.3;
  }
  if (orange.overlap(oilGroup)) {
    // Om bilen åker över ett oilblock
    speedO *= 0.3;
  }
  camera.off();
  //storlek på texten
  textSize(36);
  //Färgen på texten
  fill(255, 255, 0);
  //Informarion om vad själva texten ska säga och vart.
  text("Red lives: " + livesO, 100, 950);

  //Informarion om vad själva texten ska säga och vart.
  text("Blue lives: " + livesB, 100, 900);
}
function restartGame() {
  // Reset lives and other game variables
  livesB = 3;
  livesO = 3;
  document.getElementById("overlay").style.display = "none";
  timer = 3;
  dead = false;
  currentCheckpoint = 0;
}

function timeIt() {
  if (timer > 0) {
    timer--;
  }
}
