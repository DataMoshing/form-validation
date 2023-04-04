const form = document.querySelector("form");
const email = document.getElementById("mail");
const zip = document.getElementById("zip-code");
const error = email.nextElementSibling;
const zipError = zip.nextElementSibling;

console.log(email)

const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const zipCode = /^(\d{5})?$/;

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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = email.value.length !== 0 && emailRegExp.test(email.value);
    const zipValid = zip.value.length !== 0 && zipCode.test(zip.value)
    if (!isValid) {
        email.className = "invalid";
        error.textContent = "Please enter a valid email.";
        error.className = "error active";
    } else if (!zipValid) {
        zip.className = "invalid";
        zipError.textContent = "Please enter a valid zip code (5 digits).";
        zipError.className = "error active";
    } else {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
});


