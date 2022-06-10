import {data, ctx, screen} from "../../main.js"
import stepOne from "../stepOne.js";

export default function rules(){
    let rules = new Image()
    rules.src = data.images.rulesRPS.path

    rules.onload = ()=>{
        ctx.clearRect(0, 0, screen.width, screen.height);
        ctx.beginPath();
        ctx.rect(235, 100, 330, 310);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.drawImage(rules, 252, 115);
        
        
    }
    screen.addEventListener("click", ()=>{
        ctx.clearRect(0, 0, screen.width, screen.height);
        stepOne();
        return
    })
   
}