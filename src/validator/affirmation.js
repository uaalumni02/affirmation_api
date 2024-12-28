const Joi = require("@hapi/joi");

const schema = Joi.object({
  affirmation: Joi.string().min(2).max(1000).required(),
});

export default schema;