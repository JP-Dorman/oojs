class User {
	constructor(name, email){
		this.name = name;
		this.email = email;
		this.score = 0;
	}

	login() {
		console.log(this.email, "logged in");

		// Returning the User for use by the next method in the chain
		return this;
	}

	logout() {
		console.log(this.email, "logged out");

		// Returning the User for use by the next method in the chain
		return this;
	}
	updateScore() {
		this.score++;
		console.log(this.name +" score is now: "+ this.score);

		// Returning the User for use by the next method in the chain
		return this;
	}
}

var userOne = new User('Ruby', 'ruby@rose.com');
var userTwo = new User('Weiss', 'weiss@schnee.com');

// Using the method chain
userOne.login().updateScore().updateScore().logout();
userTwo.logout();
