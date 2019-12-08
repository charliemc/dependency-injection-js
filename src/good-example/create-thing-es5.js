// Same as 'create-thing.js' but using ES5 functions
function createThing({ thingValidator, thingRepository }) {
  return function(name) {
    const thing = { name };
    thingValidator.validate(thing);
    thingRepository.save(thing);
  };
}

module.exports = createThing;
