const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

document.body.backgroundColor = "#000000";


const DEALEY = 1000;
let intervalTimerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(randomIntegerFromInterval(0, colors.length))

const btnStart = document.querySelector("[data-action='start']");
const btnStop = document.querySelector("[data-action='stop']");

btnStart.addEventListener('click', startColorSwitch);
btnStop.addEventListener("click", stopColorSwitch)

function startColorSwitch() {
    
  if (intervalTimerId) { return; }
    // console.log("startColorSwitch")
   intervalTimerId =  setInterval(setBodyBagColor, DEALEY);
}

function stopColorSwitch() {
    // console.log("stopColorSwitch");
    clearInterval(intervalTimerId);
    intervalTimerId = null;
}

function setBodyBagColor() {
   document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

