// You can make props private by defining them as variables in a constructor

function SecretCode() {
  var secretNum = 78;

  this.guessNum = function(num) {
    if(num > 78) {
      return "Lower";
    } else if (num < 78) {
      return "Higher";
    } else {
      return "Your guessed correct!";
    }
  }
}

var secret = new SecretCode();

// Try to peek at secret number
document.write("Value of secretNum : "+ secret.secretNum +"<br/>");

// Try to guess the number
document.write("Is 77 the secret number? " + secret.guessNum(77) +"<br/>");
document.write("Is 78 the secret number? " + secret.guessNum(78) +"<br/>");

// Try to add a method to steal the private int / secret num
SecretCode.prototype.getSecret = function() {
  return this.secretNum;
}

document.write("The secret number is: " + this.secretNum +"<br/>")
