import stepOne from "./modules/stepOne.js";
//ctx.createLinearGradient(50, 0, 50, 100)


const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
let data;
export {screen, ctx, data};

fetch("/Data/graphics.json")
.then(x => x.text())
.then(y=>{
    data=JSON.parse(y);
    stepOne();
});






