const para = document.querySelector('.para');
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  //event.preventDefault();
  const yourName = document.querySelector('#yourName').value;
  const partnerName = document.querySelector('#partnetName').value;

  let n = Math.random();

  n = Math.floor(n * 100) + 1;
  const Compatibility = [
    '❤️ Low Compatibility',
    '💞 Medium Compatibility',
    '💖 High Compatibility',
  ];
  //const message = `${yourName} , Your Love with ${partnerName} is ${n}%`;
  let message;
  if (n <= 50) {
    message = `${yourName} , Your Love with ${partnerName} is ${n}% ${Compatibility[0]}`;
  } else if (n > 50 && n <= 75) {
    message = `${yourName} , Your Love with ${partnerName} is ${n}% ${Compatibility[1]} `;
  } else {
    message = `${yourName} , Your Love with ${partnerName} is ${n}% ${Compatibility[2]}`;
  }
  para.append(message);
});
