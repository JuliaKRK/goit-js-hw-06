function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
// console.log(buttonRef);
// console.log(spanRef);

buttonRef.addEventListener("click", onSettingColor);
// spanRef.addEventListener("click", blablaColor);

function onSettingColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}
