const form = document.querySelector(".login-form");
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  let info = {};
  info.email = email.value;
  info.password = password.value;
  console.log(info);
  event.currentTarget.reset();
}
form.addEventListener("submit", handleSubmit);
