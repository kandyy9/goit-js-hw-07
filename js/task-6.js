function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  if (amount > 0 && amount <= 100) {
    let size = 20;
    let box;
    boxes.innerHTML = ""
    for (let i = 0; i < amount; i++) {
      size += 10;
      box = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height:${size}px;"></div>`;
      boxes.innerHTML += box;
    }
    return box;
  }
  return;
};

function destroyBoxes(){
  boxes.innerHTML = ""
};
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
})
destroyBtn.addEventListener("click", destroyBoxes)