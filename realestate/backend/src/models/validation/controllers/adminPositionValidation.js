import joi from 'joi'

export const validatePosition = joi.object({
  name: joi.string().required()
})
