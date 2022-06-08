import { ctx, circles } from "../main.js";
import drawImg from "./drawImg.js";

export default function drawArc(i){
    ctx.save();
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, 60, 0, 2* Math.PI);
    ctx.clip() //added
    ctx.fillStyle = circles[i].color;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, 45, 0, 2* Math.PI);
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.restore();
    ctx.save();
    drawImg(i+1);
    ctx.restore();
}