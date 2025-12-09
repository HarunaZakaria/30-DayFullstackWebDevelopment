const Img1 = document.querySelector('.img1');
const Img2 = document.querySelector('.img2');
const H1 = document.querySelector('h1');

console.log(H1);
// Player one
let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

//Player two
let randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

if (randomNumber1 === 1) {
  Img1.src = 'images/dice1.png';
} else if (randomNumber1 === 2) {
  Img1.src = 'images/dice2.png';
} else if (randomNumber1 === 3) {
  Img1.src = 'images/dice3.png';
} else if (randomNumber1 === 4) {
  Img1.src = 'images/dice4.png';
} else if (randomNumber1 === 5) {
  Img1.src = 'images/dice5.png';
} else {
  Img1.src = 'images/dice6.png';
}

if (randomNumber2 === 1) {
  Img2.src = 'images/dice1.png';
} else if (randomNumber2 === 2) {
  Img2.src = 'images/dice2.png';
} else if (randomNumber2 === 3) {
  Img2.src = 'images/dice3.png';
} else if (randomNumber2 === 4) {
  Img2.src = 'images/dice4.png';
} else if (randomNumber2 === 5) {
  Img2.src = 'images/dice5.png';
} else {
  Img2.src = 'images/dice6.png';
}

if (randomNumber1 > randomNumber2) {
  H1.innerHTML = 'Player 1 wins!';
} else if (randomNumber1 < randomNumber2) {
  H1.innerHTML = 'Player 2 wins!';
} else {
  H1.innerHTML = 'Draw!';
}
