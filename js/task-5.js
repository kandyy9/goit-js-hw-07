function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const changeBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

widget.querySelectorAll("*").forEach(element => {
  element.style.fontFamily = "Montserrat";
})

const color = changeBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  colorSpan.textContent = newColor; 
  document.body.style.backgroundColor = newColor;
});
