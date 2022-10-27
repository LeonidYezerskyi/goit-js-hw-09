import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');

btnStart.setAttribute('disabled', true);
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

// function changeTime(flatpickr) {
//   let date = new Flatpickr;
//   const seconds = date.getSeconds();
//   const transformedSeconds = seconds.toString().padStart(2, "0");

// }


function changeTime() {
  const currentDate = new Date();
  const difference = flp.selectedDates[0] - currentDate;
  convertMs(difference);
      console.log(convertMs(difference));
  
}

function btnOnClick(event) {
    changeTime();
  timerId = setInterval(changeTime, 1000);
  btnStart.disabled = true;
  input.disabled = true;


};