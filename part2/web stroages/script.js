// let body = document.body;

// function toggleTheme() {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
// }

// if (localStorage.getItem("theme")) {
//   body.classList.add(localStorage.getItem("theme"));
// } else {
//   toggleTheme();
// }

// let toggleBtn = document.querySelector("#toggleBtn");

// toggleBtn.addEventListener("click", () => {
//   if (body.classList.contains("dark")) {
//     body.classList.remove("dark");
//     body.classList.add("light");
//     localStorage.setItem("theme", "light");
//   } else {
//     body.classList.remove("light");
//     body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
// });


const body = document.body;
const toggleBtn = document.querySelector("#toggleBtn");

// Function to apply theme
function setTheme(theme, save = true) {
  body.classList.remove("dark", "light");
  body.classList.add(theme);

  if (save) {
    localStorage.setItem("theme", theme);
  }
}

// Get saved theme
const savedTheme = localStorage.getItem("theme");

// Apply saved theme or system theme
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  setTheme(systemTheme, false); // Don't save system preference
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});
