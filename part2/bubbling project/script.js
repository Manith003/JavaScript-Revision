let count = 20;
let score = 0;
let hitrn = 0;

function startGame() {
  document.querySelector(".pbtm").addEventListener("click", (e) => {
    e.stopPropagation();
    let ClickedNumber = Number(e.target.textContent);
    if (ClickedNumber === hitrn) {
      hitIncrease();
      increaseScore();
      makeBubble();
    }
  });
}

function generateRandom() {
  let rn = Math.floor(Math.random() * 10);
  return rn;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 168; i++) {
    let rn = generateRandom();
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function timer() {
  let countint = setInterval(() => {
    if (count > 0) {
      count--;
      document.querySelector("#timerVal").textContent = count;
    } else {
      clearInterval(countint);
      document.querySelector(".pbtm").innerHTML = "<h1>Game Over</h1>";
      document.querySelector("#hitVal").textContent = 0;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#ScoreVal").textContent = score;
}

function hitIncrease() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

startGame();
makeBubble();
timer();
hitIncrease();
