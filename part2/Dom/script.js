// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (e) {
//   if (e.key === " ") {
//     h1.textContent = "SPACE";
//   } else {
//     h1.textContent = e.key;
//   }
// });

// let inp = document.querySelector(".input");
// let maininp = document.querySelector("input");
// let h1 = document.querySelector("h1");

// inp.addEventListener("click", () => {
//   maininp.click();
// });

// maininp.addEventListener("change", (e) => {
//   let file = e?.target?.files[0];
//   if (file) {
//     h1.textContent = file?.name;
//   } else {
//     h1.textContent = "file name not found";
//   }
// });

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let data = document.querySelector(".data");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(inputs);
  let cards = document.createElement("div");
  cards.classList.add("cards");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h2 = document.createElement("h2");
  h2.textContent = inputs[1].value;
  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;
  let p = document.createElement("p");
  p.textContent = inputs[3].value;

  profile.appendChild(img);
  cards.appendChild(profile);
  cards.appendChild(h2);
  cards.appendChild(h5);
  cards.appendChild(p);

  console.log(cards);

  data.appendChild(cards);

  inputs.forEach((inp) => {
    if (inp.type === "text") {
      inp.value = "";
    }
  });
});
