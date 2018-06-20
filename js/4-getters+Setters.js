// Correct method of getting and setting
var address = {
  street: "No Street",
  city: "No City",
  state: "No State",

  getAddress() {
    return this.street +", "+ this.city +", "+ this.state;
  },

  set setAddress(theAddress) {
    var parts = theAddress.toString().split(", ");
    this.street = parts[0] || "";
    this.city = parts[1] || "";
    this.city = parts[2] || "";
  }
}

address.setAddress = "123 main St, Croydon, London";

document.write("Address: "+ address.getAddress() +"<br/>");

document.write("City: "+ address.city +"<br/>");


// Deprecated method of getting and setting
document.write("<br/><br/>Deprecated method of getting and setting <br/>");
