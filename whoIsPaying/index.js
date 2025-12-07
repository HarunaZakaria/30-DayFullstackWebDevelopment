const names = ['Napari', 'Dauda', 'Hamis', 'Soalihu', 'Haruna'];

function whoIsPaying(name) {
  let num = Math.random();
  num = Math.floor(num * name.length);
  return `${name[num]} is going to buy lunch today!`;
}

console.log(whoIsPaying(names));
