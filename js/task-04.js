let counterValue = 0;
const counter = document.getElementById("value");

const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

const handleClick1 = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

const handleClick2 = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

btnDec.addEventListener("click", handleClick1);

btnInc.addEventListener("click", handleClick2);
