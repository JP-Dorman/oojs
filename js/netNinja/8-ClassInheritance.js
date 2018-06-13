class User {
	constructor(name, email){
		this.name = name;
		this.email = email;
		this.score = 0;
	}

	login() {
		console.log(this.email, "logged in");
		return this;
	}

	logout() {
		console.log(this.email, "logged out");
		return this;
	}
	updateScore() {
		this.score++;
		console.log(this.name +" score is now: "+ this.score);
		return this;
	}
}

class Admin extends User {
	deleteUser(user){
		users = users.filter(u => {
			return u.email != user.email;
		});
	}
}

var userOne = new User('Ruby', 'ruby@rose.com');
var userTwo = new User('Weiss', 'weiss@schnee.com');
var admin = new Admin('Ozpin', 'Ozpin@oz.com');
var users = [userOne, userTwo, admin];

console.log(users);

admin.deleteUser(userTwo);

console.log(users);
