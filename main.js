let homeNum = document.getElementById('home-num');
let guestNum = document.getElementById('guest-num');
let homeScore = 0;
let guestScore = 0;

function homeOnePoint() {
  homeScore += 1;
  homeNum.textContent = homeScore;
}

function homeTwoPoint() {
  homeScore += 2;
  homeNum.textContent = homeScore;
}

function homeThreePoint() {
  homeScore += 3;
  homeNum.textContent = homeScore;
}

function guestOnePoint() {
  guestScore += 1;
  guestNum.textContent = guestScore;
}

function guestTwoPoint() {
  guestScore += 2;
  guestNum.textContent = guestScore;
}

function guestThreePoint() {
  guestScore += 3;
  guestNum.textContent = guestScore;
}

function resetAll() {
  homeNum.textContent = 0;
  guestNum.textContent = 0;
  homeScore = 0;
  guestScore = 0;
}
