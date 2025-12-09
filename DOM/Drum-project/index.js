const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  });
});
