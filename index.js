const signUpForm = document.forms["sign-up-form"];
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const ageInput = signUpForm["Age"];
const firstNameValue = document.body.querySelector("#first-name-value");
const alertFnMsg = document.querySelector("#alert-fn");
const alertLnMsg = document.querySelector("#alert-ln");
const alertAgeMsg = document.querySelector("#alert-age");
const fullNameValue = document.querySelector("#fullname-value");
const ageValue = document.querySelector("#age-value");
const fetchSection = document.querySelector(".fetch-section");
const btnNewData = document.querySelector("#btn-reset");
const helloMsg = document.querySelector("#hello-msg");
const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;

function formValidation() {
  if (firstNameInput.value.trim() === "") {
    alertFnMsg.classList.remove("text-success");
    alertFnMsg.classList.add("text-danger");
    alertFnMsg.innerHTML = "First name cannot be empty";
  } else if (symbols.test(firstNameInput.value)) {
    alertFnMsg.classList.remove("text-success");
    alertFnMsg.classList.add("text-danger");
    alertFnMsg.innerHTML = "First name cannot contain numbers";
  } else {
    alertFnMsg.classList.remove("text-danger");
    alertFnMsg.classList.add("text-success");
    alertFnMsg.innerHTML = "Success!";
  }
  if (lastNameInput.value.trim() === "") {
    alertLnMsg.classList.remove("text-success");
    alertLnMsg.classList.add("text-danger");
    alertLnMsg.innerHTML = "Last name cannot be empty";
  } else if (symbols.test(lastNameInput.value)) {
    alertLnMsg.classList.remove("text-success");
    alertLnMsg.classList.add("text-danger");
    alertLnMsg.innerHTML = "Last name cannot contain numbers";
  } else {
    alertLnMsg.classList.remove("text-danger");
    alertLnMsg.classList.add("text-success");
    alertLnMsg.innerHTML = "Success!";
  }
  if (ageInput.value.trim() < 18) {
    alertAgeMsg.classList.remove("text-success");
    alertAgeMsg.classList.add("text-danger");
    alertAgeMsg.innerHTML = "At least 18 years old";
  } else {
    alertAgeMsg.classList.remove("text-danger");
    alertAgeMsg.classList.add("text-success");
    alertAgeMsg.innerHTML = "Success!";
  }
}

function fetchIdentity() {
  if (
    alertFnMsg.innerHTML === "Success!" &&
    alertLnMsg.innerHTML === "Success!" &&
    alertAgeMsg.innerHTML === "Success!"
  ) {
    signUpForm.classList.add("d-none");
    fetchSection.classList.remove("d-none");
    fullNameValue.innerHTML = firstNameInput.value + " " + lastNameInput.value;
    helloMsg.innerHTML = `Hai, ${firstNameInput.value}, Congratulations, we have received your data`;
    ageValue.innerHTML = ageInput.value;
  } else {
    fetchSection.classList.add("d-none");
    fullNameValue.innerHTML = "undefined";
    ageValue.innerHTML = "undefined";
  }
}

function resetForm() {
  btnNewData.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Thank you for signing up!");
    location.reload();
  });
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  formValidation();
  fetchIdentity();
  resetForm();
};
