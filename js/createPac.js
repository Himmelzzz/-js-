"use strict";
function createPac() {
    var Canvas = document.getElementById("pacman");
    var context = Canvas.getContext("2d");
    var pac = new Image();

    pac.src = "img/pac.png";
    pac.onload = function(){
        context.drawImage(pac,4,5,11,11,20,20,20,20);

    }

}

