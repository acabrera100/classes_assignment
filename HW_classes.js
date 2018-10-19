// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Human.prototype.ageOneYear = function() {
//   this.age++;
//   return `${this.age}`;
// };
// Human.prototype.eating = function() {
//   console.log("mmm, mmm, mmm, I'm love'n it");
// };
// let WebDev = new Human("Ander Wiggins", 28);
// let Salesman = new Human("Dwight", 42);
// let PretzelGuy = new Human("Stanley the Manley", 55);
//
// let Humans = [WebDev, Salesman, PretzelGuy];
// console.log(PretzelGuy.age);
// WebDev.ageOneYear();
// console.log(WebDev.age);
// WebDev.eating();

//2
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};
Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};
Vector.prototype.getLength = function(vector) {
  return Math.sqrt(this.x ** 2 + this.y ** 2);
};

let A = new Vector(1, 2);
let B = new Vector(2, 3);
let O = new Vector(0, 0);
let C = new Vector(3, 4);

console.log(A.plus(B));
console.log(B.minus(O));

console.log(C.getLength()); // => 5
