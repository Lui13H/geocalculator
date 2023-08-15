function calcularArea() {
    var lado = document.getElementById("lado").value;
    var area = 2.6 * (lado ** 2);
    document.getElementById("result").innerHTML = "A área do hexágono é ≅ " + area.toFixed(2);
}