function ordena() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    
     
    if (numero1 > numero2) {
        document.getElementById("solucion").innerHTML = numero1 + " " + "es mayor que " + numero2
    }
    else if (numero2 > numero1) {
        document.getElementById("solucion").innerHTML = numero2 + " " + "es mayor que " + numero1
    }
    else {
        document.getElementById("solucion").innerHTML = "Los dos números son iguales"
    }
}