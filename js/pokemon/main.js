var Pikachu1 = new Pikachu("Sparky", [
	attacks.Tackle,
	attacks.Thunderbolt,
	attacks.QuickAttack,
	attacks.Thunder
]);

var Blaziken1 = new Blaziken("Kix", [
	attacks.FirePunch,
	attacks.LowKick,
	attacks.Ember,
	attacks.Swift,
]);

var Jolteon1 = new Jolteon("Dash", [
	attacks.ThunderFang,
	attacks.PinMissile,
	attacks.DoubleKick,
	attacks.QuickAttack,
]);

var Blastoise1 = new Blastoise("Chunk", [
	attacks.SkullBash,
	attacks.WaterPulse,
	attacks.HydroPump,
	attacks.Tackle,
]);

var red = new Trainer("red", [Pikachu1, Blaziken1]);
var blue = new Trainer("blue", [Jolteon1, Blastoise1]);

console.log(red);
console.log(blue);

var battle1 = new Battle([red, blue], "vs");

battle1.attackEnemy(attacks.QuickAttack.name, red.party[0], blue.party[0]);
