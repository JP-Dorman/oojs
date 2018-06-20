// 1 - Basic Object Oriented JavaScript
var customer = {
  name: "Billy Jean",
  speak: function() {
    return "My name is " + this.name;
  },

  address: {
    street: "123 Main St",
    city: "Croydon",
    borough: "London"
  }
};

document.write(customer.speak() + "<br/>");
document.write(customer.name + " lives at " + customer.address.street + "<br/>");

customer.address.country = "England";

document.write(customer.address.country + "<br />");


// 2 - Constructors - like classes in C#
function Person(name, street) {
  this.name = name;
  this.street = street;

  this.info = function() {
    return "My name is " + this.name + " and I live on " + this.street;
  }
}

var bobSmith = new Person("Bob Smith", "234 Street Street");

document.write(bobSmith.info() + "<br/>");
document.write("Bob is a Person = " + (bobSmith instanceof Person) + "<br/>");

function changeName(person) {
  person.name = "Sue Smith";
}

changeName(bobSmith);
document.write("Bob became " + bobSmith.name + "<br/>");

var person1 = new Person("Paul", "123 Main");
var person2 = new Person("Paul", "123 Main");

document.write("Are they equal: " + (person1 === person2) + "<br/>");
