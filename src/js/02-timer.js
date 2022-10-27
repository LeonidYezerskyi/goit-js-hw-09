import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');

timerEl.style.fontFamily = "Arial Black";
timerEl.style.fontSize = "15px";
timerEl.style.display = "flex";
timerEl.style.gap = "5px";
timerEl.style.marginTop = "20px";
timerEl.style.color = "green";

daysEl.style.color = "red";
hoursEl.style.color = "red";
minutesEl.style.color = "red";
secondsEl.style.color = "red";




btnStart.style.backgroundColor = "red";
btnStart.style.color = "white";
btnStart.style.borderColor = "black";

input.style.borderColor = "red";
input.style.backgroundColor = "black";
input.style.color = "white";

btnStart.disabled = true;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      const currentDate = new Date();
       
      if (selectedDates[0] < currentDate) {
        btnStart.disabled = true;
        return window.alert("Please choose a date in the future");
        } else {
          btnStart.disabled = false;
      }
  },
};

const flp = flatpickr(input, options);
console.log(flp);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
};

btnStart.addEventListener('click', btnOnClick);

function changeTime(difference) {
  const diff = convertMs(difference);
  secondsEl.textContent = diff.seconds.toString().padStart(2, "0");
  daysEl.textContent = diff.days.toString().padStart(2, "0");
  hoursEl.textContent = diff.hours.toString().padStart(2, "0");
  minutesEl.textContent = diff.minutes.toString().padStart(2, "0");
}

function btnOnClick(event) {
  changeTime(flp.selectedDates[0] - Date.now());
  const timerId = setInterval(() => {
    const currentDate = new Date();
    const difference = flp.selectedDates[0] - currentDate;
     if (difference <= 0) {
    clearInterval(timerId);
    return;
    };
    changeTime(difference)
  },
    1000);
  btnStart.disabled = true;
  input.disabled = true;
};