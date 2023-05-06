const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

inputRef.addEventListener("blur", validationFocus);

// function onInputChange(event) {
//   inputRef.value.length === inputRef(data - length);
//   inputRef.classList.add("#validation-input.valid");
//   if (event.value.length !== inputRef(data - length)) {
//     inputRef.classList.add("#validation-input.invalid");
//   }
// }

function validationFocus(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
