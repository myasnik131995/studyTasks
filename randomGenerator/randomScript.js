let changeArray = [
    'Фильм №1 от Насти',
    'Фильм №1 от Максима',
    'Фильм №2 от Насти',
    'Фильм №2 от Максима',
];
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