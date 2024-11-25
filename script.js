const cells = Array.from(document.querySelectorAll(".cell"));
const displayScore = document.querySelector(".score"); 

let playerPosition = 1;
let score = 0;
let gameInterval;

function placePlayer(){
    cells.forEach(cell =>cell.classList.remove("player"));
    cells[3 + playerPosition].classList.add("player");
}

placePlayer();

document.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowRight" && playerPosition<2)
    {
        playerPosition++;
    }
    else if(e.key==="ArrowLeft" && playerPosition>0){
        playerPosition--;
    }
    placePlayer();
});

function startGame(){
    score=0;
    displayScore.innerHTML=score;
    gameInterval = setInterval(dropEnemy,1000);
    console.log("started");
}

function dropEnemy(){
    const enemyPosition = Math.floor(Math.random()*3);
    const enemyCell = cells[enemyPosition];
    enemyCell.classList.add("enemy");

    setTimeout(()=>{
        enemyCell.classList.remove("enemy");

        if(enemyPosition===playerPosition)
        {
            alert("Game Over! Your Score: " + score);
            clearInterval(gameInterval);
        }
        else{
            score++;
            displayScore.innerHTML=score;
        }
    },800);
}

startGame();


