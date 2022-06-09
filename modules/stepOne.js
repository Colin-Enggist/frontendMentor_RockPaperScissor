import { ctx,data,} from "../main.js";
import drawImg from "./canvasHandlers/drawImg.js";
import drawArcs from "./canvasHandlers/drawArcs.js";

export default function stepOne(v){
    switch (v){
        case undefined:
            drawImg(data.images.triangle, "backgroundComplete")
        break;
        case "backgroundComplete":
            ctx.save();
            drawArcs(data.Arcs.rockArc);
            ctx.restore();
            drawImg(data.images.rock, "rockDrawn")
        break;
        case "rockDrawn":
            ctx.save();
            drawArcs(data.Arcs.paperArc);
            ctx.restore();
            drawImg(data.images.paper, "paperDone");
        break;
        case "paperDone":
            ctx.save();
            drawArcs(data.Arcs.scissorsArc);
            ctx.restore();
            drawImg(data.images.scissors, "DONE");
        break;
        default:
        return
    };
}