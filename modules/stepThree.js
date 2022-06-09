import { ctx, data } from "../main.js";
import drawArcs from "./canvasHandlers/drawArcs.js";
import drawImg from "./canvasHandlers/drawImg.js";
import steopFour from "./stepFour.js";

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
        return setTimeout(()=>{steopFour(person, House)}, 500)
    }
    if(House === 1 && person !="rock"){
        ctx.save();
        drawArcs(data.Arcs.rockArcTwoC)
        ctx.restore();
        drawImg(data.images.rockC, "DONE")
        return setTimeout(()=>{steopFour(person, House)}, 500)
    }
    if(House === 2 && person !="scissors"){
        ctx.save();
        drawArcs(data.Arcs.scissorsArcTwoC)
        ctx.restore();
        drawImg(data.images.scissorsC, "DONE")
        return setTimeout(()=>{steopFour(person, House)}, 500)
    }else{
        return stepThree(person)
    }
}