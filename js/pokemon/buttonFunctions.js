function buttonCreateTrainer(button) {
  var groupContainer = button.closest('.inputGrouping');
  var newTrainerName = groupContainer.querySelector('input').value;
  var errorLog = groupContainer.querySelector('.inputErrorLog');
  var quitFlag = false;


  // Switch off button right away to prevent double clicking
  button.onclick = function() { return false; }

  // If invalid text: Error log, add function back, flag to quit
  if (newTrainerName === "") {
    errorLog.innerHTML = "Trainer name cannot be empty!";
    button.onclick = function() { buttonCreateTrainer(this); };
    quitFlag = true;
  }

  // If name exists: Error log, add function back, flag to quit
  else {
    store.trainers.forEach(function(currentTrainer) {
      if (currentTrainer.name === newTrainerName) {
        errorLog.innerHTML = newTrainerName +" already exists!";
        button.onclick = function() { buttonCreateTrainer(this); };
        quitFlag = true;
      }
    });
  }

  // If quit has been flagged, quit.
  if (quitFlag === true) { return false; }

  // Add new trainer to Store object
  store.assignTrainerID(newTrainerName);

  // Add feedback tick
  var tickHTML = '<i class="material-icons tick">done</i>';
  groupContainer.querySelector('.feedbackIcon').innerHTML = tickHTML;

  // If max number of trainers added, proceed to next page
}
