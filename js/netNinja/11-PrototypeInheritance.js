function User(name, email){
	this.email = email;
	this.name = name;
	this.online = false;
}

User.prototype.login = function(){
	this.online = true;
	console.log(this.email, 'has logged in');
}

function Admin(...args) {
	console.log('args: ');
	console.log(args);

	// Run User function, passing in our admin via "this" and an array of parameters
	User.apply(this, args);
	this.role = 'I iz admin boiiii';
}

// Create new object for admin prototype and copy user prototype as child
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(userToDelete){
	console.log(userToDelete);
	users = users.filter(user => {
		return user.email != userToDelete.email;
	});
	console.log(users);
};

var userOne = new User('Ruby', 'ruby@rose.com');
var userTwo = new User('Weiss', 'weiss@schnee.com');
var admin = new Admin("Ozpin", 'ozpin@ozpin.com');
var users = [userOne, userTwo, admin];

console.log(userOne);
console.log(admin);
