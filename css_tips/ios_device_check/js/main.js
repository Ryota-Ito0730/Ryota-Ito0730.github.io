'use strict';
const text = document.getElementById('text');

const width_cheker = () => {
  let width = window.outerWidth;
  text.innerHTML = 'width' + width + 'px';
}

width_cheker();

window.addEventListener('resize', () => {
  width_cheker();
});