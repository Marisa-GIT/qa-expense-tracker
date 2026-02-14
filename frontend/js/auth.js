function login(user) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", user.role);
}

function logout() {
  localStorage.clear();
  window.location.replace("../index.html");
}

function protectRoute(expectedRole) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (isLoggedIn !== "true" || role !== expectedRole) {
    window.location.replace("../index.html");
  }
}
protectRoute("user");