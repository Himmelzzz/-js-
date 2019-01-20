"use strict";
var walls = [];
function wall(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
}

function createWalls() {
    var n=0;
    for (var i=0;i<mapdata.length;i++){

        var buffer=mapdata[i];
        for (var j=0;j<buffer.length;j++){
            if (buffer[j]==1 ){
                walls[n] =new wall(j*20,i*20,20,20);
                n++;
            }

        }

    }
    for (var i=0;i<mapdata.length;i++){

        var buffer=mapdata[i];
        for (var j=0;j<buffer.length;j++){
            if (buffer[j]==2 ){
                walls[n] =new wall(j*20,i*20,20,20);
                n++;
            }

        }

    }

}

createWalls();