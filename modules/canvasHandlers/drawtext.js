import { ctx } from "../../main.js";


export default function drawText(text, x, y, type){
    if(type === "paragraph"){
    ctx.font = '20px Barlow Semi Condensed';
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y);
    return
}if(type === "result"){
    ctx.font = '35px Barlow Semi Condensed';
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y);
}if(type === "win"){
    ctx.font = '20px Barlow Semi Condensed';
    ctx.fillStyle = 'hsl(229, 25%, 31%)';
    ctx.fillText(text, x, y);
}if(type === "loose"){
    ctx.font = '20px Barlow Semi Condensed';
    ctx.fillStyle = 'hsl(349, 71%, 52%)';
    ctx.fillText(text, x, y);
}
}