var Grub = function() {
  // age property
  // color property
  // food property
  // eat method

  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function () {
  console.log('Chowing down on that sweet sweet ' + this.food);
};
