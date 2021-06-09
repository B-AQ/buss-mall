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
let pictureName=[];

function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.timeShown = 0;
  this.votes = 0;

  BusMall.allImages.push(this);
  pictureName.push(this.name);

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

console.log(pictureName);
function randomIndex() {
  let randomIndex = Math.floor(Math.random() * BusMall.allImages.length);
  return randomIndex;
}
let savedStorage=[];
function savedStorage() {
  let arraySring= JSON.stringify(BusMall.allImages);
  localStorage,setItem(votes,arraySring)
  
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

// Mychart


let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: pictureName,
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
