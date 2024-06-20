import joi from 'joi'

export const validateCreate = joi.object({
  name: joi.string().required().min(5),
  email: joi.string().required(),
  password: joi.string().required(),
  mobileNumber: joi.string().required(),
  validId: joi.string(),
  dateCreated: joi.string().required(),
  lastUpdated: joi.string()
})
export const validateEdit = joi.object({
  _id: joi.string().required(),
  name: joi.string().min(5),
  email: joi.string(),
  password: joi.string(),
  mobileNumber: joi.string(),
  validId: joi.string(),
  lastUpdated: joi.string()
})

export const validateGetClientInfoId = joi.object({
  _id: joi.string().required()
})

export const validateGetClientInfoEmail = joi.object({
  email: joi.string().required()
})

export const validateDeleteClientInfoId = joi.object({
  _id: joi.string().required()
})

export const validateDeleteClientInfoEmail = joi.object({
  _id: joi.string().required()
})
