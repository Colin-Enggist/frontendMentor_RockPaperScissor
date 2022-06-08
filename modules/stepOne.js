import drawArc from "./drawHandlers/drawArc.js";
import drawBackground from "./drawHandlers/drawBackground.js";

let Rock = ()=>{
    drawArc(0);
}

let Paper = ()=>{
    drawArc(1);
}

let Scissors = ()=>{
    drawArc(2);
}

export default function stepOne() {
   
    drawBackground(0);
    Rock();
    Paper();
    Scissors();
   
  
}
