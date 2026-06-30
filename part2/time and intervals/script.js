// const btn = document.querySelector("#downloadBtn");
// const progressBar = document.querySelector(".progress-bar");
// const percentage = document.querySelector("#percentage");
// const status = document.querySelector("#status");
// let container = document.querySelector(".container");
// let second = 3;

// function downloadFunctionality() {
//   let count = 1;
//   let setinterval = setInterval(
//     () => {
//       if (count < 100) {
//         count++;
//         progressBar.style.width = count + "%";
//         percentage.textContent = count + "%";
//         if (count === 100) {
//           status.textContent = "Downloaded";
//         }
//       } else {
//         clearInterval(setinterval);
//         let btncount = 5;
//         let btninterval = setInterval(() => {
//           btn.textContent = `download card will hide in ${btncount}`;
//           if (btncount === -1) {
//             clearInterval(btninterval);
//             container.style.display = "none";
//           }
//           btncount--;
//         }, 1000);
//       }
//     },
//     (second * 1000) / 100,
//   );
// }

// btn.addEventListener("click", () => {
//   btn.disabled = true;
//   downloadFunctionality();
// });


// setInterval(()=>{
//     console.log("konichiwa")
// }, 1000)

// setTimeout(()=>{
//     console.log("hello ")
// }, 3000)


let card = document.querySelector(".card")

setTimeout(() => {
    card.style.display = "initial"
}, 2000);

setTimeout(() => {
    card.style.display = "none"
}, 5000);