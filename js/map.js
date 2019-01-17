function createMap() {

    var Canvas = document.getElementById("screen0");
    var context = Canvas.getContext("2d");
    var map = new Image();
    map.src = 'img/map.png';
    map.onload = function () {
        context.drawImage(map, 0, 0, 280, 310);
    }

}

createMap();