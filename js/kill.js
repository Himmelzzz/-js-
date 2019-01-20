"use strict";
function kill() {
    if ((Math.abs(pacman.x-monsterR.x)<5 &&
        Math.abs(pacman.y-monsterR.y)<5 &&
        monsterR.life==1) ||
        (Math.abs(pacman.x-monsterB.x)<5 &&
            Math.abs(pacman.y-monsterB.y)<5 &&
            monsterB.life==1) ||
        (Math.abs(pacman.x-monsterP.x)<5 &&
            Math.abs(pacman.y-monsterP.y)<5 &&
            monsterP.life==1) ||
        (Math.abs(pacman.x-monsterY.x)<5 &&
            Math.abs(pacman.y-monsterY.y)<5 &&
            monsterY.life==1)){
        pacman.life=pacman.life-1;
        drawlife();
        pacman.x=20;
        pacman.y=20;
        monsterR.x=220;
        monsterR.y=300;
        monsterR.life=1;
        monsterR.dir="up";
        monsterP.x=220;
        monsterP.y=320;
        monsterP.life=1;
        monsterP.dir="up";
        monsterB.x=240;
        monsterB.y=320;
        monsterB.life=1;
        monsterB.dir="up";
        monsterY.x=240;
        monsterY.y=300;
        monsterY.life=1;
        monsterY.dir="up";
        clearInterval(R);
        clearInterval(P);
        clearInterval(B);
        clearInterval(Y);
        R = setInterval(moveR,50);
        P = setInterval(moveP,50);
        B = setInterval(moveB,50);
        Y = setInterval(moveY,50);
        isgameover();

    }else if (Math.abs(pacman.x-monsterR.x)<5 && Math.abs(pacman.y-monsterR.y)<5 && monsterR.life==0){
        clearInterval(R);
        score = score + 10;
        monsterR.x=220;
        monsterR.y=300;
        monsterR.dir="up";
        monsterR.life=1;
        R = setInterval(moveR,50);
    }else if (Math.abs(pacman.x-monsterB.x)<5 && Math.abs(pacman.y-monsterB.y)<5 && monsterB.life==0){
        clearInterval(B);
        score = score + 10;
        monsterB.x=240;
        monsterB.y=320;
        monsterB.dir="up";
        monsterB.life=1;
        B = setInterval(moveB,50);
    }else if (Math.abs(pacman.x-monsterP.x)<5 && Math.abs(pacman.y-monsterP.y)<5 && monsterP.life==0){
        clearInterval(P);
        score = score + 10;
        monsterP.x=220;
        monsterP.y=320;
        monsterP.dir="up";
        monsterP.life=1;
        P = setInterval(moveP,50);
    }else if (Math.abs(pacman.x-monsterY.x)<5 && Math.abs(pacman.y-monsterY.y)<5 && monsterY.life==0){
        clearInterval(Y);
        score = score + 10;
        monsterY.x=240;
        monsterY.y=300;
        monsterY.dir="up";
        monsterY.life=1;
        Y = setInterval(moveY,50);
    }

}