const div = document.createElement("div");
div.classList.add("main-container");
document.body.appendChild(div);

const submitButton = document.querySelector(".js-search-box button");
let gridValue = localStorage.getItem("gridValue");
submitButton.addEventListener("click", () => {
  gridValue = document.querySelector(".js-search-box input").value;
  localStorage.setItem("gridValue", gridValue);
  window.location.reload();
});

if (localStorage.getItem("gridValue")) {
  if (gridValue <= 0 || gridValue > 100) {
    alert("Sorry, only numbers between 1 to 100!!!");
  } else {
    generateGrid(Number(gridValue));
  }
}

function generateGrid(gridValue) {
  for (i = 1; i <= gridValue * gridValue; i++) {
    const box = document.createElement("div");
    box.classList.add("single-box");
    box.classList.add("js-single-box");
    box.setAttribute("style", `width:${100 / gridValue}%;`);
    box.setAttribute("id", i);
    div.appendChild(box);
  }

  function colorBoxes(event) {
    const hoveredBox = event.target;
    if (hoveredBox.classList.contains("single-box")) {
      hoveredBox.classList.add("white");
    }
  }

  let isMouseDown = false;

  div.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  div.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  div.addEventListener("mouseover", (event) => {
    if (isMouseDown) {
      colorBoxes(event);
    }
  });
}
