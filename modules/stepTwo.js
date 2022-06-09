import { ctx, data, } from "../main.js";
import drawArcs from "./canvasHandlers/drawArcs.js";
import drawImg from "./canvasHandlers/drawImg.js";
import drawText from "./canvasHandlers/drawtext.js";
import stepThree from "./stepThree.js";

export default function stepTwo(player){
    ctx.clearRect(0, 0, screen.width, screen.height)
    drawArcs(data.Arcs.emptyC);
    drawText('YOU PICKED', 140, 130, "paragraph");
    drawText('THE HOUSEPICKED', 513, 130, "paragraph");
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
    setTimeout(()=>{stepThree(player)}, 1400);
};