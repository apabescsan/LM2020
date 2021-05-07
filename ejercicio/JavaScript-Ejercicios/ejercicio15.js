function multiplo() {
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);

    var resultado = "";

    for (var i = 1; i <= 15; i++) {
        resultado =  resultado + numero * i + "<br>";
    }
    document.getElementById("solucion").innerHTML = resultado ;
}

function comenzar() {
    document.getElementById("solucion").innerHTML = "";
    document.getElementById("numero").value = "";
}
