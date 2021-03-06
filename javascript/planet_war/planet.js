
function Planet(id, position) {
  this.id = id;

  this.xPos = position[0];
  this.yPos = position[1];
  this.radius = 25;

  this.friendlyUnits = 0;
  this.countDown = 120;

  if (id === 0) {
    this.owner = "playerOne";
    // this.friendlyUnits = 40;
  }
  else if (id === 1) {
    this.owner = "playerTwo";
  }
  else {
    this.owner = "neutral";
  }
}

Planet.prototype.nextFrame = function () {
  this.countDown -= 1;
  if (this.countDown === 0) {
    this.friendlyUnits += 1;
    this.countDown = 120;
    if (this.owner === "neutral" && this.friendlyUnits > 10) {
      this.friendlyUnits = 10;
    }
    if (this.friendlyUnits > 50) {
      this.friendlyUnits = 50;
    }
  }
};

Planet.prototype.getTarget = function (planets) {
  let lowest = Number.POSITIVE_INFINITY;
  let tmp;
  planets.forEach(planet => {
    tmp = planet;
    if (tmp < lowest) lowest = tmp;
  });
  return lowest;
};

Planet.prototype.defend = function (num, playerName) {
  const result = this.friendlyUnits - num;
  if (result < 0) {
    this.owner = playerName;
    this.friendlyUnits = 0 - result;
    // this.countDown = 120;
  }
  else if (result >= 0) {
    this.friendlyUnits = result;
  }
};

Planet.prototype.reinforce = function (num) {
  this.friendlyUnits += num;
};

Planet.prototype.moveOut = function () {
  let units = Math.floor(this.friendlyUnits / 2);
  this.friendlyUnits -= units;
  return units;
};

module.exports = Planet;
