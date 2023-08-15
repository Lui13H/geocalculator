function calculateArea() {
    var lado = document.getElementById("lado").value;
    var num = 1.7206 * lado * lado;
    let area = num.toFixed(2);
    document.getElementById("result").innerHTML = "A área do pentágono é ≅ " + area;
}