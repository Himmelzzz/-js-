var monsterR = new Monster(220,300,"up",0,1);
var monsterP = new Monster(220,320,"up",0,1);
var monsterB = new Monster(240,320,"up",0,1);
var monsterY = new Monster(240,300,"up",0,1);

function pos(x,y){
    this.x=x;
    this.y=y;
}

function move(monster,id,position) {
    var start=new pos(Math.round(monster.x/20),Math.round(monster.y/20));
    var end=new pos(Math.round(pacman.x/20),Math.round(pacman.y/20));
    var road =searchRoad(start,end);
    var x;
    var y;
    x=(road[0].x)*20;
    y=(road[0].y)*20;
    if (monster.x != x){
        if (monster.x>x){
            mfleft(monster,id,position);
        }else{
            mfright(monster,id,position);


        }
    }else if (monster.y != y){
        if (monster.y<y){
            mfdown(monster,id,position);
        }else{
            mfup(monster,id,position);
        }
    }
}

function moveR(){
    move(monsterR,"monsterR",redposition);
    //drawMonster(monsterR,"monsterR",redposition);
}

function moveP(){
    move(monsterP,"monsterP",pinkposition);
    //drawMonster(monsterP,"monsterP",pinkposition);
}

function moveB(){
    move(monsterB,"monsterB",blueposition);
    //drawMonster(monsterB,"monsterB",blueposition);
}

function moveY(){
    move(monsterY,"monsterY",yellowposition);
    //drawMonster(monsterY,"monsterY",yellowposition);
}

function movemR(){
    var a = setInterval(moveR(),50);
}

function movemP(){
    var a = setInterval(moveP(),50);
}

function movemB(){
    var a = setInterval(moveB(),50);
}

function movemY(){
    var a = setInterval(moveY(),50);
}
var R;
var P;
var B;
var Y;
function begin(){
    movemR();
    movemP();
    movemB();
    movemY();
    //setTimeout("R = setInterval(movemR,500)",500);
    //setTimeout("P = setInterval(movemP,500)",1000);
    //setTimeout("B = setInterval(movemB,500)",1500);
    //setTimeout("Y = setInterval(movemY,500)",2000);
}
begin();





