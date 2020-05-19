var slideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
  const headerText = document.querySelector('#info');
  let opacity = 1
  if (headerText !== null){
    window.onscroll = function() {

      opacity = (window.pageYOffset*0.5)

      if (opacity <= 0) {
        headerText.style.opacity = '1';
        headerText.style.visibility = 'visible'
      } else if (opacity > 0 && opacity <= 100){
        headerText.style.opacity = 1 - (opacity/100);
      } else {
        headerText.style.opacity = '0';
        headerText.style.visibility = 'hidden'
      }
    }

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
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

};
