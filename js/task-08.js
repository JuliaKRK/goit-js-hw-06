const formRef = document.querySelector(".login-form");
// console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  } else {
    const objRef = { email: email.value, password: password.value };
    console.log(objRef);
    event.currentTarget.reset();
  }
}
