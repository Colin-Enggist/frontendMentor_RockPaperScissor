import drawImg from "./modules/drawImg.js";


const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
let img = [{path:new Image(), x: 250, y: 130}, {path:new Image(), x: 380, y: 360}, {path:new Image(), x: 250, y: 130}, {path:new Image(), x: 250, y: 130}];



export {screen, ctx, img};


drawImg(0);
drawImg(1);