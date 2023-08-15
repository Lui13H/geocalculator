function calcularQuadrado() {
  const lado = document.getElementById('lado').value;
  const area = lado * lado;
  document.getElementById('resultado').innerHTML = `A área do quadrado é:${area}`;
}

function calcularRetangulo() {
  const base = document.getElementById('base').value;
  const altura = document.getElementById('altura').value;
  const area = base * altura;
  document.getElementById('resultado').innerHTML = `A área do retângulo é: ${area}`;
}

function calcularTriangulo() {
  const base = document.getElementById('base').value;
  const altura = document.getElementById('altura').value;
  const area = (base * altura) / 2;
  document.getElementById('resultado').innerHTML = `A área do triângulo é: ${area}`;
}

function calcularAreaHexagono() {
  const lado = document.getElementById("lado-hexagono").value;
  const apotema = document.getElementById("apotema-hexagono").value;
  const area = (6 * lado * apotema) / 2;
  document.getElementById("resultado-hexagono").innerText = "Área: " + area.toFixed(2);
}

function calcularAreaCirculo() {
  const raio = document.getElementById("raio-circulo").value;
  const area = Math.PI * Math.pow(raio, 2);
  document.getElementById("resultado-circulo").innerText = "Área: " + area.toFixed(2);
}

function calcularAreaPentagono() {
  const lado = document.getElementById("lado-pentagono").value;
  const apotema = document.getElementById("apotema-pentagono").value;
  const area = (5 * lado * apotema) / 2;
  document.getElementById("resultado-pentagono").innerText = "Área: " + area.toFixed(2);
}
