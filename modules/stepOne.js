import { ctx,data } from "../main.js";
import drawImg from "./canvasHandlers/drawImg.js";
import drawArcs from "./canvasHandlers/drawArcs.js";

export default function stepOne(){
    console.log(data.images)
    
    
    drawImg(data.images.triangle);

    ctx.save();
    drawArcs(data.Arcs.rockArc);
    ctx.restore();
    drawImg(data.images.rock);
    
    ctx.save();
    drawArcs(data.Arcs.paperArc);
    ctx.restore();
    drawImg(data.images.paper);
    
    ctx.save()
    drawArcs(data.Arcs.scissorsArc);
    ctx.restore()
    drawImg(data.images.scissors);
    
}