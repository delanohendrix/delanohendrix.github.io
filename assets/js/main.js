function showNav() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("show");
  document.body.style.overflowY = "hidden";
}

function hideNav() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("show");
  document.body.style.overflowY = "visible";
}
