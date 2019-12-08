const thingRepository = require('./fake-thing-repository');
const thingValidator = require('./thing-validator');

module.exports = {
  createThing: require('./create-thing')({ thingRepository, thingValidator })
};
