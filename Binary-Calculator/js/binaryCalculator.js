const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
const res = document.getElementById('res');

let firstNumber = '';
let secondNumber = '';
let operator = '';

btn0.addEventListener('click', () => {
    if (operator === '') {
        firstNumber += '0';
        res.innerHTML = firstNumber;
    } else {
        secondNumber += '0';
        res.innerHTML = secondNumber;
    }
}
);

btn1.addEventListener('click', () => {
    if(operator === ''){
        firstNumber += '1';
        res.innerHTML = firstNumber;
    }
    else{
        secondNumber += '1';
        res.innerHTML = secondNumber;
    }
});

btnClr.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    res.innerHTML = '';
});

btnEql.addEventListener('click', () => {
    let result = 0;
    switch(operator){
        case '+':
            result = parseInt(firstNumber, 2) + parseInt(secondNumber, 2);
            break;
        case '-':
            result = parseInt(firstNumber, 2) - parseInt(secondNumber, 2);
            break;
        case '*':
            result = parseInt(firstNumber, 2) * parseInt(secondNumber, 2);
            break;
        case '/':
            result = parseInt(firstNumber, 2) / parseInt(secondNumber, 2);
            break;
    }
    res.innerHTML = result.toString(2);
});

btnSum.addEventListener('click', () => {
    operator = '+';
    res.innerHTML = operator;
});

btnSub.addEventListener('click', () => {
    operator = '-';
    res.innerHTML = operator;
});

btnMul.addEventListener('click', () => {
    operator = '*';
    res.innerHTML = operator;
});

btnDiv.addEventListener('click', () => {
    operator = '/';
    res.innerHTML = operator;
});