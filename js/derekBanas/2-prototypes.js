// 1 - Wrting your own custom functions / objects
function getSum(num1, num2) {
  return num1 + num2;
}

document.write("Num of arguments: " + getSum.length +"<br/>");


// 2 - Using prototypes to add to an object
function Mammal(name) {
  // Property
  this.name = name;

  // Method
  this.getInfo = function() {
    return "This mammals name is: "+ this.name;
  }
}

Mammal.prototype.sound = "Grrrr";

Mammal.prototype.makeSound = function() {
  return this.name +" says "+ this.sound;
}

var grover = new Mammal("Grover");

document.write(grover.makeSound() +"<br/>");

for(var prop in grover) {
  document.write(prop +" : "+ grover[prop] +"<br/>");
}

//
document.write("name Property of grover: "+ grover.hasOwnProperty("name")
  +"<br/>");

document.write("sound Property of grover: "+ grover.hasOwnProperty("sound")
    +"<br/>");


// Adding functionality to JavaScript default Array
// DO NOT DO THIS IN PRODUCTION.
Array.prototype.inArray = function inArray(value) {
  for(i = 0; i < this.length; i++) {
    if(this[i] === value) {
      return true;
    }
  }
  return false;
}

var sampArray = [1,2,3,4,5];

document.write("3 in array: "+ sampArray.inArray(3) +"<br/>");
