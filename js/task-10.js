function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls input"),
  boxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);
let size = 30;
function createBoxes(e) {
  const min = +refs.input.getAttribute("min");
  const max = +refs.input.getAttribute("max");

  const value = +refs.input.value;

  if (value >= min && value <= max) {
    const arr = [];
    for (let i = 0; i < value; i++) {
      const div = document.createElement("div");
      div.style.width = div.style.height = size + "px";
      size += 10;
      div.style.backgroundColor = getRandomHexColor();
      arr.push(div);
    }
    refs.boxes.append(...arr);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
  size = 30;
}
