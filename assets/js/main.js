function showNav() {
  var nav = document.getElementById("nav");
  nav.style.transform = "translate(0%)";
  document.body.style.overflowY = "hidden";
}

function hideNav() {
  var nav = document.getElementById("nav");
  nav.style.transform = "translate(-150%)";
  document.body.style.overflowY = "visible";
}
