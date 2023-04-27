/*
- Crea una función en JavaScript que permita validar todos los campos del formulario de
contacto al momento de hacer clic en el botón de procesamiento. 
Se debe indicar qué campos
están vacíos.
- Es fundamental que enlaces este nuevo archivo al documento HTML respectivo.
- Si bien llamarás al archivo JavaScript desde un solo archivo, es conveniente que todos los
documentos del proyecto llamen a este archivo.
*/
function validar() {

    var nombre = document.getElementById('Nombre').value;

    if(nombre == ''){
        alert("Debe ingresar el nombre")
    }

    var correo = document.getElementById('Correo').value;

    if(correo == ''){
        alert('Ingresa tu correo')
    }

    var mensaje = document.getElementById('Mensaje').value;

    if(mensaje == ''){
        alert('Ingresa un mensaje')
    }
    
}