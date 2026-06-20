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

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let data = document.querySelector(".data");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e)
//   console.log(inputs);
//   let cards = document.createElement("div");
//   cards.classList.add("cards");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute("src", inputs[0].value);

//   let h2 = document.createElement("h2");
//   h2.textContent = inputs[1].value;
//   let h5 = document.createElement("h5");
//   h5.textContent = inputs[2].value;
//   let p = document.createElement("p");
//   p.textContent = inputs[3].value;

//   profile.appendChild(img);
//   cards.appendChild(profile);
//   cards.appendChild(h2);
//   cards.appendChild(h5);
//   cards.appendChild(p);

//   console.log(cards);

//   data.appendChild(cards);

//   inputs.forEach((inp) => {
//     if (inp.type === "text") {
//       inp.value = "";
//     }
//   });
// });

// let box = document.querySelector(".box")

// box.addEventListener("mouseover", ()=>{
//   box.style.backgroundColor = "yellow"
// })

// box.addEventListener("mouseout", ()=>{
//   box.style.backgroundColor = "red"
// })

// window.addEventListener("mousemove",(e)=>{
// box.style.top = e.clientY + "px"
// box.style.left = e.clientX + "px"
// })

// document.querySelector(".main").addEventListener("click",()=>{
//     alert("main clicked")
// })

// document.querySelector("button").addEventListener("click",()=>{
//     alert("button clicked")
// })

// let ul = document.querySelector("ul");

// ul.addEventListener("click", (e) => {
//   let val = e.target;
//   val.classList.toggle("line");
// });

// document.addEventListener("click",()=>{
//     console.log("document clicked")
// }, true)

// document.querySelector("html").addEventListener("click",()=>{
//     console.log("html clicked")
// }, true)

// document.querySelector(".main").addEventListener("click",()=>{
//     console.log("main clicked")
// }, true)

// document.querySelector(".nav").addEventListener("click",()=>{
//     console.log("nav clicked")
// }, true)

// document.querySelector("button").addEventListener("click",()=>{
//     console.log("button clicked")
// })

let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", () => {
  let leftvalue = 20 - inp.value.length;
  span.textContent = 20 - inp.value.length;

  if (leftvalue < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "black";
  }
});
