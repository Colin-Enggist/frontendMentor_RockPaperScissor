import { ctx, img } from "../main.js";

export default function drawImg(i){
    img[0].path.src = '../images/bg-triangle.svg';
    img[1].path.src = '../images/icon-rock.svg';
    console.log("loadImg")
    img[i].path.onload = function(){
        ctx.drawImage(img[i].path, img[i].x, img[i].y);
        console.log("imageDrawn")
    }
   
}