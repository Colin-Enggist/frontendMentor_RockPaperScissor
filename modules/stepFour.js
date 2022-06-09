import { ctx, screen } from "../main.js";
import drawText from "./canvasHandlers/drawtext.js";

export default function steopFour(person, House){

        ctx.beginPath();
        ctx.rect(315, 250, 155, 40);
        ctx.fillStyle = "white";
        ctx.fill();

        function win(){return drawText('PLAY AGAIN', 345, 280, 'win');}
        function loose(){return drawText('PLAY AGAIN', 345, 280, 'loose');}

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