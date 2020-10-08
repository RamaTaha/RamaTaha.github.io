let vl = document.querySelector("#vl");
let hl = document.querySelector("#hl");
let countTitle = document.querySelector("#counter");
let count = 0;

countTitle.innerText = "Count: " + count;
hl.style.display = "none";
vl.style.display = "block";

let mode = "vl";
let lastClicked = "";

document.addEventListener("click", (e) => {
  if (mode === "vl") {
    // If we click on left side
    if (e.x < window.innerWidth / 2 && lastClicked !== "left") {
      lastClicked = "left";
      count++;
      countTitle.innerText = "Count: " + count;
    } else if (e.x > window.innerWidth / 2 && lastClicked !== "right") {
      // If we click on right side
      lastClicked = "right";
      count++;
      countTitle.innerText = "Count: " + count;
    }
  } else {
    // If we click on left side
    if (e.y < window.innerHeight / 2 && lastClicked !== "top") {
      lastClicked = "top";
      count++;
      countTitle.innerText = "Count: " + count;
    } else if (e.y > window.innerHeight / 2 && lastClicked !== "bot") {
      // If we click on right side
      lastClicked = "bot";
      count++;
      countTitle.innerText = "Count: " + count;
    }
  }
});

const changeMode = () => {
  if (hl.style.display === "none") {
    hl.style.display = "block";
    vl.style.display = "none";
    mode = "hl";
    count = 0;
    countTitle.innerText = "Count: " + count;
  } else {
    hl.style.display = "none";
    vl.style.display = "block";
    mode = "vl";
    count = 0;
    countTitle.innerText = "Count: " + count;
  }
};
