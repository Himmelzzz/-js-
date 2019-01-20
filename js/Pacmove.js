"use strict";
var pacman = new Pac(20,20,"left",0,3);
var directionp="left";


function isImpact(pacman,walls){
    for (var i=0;i<walls.length;i++) {
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

function Pac(x,y,direction,symbol,life) {
    this.x = x;
    this.y = y;
    this.direction=direction;
    this.symbol=symbol;
    this.life=life;


}

function drawPac() {
    var Canvas = document.getElementById("pacman");
    var context = Canvas.getContext("2d");
    var pac = new Image();
    context.clearRect(0,0,480,640);
    pac.src = "img/pac.png";
    if (pacman.direction=="left"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,5,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,5,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,20,20);
    }
    else if (pacman.direction=="right"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,20,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,20,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,20,20);
    }

    else if (pacman.direction=="up"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,35,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,35,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,20,20);
    }

    else if (pacman.direction=="down"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,49,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,49,11,11,pacman.x,pacman.y,20,20);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,20,20);
    }

}


function pacmove() {
    var a;
    document.onkeydown = function (event) {

        if (event.keyCode == 38 ) {

            clearInterval(a);
            pacman.direction="up";
            a=setInterval(move, 50);


        } else if (event.keyCode == 37 ) {

            clearInterval(a);
            pacman.direction="left";
            a=setInterval(move, 50);


        } else if (event.keyCode == 39 ) {

            clearInterval(a);
            pacman.direction="right";
            a=setInterval(move, 50 );

        } else if (event.keyCode == 40 ) {

            clearInterval(a);
            pacman.direction="down";
            a=setInterval(move, 50);

        }else if (event.keyCode == 32) {
            alert("pause");
        }
    }

    function fup() {
        pacman.y=pacman.y - 2;
        if (isImpact(pacman,walls))
           pacman.y=pacman.y + 2;
        pacman.symbol=(pacman.symbol+1)%3;
        kill();
        getScore();
        drawPac();

    }

    function fleft() {
        pacman.x=pacman.x - 2;
        if (isImpact(pacman,walls))
           pacman.x=pacman.x + 2;
        pacman.symbol=(pacman.symbol+1)%3;
        if (pacman.x==0 && pacman.y==320){
            pacman.x=460;
        }
        kill();
        getScore();
        drawPac();

    }

    function fright() {
        pacman.x=pacman.x + 2;
        if (isImpact(pacman,walls))
           pacman.x=pacman.x - 2;
        pacman.symbol=(pacman.symbol+1)%3;
        if (pacman.x==460 && pacman.y==320){
            pacman.x=0;
        }
        kill();
        getScore();
        drawPac();

    }

    function fdown() {
        pacman.y=pacman.y + 2;
        if (isImpact(pacman,walls))
           pacman.y=pacman.y - 2;
        pacman.symbol=(pacman.symbol+1)%3;
        kill();
        getScore();
        drawPac();

    }

    function movetest() {
        var templey = pacman.y;
        var templex = pacman.x;
        if (pacman.direction=="up"){
            pacman.y=pacman.y - 2;
            if (isImpact(pacman,walls))
                pacman.direction=directionp;

        } else if (pacman.direction=="left"){
            pacman.x=pacman.x - 2;
            if (isImpact(pacman,walls))
                pacman.direction=directionp;

        } else if (pacman.direction=="right"){
            pacman.x=pacman.x + 2;
            if (isImpact(pacman,walls))
                pacman.direction=directionp;

        } else if (pacman.direction=="down"){
            pacman.y=pacman.y + 2;
            if (isImpact(pacman,walls))
                pacman.direction=directionp;

        }
        pacman.x=templex;
        pacman.y=templey;
    }

    function move() {
        movetest();
        if (pacman.direction=="up"){

            fup();
            directionp="up";
        }
        else if (pacman.direction=="down"){

            fdown();
            directionp="down";
        }
        else if (pacman.direction=="right"){

            fright();
            directionp="right";
        }
        else if (pacman.direction=="left"){

            fleft();
            directionp="left";
        }


    }
}


pacmove();
