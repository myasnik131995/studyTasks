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
let countFilms = document.querySelector('#count_film');
let count = 0;

function addFilmsOnClick() {
    changeArray.push(inputFilm.value);
    inputFilm.value = '';
    count++;
    countFilms.innerHTML = `Количество фильмов в генераторе: ${count}`;
}

btnAddFilms.addEventListener('click', addFilmsOnClick);
inputFilm.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        addFilmsOnClick();
    }
});


let btnReset = document.querySelector('#button_reset');
btnReset.onclick = function(){
    changeArray = [];
    countFilms.innerHTML = '';
    addText.innerHTML = '';
    console.log(changeArray)
};


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