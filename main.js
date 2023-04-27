//Var = es una Variable la cual tendra un nombre en este caso "mititulo"; documument 
//hara que yo seleccione todo mi documento HTMl; 
// Con el punto "." Hago una seccion que en este caso la funcion es queryselector 
// El elemento que recibira querySelector sera h1
var miTitulo = document.querySelector('h1'); 
miTitulo.innerHTML = '¡Hola Mundo!';
// Obtiene un elemento por id

var javipage = document.getElementById('javi');
javipage.innerHTML = '¿como estan?';

// Obtinee una lista con los elementos que tienen esa clase

document.getElementsByClassName('test');

// Obtiene una HTMLCollection con los todos los elementos
'li'
document.getElementsByTagName('LI');

// Devuelve el primer elemento del documento que cumpla la selección (la notación es como en CSS)
var identificando = document.querySelector('.test');
identificando.innerHTML = 'identificando classname';

// Devuelve una lista de elementos que cumplen con la selección (notación como en CSS)
document.querySelectorAll('h1');


// Obtener los hijos de un elemento
var elem = document.getElementById('javi');
var hijos = elem.childNodes;
// Su nodo padre
var padre = elem.parentNode;