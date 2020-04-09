const modeText = document.querySelector(".mode-text");
const checkbox = document.querySelector(".checkbox");
const ball = document.querySelector(".ball");
const label = document.querySelector(".label");
const body = document.querySelector("body");
const header = document.querySelector(".main-header");
const followerschild = document.querySelectorAll(".grid-followers-child");
const overviewchild = document.querySelectorAll(".grid-overview-child");
const overviewHeading = document.querySelectorAll(
  ".overview-today, .heading-primary"
);

checkbox.addEventListener("click", () => {
  // Mode change
  if (modeText.innerText === "Dark Mode") {
    modeText.innerText = "Light Mode";
    modeText.style.color = "#000";
  } else {
    modeText.innerText = "Dark Mode";
    modeText.style.color = "#fff";
  }
  // toggle button
  ball.classList.toggle("ball-checked");

  ball.classList.contains("ball-checked")
    ? (ball.style.backgroundColor = "yellow")
    : (ball.style.backgroundColor = "rgb(11, 28, 87)");

  ball.classList.contains("ball-checked")
    ? (label.style.backgroundColor = "rgb(11, 28, 87)")
    : (label.style.backgroundColor = "yellow");

  body.classList.toggle("body-light-bg");
  header.classList.toggle("header-light-bg");
  followerschild.forEach((el) => {
    el.classList.toggle("followerscard-white-bg");
  });
  overviewchild.forEach((el) => {
    el.classList.toggle("overviewcard-white-bg");
  });

  overviewHeading.forEach((el) => {
    el.classList.toggle("overviewheading-white");
  });
});
