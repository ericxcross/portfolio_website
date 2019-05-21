document.addEventListener('DOMContentLoaded', () => {

  const readMoreButton = document.querySelector('#readmore');
  const aboutme = document.querySelector('#aboutme');
  aboutme.style.display = "none";

  readMoreButton.addEventListener("click", (evt)=>{
    if (aboutme.style.display === "none") {
      const readless = document.querySelector('#readless');
      aboutme.style.display = "block";
      readMoreButton.style.display = "none";
      readless.addEventListener("click", (evt)=>{
        aboutme.style.display = "none";
        readMoreButton.style.display = "block";
      })
    }
  })

  const scrollIcon = document.querySelector('#scroller');
  window.onscroll = function() {
  if (window.pageYOffset > 10) {
    scrollIcon.classList.remove("load")
  } else {
    scrollIcon.classList.add("load")
  }
}
  if (window.pageYOffset > 0){
    scrollIcon.style.display = "none";
  } else{
    scrollIcon.style.display = "block";
  };

})
