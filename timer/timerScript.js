// таймер

let InputTimer = document.querySelector('#timer');
let ShowTimer = document.querySelector('#timer_show');
let timer;
ShowTimer.innerHTML = 0;

// функционал кнопок для таймера
let Starttimer = document.querySelector('#timer_button_run').addEventListener('click', () => {
    timeMinute = parseInt(InputTimer.value) * 60;
    clearInterval(timer);
    timer = setInterval(function () {
        seconds = timeMinute % 60;
        minutes = timeMinute / 60 % 60;
        if (minutes < 10) {
            console.log('num < 10');
            minutes = "0" + timeMinute / 60 % 60;
        }
        hour = timeMinute / 60 / 60 % 60;
        if (timeMinute <= 0) {
            clearInterval(timer);
            alert('Time is Over!');
        } else {
            ShowTimer.innerHTML = `<div>${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}</div>`;
        }
        --timeMinute;
    }, 1000);


});

let StopTimer = document.querySelector('#timer_button_stop').addEventListener('click', () => {
    clearInterval(timer);
});

let ContinueTimer = document.querySelector('#timer_button_continue').addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(function () {
        seconds = timeMinute % 60;
        minutes = timeMinute / 60 % 60;
        hour = timeMinute / 60 / 60 % 60;
        if (timeMinute <= 0) {
            clearInterval(timer);
            InputTimer.value = '';
            ShowTimer.innerHTML = 0;
            alert('Time is Over!');
        } else {
            ShowTimer.innerHTML = `<div>${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}</div>`;
        }
        --timeMinute;
    }, 1000);

});

let ResetTimer = document.querySelector('#timer_button_reset').addEventListener('click', () => {
    InputTimer.value = '';
    clearInterval(timer);
    ShowTimer.innerHTML = 0;
});

// обратный отсчет
let date = new Date('Jul 13 2022 00:00:00');

function counts() {
    let currentDate = new Date();
    gap = date - currentDate;
    console.log(gap);

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    document.querySelector('#end_days').innerText = days + ' дней';
    document.querySelector('#end_hours').innerText = hours + ' часов';
    document.querySelector('#end_minutes').innerText = minutes + ' минут';
    document.querySelector('#end_seconds').innerText = seconds + ' секунд';

}
counts();
setInterval(counts, 1000);



let btnWatch = document.querySelector('#btn_watch');
btnWatch.onclick = function () {
    document.location.href = "/watch/watch.html";
};

let btnStopwatch = document.querySelector('#btn_stopwatch');
btnStopwatch.onclick = function(){
    document.location.href = "/stopwatch/stopwatch.html";
};

let btnGenerate = document.querySelector('#btn_generate');
btnGenerate.onclick = function(){
    document.location.href = "/randomGenerator/randomIndex.html";
};

let btnToCalc = document.querySelector('#btn_calc');
btnToCalc.onclick = function(){
    document.location.href = "/calculator/calc.html";
};