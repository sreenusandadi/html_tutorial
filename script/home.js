//Named Function
myFun();

function myFun() {
  var a = 10;
  var b = 20;
  var result = a + b;

  console.log(result);
}

//function Expression

var expressionFunction = function (firstName, lastName) {
  console.log(firstName + " " + lastName);
};
expressionFunction("sreenu", "sandadi");

//Anonymous function
setTimeout(function () {
  console.log("Anonymus Function");
}, 1000);
var count = 0;
document.getElementById("btn").addEventListener("click", function () {
  console.log("Clicked " + count++);
});

//Immedialy Invoked Function Expression(IIFE) or Sele Invoking Function
(function () {
  console.log("IIFE");
})();

//Constructor Function
function Person(name1, name2) {
  this.firstName = name1;
  this.lastName = name2;
}

var person1 = new Person("Sreenu", "Sandadi");
var person2 = new Person("Nishchita", "Ks");

console.log(person1.firstName, person2);
