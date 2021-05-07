function cambiarFondo() {
    var rojo = document.getElementById("rojo").value;
    var verde = document.getElementById("verde").value;
    var azul = document.getElementById("azul").value;

    document.getElementById("contenedor").style.backgroundColor = "#" + rojo + verde + azul;
}