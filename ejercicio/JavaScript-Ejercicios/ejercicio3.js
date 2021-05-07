function calcularEdad() {
var edad = document.getElementById("edad").value;

var resultado = edad * 365;

document.getElementById("tiempo").innerHTML = "Tu edad es de " + resultado;
}

