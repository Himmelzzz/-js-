var pacman = new Pac(8,10,"left",0);
var a;
var b;
var c;
var d;

function isImpact(pacman,walls){
    for (var i=0;i<walls.length;i++){
        if (pacman.x < wall.x + wall.width &&
            pacman.x + 15 > wall.x &&
            pacman.y < wall.y + wall.height &&
            15 + pacman.y > wall.y)
            return true;
    }

        return false;
}

function Pac(x,y,direction,symbol) {
    this.x = x;
    this.y = y;
    this.direction=direction;
    this.symbol=symbol;
    this.setPac = function (x,y,direction,symbol) {
        this.x=x;
        this.y=y;
        this.direction=direction;
        this.symbol=symbol;
    };
}

function drawPac(pacman) {
    var Canvas = document.getElementById("screen1");
    var context = Canvas.getContext("2d");
    var pac = new Image();
    context.clearRect(0,0,280,310);
    pac.src = "img/pac.png";
    if (pacman.direction=="left"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,5,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,5,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,15,15);
    }
    else if (pacman.direction=="right"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,20,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,20,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,15,15);
    }

    else if (pacman.direction=="up"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,35,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,35,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,15,15);
    }

    else if (pacman.direction=="down"){
        if (pacman.symbol==1)
            context.drawImage(pac,4,49,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==2)
            context.drawImage(pac,19,49,11,11,pacman.x,pacman.y,15,15);
        else if (pacman.symbol==0)
            context.drawImage(pac,34,5,11,11,pacman.x,pacman.y,15,15);
    }

}


function pacmove() {

    document.onkeydown = function (event) {
        if (event.keyCode == 38) {
            clearInterval(a);
            clearInterval(b);
            clearInterval(c);
            clearInterval(d);
            a=setInterval(fup, 50);

        } else if (event.keyCode == 37) {
            clearInterval(a);
            clearInterval(b);
            clearInterval(c);
            clearInterval(d);
            b=setInterval(fleft, 50);
        } else if (event.keyCode == 39) {
            clearInterval(a);
            clearInterval(b);
            clearInterval(c);
            clearInterval(d);
            c=setInterval(fright, 50);
        } else if (event.keyCode == 40) {
            clearInterval(a);
            clearInterval(b);
            clearInterval(c);
            clearInterval(d);
            d=setInterval(fdown, 50);
        }
    }

    function fup() {
        pacman.setPac(pacman.x, pacman.y - 1, "up",(pacman.symbol+1)%3);
        drawPac(pacman);
    }

    function fleft() {
       pacman.setPac(pacman.x - 1, pacman.y, "left",(pacman.symbol+1)%3);
       drawPac(pacman);
    }

    function fright() {
       pacman.setPac(pacman.x + 1, pacman.y, "right",(pacman.symbol+1)%3);
       drawPac(pacman);
    }

    function fdown() {
       pacman.setPac(pacman.x, pacman.y + 1, "down",(pacman.symbol+1)%3);
       drawPac(pacman);
    }
}

pacmove();