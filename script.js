const button = document.getElementById("changeColor");
const slider = document.getElementById("colorSlider");

function setBackground(hue) {
  document.body.style.backgroundColor =
    "hsl(" + hue + ", 80%, 80%)";
}

function randomBackground() {
  const hue = Math.floor(Math.random() * 360);
  setBackground(hue);
}

// Button changes the background.
button.addEventListener("click", randomBackground);

// Slider changes the background.
slider.addEventListener("input", function () {
  setBackground(slider.value);
});

// Mouse movement changes the background.
let lastChange = 0;

document.addEventListener("mousemove", function (event) {
  if (event.target.closest("button, input")) {
    return;
  }

  const now = Date.now();

  if (now - lastChange >= 300) {
    randomBackground();
    lastChange = now;
  }
});