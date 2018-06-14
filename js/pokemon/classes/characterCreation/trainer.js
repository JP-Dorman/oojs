function Trainer(name) {
  this.name = name;
  this.party = [];
  this.wins = 0;
  this.losses = 0;
  this.draw = 0;
}

Trainer.prototype.createTrainer = function(name) {
  var newTrainer = new Trainer(name);
  console.log(newTrainer);
}
