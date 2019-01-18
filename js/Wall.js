var walls = new Array();
function wall(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
}
function createWalls() {
    walls[0]=new wall(0,0,480,20);//宽
    walls[1]=new wall(0,0,11,640);//长
    walls[2]=new wall(0,627,480,13);//宽
    walls[3]=new wall(469,0,11,640);//长
    walls[4]=new wall(230,20,20,80);//3
    walls[5]=new wall(41,50,54,50);//1
    walls[6]=new wall(125,50,74,50);//2
    walls[7]=new wall(385,50,54,50);//5
    walls[8]=new wall(281,50,74,50);//4
    walls[9]=new wall(41,130,54,30);
    walls[10]=new wall(125,130,22,155);
    walls[11]=new wall(147,194,52,28);
    walls[12]=new wall(177,130,126,34);
    walls[13]=new wall(230,164,20,58);
    walls[14]=new wall(333,130,22,155);
    walls[15]=new wall(281,194,52,28);
    walls[16]=new wall(385,130,54,30);
    walls[17]=new wall(11,190,84,95);
    walls[18]=new wall(385,190,84,95);
    walls[19]=new wall(11,316,84,95);
    walls[20]=new wall(125,316,22,95);
    walls[21]=new wall(333,316,22,95);
    walls[22]=new wall(385,316,84,95);
    walls[23]=new wall(177,252,126,94);
    walls[24]=new wall(177,376,126,35);
    walls[25]=new wall(230,411,20,60);
    walls[26]=new wall(41,442,54,30);
    walls[27]=new wall(125,442,74,30);
    walls[28]=new wall(11,502,34,34);
    walls[29]=new wall(125,502,22,83);
    walls[30]=new wall(75,472,20,64);
    walls[31]=new wall(41,566,158,30);
    walls[32]=new wall(177,502,126,34);
    walls[33]=new wall(230,536,20,60);
    walls[34]=new wall(281,442,72,30);
    walls[35]=new wall(281,566,156,30);
    walls[36]=new wall(333,502,19,83);
    walls[37]=new wall(383,442,55,30);
    walls[38]=new wall(383,472,20,64);
    walls[39]=new wall(433,502,34,34);


}

createWalls();