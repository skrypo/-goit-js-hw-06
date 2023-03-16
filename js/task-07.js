const fontInput = document.getElementById("font-size-control");
const dataText = document.getElementById("text");

fontInput.addEventListener("input", (event) => {
  dataText.style.fontSize = fontInput.value + "px";
});
