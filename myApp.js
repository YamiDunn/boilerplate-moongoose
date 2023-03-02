//const mySecret = process.env['MONGO_URI'];
require("dotenv").config();
let express = require("express");
const mongoose = require("mongoose");
let validator = require("validator");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

let personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  var OscarGil = new Person({
    name: "Oscar Gil",
    age: 30,
    favoriteFoods: ["eggs", "Fish", "All types of meal"],
  });
  OscarGil.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  var arrayOfPeople = [
    {
      name: "Pedro Navaja",
      age: 69,
      favoriteFoods: ["Chile", "Raw fish", "vegetables"],
    },
    {
      name: "Carlos Gil",
      age: 40,
      favoriteFoods: ["eggs", "Fish", "Cheese"],
    },
    {
      name: "Sebastian Gallego",
      age: 28,
      favoriteFoods: ["Bread", "Meat", "Cereal"],
    },
  ];
  var createManyPeople = (arrayOfPeople, done) => {
      Person.create(arrayOfPeople, (err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
  };
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
