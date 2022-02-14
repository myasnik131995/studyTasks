let a = ''; // first number
let b = ''; // second number
let sign = ''; // math sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

let out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';

    // получить нажатую кнопку
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = a;

        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    // если нажата клавиша + - / X
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // нажата =
    if (key === '=') {
        if(b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = (+a) - (+b);
                break;
            case "X":
                a = (+a) * (+b);
                break;
            case "/":
                if (b === '0'){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = (+a) / (+b);
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);

    }
};




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

let btnWatch = document.querySelector('#btn_watch');
btnWatch.onclick = function () {
    document.location.href = "/watch/watch.html";
};