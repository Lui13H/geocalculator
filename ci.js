function calculateArea() {
    var radius = document.getElementById("radius").value;
    var num = 3.14 * radius * radius;
    let area = num.toFixed(2);
    document.getElementById("result").innerHTML = "A área do círculo é ≅ " + area;
}