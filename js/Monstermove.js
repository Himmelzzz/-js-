"use strict";


var monsterR = new Monster(220,300,"up",0,1);
var monsterP = new Monster(220,320,"up",0,1);
var monsterB = new Monster(240,320,"up",0,1);
var monsterY = new Monster(240,300,"up",0,1);
var mr;
var mp;
var mb;
var my;

function Monster(x,y,dir,symbol,life){
    this.x = x;
    this.y = y;
    this.dir=dir;
    this.symbol=symbol;
    this.life=life;
}

function isImpactm(pacman,walls){
    for (var i=0;i<walls.length-14;i++) {
        if (pacman.x < walls[i].width+walls[i].x &&
            pacman.x + 20 > walls[i].x &&
            pacman.y < walls[i].y + walls[i].height &&
            20 + pacman.y > walls[i].y)
            return true;
        else
            continue;
    }
    return false;
}

function drawMonster(pacman,id,position) {
    var Canvas = document.getElementById(id);
    var context = Canvas.getContext("2d");
    var pac = new Image();
    context.clearRect(0,0,480,640);
    pac.src = "img/pac.png";
    if (pacman.life==0)
        position=deadposition;
    if (pacman.dir=="up"){
        if (pacman.symbol==0)
            context.drawImage(pac,position[0].x,position[0].y,position[0].w,position[0].h,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==1)
            context.drawImage(pac,position[1].x,position[1].y,position[1].w,position[1].h,pacman.x,pacman.y,20,20);

    }
    else if (pacman.dir=="down"){
        if (pacman.symbol==0)
            context.drawImage(pac,position[2].x,position[2].y,position[2].w,position[2].h,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==1)
            context.drawImage(pac,position[3].x,position[3].y,position[3].w,position[3].h,pacman.x,pacman.y,20,20);
    }

    else if (pacman.dir=="left"){
        if (pacman.symbol==0)
            context.drawImage(pac,position[4].x,position[4].y,position[4].w,position[4].h,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==1)
            context.drawImage(pac,position[5].x,position[5].y,position[5].w,position[5].h,pacman.x,pacman.y,20,20);
    }

    else if (pacman.dir=="right"){
        if (pacman.symbol==0)
            context.drawImage(pac,position[6].x,position[6].y,position[6].w,position[6].h,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==1)
            context.drawImage(pac,position[7].x,position[7].y,position[7].w,position[7].h,pacman.x,pacman.y,20,20);
    }

}

function start2(pacman,id,position) {

    var r=Math.random()*12;
    if (r>0 && r<3) {
        pacman.dir="up";
    }else if (r>3 && r<6){
        pacman.dir="left";
    }else if (r>6 && r<9){
        pacman.dir="down";
    }else{
        pacman.dir="right";
    }
}

function  start3(pacman,id,position) {
    if (pacman.dir == "left") {
        pacman.x = pacman.x - 2;
        if (isImpact(pacman, walls)) {
            pacman.x = pacman.x + 2;
            start2(pacman, id, position);
        } else{

            pacman.x = pacman.x + 2;
            mfleft(pacman, id, position);
        }

    } else if (pacman.dir == "up") {
        pacman.y = pacman.y - 2;
        if (isImpact(pacman, walls)) {

            pacman.y = pacman.y + 2;
            start2(pacman, id, position);
        } else{

            pacman.y = pacman.y + 2;
            mfup(pacman, id, position);
        }

    } else if (pacman.dir == "right") {
        pacman.x = pacman.x + 2;
        if (isImpact(pacman, walls)) {
            pacman.x = pacman.x - 2;
            start2(pacman, id, position);
        } else{

            pacman.x = pacman.x - 2;
            mfright(pacman, id, position);
        }

    } else if (pacman.dir == "down") {
        pacman.y = pacman.y + 2;
        if (isImpact(pacman, walls)) {
            pacman.y = pacman.y - 2;
            start2(pacman, id, position);
        } else{

            pacman.y = pacman.y - 2;
            mfdown(pacman, id, position);
        }


    }
}

function mfup(monster,id,position) {
    monster.y=monster.y - 2;
    if (isImpactm(monster,walls))
        monster.y=monster.y + 2;
    monster.symbol=(monster.symbol+1)%2;
    drawMonster(monster,id,position)

}


function mfleft(monster,id,position) {
    monster.x=monster.x - 2;
    if (isImpactm(monster,walls)){
        monster.x=monster.x + 2;
        if (monster.y>pacman.y)
            monster.y-=2;
        if (monster.y<pacman.y)
            monster.y+=2;
    }

    monster.symbol=(monster.symbol+1)%2;
    drawMonster(monster,id,position)

}

function mfright(monster,id,position) {
    monster.x=monster.x + 2;
    if (isImpactm(monster,walls)){
        monster.x=monster.x - 2;
        if (monster.y>pacman.y)
            monster.y-=2;
        if (monster.y<pacman.y)
            monster.y+=2;
    }

    monster.symbol=(monster.symbol+1)%2;
    drawMonster(monster,id,position)

}

function mfdown(monster,id,position) {
    monster.y=monster.y + 2;
    if (isImpactm(monster,walls))
        monster.y=monster.y - 2;
    monster.symbol=(monster.symbol+1)%2;
    drawMonster(monster,id,position)

}

function start1(pacman,id,position) {
    if (pacman.y>260){
        pacman.y=pacman.y-2;
        drawMonster(pacman,id,position);
    }else {

        if (pacman==monsterR){
            clearInterval(mr);
            clearInterval(R);
            mr=setInterval(start3R,50);
        }

        else if (pacman==monsterP){
            clearInterval(mp);
            clearInterval(P);
            mp=setInterval(start3P,50);
        }

        else if (pacman==monsterB){
            clearInterval(mb);
            clearInterval(B);
            mb=setInterval(start3B,50);
        }

        else if (pacman==monsterY){
            clearInterval(my);
            clearInterval(Y);
            my=setInterval(start3Y,50);
        }

    }


}

function start1R(){
    start1(monsterR,"monsterR",redposition);
}

function start3R(){
    start3(monsterR,"monsterR",redposition)
}


function start1P(){
    start1(monsterP,"monsterP",pinkposition);
}

function start3P(){
    start3(monsterP,"monsterP",pinkposition)
}


function start1B(){
    start1(monsterB,"monsterB",blueposition);
}

function start3B(){
    start3(monsterB,"monsterB",blueposition)
}


function start1Y(){
    start1(monsterY,"monsterY",yellowposition);
}

function start3Y(){
    start3(monsterY,"monsterY",yellowposition)
}


var R = setInterval(start1R,50);
var P = setInterval(start1P,50);
var B = setInterval(start1B,50);
var Y = setInterval(start1Y,50);


