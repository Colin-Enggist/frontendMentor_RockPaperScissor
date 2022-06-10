import {data, ctx} from "../../main.js"

export default function rules(){
    let rules = new Image()
    rules.src = data.images.rulesRPS.path

    rules.onload = ()=>{
        ctx.drawImage(rules, 252, 115);
    }
   
}