/* reference what you need */
var doc = document;
console.log(doc);
var toggleButton = document.querySelector(".toggle");
var links = document.querySelector(".links");

/* desired behavior */
function toggle() {
  links.classList.toggle("active");
  alert("Hi!");
}

/* wire it up */
toggleButton.addEventListener("click", toggle);

