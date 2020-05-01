let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
  console.log('hello')
  let
    line1 = document.querySelector('.line1'),
    line2 = document.querySelector('.line2'),
    line3 = document.querySelector('.line3');

  line1.classList.toggle('topline-x');
  line2.classList.toggle('middleline-x');
  line3.classList.toggle('bottomline-x');
})