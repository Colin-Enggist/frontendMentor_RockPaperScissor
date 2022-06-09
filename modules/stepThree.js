import { ctx, data } from "../main.js";
import drawArcs from "./canvasHandlers/drawArcs.js";
import drawImg from "./canvasHandlers/drawImg.js";

export default function stepThree(player){
    let person= player;
    function rndNum(){
        return Math.floor(Math.random()*3)
    };
    let House = rndNum();

    if(House === 0 && person !="paper"){
        ctx.save();
        drawArcs(data.Arcs.paperArcTwoC)
        ctx.restore();
        drawImg(data.images.paperC, "DONE")
        return
    }
    if(House === 1 && person !="rock"){
        ctx.save();
        drawArcs(data.Arcs.rockArcTwoC)
        ctx.restore();
        drawImg(data.images.rockC, "DONE")
        return
    }
    if(House === 2 && person !="scissors"){
        ctx.save();
        drawArcs(data.Arcs.scissorsArcTwoC)
        ctx.restore();
        drawImg(data.images.scissorsC, "DONE")
        return
    }else{
        return stepThree(person)
    }
}