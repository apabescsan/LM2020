var suma = 0;
var multi = 1;
function calcularSM(numero) {
    if (numero != 0) {
        suma += eval(numero);
        multi *= numero;
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    } else {
        document.getElementById("resultadoSM").innerHTML = 
        "La suma es: " + suma + "<br/>La multiplicación es: " + multi;
        suma = 0;
        multi = 1;
    }
}