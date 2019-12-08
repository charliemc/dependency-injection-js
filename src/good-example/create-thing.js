module.exports = ({ thingRepository, thingValidator }) => name => {
  const thing = { name };
  thingValidator.validate(thing);
  thingRepository.save(thing);
};
