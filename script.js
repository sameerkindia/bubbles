const body = document.querySelector("body");
const btn = document.getElementById("btn");

function randomNumber(number = 50) {
  return Math.floor(Math.random(1) * number);
}

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random(1) * 10);
  }
  return color;
}

function randomSize(number = 100) {
  return Math.random(1) * number;
}

function renderElement() {
  const height = randomSize();
  const element = document.createElement("span");
  element.style.top = randomSize(body.clientHeight) + "px";
  element.style.left = randomSize(body.clientWidth) + "px";
  element.style.backgroundColor = randomColor();
  element.style.height = height + "px";
  element.style.width = height + "px";
  element.style.visibility = "visible";

  body.appendChild(element);
}

let time = 1;
for (let i = 0; i < randomNumber(100); i++) {
  if (time >= 10) time = 1;
  setTimeout(() => {
    renderElement();
  }, `${time}${time}${time}`);
  time++;
}

let spanEl = [];

btn.addEventListener("click", (e) => {
  spanEl = [...document.querySelectorAll("span")];
  for (let i = 0; i < spanEl.length; i++) {
    if (time >= 10) time = 1;
    setTimeout(() => {
      spanEl[i]?.remove();
    }, +`5${time}${time}`);
    time++;
  }

  for (let i = 0; i < randomNumber(500); i++) {
    if (time >= 10) time = 1;
    setTimeout(() => {
      renderElement();
    }, `${time}${time}${time}`);
    time++;
  }

  spanEl = [...document.querySelectorAll("span")];
});
