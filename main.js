const image1 = document.getElementsByClassName('parllaximg1');
const image2 = document.getElementsByClassName('parllaximg2');
const image3 = document.getElementsByClassName('parllaximg3');
const image4 = document.getElementsByClassName('parllaximg4');


new simpleParallax(image1, {
  orientation: 'left',
  delay: .6
});

new simpleParallax(image2, {
  orientation: 'right',
  delay: .6,
});

new simpleParallax(image3, {
  orientation: 'up',
  delay: .8,
});

new simpleParallax(image4, {
  orientation: 'down',
  delay: .6
});