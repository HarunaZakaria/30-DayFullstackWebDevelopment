const gamePattern = [];
const buttonColours = ['red', 'blue', 'green', 'yellow'];
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  const selectedButton = $('#' + gamePattern);
  selectedButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  switch (selectedButton) {
    case 'red':
      const red = new Audio('sounds/red.mp3');
      red.play();
      break;
    case 'blue':
      const blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;
    case 'yellow':
      const yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
    case 'green':
      const green = new Audio('sounds/green.mp3');
      green.play();
      break;
    default:
      const wrong = new Audio('sounds/wrong.mp3');
      wrong.play();
      break;
  }
}
nextSequence();
