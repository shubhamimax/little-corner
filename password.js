const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");

passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value === "181110") {
        window.location.href = "letter.html";
    } else {
        passwordError.textContent = "Incorrect password. Try again.";
        passwordInput.value = "";
        passwordInput.focus();
    }
});