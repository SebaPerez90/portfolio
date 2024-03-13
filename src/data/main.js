const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = 'rgb(40 40 190 / ratio)';
let decreasingColor = 'rgb(190 40 40 / ratio)';

// Set things up
window.addEventListener(
  'load',
  (event) => {
    boxElement = document.querySelector('#box');

    createObserver();
  },
  false
);
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        'ratio',
        entry.intersectionRatio
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        'ratio',
        entry.intersectionRatio
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
