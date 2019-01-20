"use strict";
var score=0;

function getScore(){
    for (var i=0;i<pacs.length;i++){
        if (pacman.x==pacs[i].x && pacman.y==pacs[i].y && pacs[i].symbol==0){
            score++;
            pacs[i].symbol=1;
            var canvas = document.getElementById("pac");
            var context = canvas.getContext("2d");
            context.clearRect(pacs[i].x,pacs[i].y,20,20);
            if ((pacs[i].x==140 && pacs[i].y==20) ||
                (pacs[i].x==320 && pacs[i].y==20) ||
                (pacs[i].x==440 && pacs[i].y==600) ||
                (pacs[i].x==20 && pacs[i].y==600)){
                monsterR.life=0;
                monsterY.life=0;
                monsterP.life=0;
                monsterB.life=0;
                setTimeout("monsterR.life=1",15000);
                setTimeout("monsterY.life=1",15000);
                setTimeout("monsterP.life=1",15000);
                setTimeout("monsterB.life=1",15000);
            }

        }
    }

    var canvas = document.getElementById("pac");
    var context = canvas.getContext("2d");
    context.clearRect(200,220,80,60);
    context.fillStyle="white";
    context.font='20px Arial';
    context.fillText("score",215,220,60);
    context.fillText(score,225,240,60);

}