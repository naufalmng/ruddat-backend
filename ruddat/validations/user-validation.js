import Joi from "joi";

const registerUserValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
  country: Joi.string().required(),
  gender: Joi.string().required(),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { registerUserValidation, loginValidation };
