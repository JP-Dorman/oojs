/*==================== Pokemon base class ====================*/
function BasePokemon(name, type, passedAttacks, possibleAttacks) {
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
