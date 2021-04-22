function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating...");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking...");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming...");
  },
};

function Person(name) {
  this.name = name;
}
mixin(Person.prototype, canEat, canWalk);

const person = new Person("Shashwat");

console.log(person);
person.eat();
person.walk();

function GoldFish() {}
mixin(GoldFish.prototype, canEat, canSwim);

const goldFish = new GoldFish();
goldFish.eat();
goldFish.swim();
