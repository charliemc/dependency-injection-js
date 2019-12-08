const thingRepository = require('./fake-thing-repository');
const thingValidator = require('./thing-validator');

module.exports = name => {
  const thing = { name };
  thingValidator.validate(thing);
  thingRepository.save(thing);
};
