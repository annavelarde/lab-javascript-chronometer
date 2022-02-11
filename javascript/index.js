const chronometer = new Chronometer();
// chronometer.start();
// chronometer.stop();
// chronometer.reset();

// get the buttons:

// START & STOP
const btnLeftElement = document.getElementById('btnLeft');

// RESET & SPLIT
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.textContent = 'STOP';
}

// textContent:Sets or returns the textual content of a node and its descendants

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

//classList.	Returns the class name(s) of an element
//contains(class)	Returns true if an element has the class, otherwise false.

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // if(btnRightElement.classList.contains())
});
