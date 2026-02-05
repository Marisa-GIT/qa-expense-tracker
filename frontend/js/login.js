document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");

  function validateForm() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const isValidEmail = email.includes("@");
    const isValidPassword = password.length >= 6;

    loginBtn.disabled = !(isValidEmail && isValidPassword);
  }

  emailInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);
});

  