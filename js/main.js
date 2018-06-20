/*==================== All Pokemon types ====================*/
var types = {
	"Grass":{ "Name": "Grass", "Strong": [], "Weak": [], "Immune": [] },
	"Fire":{ "Name": "Fire", "Stong": [], "Weak": [], "Immune": [] },
	"Water":{ "Name": "Water", "Strong": [], "Weak": [], "immunities": [] },
	"Electric":{ "Name": "Electric", "Strong": [], "Weak": [], "immunities": [] },
	"Fighting":{ "Name": "Fighting", "Strong": [], "Weak": [], "immunities": [] },
	"Normal":{ "Name": "Normal", "Strong": [], "Weak": [], "immunities": [] },
	"Fairy":{ "Name": "Fairy", "Strong": [], "Weak": [], "immunities": [] },
	"Dark":{ "Name": "Dark", "Strong": [], "Weak": [], "immunities": [] },
	"Ghost":{ "Name": "Ghost", "Strong": [], "Weak": [], "immunities": [] },
	"Steel":{ "Name": "Steel", "Strong": [], "Weak": [], "immunities": [] },
	"Bug":{ "Name": "Bug", "Strong": [], "Weak": [], "immunities": [] },
	"Psycic":{ "Name": "Psycic", "Strong": [], "Weak": [], "immunities": [] },
	"Rock":{ "Name": "Rock", "Strong": [], "Weak": [], "immunities": [] },
	"Ground":{ "Ground": "Fighting", "Strong": [], "Weak": [], "immunities": [] },
	"Flying":{ "Name": "Flying", "Strong": [], "Weak": [], "immunities": [] },
	"Ice":{ "Name": "Flying", "Strong": [], "Weak": [], "immunities": [] },
	"Dragon":{ "Name": "Dragon", "Strong": [], "Weak": [], "immunities": [] },
	"Poison":{ "Name": "Poison", "Strong": [], "Weak": [], "immunities": [] },
};

types.Grass.Strong = [types.Ground, types.Rock, types.Water];
types.Grass.Weak = [types.Bug, types.Dragon, types.Fire, types.Flying, types.Grass, types.Poison, types.Steel];
types.Fire.Strong = [types.Bug, types.Grass, types.Ice, types.Steel];
types.Fire.Weak = [types.Ground, types.Rock, types.Water];
types.Water.Strong = [types.Fire];
types.Water.Weak = [types.Grass];
types.Electric.Strong = [types.Flying, types.Water];
types.Electric.Weak = [types.Dragon, types.Electric, types.Grass];
types.Fighting.Strong = [types.Normal, types.Ice, types.Dark, types.Rock, types.Steel];
types.Fighting.Strong = [types.Poison, types.Flying, types.Bug, types.Psycic];

var types = Object.freeze(types);
console.log(types);

/*==================== All Pokemon attacks ====================*/
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

/*==================== Pokemon base class ====================*/
function Pokemon(name, type, passedAttacks, possibleAttacks) {
	this.name = name;
	this.type1 = type[0];
	if (typeof type[1] !== 'undefined') {
		this.type2 = type[1];
	}

	// Compare possible attacks to selected and check validity
	var attackList = [];

	passedAttacks.forEach(function(passedAttack) {
		possibleAttacks.forEach(function(possibleAttack) {
			if (passedAttack === possibleAttack) { attackList.push(passedAttack); }
		});
	});
	this.attackList = attackList;
}

// Attack
Pokemon.prototype.Attack = function(attack, user, enemy){

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

	// Make Pikachu extend Pokemon
	Pokemon.apply(this, [name, type, passedAttacks, possibleAttacks]);
}


/*========== Blaziken : Pokemon ==========*/
function Blaziken(name, passedAttacks) {
	var type = [types.Fire, types.Fighting];
	var possibleAttacks = [
		attacks.FirePunch,
		attacks.LowKick,
		attacks.Ember,
		attacks.HyperBeam,
		attacks.Swift,
	];

	Pokemon.apply(this, [name, type, passedAttacks, possibleAttacks]);
}


/*==================== Instances ====================*/
var pikachu = new Pikachu("Pikachu", [
	attacks.Tackle,
	attacks.Thunderbolt,
	attacks.QuickAttack,
	attacks.Thunder
]);

var blaziken = new Blaziken("Blaziken", [
	attacks.FirePunch,
	attacks.LowKick,
	attacks.Ember,
	attacks.Swift,
]);

console.log(pikachu);
console.log(blaziken);
