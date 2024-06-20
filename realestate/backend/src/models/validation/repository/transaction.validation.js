import joi from 'joi'

export const validateCreate = joi.object({
  customerId: joi.string().required(),
  customerName: joi.string().required().min(5),
  amount: joi.number().required(),
  paymentType: joi.string().required(),
  status: joi.string().required(),
  dateCreated: joi.string().required(),
  lastUpdated: joi.string()
})

export const validateGetTransactionsCustomerId = joi.object({
  customerId: joi.string().required()
})

export const validateGetTransactionId = joi.object({
  _id: joi.string().required()
})

export const validateUpdateTransaction = joi.object({
  _id: joi.string().required(),
  customerName: joi.string(),
  amount: joi.number().required(),
  paymentType: joi.string().required(),
  status: joi.string().required(),
  lastUpdated: joi.string().required()
})

export const validateRemoveTransactionId = joi.object({
  _id: joi.string().required()
})
