<?php

$username = $_POST['Usuario'];
$password = $_POST['Senha'];

$servername = "localhost";
$dbname = "calculos";
$username_db = "root";
$password_db = "root";

$conn = new mysqli($servername, $username_db, $password_db, $dbname);


if ($conn->connect_error) {
  die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

$sql = "SELECT * FROM tabela_login WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  header("Location: index1.html");
  exit();
} else {
  
  echo "Nome de usuário ou senha inválidos.";
}

$conn->close();
?>
