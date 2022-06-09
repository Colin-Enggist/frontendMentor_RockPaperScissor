let score = document.getElementById("score")

export default function updateScore(result){
    let current = score.textContent

    if (result === "win"){
        score.textContent = parseInt(current) + 1;
        return score
    }if (result === "loose"){
        score.textContent = parseInt(current) -1;
        return score
    }
}