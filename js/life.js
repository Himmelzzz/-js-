"use strict";
function drawlife(){
    var canvas = document.getElementById("pac");
    var context=canvas.getContext("2d");
    var pac = new Image();

    pac.src = "img/pac.png";
    pac.onload = function(){
        context.clearRect(0,340,120,40);
        for (var i=0;i<pacman.life;i++){
            context.drawImage(pac,34,5,11,11,40*i,340,40,40);
        }
    }

}

