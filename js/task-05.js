const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

// console.log(inputRef);
// console.log(outputRef);

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputRef.textContent = "Anonymous";
  }
}
