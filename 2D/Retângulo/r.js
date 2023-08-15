function calculateArea() {
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var area = width * height;
    document.getElementById("result").innerHTML = "A área do retângulo é = " + area;
}