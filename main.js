import stepOne from "./modules/stepOne.js";

const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
let img = [{path:new Image(), x: 250, y: 130}, {path:new Image(), x: 380, y: 360}, {path:new Image(), x: 235, y: 100}, {path:new Image(), x: 520, y: 100}];

var rockGradient = ctx.createLinearGradient(50, 0, 50, 100);
    rockGradient.addColorStop(0, 'hsl(349, 71%, 52%)')
    rockGradient.addColorStop(1, 'hsl(349, 70%, 56%)')
var paperGradient = ctx.createLinearGradient(50, 0, 50, 100);
    paperGradient.addColorStop(0, 'hsl(230, 89%, 62%)');
    paperGradient.addColorStop(1, 'hsl(230, 89%, 65%)');
var scissorGradient = ctx.createLinearGradient(50, 0, 50, 100);
    scissorGradient.addColorStop(0, 'hsl(39, 89%, 49%)');
    scissorGradient.addColorStop(1, 'hsl(40, 84%, 53%)');
    
let circles = [{color: rockGradient, x: 405, y: 380, }, {color: paperGradient, x: 262, y: 130}, {color: scissorGradient, x: 545, y: 130}];

export {screen, ctx, img, circles};



stepOne();