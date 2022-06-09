import { ctx } from "../../main.js";
import stepOne from "../stepOne.js";

export default function drawImg(image, returnString){
    let source = new Image(); 
    source.src = image.path;
    source.onload = ()=>{
    ctx.drawImage(source, image.x, image.y);
    console.log("imgDrawn")
    return stepOne(returnString);
};
}