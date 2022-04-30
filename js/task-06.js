const inputValidation = document.querySelector("#validation-input");
const inputLength = inputValidation.dataset.length;

inputValidation.addEventListener("blur", onFocus);

function onFocus(e) {
  const textLength = e.target.value;
  if (textLength.length === +inputLength) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
}
