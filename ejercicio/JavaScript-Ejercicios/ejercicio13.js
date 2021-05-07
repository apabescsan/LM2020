function factorial() {
    var numero = document.getElementById("numero").value;
        numero = parseInt(numero);
    var resultado = 1;
    if (numero>=1){
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
        document.getElementById("solucion").innerHTML = numero + "! = " + resultado;
    }
    }else if (numero == 0) {
    document.getElementById("solucion").innerHTML = numero + "! = 1";
    }else {
    document.getElementById("solucion").innerHTML = "Debes introducir un número >=0"
    }
}