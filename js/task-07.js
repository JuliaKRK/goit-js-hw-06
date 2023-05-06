const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
// console.log(inputRef);
// console.log(spanRef);

inputRef.addEventListener("input", onChangingTextSize);

function onChangingTextSize(event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
}
