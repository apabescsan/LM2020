function perfecto() {
    var num = parseInt(document.getElementById("numero").value);
    var suma = 0;

    for (var i=1; i<=num; i++) {
        if (num%i == 0) {
            suma = suma + i;
        }
    }

    suma = suma - num;

    if (suma == num) {
        document.getElementById("resultado").innerHTML= "El número " + num + " es perfecto";
    }else {
        document.getElementById("resultado").innerHTML= "El número " + num + " no es perfecto";
    }
}