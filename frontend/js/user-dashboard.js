document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (isLoggedIn !== "true" || role !== "user") {
    window.location.replace("../index.html");
  }

  const logoutBtn = document.querySelectorAll(".logout-btn");

  logoutBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
      window.location.replace("../index.html");
    });
  });
});
