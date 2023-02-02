'use strict';

// creating elements
const rangeEl = document.getElementById('price-slider');
const checkEl = document.getElementById('billing');
const deskEl = document.getElementById('amount');
const mobileEl = document.getElementById('amount-mob');
const pageEl = document.getElementById('views');
const monthEl = document.getElementById('monthly');
const yearEl = document.getElementById('yearly');

// global variables

// creating arrays

let pageViews = ['10k', '50k', '100k', '500k', '1M'];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

// functions

function updateValue() {
  if (isYearly) {
    deskEl.innerHTML = perMonth[rangeEl.value] * 0.75;
    mobileEl.innerHTML = perMonth[rangeEl.value] * 0.75;
  } else {
    deskEl.innerHTML = perMonth[rangeEl.value];
    mobileEl.innerHTML = perMonth[rangeEl.value];
  }
}

// addEventlistener
rangeEl.addEventListener('input', function () {
  pageEl.innerText = pageViews[rangeEl.value];
  updateValue();

  let value = this.value * 25;

  this.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
});

checkEl.addEventListener('change', function () {
  if (isYearly == false) {
    isYearly = true;
    document.getElementById('yearly').classList.add('selected');
  } else {
    isYearly = false;
    console.log(isYearly);
    document.getElementById('yearly').classList.remove('selected');
  }
  updateValue();
});
