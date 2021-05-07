function comprobarCadena(cadena) {
    if (cadena == cadena.toLowerCase()) {
        document.getElementById("resultadoCadena").innerHTML = "La cadena está en minúscula";
    } else if (cadena == cadena.toUpperCase()) {
        document.getElementById("resultadoCadena").innerHTML = "La cadena está en mayúscula";
    } else {
        document.getElementById("resultadoCadena").innerHTML = "La cadena está en mayúscula y minúscula";
    }
}