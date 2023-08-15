function calculateArea() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var area = 0.5 * base * height;
    document.getElementById("result").innerHTML = "A área do triângulo é = : " + area;
}