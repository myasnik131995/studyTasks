let stopwatchShow = document.querySelector('#show_stopwatch');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let ms = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let tmr;

function tick (){
    ms++;
    if (ms >= 10){
        ms = 0;
        sec ++;
    }
   if (sec >= 60) {
       sec = 0;
       min++;
   }
   if (min >= 60) {
       min = 0;
       hrs++;
   }
   stopwatchShow.textContent = (hrs > 9 ? hrs : "0" + hrs)  + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec) + ":" + (ms > 9 ? ms : "0" + ms);

}

startBtn.addEventListener('click', () => {
    stopWatcch = setInterval(tick, 100);
});

stopBtn.addEventListener('click', () => {
    clearInterval(stopWatcch);
});

resetBtn.addEventListener('click', () => {
    clearInterval(stopWatcch);
    stopwatchShow.innerHTML = '00:00:00:0000';
    sec = 0;
    min = 0;
    hrs = 0;
});







let btnTimer = document.querySelector('#btn_timer');
btnTimer.onclick = function(){
    document.location.href = "/timer/timer.html";
};

let btnToCalc = document.querySelector('#btn_calc');
btnToCalc.onclick = function(){
    document.location.href = "/calculator/calc.html";
};

let btnGenerate = document.querySelector('#btn_generate');
btnGenerate.onclick = function(){
    document.location.href = "/randomGenerator/randomIndex.html";
};

let btnWatch = document.querySelector('#btn_watch');
btnWatch.onclick = function () {
    document.location.href = "/watch/watch.html";
};
