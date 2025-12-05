function add(a, b) {
  return a + b;
}

let num = add(7, 19);
//console.log(num);  // output 7 + 19 = 26

function subtract(a, b) {
  return b - a;
}
num = subtract(45, 21);
//console.log(num); // output 24
const para = document.querySelector('.para');
function buyDrink(money) {
  let cost = Math.floor(money / 3);
  let balace = money % 3;
  return `I bought ${cost} drinks with Ghc${money} and the balance is Ghc${balace}`;
}

const text = buyDrink(35);
para.append(text);
