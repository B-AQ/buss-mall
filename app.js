'use strict';

let divImages = document.getElementById('busMall');
let leftImage = document.getElementById('leftImage');
let rightImage = document.getElementById('rightImage');
let centerImage = document.getElementById('centerImage');

let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

let userMaxAttempts = 25;
let counter = 0;

function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.timeShown = 0;
  this.votes = 0;

  BusMall.allImages.push(this);

}

BusMall.allImages = [];

new BusMall('bag', 'img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom', 'img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck', 'img/dog-duck.jpg');
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('usb', 'img/usb.gif');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');

function randomIndex() {
  let randomIndex = Math.floor(Math.random() * BusMall.allImages.length);
  return randomIndex;
}


function renderThreeImages() {

  leftImageIndex = randomIndex();
  centerImageIndex = randomIndex();
  rightImageIndex = randomIndex();

  while (leftImageIndex === centerImageIndex || leftImageIndex === rightImageIndex || centerImageIndex === rightImageIndex) {

    leftImageIndex = randomIndex();
    centerImageIndex = randomIndex();
  }

  leftImage.src = BusMall.allImages[leftImageIndex].source;
  BusMall.allImages[leftImageIndex].timeShown++;

  centerImage.src = BusMall.allImages[centerImageIndex].source;
  BusMall.allImages[centerImageIndex].timeShown++;

  rightImage.src = BusMall.allImages[rightImageIndex].source;
  BusMall.allImages[rightImageIndex].timeShown++;
}
renderThreeImages();

//add Event ;

divImages.addEventListener('click', userClick);

function userClick(event) {
  counter++;
  // console.log(event.target.id);

  if (counter <= userMaxAttempts) {

    if (event.target.id === 'leftImage') {
      BusMall.allImages[leftImageIndex].votes++;
    }

    else if (event.target.id === 'rightImage') {
      BusMall.allImages[rightImageIndex].votes++;
    }

    else if (event.target.id === 'centerImage') {
      BusMall.allImages[centerImageIndex].votes++;
    }

    else {
      alert('Please Click on one of the Images ');
      counter--;
    }
    renderThreeImages();

  } else {
    let button = document.getElementById('button');
    button.hidden = false;
    button.addEventListener('click', getList);
    divImages.removeEventListener('click', userClick);
  }

}

function getList() {
  let ul = document.getElementById('list-results');
  for (let i = 0; i < BusMall.allImages.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${BusMall.allImages[i].name} had 
    ${BusMall.allImages[i].votes} votes, and was seen ${BusMall.allImages[i].timeShown} times.`;
  }
  button.removeEventListener('click', getList);
}
