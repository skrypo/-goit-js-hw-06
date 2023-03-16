// Напиши скрипт который, при наборе текста в инпуте input#name
//     - input(событие input), подставляет его текущее значение в span#name - output.Е
//     сли инпут пустой,
//     в спане должна отображаться строка "Anonymous".

const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
});
