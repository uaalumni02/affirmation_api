const Joi = require("@hapi/joi");

const schema = Joi.object({
  affirmation: Joi.string().min(2).max(1000).required(),
  userName: Joi.objectId(),
  category: Joi.objectId(),
  isFavorite: Joi.boolean()
});

export default schema;