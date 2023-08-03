// setInterval(() => {
//     const timeHour = document.querySelector('#hour');
// const timeMinute = document.querySelector('#minute');
// const timeSecond = document.querySelector('#second');
// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// if(hours < 1) {
//     hours = "0" + hours;
// }
// if(minutes < 10) {
//     minutes = "0" + minutes;
// }
// if(seconds < 10) {
//     seconds = "0" + seconds;
// }

// timeHour.textContent = hours;
// timeMinute.textContent = minutes;
// timeSecond.textContent = seconds;
// })
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`July 20 ${currentYear + 1} 09:54:31`);
year.innerText = currentYear + 1;

function unpdateCounter() {
const currentTime = new Date();
const diff = nextYear - currentTime;
const daysLeft = Math.floor(diff / 100 / 60 / 60 / 24);
const hoursLeft = Math.floor(diff / 100 / 60 / 60) % 24;
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const secondsLeft = Math.floor(diff / 1000) % 60;

days.innerText = daysLeft;
hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
};
unpdateCounter();
setInterval(unpdateCounter, 1000);