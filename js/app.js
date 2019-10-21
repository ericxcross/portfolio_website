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
})

window.onload = function(){
  const fader = document.querySelector(".fade-out")
  if (fader !== null){
    fader.classList.remove("fade-out");
  }
}
