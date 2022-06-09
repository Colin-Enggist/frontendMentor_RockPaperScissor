import { ctx, data, } from "../main.js";
import drawArcs from "./canvasHandlers/drawArcs.js";
import drawImg from "./canvasHandlers/drawImg.js";

export default function stepTwo(player){
    ctx.clearRect(0, 0, screen.width, screen.height)
    ctx.beginPath();
    ctx.arc(240, 260, 70, 0, 2*Math.PI)
    ctx.fillStyle= "hsl(229, 25%, 31%)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(540, 260, 70, 0, 2*Math.PI)
    ctx.fillStyle= "hsl(229, 25%, 31%)";
    ctx.fill();
    if(player === "paper"){
        ctx.save();
        drawArcs(data.Arcs.paperArcTwoP)
        ctx.restore();
        drawImg(data.images.paperP, "Done");
    }
    if(player === "rock"){
        ctx.save();
        drawArcs(data.Arcs.rockArcTwoP)
        ctx.restore();
        drawImg(data.images.rockP, "Done");
    }
    if(player === "scissors"){
        ctx.save();
        drawArcs(data.Arcs.scissorsArcTwoP)
        ctx.restore();
        drawImg(data.images.scissorsP, "Done");
    }

    console.log(player)
};