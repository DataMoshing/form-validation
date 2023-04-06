const form = document.querySelector("form");
const email = document.getElementById("mail");
const zip = document.getElementById("zip-code");
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const error = email.nextElementSibling;
const zipError = zip.nextElementSibling;
const passwordError = password.nextElementSibling;
const confirmPasswordError = confirmPassword.nextElementSibling;

const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const zipCode = /^(\d{5})?$/;

const passwordMinimum = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

zip.addEventListener("input", () => {
    const isValid = zip.value.length === 0 || zipCode.test(zip.value)
    if (isValid) {
        zip.className = "valid"
        zipError.textContent = ""
        zipError.className = "error"
    } else {
        zip.className = "invalid"
    }
})

password.addEventListener("input", () => {
    const isValid = password.value.length === 0 || passwordMinimum.test(password.value)
    if (isValid) {
        password.className = "valid"
        passwordError.textContent = ""
        passwordError.className = "error"
    } else {
        password.className = "invalid"
    }
})

window.addEventListener("load", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    } else {
        email.className = "invalid";
    }
});

confirmPassword.addEventListener("input", () => {
    const isValid = confirmPassword.value.length !== 0 && confirmPassword.value === password.value && passwordMinimum.test(confirmPassword.value)
    if (isValid) {
        confirmPassword.className = "valid"
        confirmPasswordError.textContent = ""
        confirmPasswordError.className = "error"
    } else {
        confirmPassword.className = "invalid"
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = email.value.length !== 0 && emailRegExp.test(email.value);
    const zipValid = zip.value.length !== 0 && zipCode.test(zip.value)
    const passwordValid = password.value.length !== 0 && passwordMinimum.test(password.value)
    const confirmPasswordValid = confirmPassword.value.length !== 0 && confirmPassword.value === password.value && passwordMinimum.test(confirmPassword.value)
    if (!isValid) {
        email.className = "invalid";
        error.textContent = "Please enter a valid email.";
        error.className = "error active";
    } else if (!zipValid) {
        zip.className = "invalid";
        zipError.textContent = "Please enter a valid zip code (5 digits).";
        zipError.className = "error active";
    } else if (!passwordValid) {
        password.className = "invalid";
        passwordError.textContent = "- at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number";
        passwordError.className = "error active";
    } else if (!confirmPasswordValid) {
        confirmPassword.className = "invalid"
        confirmPasswordError.textContent = "Passwords do not match"
        confirmPasswordError.className = "error active"
    } else {
        alert("High five!")
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
});


