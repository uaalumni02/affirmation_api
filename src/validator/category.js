const Joi = require("@hapi/joi");

const schema = Joi.object({
  category: Joi.string().min(2).max(30).required(),
});

export default schema;
