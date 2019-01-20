function resetPac() {
    var canvas = document.getElementById("pac");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,480,640);
    pac();
    getScore();
    drawlife();
}
