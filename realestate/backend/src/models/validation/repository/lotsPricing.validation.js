import joi from 'joi'

export const validateCreate = joi.object({
  type: joi.string().required(),
  squareMeter: joi.string().required(),
  memorialType: joi.string(),
  paymentType: joi.string().required(),
  percentLess: joi.number(),
  percentInterest: joi.number(),
  numberYears: joi.number(),
  monthlyAmortization: joi.number(),
  totalContractPrice: joi.number(),
  dateCreated: joi.string().required()
})

export const validateEdit = joi.object({
  _id: joi.string().required(),
  type: joi.string().required(),
  squareMeter: joi.string().required(),
  memorialType: joi.string(),
  paymentType: joi.string().required(),
  percentLess: joi.number(),
  percentInterest: joi.number(),
  numberYears: joi.number(),
  monthlyAmortization: joi.number(),
  totalContractPrice: joi.number(),
  lastUpdated: joi.string().required()
})

export const validateGetLotsPricing = joi.object({
  _id: joi.string().required()
})

export const validateDeleteLotsPricing = joi.object({
  _id: joi.string().required()
})
