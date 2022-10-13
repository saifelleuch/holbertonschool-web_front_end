function studentHogwarts() {
    var privateScore = 0;
    var name = null;
    function changeScoreBy(points) {
      privateScore += points;
    }
    return {
      setName(newName) {
        name = newName;
      },
      rewardStudent() {
        changeScoreBy(1);
      },
      penalizeStudent() {
        changeScoreBy(-1);
      },
      getScore() {
        return name + ': ' + privateScore;
      },
    };
  }
  const harry = new studentHogwarts();
  harry.setName('Harry');
  for (let x = 0; x < 4; x++) {
    harry.rewardStudent();
  }
  console.log(harry.getScore());
  const draco = new studentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  for (let x = 0; x < 3; x++) {
    draco.penalizeStudent();
  }
  console.log(draco.getScore());