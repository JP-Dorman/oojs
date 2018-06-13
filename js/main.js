	/*========== Global Vars ==========*/
	var types = {
		"Grass":{ "Name":"Grass", "Strong": [], "Weak": [], "Immune": [] },
		"Fire":{ "Name":"Fire", "Stong": [], "Weak": [], "Immune": [] },
		"Water":{ "Name":"Water", "Strong": [], "Weak": [], "immunities": [] },
		"Electric":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Fighting":{
			"atk+": [this.Normal, this.Ice, this.Dark, this.Rock, this.Steel],
			"atk-": [this.Poison, this.Flying, this.Bug, this.Psycic],
			"immunities": []
		},
		"Normal":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Fairy":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Dark":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Ghost":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Steel":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Bug":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Psycic":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Rock":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Ground":{
			"atk+": [],
			"atk-": [],
			"immunities": [this.Electric]
		},
		"Flying":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Ice":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Dragon":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		},
		"Poison":{
			"atk+": [],
			"atk-": [],
			"immunities": []
		}
	};

	types.Grass.Strong = [types.Ground, types.Rock, types.Water];
	types.Grass.Weak = [types.Bug, types.Dragon, types.Fire, types.Flying, types.Grass, types.Poison, types.Steel];
	types.Fire.Strong = [types.Bug, types.Grass, types.Ice, types.Steel];
	types.Fire.Weak = [types.Ground, types.Rock, types.Water];
	types.Water.Strong = [types.Fire];
	types.Water.Weak = [types.Grass];
	types.Electric.Strong = [this.Flying, this.Water];
	types.Electric.Weak = [this.Dragon, this.Electric, this.Grass];

console.log(types);
console.log(types.Grass);

// All attacks in game - (damage, type)
var attacks = Object.freeze({
	'Tackle':['Tackle', 10, types.Normal],
	'Thunderbolt': ['Thunderbolt', 30, types.Electric],
	'QuickAttack': ['Quick Attack', 20, types.Electric],
	'Thunder': ['Thunder', 80, types.Electric],
	'FirePunch': ['Fire Punch', 40, types.Fire],
	'LowKick': ['Low Kick', 30, types.Fighting],
	'Ember': ['Ember', 20, types.Fire],
	'HyperBeam': ['Hyper Beam', 100, types.Normal],
	'Bubble': ['Bubble', 10, types.Water],
	'Swift': ['Swift', 20, types.Normal],
});

/*========== Pokemon base class ==========*/
function Pokemon(name, type) {
	this.name = name;
	this.type1 = type[0];
	if (typeof type[1] !== 'undefined') {
		this.type2 = type[1];
	}
}

Pokemon.prototype.deleteUser = function(){
	console.log(userToDelete);
	users = users.filter(user => {
		return user.email != userToDelete.email;
	});
	console.log(users);
};


/*========== Pikachu : Pokemon ==========*/
function Pikachu(name, passedAttacks) {

	var type = [types.Electric];
	var possibleAttacks = [
		attacks.Tackle,
		attacks.Thunderbolt,
		attacks.QuickAttack,
		attacks.Thunder,
		attacks.Swift,
	];
	var attackList = [];

	// Make Pikachu extend Pokemon
	Pokemon.apply(this, [name, type]);

	// Compare possible attacks to selected and check validity
	passedAttacks.forEach(function(passedAttack) {
		possibleAttacks.forEach(function(possibleAttack) {
			if (passedAttack === possibleAttack) { attackList.push(passedAttack); }
		});
	});
	this.attackList = attackList;
	console.log("Pokemon successfully created!");
}


/*========== Blaziken : Pokemon ==========*/
function Blaziken(name, attacks) {
	var type = [types.Fire, types.Fighting];
	var possibleAttacks = [
		attacks.Fire_Punch,
		attacks.Low_Kick,
		attacks.Ember,
		attacks.Hyper_Beam,
		attacks.Swift,
	]
}



// Methods


// Instances
var pikachu = new Pikachu("Pikachu", [
	attacks.Tackle,
	attacks.Thunderbolt,
	attacks.QuickAttack,
	attacks.Thunder
]);

/*var blaziken = new pokemon("Blaziken", [types.electric, types.fighting], [
	["Fire Punch", 40, types.fire],
	["Low Kick", 30, types.fighting],
	["Ember", 20, types.fire],
	["Hyper Beam", 100, types.normal]
]);*/

console.log(pikachu);
//console.log(blaziken);
