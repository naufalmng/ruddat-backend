import Joi from 'joi'

const registerUserValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required()
})

export { registerUserValidation }
