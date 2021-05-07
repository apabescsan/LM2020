function mes() {
    var num = parseInt(document.getElementById("numero").value);

    if(num<1 || num>12) {
        document.getElementById("resultado").innerHTML = "Error, introduce un número del 1 al 12!";
    }else if (num == 2) {
        document.getElementById("resultado").innerHTML = "Este mes tiene 28 días";
    }else if (num==1 || num==3 || num==5 ||num==7 || num==8 || num==10 || num==12 ) {
        document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
    }else {
        document.getElementById("resultado").innerHTML = "Este mes tiene 30 días";
    }
}