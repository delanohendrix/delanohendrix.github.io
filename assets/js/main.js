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

const intro = document.getElementById("intro");
const introAddition = document.querySelector(".intro-addition");

intro.addEventListener("animationend", () => {
  intro.addEventListener("animationend", () => {
    introAddition.style.opacity = "1";
    introAddition.classList.add("update");
  });
});
