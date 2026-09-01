<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>PHP DATA Types & Variables </h2>

  <?php

  //1. Basic Variables and Data Types

  $name = "Vivek";  // string
  $age = 25;         // Integer
  $price = 99.99;  // Float
  $isStudent = false;  // Boolean
  $marks = [80 , 75 , 68]; // Array
  $nothing = NULL;  // NULL




  echo "Name: " . $name . "<br>";
  echo "age: " . $age . "<br>";
  echo "price: " . $price . "<br>";
  echo "isStudent: " . ($isStudent ? "True" : "False")."<br>";
  echo "Marks: ";
  print_r($marks);
  echo "<br>";
  echo "nothing: ";
  var_dump($nothing);


  // 2. GET Method

  ?>

  <h3>Arithmetic Calculation using GET </h3>

  <form method="GET">
    Enter First Number:
    <input type="number" name="num1" step="any" required>
    <br><br>
    Enter Second Number:
    <input type="number" name="num2" step="any" required>
    <br><br>
    <input type="submit" value="Calculate using GET">
  </form>

  <?php

    if(isset($_GET['num1']) && isset($_GET['num2'])){
      $a = $_GET['num1'];
      $b = $_GET['num2'];

      echo "<h4>Get Result</h4>";

      $add1 = $a + $b;

      echo "Addition : " . $add1 . "<br>";

      $add2 = $a * $b;

      echo "Multiplication : " . $add2 . "<br>";

      $add3 = 3.14 * $a * $a;

      echo "Area of Circle : " . $add3 . "<br>";


    }



  ?>


// 2. GET Method

  <h3>Arithmetic Calculation using POST </h3>

  <form method="POST">
    Enter First Number:
    <input type="number" name="post_num1" step="any" required>
    <br><br>
    Enter Second Number:
    <input type="number" name="post_num2" step="any" required>
    <br><br>
    <input type="submit" value="Calculate using POST">
  </form>

  <?php

    if(isset($_POST['post_num1']) && isset($_POST['post_num2'])){
      $a = $_POST['post_num1'];
      $b = $_POST['post_num2'];

      print "<h4>POST Result</h4>";

      $add1 = $a + $b;

      echo "Addition : " . $add1 . "<br>";

      $add2 = $a * $b;

      echo "Multiplication : " . $add2 . "<br>";

      $add3 = 3.14 * $a * $a;

      echo "Area of Circle : " . $add3 . "<br>";


    }



  ?>




</body>
</html>