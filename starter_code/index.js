const Elevator = require('./elevator.js');
const Person = require('./person.js');

var elevator = new Elevator();
var person = new Person("Max", 2,0);
var person2 = new Person("Ju", 9,0);
var person3 = new Person("BOB", 3,5);
elevator.call(person);
elevator.call(person2);
elevator.log();
elevator.update(person)
elevator.floorUp(person3)
elevator.update(person3)