const textInput = document.getElementById("validation-input");
const dataLength = document.querySelector('input[data-length="6"]');

textInput.addEventListener("blur", () => {
  if (
    textInput.value.length < dataLength.dataset.length ||
    textInput.value.length > dataLength.dataset.length
  ) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
});
