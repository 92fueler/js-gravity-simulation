const main = document.getElementById('main');

var timer = null;

// clicking on the ball triggers startMove() 
main.onclick = function() {
    startMove(this);
    // console.log(this);
}

function startMove(dom) {
    clearInterval(dom.timer);
    var iSpeedX = 50;   // intial speed on the x-coordinate
    var iSpeedY = 5;    // initial speed on the y-coordinate 
    var g = 3;  // gravity 

    dom.timer = setInterval(function() {
        iSpeedY += g;
        var newTop = dom.offsetTop + iSpeedY;
        var newLeft = dom.offsetLeft + iSpeedX;
        if (newTop >= document.documentElement.clientHeight - dom.clientHeight) {
            iSpeedY *= -1;
            
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newTop = document.documentElement.clientHeight - dom.clientHeight;
        }
        if (newTop <= 0) {
            iSpeedY *= -1;

            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newTop = 0;
        }
        if (newLeft >= document.documentElement.clientWidth - dom.clientWidth) {
            iSpeedX *= -1;

            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newLeft = document.documentElement.clientWidth - dom.clientWidth;
        }
        if (newLeft <= 0) {
            iSpeedX *= -1;

            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newLeft = 0;
        }
        if (Math.abs(iSpeedX) < 1 && Math.abs(iSpeedY) < 1) {
            iSpeedX = 0;
            iSpeedY = 0;
        }
        if (iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - dom.clientHeight) {
            clearInterval(dom.timer);
        } else {
            dom.style.top = newTop + 'px';
            dom.style.left = newLeft + 'px';
        }
    }, 30);
}