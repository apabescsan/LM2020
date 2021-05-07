    function sumatorio() {
    var num = document.getElementById("numero").value; 
    var suma = 0;
    for (var i = 1; i <= num; i++) {
        suma = suma + i;       
    }
    document.getElementById("resultado").innerHTML= "El sumatorio de " +  num + " es " + suma;
}