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

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({ _id: personId }, (err, data) => {
    if (data) {
      data.favoriteFoods.push(foodToAdd);
      console.log(Person.favoriteFoods);
      data.save((err, data) => {
        if (err) return console.log(err);
        done(null, data);
      });
    } else {
      console.error(err);
    }
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({ name: personName }, { new: true }, (err, data) => {
    data.age = ageToSet; //you can include this line inside the func arguments
    if (err) return console.log(err);
    done(null, data);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove({ _id: personId }, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })// Here: 1 for ascending	order and -1 for descending order.
    .limit(2)// return array which has 5 items in it.
    .select({ age: 0 })// Here: 0 means false and thus hide name property; 1 means true so age property will show.
    .exec((err, data) => {
      if (err) return console.log(err);
      done(null, data);
    });
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
