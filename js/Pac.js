function createPac() {
    var Canvas = document.getElementById("screen1");
    var context = Canvas.getContext("2d");
    var pac = new Image();

    pac.src = "img/pac.png";
    pac.onload = function(){
        context.drawImage(pac,4,5,11,11,8,10,15,15);
    }

}

createPac();