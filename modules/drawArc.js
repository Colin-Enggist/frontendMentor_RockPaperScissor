import { ctx, circles } from "../main.js";

export default function drawArc(i){
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, 60, 0, 2* Math.PI);
    ctx.fillStyle = circles[i].color;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, 45, 0, 2* Math.PI);
    ctx.fillStyle = 'white'
    ctx.fill();
}