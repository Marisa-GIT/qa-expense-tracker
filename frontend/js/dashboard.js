document.addEventListener("DOMContentLoaded", function () {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (isLoggedIn !== "true") {
    window.location.replace("../index.html");
    return;
  }

  protectByRole(role);
  setupLogout();
});

function protectByRole(role) {
  const currentPath = window.location.pathname;

  // Si está en admin-dashboard pero no es admin
  if (currentPath.includes("admin-dashboard") && role !== "admin") {
    window.location.replace("../index.html");
  }

  // Si está en user-dashboard pero no es user
  if (currentPath.includes("user-dashboard") && role !== "user") {
    window.location.replace("../index.html");
  }
}
function setupLogout() {
  const logoutBtns = document.querySelectorAll(".logout-btn");

  logoutBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      localStorage.clear();
      window.location.replace("../index.html");
    });
  });
}
window.history.pushState(null, null, window.location.href);

window.addEventListener("popstate", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.replace("../index.html");
  }
});

