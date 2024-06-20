import joi from 'joi'

export const validateCreate = joi.object({
  name: joi.string().required().min(3),
  created_by: joi.string().required()
})
