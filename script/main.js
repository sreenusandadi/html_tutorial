// var x = 10;

// x -= 3; //10
// console.log(x);

// var a = 5;

// a <<= 2;

// console.log(a);

// ==, ===, !=, !==, <, >, <=, >=

// console.log(20 < 20);

// var x = 10;

var y = 2;

var result = x * y * 2;

// console.log(result);

// const adventurer = {
//   name: "Alice",
//   cat: {
//     name: "Dinah",
//   },
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName);

// var isEqualToTen = 20;

// var y = isEqualToTen === 10 ? 10 : 20;

// console.log(y);

// var x = 10;

// var y = x++;

// console.log(y, x);

// var x = 10;
// var y;
// if (x == 10 && !(typeof x == "string")) {
//   y = 20;
// } else {
//   y = 10;
// }

// console.log(y);

// var name = 10 + "10";

// console.log(typeof name);
function Person() {
  this.firstname = "Sreenu";
  this.age = 32;
}

function Employee() {
  this.firstname = "Sreenu";
  this.age = 32;
}

var details = new Person();

if (details instanceof Person) {
  details.age = 20;
}

console.log(details);
