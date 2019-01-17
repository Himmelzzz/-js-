var walls = new Array();
function wall(x,y,width,heigh){
    this.x=x;
    this.y=y;
    this.width=width;
    this.heigh=heigh;
}
function createWalls() {
    walls[0]=new wall(0,0,280,1);
}