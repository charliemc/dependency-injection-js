module.exports = {
  validate: thing => {
    return thing && typeof thing.name === 'string' && thing.name.length > 0;
  }
};
