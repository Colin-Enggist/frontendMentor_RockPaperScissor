import stepOne from "./modules/stepOne.js";
import stepTwo from "./modules/stepTwo.js";
//ctx.createLinearGradient(50, 0, 50, 100)

const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
let data;
export { screen, ctx, data };

fetch("./Data/graphics.json")
  .then((x) => x.text())
  .then((y) => {
    data = JSON.parse(y);
    stepOne();
  });

screen.addEventListener("click", (e) => {
  const elementRelativeX = e.offsetX;
  const elementRelativeY = e.offsetY;
  const canvasRelativeX =
    (elementRelativeX * screen.width) / screen.clientWidth;
  const canvasRelativeY =
    (elementRelativeY * screen.height) / screen.clientHeight;

  if (
    canvasRelativeX <= 320 &&
    canvasRelativeX >= 200 &&
    canvasRelativeY >= 65 &&
    canvasRelativeY <= 190
  ) {
      
    stepTwo("paper");
  }
  if (
    canvasRelativeX <= 465 &&
    canvasRelativeX >= 345 &&
    canvasRelativeY >= 320 &&
    canvasRelativeY <= 440
  ) {
    stepTwo("rock");
  }
  if (
    canvasRelativeX <= 605 &&
    canvasRelativeX >= 485 &&
    canvasRelativeY >= 70 &&
    canvasRelativeY <= 190
  ) {
    stepTwo("scissors");
  }
});
