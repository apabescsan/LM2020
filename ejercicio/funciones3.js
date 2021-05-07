var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
function calcularNIF() {
    var dni = parseInt(document.getElementById("dni").value);

    if (dni < 0 || dni > 99999999) {
        document.getElementById("errorDNI").innerHTML = "Error: DNI incorrecto";
        document.getElementById("letra").value = "";
    } else {
        document.getElementById("errorDNI").innerHTML = "";
    
    var pos = dni%23;
    document.getElementById("letra").value = letras[pos];
        }   
}