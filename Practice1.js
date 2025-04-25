function getRandomcolor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getRandomSize = () => {
  let size = Math.floor(Math.random() * 200 + 10);
  size += "px";
  return size;
};

const getRandomPosition = divSize => {
  let position = Math.floor(Math.random() * 100);
  if (position > 50) {
    position = `calc(${position}% - ${divSize})`;
  } else {
    position += "%";
  }
  return position;
};

document.addEventListener("DOMContentLoaded", () => {
  let body1 = document.getElementsByTagName("body")[0];
  for (let i = 0; i < 20; i++) {
    let div1 = document.createElement("div");
    div1.style.borderRadius = "100%";
    div1.style.position = "fixed";
    div1.style.transition = "all 1s";
    div1.style.backgroundColor = getRandomcolor();
    let size = getRandomSize();
    div1.style.width = size;
    div1.style.height = size;
    div1.style.top = getRandomPosition(size);
    div1.style.left = getRandomPosition(size);
    body1.append(div1);
    div1.addEventListener("mouseover", () => {
      div1.style.backgroundColor = getRandomcolor();
      let size = getRandomSize();
      div1.style.width = size;
      div1.style.height = size;
      div1.style.top = getRandomPosition(size);
      div1.style.left = getRandomPosition(size);
    });
  }
});
