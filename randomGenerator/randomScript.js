let changeArray = [];
let btnChange = document.querySelector('#button_change');
let addText = document.querySelector('#change');


btnChange.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * changeArray.length);
    addText.innerHTML = changeArray[randomNum];
});


// функционал для добавления фильмов в массив
let btnAddFilms = document.querySelector('#btn_add');
let inputFilm = document.querySelector('#input_film');

function addFilmsOnClick() {
    changeArray.push(inputFilm.value);
    inputFilm.value = '';

}

btnAddFilms.addEventListener('click', addFilmsOnClick);
inputFilm.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        addFilmsOnClick();
    }
});



let btnWatch = document.querySelector('#btn_watch');
btnWatch.onclick = function () {
    document.location.href = "/watch/watch.html";
};

let btnTimer = document.querySelector('#btn_timer');
btnTimer.onclick = function(){
    document.location.href = "/timer/timer.html";
};

let btnStopwatch = document.querySelector('#btn_stopwatch');
btnStopwatch.onclick = function(){
    document.location.href = "/stopwatch/stopwatch.html";
};

let btnToCalc = document.querySelector('#btn_calc');
btnToCalc.onclick = function(){
    document.location.href = "/calculator/calc.html";
};