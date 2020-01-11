var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let splitList = document.getElementById('splits');

let printingMinAndSec = "";

function printTime() {
  printingMinAndSec = setInterval(() => {
    printMilliseconds();
    printSeconds();
    printMinutes();
  }, 1);
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minutesString = chronometer.twoDigitsNumber(minutes);
  let minutesArr = minutesString.split("");
  minDec.innerHTML = minutesArr[0];
  minUni.innerHTML = minutesArr[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsString = chronometer.twoDigitsNumber(seconds);
  let secondsArr = secondsString.split("");
  secDec.innerHTML = secondsArr[0];
  secUni.innerHTML = secondsArr[1];
}

function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds();
  let millisecondsString = chronometer.twoDigitsNumber(milliseconds);
  let millisecondsArr = millisecondsString.split("");
  milDec.innerHTML = millisecondsArr[0];
  milUni.innerHTML = millisecondsArr[1];
}

function printSplit() {
  let newLi = document.createElement('li')
  let milliseconds = chronometer.getMilliseconds();
  let seconds = chronometer.getSeconds();
  let minutes = chronometer.getMinutes();
  let millisecondsString = chronometer.twoDigitsNumber(milliseconds);
  let secondsString = chronometer.twoDigitsNumber(seconds);
  let minutesString = chronometer.twoDigitsNumber(minutes);
  let olSplit = `<p>${minutesString}:${secondsString}:${millisecondsString}</p>`;
  newLi.innerHTML = olSplit;
  splitList.appendChild(newLi);
}

function deleteSplits() {
  splitList.innerHTML = '';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === `btn start`) {
    chronometer.startClick();
    btnLeft.className = `btn stop`;
    btnLeft.textContent = `STOP`;
    btnRight.className === `btn split`;
    btnRight.textContent = `SPLIT`;
    printTime();
  } else if (btnLeft.className === `btn stop`) {
    chronometer.stopClick();
    btnLeft.className = `btn start`;
    btnLeft.textContent = `START`;
    btnRight.className === `btn reset`;
    btnRight.textContent = `RESET`;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnLeft.className === `btn start`) {
    chronometer.resetClick();
    deleteSplits();
  } else if (btnLeft.className === `btn stop`) {
    printSplit();
  }
});
