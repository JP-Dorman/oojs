var store = new Store();

function Store(trainers, mode) {
  this.trainers = [];
}

Store.prototype.assignTrainerID = function(trainerName) {
  var newID = this.trainers.length;
  this.trainers[newID] = new Trainer(trainerName);
  console.log(this.trainers);
}
