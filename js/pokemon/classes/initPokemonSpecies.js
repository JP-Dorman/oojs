/*========== Pikachu : Pokemon ==========*/
function Pikachu(name, passedAttacks) {
	this.species = "Pikachu";
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
