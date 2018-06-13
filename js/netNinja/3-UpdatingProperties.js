var userOne = {
 	email: 'weiss@schnee.com',
	name: 'Weiss',
	login() {
		console.log(this.email, 'has logged in');
	},
	logout(){
		console.log(this.email, 'has logged out');
	}
};

userOne.name = "Ruby";

console.log(userOne.email);
