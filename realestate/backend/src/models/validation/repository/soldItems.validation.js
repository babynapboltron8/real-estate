import Joi from 'joi'

// Joi schema for the item lots
const ItemLotJoiSchema = Joi.object({
  _id: Joi.string().required(),
  blockName: Joi.string().required(),
  lotName: Joi.string().required(),
  occupied: Joi.boolean().required()
})

// Joi schema for sold items
export const validateCreateSoldItem = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  date: Joi.date().required(),
  status: Joi.string().valid('Reserved', 'Pending', 'Approved').required(),
  itemLots: Joi.array().items(ItemLotJoiSchema).required(),
  dateCreated: Joi.string(),
  overAllTotal: Joi.number().required()
})

export const validateGetSoldItemByEmail = Joi.object({
  email: Joi.string().required()
})

export const validateGetSoldItemById = Joi.object({
  _id: Joi.string().required
})

export const validateEditSoldItem = Joi.object({
  _id: Joi.string().required,
  name: Joi.string(),
  email: Joi.string(),
  status: Joi.string().valid('Reserved', 'Pending', 'Approved').required(),
  itemLots: Joi.array().items(ItemLotJoiSchema).required(),
  dateUpdated: Joi.string(),
  overAllTotal: Joi.number()
})

export const valiteRemoveSoldItemById = Joi.object({
  _id: Joi.string().required
})
