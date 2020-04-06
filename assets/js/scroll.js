
const header = document.getElementById('header');
const sticky = header.pageYOffset;
console.log(sticky);

console.log(window);
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}