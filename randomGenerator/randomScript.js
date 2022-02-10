let changeArray = [];
let btnChange = document.querySelector('#button_change');
let addText = document.querySelector('#change');


btnChange.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * changeArray.length);
    addText.innerHTML = changeArray[randomNum];
});


let btnWatch = document.querySelector('#btn_watch');
btnWatch.onclick = function () {
    document.location.href = "/watch/watch.html";
};



// функционал для добавления фильмов в массив
let btnAddFilms = document.querySelector('#btn_add');
let inputFilm = document.querySelector('#input_film');

function addFilmsOnClick() {
    changeArray.push(inputFilm.value);
    console.log(changeArray);
    inputFilm.value = '';

}

btnAddFilms.addEventListener('click', addFilmsOnClick);
inputFilm.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        addFilmsOnClick();
    }
});