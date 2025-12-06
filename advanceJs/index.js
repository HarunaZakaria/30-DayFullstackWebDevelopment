const para = document.querySelector('.para');
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  //event.preventDefault();
  const yourName = document.querySelector('#yourName').value;
  const partnerName = document.querySelector('#partnetName').value;

  let loveScore = Math.random();

  loveScore = Math.floor(loveScore * 100) + 1;
  const Compatibility = [
    '❤️ Low Compatibility',
    '💞 Medium Compatibility',
    '💖 High Compatibility',
  ];
  //const message = `${yourName} , Your Love with ${partnerName} is ${n}%`;
  let message;
  if (loveScore <= 50) {
    message = `${yourName} , Your Love with ${partnerName} is ${loveScore}% ${Compatibility[0]}. Love has potential, but it needs nurturing. This connection may face challenges, yet with patience, communication, and effort, something beautiful can still grow.`;
  } else if (loveScore > 50 && loveScore <= 75) {
    message = `${yourName} , Your Love with ${partnerName} is ${loveScore}% ${Compatibility[1]}. There’s definitely a spark between you two! With consistency, honesty, and a little adventure, this relationship can blossom into something meaningful. `;
  } else {
    message = `${yourName} , Your Love with ${partnerName} is ${loveScore}% ${Compatibility[2]}. A powerful bond! Your hearts align with ease, and your energy complements each other beautifully. This is the kind of connection that can grow into a lasting love story.`;
  }
  para.append(message);
});
