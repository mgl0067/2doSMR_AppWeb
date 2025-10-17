//document.write("Hola Mundo");
var parrafo = document.getElementById("texto")
parrafo.innerHTML = "Texto desde JavaScript";
parrafo.style.color = "red";

var contenedor = document.getElementById("contenedor");
var nuevo = document.createElement("p");
var texto = document.createTextNode("Texto desde Javascript 2");

contenedor.appendChild(nuevo);
nuevo.appendChild(texto);

function pulsar () {
    alert("Hola, bienvenido a una página habladora");
    var boton = document.getElementById("button1");
    boton.style.backgroundColor = "red";
}
