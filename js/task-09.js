const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const handleClick = () => {
  document.body.style.backgroundColor = randomColor();
  textColor.textContent = randomColor();
};

btn.addEventListener("click", handleClick);
