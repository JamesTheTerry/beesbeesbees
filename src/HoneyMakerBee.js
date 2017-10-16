var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

Grub.prototype.makeHoney = function () {
  this.honeyPot++;
};

Grub.prototype.giveHoney = function () {
  this.honeyPot--;
};
