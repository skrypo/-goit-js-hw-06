const inputField = document.querySelector(".input");
const btnC = document.querySelector(".btnCreate");
const btnD = document.querySelector(".btnDestroy");
const boxCollection = document.getElementById("boxes");
let boxSize = 30;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.width = boxSize + "px";
    divBox.style.height = boxSize + "px";

    boxCollection.append(divBox);
    boxSize += 10;
  }
}

btnC.addEventListener("click", (event) => {
  const amount = inputField.value;
  createBoxes(amount);
});

btnD.addEventListener("click", (event) => {
  boxCollection.innerHTML = "";
});
