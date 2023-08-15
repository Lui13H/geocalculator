function calculateArea() {
  var side = document.getElementById("side").value;
  var area = side * side;
  document.getElementById("result").innerHTML = "A área do quadrado é = " + area;
}

