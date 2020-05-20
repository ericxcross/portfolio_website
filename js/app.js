var slideIndex = 1;
var prevScroll = window.pageYOffset;

document.addEventListener('DOMContentLoaded', () => {

  const headerText = document.querySelector('#info');

  let opacity = 1
  window.onscroll = function() {
    var currentScroll = window.pageYOffset;
    opacity = (currentScroll*0.5)

    if (opacity <= 0) {
      headerText.style.opacity = '1';
      headerText.style.visibility = 'visible'
    } else if (opacity > 0 && opacity <= 100){
      headerText.style.opacity = 1 - (opacity/100);
      headerText.style.visibility = 'visible'
    } else {
      headerText.style.opacity = '0';
      headerText.style.visibility = 'hidden';
    }

    if (prevScroll > currentScroll) {
      document.getElementById("navbar").style.top = "0"
    } else if (currentScroll > 480) {
      document.getElementById("navbar").style.top = "-80px"
    }

    prevScroll = currentScroll;
  }

  runHamburger();

})

function runHamburger() {
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('.navbar-links'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
};

function runScrollHider(currentScroll) {



}
