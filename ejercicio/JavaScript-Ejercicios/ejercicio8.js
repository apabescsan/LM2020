

function comprobar() { 
    var aleatorio = parseInt(Math.random()*10);
    var numero = document.getElementById("numero").value; 
    var respuesta = "";
    if (aleatorio == numero) {
        respuesta = "¡Enhorabuena, has ganado!";   
    }
    else if (aleatorio > numero) {
        respuesta = "Mala suerte, has pensado en un número menor";
    }else {
        respuesta = "Mala suerte, has pensado en un número mayor";
    }
    document.getElementById("resultado").innerHTML = "El número era: " + aleatorio + ". " + respuesta;
}