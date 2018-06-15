function buttonCreateTrainer(button) {
  var newTrainerName = button.closest('.inputGrouping').querySelector('input').value;
  admin.assignTrainerID(newTrainerName);
}
