function validar(campo) {
    var campo = document.getElementById("email");
    if (campo.value == null || campo.value.length == 0) {
        mostrarError(campo.id, "Error email: rellene el campo");
        campo.focus();
    } else {
        borrarError(campo.id);
        (spemail.value.length == ".")
    }
}
function mostrarError(id, mensaje) {
    document.getElementById("sp" + id).innerHTML = mensaje;
 }
 function borrarError(id) {
    document.getElementById("sp" + id).innerHTML = "";
}
function validarFormulario() {
    var cadenaError = "";

    var email = document.getElementById("email");
    if (email.value == null || email.value.length == 0) {
        cadenaError = "<li>Error email: campo vacío</li>";
    }
    

    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0) {
        cadenaError = cadenaError + "<li>Error web: campo vacío</li>";
    }
    var edad = document.getElementById("edad");
    if (edad.value <0) {
        cadenaError = cadenaError + "<li>Error edad: mayor de 0</li>";   
    }
    var password = document.getElementById("password");
    
     


    if (cadenaError.length == 0) {
        return true;
    } else {
        mostrarError(cadenaError);
        return false;
    }
    
    

}

function mostrarError(cadenaError) {
    document.getElementById("errores").innerHTML = cadenaError;
    document.getElementById("capaerrores").style.visibility = "visible";
}

function mostrarEdad(campo) {
    document.getElementById("sp" + campo.id).innerHTML = campo.value;
    if (edad.value <0) {
        cadenaError = cadenaError + "<li>Error edad: mayor que 0</li>";
    }
}