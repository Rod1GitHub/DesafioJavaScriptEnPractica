let resultado = document.querySelector('.resultado');

let btnSumar = 'btn-sumar';
let btnRestar = 'btn-restar';

let buttonSumar = document.getElementById('btn-sumar');
let buttonRestar = document.getElementById('btn-restar');

function settingValue1() {
    let valor1 = parseInt(document.getElementById('valor1').value);
    return valor1;
}

function settingValue2() {
    let valor2 = parseInt(document.getElementById('valor2').value);
    return valor2;
}

buttonSumar.addEventListener('click', function(event) {
    event.preventDefault();
    let resultadoSuma = (settingValue1() + settingValue2());

    resultado.innerHTML = resultadoSuma;
});

buttonRestar.addEventListener('click', function(event) {
    event.preventDefault();
    let resultadoResta = (settingValue1() - settingValue2());
if (resultadoResta > 0) {
    resultado.innerHTML = resultadoResta;
}else{
    resultado.innerHTML = '0 (El resultado es negativo)';
}
    
});