let vl = document.querySelector("#vl");
let hl = document.querySelector("#hl");

let countTitle = document.querySelector("#counter");
let timerTitle = document.querySelector("#timer");

let count = 0;
let timeLeft = 9;

countTitle.innerText = "Count: " + count;
timerTitle.innerText = "Timer: " + (timeLeft + 1);

hl.style.display = "none";
vl.style.display = "block";

let mode = "vl";
let lastClicked = "";
let gameStarted = false;

let countdownTimer = () =>
  setInterval(() => {
    if (timeLeft <= 0) {
      timerTitle.innerText = "Timer: " + 0;
      gameStarted = false;
      clearInterval(interval);
    } else {
      timeLeft -= 1;
      timerTitle.innerText = "Timer: " + (timeLeft + 1);
    }
  }, 1000);

let interval = 0;

document.addEventListener("keypress", (e) => {
  if (e.key === "s") {
    gameStarted = true;
    interval = countdownTimer();
  }
});

document.addEventListener("click", (e) => {
  if (mode === "vl") {
    // If we click on left side
    if (e.x < window.innerWidth / 2 && lastClicked !== "left") {
      lastClicked = "left";
    } else if (e.x > window.innerWidth / 2 && lastClicked !== "right") {
      // If we click on right side
      lastClicked = "right";
    }
    if (gameStarted === true) {
      count++;
      countTitle.innerText = "Count: " + count;
    }
  } else {
    // If we click on top side
    if (e.y < window.innerHeight / 2 && lastClicked !== "top") {
      lastClicked = "top";
    } else if (e.y > window.innerHeight / 2 && lastClicked !== "bot") {
      // If we click on bottom side
      lastClicked = "bot";
    }

    if (gameStarted === true) {
      count++;
      countTitle.innerText = "Count: " + count;
    }
  }
});

const changeMode = () => {
  timeLeft = 9;
  clearInterval(interval);
  timerTitle.innerText = "Timer: " + (timeLeft + 1);
  gameStarted = false;
  count = 0;
  countTitle.innerText = "Count: " + count;

  if (hl.style.display === "none") {
    hl.style.display = "block";
    vl.style.display = "none";
    mode = "hl";
  } else {
    hl.style.display = "none";
    vl.style.display = "block";
    mode = "vl";
  }
};
