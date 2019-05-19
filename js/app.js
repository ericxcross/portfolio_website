document.addEventListener('DOMContentLoaded', () => {
  const readMoreButton = document.querySelector('#readmore');
  const readless = document.querySelector('#readless');
  const aboutme = document.querySelector('#aboutme');

  aboutme.style.display = "none";


  readMoreButton.addEventListener("click", (evt)=>{

    if (aboutme.style.display === "none") {
      aboutme.style.display = "block";
      readMoreButton.style.display = "none";

      readless.addEventListener("click", (evt)=>{
        aboutme.style.display = "none";
        readMoreButton.style.display = "block";
      })
    }
  })

})
