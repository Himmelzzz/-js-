function isgameover() {
    if (pacman.life==0){
        clearInterval(R);
        clearInterval(P);
        clearInterval(B);
        clearInterval(Y);

        var canvas = document.getElementById("gameover");
        var context=canvas.getContext("2d");
        context.font='60px Arial';
        context.fillStyle="white";
        context.fillText("Game Over",160,290,160);
        context.fillText(score,160,350,160);
        score=0;


    }

}

