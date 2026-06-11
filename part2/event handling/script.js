let btn = document.querySelector("button");

// let count = 5;

// btn.addEventListener("click", () => {
//   btn.disabled = true;
//   btn.textContent = `download completed in ${count}`;
//   const intervalID = setInterval(() => {
//     count--;
//     if (count >= 0) {
//       btn.textContent = `download completed in ${count}`;
//     } else {
//       clearInterval(intervalID);
//       btn.textContent = "Download Complete";
//     }
//   }, 1000);
// });


// btn.addEventListener("dblclick", ()=>{
//     alert("broo stopppp")
// })

// let div = document.createElement("div")
// document.body.prepend(div)

const cursor = document.querySelector("div");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();