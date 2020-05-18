function fadingNavbar() {
  let
    opacity = 0,
    nav = document.querySelector('.menu-content'),
    bg = `rgb(41, 171, 226, ${opacity})`;

  opacity = (window.pageYOffset / 500);
  bg = `rgb(41, 171, 226, ${opacity})`;
  nav.style.background = bg;
  nav.style.zIndex = 999;

  if (opacity >= 1) {
    nav.style.boxShadow = '0px 0px 12px 0px rgba(0, 0, 0, 0.75)';
  } else if (opacity <= 1) {
    nav.style.boxShadow = 'none';
  }
}