const intro = document.getElementById("intro");
const introAddition = document.querySelector(".intro-addition");

intro.addEventListener("animationend", () => {
  intro.addEventListener("animationend", () => {
    introAddition.style.opacity = "1";
    introAddition.classList.add("update");
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-banner").style.transform = "translateY(0%)";
  } else {
    document.getElementById("nav-banner").style.transform = "translateY(-150%)";
  }
}
