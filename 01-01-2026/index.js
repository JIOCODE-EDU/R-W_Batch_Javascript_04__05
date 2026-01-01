// Type Of Operator Example

/*

1. Arithmetic Operator
2. Assignement Operator
3. Comparison Operator
4. Logical Operator
5. Bitwise Operator
6. Ternary Operator
7. Unary Operator
8. Miscellaneous Operator

*/

/* 1. Arithmetic Operator */

/* Oprands */

// {
//   var a, b;

//   a = 3;
//   b = 5;

//   console.log(a + b);
//   console.log(a - b);
//   console.log(a / b);
//   console.log(a * b);
//   console.log(a % b);
//   console.log(a ** b);

//   console.log(b + a);
//   console.log(b - a);
//   console.log(b / a);
//   console.log(b * a);
//   console.log(b % a);
//   console.log(b ** a);
// }

/* 2. Assigment Operator */

// {
//   let a, b;
//   a = 5;
//   b = 4;

//   console.log(a += b); // a = a + b
//   console.log(a);
//   console.log(a -= b); // a = a - b
//   console.log(a /= b); // a = a / b
//   console.log(a *= b); // a = a * b
//   console.log(a %= b); // a = a % b
//   console.log(a **= b); // a = a**b
// }

/* Comaprision Operator */

/*

==

===

>

<

<=

>=

!=

!==

*/

// {

//   let x = 10
//   let y = "10"

//   console.log(x == y);
//   console.log(x === y);
//   console.log(x != y);
//   console.log(x !== y);
//   console.log(x < y);
//   console.log(x > y);
//   console.log(x <= y);
//   console.log(x >= y);
  
// }

/* Logical Operator */

/*

Logical AND (&)
Logical OR  (||)
Logical NOT (!)

*/

{
  // 1 , 0
  let x = true;
  let y = true;
  let z = false;

  console.log(x && y);
  console.log(x && y && z);
  console.log(x || y || z);
  console.log(!x);
  console.log(!z);
  console.log(!(z || y) && (x && !z) || !(x && y || z));

}