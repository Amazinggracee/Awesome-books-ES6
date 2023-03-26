import { DateTime } from './luxon.js';

const timeAndDate = document.querySelector('#time-and-date');

const dateAndTime = () => {
  setInterval(() => {
    const date = DateTime.now();
    timeAndDate.innerHTML = date;
  }, 0);
};
export default dateAndTime;
