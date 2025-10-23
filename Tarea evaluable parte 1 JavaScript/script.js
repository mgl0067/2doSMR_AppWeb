function agregarComentario () {
var texto = document.getElementById("comentario").value; //La variable texto es = al valor que se obtiene de "comentario"

var parrafo = document.createElement("p"); //La variable nuevo es = a la creación de un p

var nodo = document.createTextNode(texto); //A partir de la variable texto creamos un nodo de texto con el valor introducido en "comentario"

parrafo.appendChild(nodo); 
listaComentarios.appendChild(parrafo);

parrafo.style.color = "blue";
listaComentarios.style.backgroundColor = "#ABABAB";

document.getElementById("comentario").value = "";
} 