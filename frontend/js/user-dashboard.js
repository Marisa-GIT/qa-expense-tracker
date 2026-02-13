const logoutBtn = document.querySelectorAll(".logout-btn");

logoutBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "../index.html";
  });
});
