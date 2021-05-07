function repetir() {
    var numero = document.getElementById("numero").value;
    var frase = document.getElementById("frase").value;

    var texto = "";
    for (var i = 0; i < numero; i++) {
        texto = texto + (i+1) + "- " + frase + "<br/>";
    }
    document.getElementById("repeticion").innerHTML = texto;
}