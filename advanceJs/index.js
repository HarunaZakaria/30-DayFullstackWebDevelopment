const para = document.querySelector('.para');
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const yourName = document.querySelector('#yourName').value;
  const partnerName = document.querySelector('#partnetName').value;

  let n = Math.random();

  n = Math.floor(n * 100) + 1;
  const message = `${yourName} , Your Love with ${partnerName} is ${n}%`;
  para.append(message);

});
