function Battle(trainers, mode) {
  this.trainer1 = trainers[0];
  this.trainer2 = trainers[1];

  console.log("Battle Start!");
}

Battle.prototype.attackEnemy = function(move, user, enemy) {
  console.log(user.name +" used "+ move);
}
