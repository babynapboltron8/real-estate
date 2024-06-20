import joi from 'joi'

export const validateCreate = joi.object({
  firstName: joi.string().required().min(2),
  lastName: joi.string().required().min(2),
  positionId: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
  roles: joi.array().items(joi.string()).required(),
  createdBy: joi.string().required()
})

export const validateUpdate = joi.object({
  _id: joi.string().required(),
  firstName: joi.string().optional(),
  lastName: joi.string().optional(),
  positionId: joi.string().optional(),
  password: joi.string().optional(),
  roles: joi.array().items(joi.string()).optional(),
  updatedBy: joi.string().required()
})

export const validateSignIn = joi.object({
  username: joi.string().required(),
  password: joi.string().required()
})

export const validateGetUserName = joi.object({
  username: joi.string().required()
})

export const validateForgotPassword = joi.object({
  username: joi.string().required(),
  password: joi.string().required()
})

export const validateChangePassword = joi.object({
  username: joi.string().required(),
  oldpassword: joi.string().required(),
  newpassword: joi.string().required()
})
