/*==================== Define Types ====================*/
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


/*==================== Define Strengths / Weaknesses ====================*/
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


/*==================== Freeze to emulate enum ====================*/
var types = Object.freeze(types);
console.log(types);
