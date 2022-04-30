function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanColor: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  refs.spanColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = refs.spanColor.textContent;
}
