var slideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
  const headerText = document.querySelector('#info');
  let opacity = 1
  if (headerText !== null){
    window.onscroll = function() {

      opacity = window.pageYOffset - 150

      if (opacity <= 0) {
        headerText.style.opacity = '1';
        headerText.style.display = 'block'
      } else if (opacity > 0 && opacity <= 100){
        headerText.style.opacity = 1 - (opacity/100);
      } else {
        headerText.style.opacity = '0';
      }
    }

  }

  showDivs(slideIndex);

})

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
