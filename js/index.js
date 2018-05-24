const updateMainHeight = () => {
  var mainHeight = getComputedStyle(document.body).getPropertyValue('--main-height');
  var avaliableHeight = window.innerHeight - 196;
  document.documentElement.style.setProperty('--main-height', `${avaliableHeight}px`);
}

document.addEventListener("DOMContentLoaded", updateMainHeight());
window.onresize = updateMainHeight;
