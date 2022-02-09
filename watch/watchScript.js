// часы с изменением цвета заднего фона

function hexoClock() {
    let clock = document.querySelector('#clock');
    let color = document.querySelector('#color');
    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    let clockString = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.background = colorString;
}

hexoClock();
setInterval(hexoClock, 1000);

let btnTimer = document.querySelector('#btn_timer');
btnTimer.onclick = function(){
    document.location.href = "/timer/timer.html";
};

let btnStopwatch = document.querySelector('#btn_stopwatch');
btnStopwatch.onclick = function(){
    document.location.href = "/stopwatch/stopwatch.html";
};

let btnGenerate = document.querySelector('#btn_generate');
btnGenerate.onclick = function(){
    document.location.href = "/randomGenerator/randomIndex.html";
};