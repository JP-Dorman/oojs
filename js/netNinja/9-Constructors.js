function User(email, name){
	this.email = email;
	this.name = name;
	this.online = false;
	this.login = function(){
		console.log(this.email, 'has logged in');
	}
}

var userOne = new User('Ruby', 'ruby@rose.com');
var userTwo = new User('Weiss', 'weiss@schnee.com');

console.log(userOne);
userTwo.login();
