function esPrimo(){
    var n = document.getElementById("numero").value;
        n = parseInt(n);
    var respuesta = true;
	for (var i = 2; i <= n-1 ; i++) {
		if (n % i == 0){
            respuesta = false
        }
    }
    if (respuesta == true) {
        document.getElementById("primo").innerHTML = "El número " + n + " es primo";
    } else {
        document.getElementById("primo").innerHTML = "El número " + n + " no es primo";
    }
}

