/* reference what you need */
var toggleButton = document.querySelector(".toggle");
var links = document.querySelector(".links");

/* desired behavior */
function toggle() {
  links.classList.toggle("active");
}

/* wire it up */
toggleButton.addEventListener("click", toggle);