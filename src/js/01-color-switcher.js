function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerId;

btnStart.addEventListener('click', onClick);

function changeColor() {
    let randomCoolor = getRandomHexColor();
    body.style.backgroundColor = randomCoolor;
}

function onClick(event) {
    changeColor();
  timerId = setInterval(changeColor, 1000);
  btnStart.disabled = true;
};

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
});