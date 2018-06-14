/*========== Pikachu : Pokemon ==========*/
function Pikachu(name, passedAttacks) {
	this.species = "Pikachu";
	this.hp = 200;
	var type = [types.Electric];
	var possibleAttacks = [
		attacks.Tackle,
		attacks.Thunderbolt,
		attacks.QuickAttack,
		attacks.Thunder,
		attacks.Swift,
	];

	// Make Pikachu extend Pokemon
	BasePokemon.apply(this, [name, type, passedAttacks, possibleAttacks]);
}


/*========== Blaziken : Pokemon ==========*/
function Blaziken(name, passedAttacks) {
	this.species = "Blaziken";
	this.hp = 300;
	var type = [types.Fire, types.Fighting];
	var possibleAttacks = [
		attacks.FirePunch,
		attacks.LowKick,
		attacks.Ember,
		attacks.HyperBeam,
		attacks.Swift,
	];

	BasePokemon.apply(this, [name, type, passedAttacks, possibleAttacks]);
}


/*========== Jolteon : Pokemon ==========*/
function Jolteon(name, passedAttacks) {
	this.species = "Jolteon";
	this.hp = 250;
	var type = [types.Electric];
	var possibleAttacks = [
		attacks.PinMissile,
		attacks.Thunderbolt,
		attacks.ThunderShock,
		attacks.ThunderFang,
		attacks.Thunder,
		attacks.Tackle,
		attacks.QuickAttack,
		attacks.DoubleKick,
		attacks.Swift,
	];

	BasePokemon.apply(this, [name, type, passedAttacks, possibleAttacks]);
}


/*========== Blastoise : Pokemon ==========*/
function Blastoise(name, passedAttacks) {
	this.species = "Blastoise";
	this.hp = 400;
	var type = [types.Water];
	var possibleAttacks = [
		attacks.Tackle,
		attacks.WaterGun,
		attacks.SkullBash,
		attacks.WaterPulse,
		attacks.HydroPump
	];

	BasePokemon.apply(this, [name, type, passedAttacks, possibleAttacks]);
}
