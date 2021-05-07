var suma = 0;
var multi = 1;

function calcularSM(numero) {
    if (numero !=0 ){
        suma += parseInt(numero);
        multi *= numero;
        document.getElementsByid("numero").value = "";
        document.getElementsByid("numero").focus();
    }else {
        document.getElementById("resultadoSM").innerHTML = "La suma es: " + suma + 
        "<br>" +"La multiplicacion es: " +  multi
    }
}