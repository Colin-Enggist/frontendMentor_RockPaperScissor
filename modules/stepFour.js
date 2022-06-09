import { ctx, screen } from "../main.js";
import drawText from "./canvasHandlers/drawtext.js";
import stepOne from "./stepOne.js";
import updateScore from "./updateScore.js";

export default function steopFour(person, House){

        ctx.beginPath();
        ctx.rect(315, 250, 155, 40);
        ctx.fillStyle = "white";
        ctx.fill();

        function win(){
            updateScore("win");
            return drawText('PLAY AGAIN', 345, 280, 'win');}
        function loose(){
            updateScore("loose");
            return drawText('PLAY AGAIN', 345, 280, 'loose');}
        screen.addEventListener("click", e=>{
            const elementRelativeX = e.offsetX;
            const elementRelativeY = e.offsetY;
            const canvasRelativeX = (elementRelativeX * screen.width) / screen.clientWidth;
            const canvasRelativeY = (elementRelativeY * screen.height) / screen.clientHeight;

            if(canvasRelativeX >= 315 && 
                canvasRelativeX <= 470 && 
                canvasRelativeY >= 250 &&
                canvasRelativeY <= 290 ){
                    ctx.clearRect(0, 0, screen.width, screen.height);
                    stepOne();
                }

        })

    switch (person){
        case "rock":
            switch (House){
                case 0:
                    drawText('YOU LOOSE', 315, 200, "result");
                    loose();
                break;
                case 1:
                    console.log("error")
                break;
                case 2:
                    drawText('YOU WIN', 325, 200, "result" );
                    win();
                break;
            }
        break;
        case "paper":
            switch (House){
                case 0:
                    console.log("error")
                break;
                case 1:
                    drawText('YOU WIN', 325, 200, "result" );
                    win();
                break;
                case 2:
                    drawText('YOU LOOSE', 315, 200, "result");
                    loose();
                break;
            }
        break;
        case "scissors":
            switch (House){
                case 0:
                    drawText('YOU WIN', 325, 200, "result" );
                    win();
                break;
                case 1:
                    drawText('YOU LOOSE', 315, 200, "result");
                    loose();
                break;
                case 2:
                    console.log("error")
                break;
            }
        break;
    }
}