import { ctx } from "../../main.js";


export default function drawText(text, x, y){
    ctx.font = '20px Barlow Semi Condensed';
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y);
}