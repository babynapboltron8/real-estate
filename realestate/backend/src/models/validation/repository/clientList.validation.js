import joi from 'joi'

export const validateCreate = joi.object({
  name: joi.string().required().min(5),
  agentName: joi.string(),
  paymentStatus: joi.string().required(),
  dateCreated: joi.string().required(),
  lastUpdated: joi.string().required()
})

export const validateEdit = joi.object({
  _id: joi.string().required(),
  name: joi.string().min(5),
  dateRegistered: joi.string(),
  agentName: joi.string(),
  paymentStatus: joi.string(),
  lastUpdated: joi.string()
})

export const validateGetClientById = joi.object({
  _id: joi.string().required()
})

export const validateDeleteClientById = joi.object({
  _id: joi.string().required()
})
