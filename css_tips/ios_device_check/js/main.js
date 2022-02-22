'use strict';
const text = document.getElementById('text');

const innerHight = window.innerHeight;
const outerHight = window.outerHeight;
console.log(innerHight);
console.log(outerHight);

const width_cheker = () => {
  let width = window.outerWidth;
  text.innerHTML = 'width' + width + 'px';
}

width_cheker();

window.addEventListener('resize', () => {
  width_cheker();
});