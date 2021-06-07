'use strict';


let divElement =document.getElementById('images');
let leftImageElement = document.getElementById('left-image');
let midImageElement = document.getElementById('mid-image');
let rightImageElement = document.getElementById('right-image');

let leftImageIndex;
let midImageIndex;
let rightImageIndex;


function BusMall (name, source) {
  this.name = name;
  this.source = source;
  this.votes =0;


  BusMall.allImages.push(this);

}

BusMall.allImages = [];

new BusMall('bag','img/bag.jpg');
new BusMall('banana','img/banana.jpg');
new BusMall('bathroom','img/bathroom.jpg');
new BusMall('boots','img/boots.jpg');
new BusMall('breakfast','img/breakfast.jpg');
new BusMall('bubblegum','img/bubblegum.jpg');
new BusMall('chair','img/chair.jpg');
new BusMall('dog-duck','img/dog-duck.jpg');
new BusMall('dragon','img/dragon.jpg');
new BusMall('pen','img/pen.jpg');
new BusMall('pet-sweep','img/pet-sweep.jpg');
new BusMall('scissors','img/scissors.jpg');
new BusMall('shark','img/shark.jpg');
new BusMall('sweep','img/sweep.png');
new BusMall('tauntaun','img/tauntaun.jpg');
new BusMall('unicorn','img/unicorn.jpg');
new BusMall('usb','img/usb.gif');
new BusMall('water-can','img/water-can.jpg');
new BusMall('wine-glass','img/wine-glass.jpg');

console.log(BusMall.allImages);



function calcRandomIndex() {
  let randomIndex1 = Math.floor(Math.random() * BusMall.allImages.length);
  return randomIndex1;

}
calcRandomIndex();
console.log(calcRandomIndex());

function renderThreeImages() {
  let leftImageIndex = calcRandomIndex();
  let midImageIndex = calcRandomIndex();
  let rightImageIndex = calcRandomIndex();

  while (leftImageIndex===midImageIndex || midImageIndex===rightImageIndex || leftImageIndex===rightImageIndex) {
    leftImageIndex = calcRandomIndex();
    rightImageIndex = calcRandomIndex();
    midImageIndex = calcRandomIndex();
  }

}
renderThreeImages();
console.log(renderThreeImages());
