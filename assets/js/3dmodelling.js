// Accordion
const cardHeaders = document.querySelectorAll(".card-header");

cardHeaders.forEach((cardHeader) => {
  cardHeader.addEventListener("click", () => {
    if (cardHeader.classList.contains("active")) {
      cardHeader.classList.remove("active");
    } else {
      cardHeader.classList.add("active");
    }
  });
});

// Modal
const modal = document.getElementsByClassName("modal");
const button = document.getElementsByClassName("preview-button");
const span = document.getElementsByClassName("close");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    modal[i].style.display = "block";
  });
}

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", function () {
    modal[i].style.display = "none";
  });
}

for (let i = 0; i < button.length; i++) {
  modal[i].addEventListener("click", function () {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  });
}

// Model-Viewer Variants
const modelViewerVariants = document.querySelector("model-viewer");
const select = document.querySelector("#variant");

modelViewerVariants.addEventListener("load", () => {
  const names = modelViewerVariants.availableVariants;
  for (const name of names) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  }
});

// const option = document.createElement("option");
// option.value = "default";
// option.textContent = "Default";
// select.appendChild(option);

select.addEventListener("input", (Event) => {
  modelViewerVariants.variantName = Event.target.value === "default" ? null : Event.target.value;
});
