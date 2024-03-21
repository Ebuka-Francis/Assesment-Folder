let menuButton = document.querySelector('#menu-button').addEventListener('click', openMenu);
let addButton = document.querySelector('#addition').addEventListener('click', addCal);
let subtractButton = document.querySelector('#subtract').addEventListener('click', subtracCal);
let multiButton = document.querySelector('#multi').addEventListener('click', multiCal );
let diviButton = document.querySelector('#divi').addEventListener('click',diviCal );


let menu = document.querySelector('#menu');
function openMenu() {
    if(menu.style.display === 'block' ){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
}

let solutions = document.querySelector('#methods');

function addCal() {
    solutions.innerHTML = 'Addition';
    menu.style.display = 'none';
}
function subtracCal() {
    solutions.innerHTML = 'Subtraction';
    menu.style.display = 'none';

}
function multiCal() {
    solutions.innerHTML = 'Multiplication';
    menu.style.display = 'none';

}
function diviCal() {
    solutions.innerHTML = 'Division';
    menu.style.display = 'none';

}

let inputOne = parseInt( document.querySelector('#fig1').value);
let inputTwo = parseInt( document.querySelector('#fig2').value);

 
solutions.addEventListener('click', () => {
    if(solutions.innerHTML === 'Addition'){
        document.querySelector('#ans').innerHTML = inputOne + inputTwo;
     }
     if(solutions.innerHTML === 'Subtraction'){
        document.querySelector('#ans').innerHTML = inputOne - inputTwo;
     }
     if(solutions.innerHTML === 'Multiplication'){
        document.querySelector('#ans').innerHTML = inputOne * inputTwo;
     }
     if(solutions.innerHTML === 'Division'){
        document.querySelector('#ans').innerHTML = inputOne / inputTwo;
     }
});
console.log(inputOne, inputTwo);




