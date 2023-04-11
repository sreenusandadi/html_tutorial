// var sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// var personName = function () {
//   return "Sreenu";
// };

// console.log(sum(3, 4));

// var name = personName();
// console.log(name);

// console.log(x);
// console.log(squre(6));

// var x = 2;
// console.log(x);

// function squre(a) {
//   var result = a * a;
//   return result;
// }

// var squre2 = squre(2);
// var squre4 = squre(4);
// var x = 20;
// one();
// two();
// console.log(x);

// function one() {
//   var x = 40;
//   return (function () {
//     console.log(x * x);
//   })();
// }

// function two() {
//   console.log(x);
// }
// var x;
// function a() {
//   var x = 10;
//   c();
//   function c() {
//     console.log(x);
//   }
// }
// a();

// console.log(x);
// x = 20;

function sum() {
  var x = 20;
  add();
  function add() {
    var y = 10;
    console.log(x + y + z);
  }
}
var z = 30;

sum();
