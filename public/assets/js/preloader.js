// Get the preloader element
var loader = document.getElementById("preloader");

// Hide the preloader after the page finishes loading
window.addEventListener("load", function() {
  loader.style.display = "none";
});

// Show the preloader when the page is loading
window.addEventListener("beforeunload", function() {
  loader.style.display = "block";
});

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.visibility = "visible";
});
