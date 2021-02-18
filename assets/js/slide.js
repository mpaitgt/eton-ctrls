

function slideIn() {
  let imageArray = Array.from(document.querySelectorAll('.image-wrap'));
  // imageArray.forEach(function(value, index, obj) {
  //   if (value.getComputedStyle(value).style.visibility !== 'hidden') {
  //     console.log(value);
  //     // value.classList.add('slidefromleft');
  //   }
  // })
  console.log(window.isHidden(imageArray[0]))
};

function isHidden(el) {
  return (el.offsetParent === null);
};