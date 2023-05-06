// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// function createBoxes(amount) {
//   const boxEl = document.getElementById("#boxes"); // отримуємо доступ до елементу з id "container"
//   console.log(boxEl);
//   for (let i = 1; i <= num; i++) {
//     const div = document.createElement("div"); // створюємо новий елемент div
//     // div.textContent = `Div${i}`; // встановлюємо текст для елементу div
//     boxEl.appendChild(div); // додаємо елемент div до елементу з id "container"
//   }
//   console.log;

//   function settingColor() {
//     document.div.style.color = getRandomHexColor();
//   }
// }
const refs = {
  amountEl: document.querySelector("#controls input"),
  createEl: document.querySelector("button[data-create]"),
  destroyEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  for (var i = 0; i < amount; i++) {
    var elem = document.createElement("div");

    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + "px";
    elem.style.backgroundColor = getRandomHexColor();

    refs.boxesEl.append(elem);
  }
}

refs.createEl.addEventListener("click", function () {
  var amount = refs.amountEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyEl.addEventListener("click", function () {
  refs.boxesEl.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
