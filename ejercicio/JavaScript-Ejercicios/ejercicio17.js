function calcularEuro() {
    var dolar  = parseInt(document.getElementById("dolar").value);
    var resultado1 = dolar * 1.20;
    document.getElementById("resultadodolar").innerHTML = resultado1 + "$";
}

function calcularDolar() {
    var euro = parseInt(document.getElementById("euro").value);
    var resultado = euro * 0.83;
    document.getElementById("resultadoeuro").innerHTML = resultado + "€";
}

function resetear() {
    document.getElementById("euro").value = "";
    document.getElementById("resultadoeuro").innerHTML = "";
}

function resetear2() {
    document.getElementById("dolar").value = "";
    document.getElementById("resultadodolar").innerHTML = "";
}