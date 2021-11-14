//Variables
let resultado = document.querySelector('.resultado');
let errorNombre = document.querySelector('.errorNombre');
let errorAsunto = document.querySelector('.errorAsunto');
let errorMensaje = document.querySelector('.errorMensaje');

let nombre = document.getElementById('nombre');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('mensaje');

let botton = document.getElementById('botton')

let regExpEmptyCheck = /^$/;
let regExpLettersOnly = /^[A-Za-z]+$/;

let msgResultado = 'Mensaje enviado con éxito !!!';
let msgErrorNombre = 'El nombre es requerido. Solo letras de la A a la Z';
let msgErrorAsunto = 'El asunto es requerido. Solo letras de la A a la Z';
let msgErrorMensaje = 'El mensaje es requerido. Solo letras de la A a la Z';

//funciones de checkeo
let emptyString = (valor, error, mensaje)  => {
if (regExpEmptyCheck.test(valor)) {
  error.innerHTML = mensaje;
  return 0;
} else{
  error.innerHTML = ``;
  return 1;
}
}

let lettersOnly = (valor, error, mensaje)  => {
  if (regExpLettersOnly.test(valor)) {
    error.innerHTML = ``;
    return 1;
  } else{
    error.innerHTML = mensaje;
    return 0;
    
  }
} 

// Event Listener de Botón
botton.addEventListener('click', function(event) {
    event.preventDefault();
    emptyString(nombre.value, errorNombre, msgErrorNombre);
    emptyString(asunto.value, errorAsunto, msgErrorAsunto);
    emptyString(mensaje.value, errorMensaje, msgErrorMensaje);
    
    lettersOnly(nombre.value, errorNombre, msgErrorNombre);
    lettersOnly(asunto.value, errorAsunto, msgErrorAsunto);
    lettersOnly(mensaje.value, errorMensaje, msgErrorMensaje);

    console.log('Suma de validadores EmptyStrings + lettersOnly (deberían sumar 6 para el ok)')
    
    console.log(emptyString(nombre.value, errorNombre, msgErrorNombre) + lettersOnly(nombre.value, errorNombre, msgErrorNombre));
    console.log(emptyString(asunto.value, errorAsunto, msgErrorAsunto) + lettersOnly(asunto.value, errorAsunto, msgErrorAsunto));
    console.log(emptyString(mensaje.value, errorMensaje, msgErrorMensaje) + lettersOnly(mensaje.value, errorMensaje, msgErrorMensaje)); 
      

    let boxNombreCompleto = (emptyString(nombre.value, errorNombre, msgErrorNombre) + lettersOnly(nombre.value, errorNombre, msgErrorNombre));
    let boxAsunto = (emptyString(asunto.value, errorAsunto, msgErrorAsunto) + lettersOnly(asunto.value, errorAsunto, msgErrorAsunto));
    let boxMensaje = (emptyString(mensaje.value, errorMensaje, msgErrorMensaje) + lettersOnly(mensaje.value, errorMensaje, msgErrorMensaje)); 
  
    let sumaValidadores = boxNombreCompleto + boxAsunto + boxMensaje;

    console.log(`Suma total de validadores:`);
    console.log(sumaValidadores);

    if (sumaValidadores == 6 ) {
      resultado.innerHTML = msgResultado;
      console.log(`Validación exitosa!!`);
    }else{
      resultado.innerHTML = '';
      console.log(`Aun no suma 6, sorry...`);

    }
  });
