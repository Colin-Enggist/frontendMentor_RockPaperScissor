import { ctx } from "../../main.js";

export default function drawImg(image){
    let source = new Image(); 
    source.src = image.path;
    source.onload = ()=>{
    ctx.drawImage(source, image.x, image.y)
};
}