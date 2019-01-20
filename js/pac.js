"use strict";
var pacs=[];

function point(x,y,symbol){
    this.x=x;
    this.y=y;
    this.symbol=symbol;
}

function pac() {
    var cellWidth=20;
    var cellHight=20;

    var canvas = document.getElementById("pac");
    var context = canvas.getContext("2d");
    var image=new Image();
    image.src="img/pac.png";
    image.onload = function(){
        var n =0;
        for (var i=0;i<mapdata.length;i++){

            var buffer=mapdata[i];
            for (var j=0;j<buffer.length;j++){

                if (buffer[j]==0){
                    pacs[n]=new point(j*cellWidth,i*cellHight,0);
                    n++;
                    context.drawImage(image,34,5,11,11,j*cellWidth+8,i*cellHight+8,5,5);
                }
                if ((i==1 && j==7) || (i==1 && j==16) || (i==30 && j==22) || (i==30 && j==1))
                    context.drawImage(image,34,5,11,11,j*cellWidth+5,i*cellHight+5,10,10);

            }
        }
    }


}



