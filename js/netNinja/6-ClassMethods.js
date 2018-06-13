class User {
	constructor(name, email){
		this.name = name;
		this.email = email;
	}

	login() {
		console.log(this.email, "logged in");
	}

	logout() {
		console.log(this.email, "logged out");
	}
}

var userOne = new User('Ruby', 'ruby@rose.com');
var userTwo = new User('Weiss', 'weiss@schnee.com');

console.log(userOne);
userOne.login();
userTwo.logout();
