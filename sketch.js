let images = [];
let voice = [];
let currentIndex = 0;
let d = 1.4;
let slider = 0;
let isfading = false;
let fadeAmount = 255;
let fadeDirection = -1;
let fadeSpeed;
let showend = false;
let onetime = true;
let onetime2 = true;
let gifDuration = 2200;
let staticImg;
let video;
let videoPlaying = false;
let textContent =
  "TL;DR -> \nHow much longer are we gonna ignore the metaphysical affect of stories within the trinity of life? Apocalypse is the Raison D'etre of memory and the directionality of its multiplication is the project of history, future, and those in power. It will remain a theater until we stare at its eyes.";

function preload() {
  for (let i = 0; i < 51; i++) {
    images[i] = loadImage(`img/${i}.jpg`);
  }
  // staticImg = loadImage("white.png");
  // images[0] = loadImage("img/1.jpg");
  // images[1] = loadImage("img/10.gif");
  for (let i = 0; i < 2; i++) {
    voice[i] = loadSound(`img/v/${i}.mp3`);
  }
  for (let i = 2; i < 11; i++) {
    voice[i] = loadSound(`img/v/${i}.wav`);
  }
  voice[11] = loadSound("img/v/11.mp3");
  // Add more images as   needed
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(60);
  fadeSpeed = 255 / 30;
  textAlign(CENTER, CENTER);
  textSize(32);
  textFont("Georgia");
  background(255);
}

function draw() {
  if (images.length > 0) {
    // Scale the image to fit the full screen while maintaining aspect ratio
    let img = images[currentIndex];
    let imgAspect = img.width / img.height;
    let canvasAspect = width / height;

    // if (imgAspect > canvasAspect) {
    //   image(img, width / 2, height / 2, width / d, width / imgAspect / d);
    // } else {
    //   image(img, width / 2, height / 2, (height * imgAspect) / d, height / d);
    // }
    image(img, width / 2, height / 2, width, height);
  }
}
function keyPressed() {
  console.log(slider);
  if (key === "k" || key === "K") {
    currentIndex = (currentIndex + 1) % images.length;
    slider++;
  }
  if (key === "e" || key === "E") {
    voice.pause();
  }
  if (key === "j" || key === "J") {
    if (slider > 0) slider--;
    if (slider == -1) slider = 0;
    currentIndex = (currentIndex - 1) % images.length;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
  }
  if (slider == 9) {
    playv(0);
  }
  if (slider == 21) {
    playv(1);
  }
  if (slider == 23) {
    playv(2);
  }
  if (slider == 24) {
    playv(3);
  }
  if (slider == 25) {
    playv(4);
  }
  if (slider == 26) {
    playv(5);
  }
  if (slider == 27) {
    playv(6);
  }
  if (slider == 28) {
    playv(7);
  }
  if (slider == 44) {
    playv(8);
  }
  if (slider == 45) {
    playv(8);
  }
  if (slider == 46) {
    playv(8);
  }
  if (slider == 47) {
    playv(9);
  }
  if (slider == 48) {
    playv(10);
  }
  if (slider == 50) {
    playv(11);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function showred() {
  background(255, 0, 0); // Red background
  fill(255);
  text(textContent, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
  // translate(width / 2, height / 2);
  voice.play();
}
function playv(m) {
  voice[m].play();
}
