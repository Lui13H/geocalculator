function calculateArea() {
    var radius = document.getElementById("radius").value;
    var area = radius * radius * radius;
    document.getElementById("result").innerHTML = "O volume do cubo é: " + area;
}