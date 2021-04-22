let person = { name: "Shashwat" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});

// writable: if false cannot change the value for that key
person.name = "Hey";
console.log(person);

// enumerable: if false will not enumerate through that particular key
console.log(Object.keys(person));

// configurable: if false cannot delete that particular key value pair
delete person.name;
console.log(person);
