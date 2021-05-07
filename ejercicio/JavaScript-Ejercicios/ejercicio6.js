function calcular() {
    var base = document.getElementById("base").value;
    var exponente = document.getElementById("exponente").value;

    var potencia = Math.pow(base, exponente);

    document.getElementById("calculo").innerHTML = "Resultado: " + potencia;
}