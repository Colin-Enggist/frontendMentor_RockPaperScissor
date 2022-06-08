import drawArc from "./drawArc.js";


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
  
  Rock();
  Paper();
  Scissors();

}
