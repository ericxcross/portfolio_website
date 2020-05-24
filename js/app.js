var slideIndex = 1;
var prevScroll = window.pageYOffset;

document.addEventListener('DOMContentLoaded', () => {

  const headerText = document.querySelector('#info');
  const slider = document.querySelector('#slider');

  let opacity = 1
  window.onscroll = function() {
    var currentScroll = window.pageYOffset;
    opacity = (currentScroll)
    if (headerText!=null){
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
    }

    if (prevScroll > currentScroll) {
      document.getElementById("navbar").style.top = "0"
    } else if (currentScroll > 120) {
      document.getElementById("navbar").style.top = "-80px"
    }

    prevScroll = currentScroll;
  }

  runHamburger();
  runSlider(slider);

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


function runSlider(slider){
  if(slider) {
  	let sliderSlides = slider.querySelectorAll('.slider-item');
  	let sliderSwitcher = slider.querySelector('.switch');
      const sliderCount = sliderSlides.length;
      let imageSlideShow;
  	let i = 0;
  	while(sliderSwitcher.querySelectorAll('i').length != sliderCount) {
  		let i = document.createElement('i');
          sliderSwitcher.appendChild(i);
  	}
  	sliderSwitcher = sliderSwitcher.querySelectorAll('i');
      const forwardSliderImage = i => {
          if(i==0) {
            sliderSlides[sliderCount - 1].classList.remove('show');
  			    sliderSlides[sliderCount - 1].classList.add('close');
  			    sliderSwitcher[sliderCount - 1].classList.remove('active');
          } else {
            sliderSlides[i-1].classList.remove('show');
  			    sliderSlides[i-1].classList.add('close');
  			    sliderSwitcher[i-1].classList.remove('active');
          }
          if(i==(sliderCount - 1)) {
              sliderSlides[0].classList.remove('close');
          } else {
              sliderSlides[i+1].classList.remove('close');
  		}
  		sliderSwitcher[i].classList.add('active');
          sliderSlides[i].classList.add('show');
      }

      const backwardSliderImage = i => {

          if(i==0) {
              sliderSlides[sliderCount - 1].classList.remove('show');
  			sliderSlides[sliderCount - 1].classList.add('close');
  			sliderSwitcher[sliderCount - 1].classList.remove('active');
          } else {
              sliderSlides[i-1].classList.remove('show');
  			sliderSlides[i-1].classList.add('close');
  			sliderSwitcher[i-1].classList.remove('active');
          }
          if(i==(sliderCount - 1)) {
              sliderSlides[0].classList.remove('close');
          } else {
              sliderSlides[i+1].classList.remove('close');
  		}

          if(i < sliderCount-1) {
              sliderSlides[i + 1].classList.remove('show');
  			sliderSwitcher[i + 1].classList.remove('active');
          } else {
              sliderSlides[0].classList.remove('show');
  			sliderSwitcher[0].classList.remove('active');
          }
  		sliderSwitcher[i].classList.add('active');
          sliderSlides[i].classList.add('show');
      }

      function nextSliderImage() {
          i++;
          if(i == sliderCount) {
              i = 0;
          }
          forwardSliderImage(i);
          clearInterval(imageSlideShow);
      }

      function previousSliderImage() {
          i--;
          if(i == -1) {
              i = sliderCount - 1;
          }
          backwardSliderImage(i);
          clearInterval(imageSlideShow);
      }

      const prevBtn = slider.querySelector('.prev');
      const nextBtn = slider.querySelector('.next');

      nextBtn.addEventListener('click', nextSliderImage);
      prevBtn.addEventListener('click', previousSliderImage)

      forwardSliderImage(i);
  }
}
