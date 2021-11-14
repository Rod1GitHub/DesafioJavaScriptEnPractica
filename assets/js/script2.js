let btnOne = document.getElementById('btn-1');
let btnTwo = document.getElementById('btn-2');
let btnThree = document.getElementById('btn-3');
let btnFour = document.getElementById('btn-4');
let btnFive = document.getElementById('btn-5');
let btnSix = document.getElementById('btn-6');

let btnOneVar = 'btn-1';
let btnTwoVar = 'btn-2';
let btnThreeVar = 'btn-3';
let btnFourVar = 'btn-4';
let btnFiveVar = 'btn-5';
let btnSixVar = 'btn-6';
 

let changeColor = (btnActive) => {
    let buttonColor = document.getElementById(btnActive).style.backgroundColor;
    caja.setAttribute('style',`background-color: ${buttonColor}; border:1px solid black;width: 100%;height: 100%;`);
}

btnOne.addEventListener('click', function(evento) {
    evento.preventDefault();
    changeColor(btnOneVar);
});

btnTwo.addEventListener('click', function(evento) {
    evento.preventDefault();
    changeColor(btnTwoVar);
});

btnThree.addEventListener('click', function(evento) {
    evento.preventDefault();
    changeColor(btnThreeVar);
});


btnFour.addEventListener('click', function(evento) {
    evento.preventDefault();
    changeColor(btnFourVar);
});


btnFive.addEventListener('click', function(evento) {
    evento.preventDefault();
    changeColor(btnFiveVar);
});


btnSix.addEventListener('click', function(evento) {
    evento.preventDefault();
    changeColor(btnSixVar);
});
