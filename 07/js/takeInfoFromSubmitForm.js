const form = document.querySelector(".js-register-form");

form.addEventListener("submit", handleSubmitWithFormData);

function handleFormSubmit(e) {
  e.preventDefault();
  const { name, email, password, subscription } = form.elements;

  const data = {
    [name.name]: name.value,
    [email.name]: email.value,
    [password.name]: password.value,
    subscriptionType: subscription.value,
  };
  console.log(data);
}

function handleSubmitWithFormData(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, name) => (data[name] = value));
  console.log(data);
}
