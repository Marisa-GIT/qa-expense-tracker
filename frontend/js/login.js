const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "user@test.com" && password === "123456") {
    localStorage.setItem("role", "user");
    window.location.href = "frontend/user-dashboard.html";
  }

  // Admin
  else if (email === "admin@test.com" && password === "123456") {
    localStorage.setItem("role", "admin");
    window.location.href = "frontend/admin-dashboard.html";
  }

  else {
    alert("Invalid credentials");
  }
});

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
