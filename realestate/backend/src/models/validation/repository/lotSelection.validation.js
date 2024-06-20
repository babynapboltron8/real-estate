import joi from 'joi'

// Joi schema for 'lot'
const lotJoiSchema = joi.object({
  name: joi.string().required(),
  occupied: joi.boolean().required()
})

// Joi schema for 'block'
const blockJoiSchema = joi.object({
  name: joi.string().required(),
  lots: joi.array().items(lotJoiSchema).required()
})

// Joi schema for 'lotSelection'
export const validateCreate = joi.object({
  name: joi.string().required().min(5),
  imageSrc: joi.string().required(),
  blocks: joi.array().items(blockJoiSchema).required(), // Include 'blocks' in validation
  created_by: joi.string().required()
})

export const validateGetLotById = joi.object({
  _id: joi.string().required()
})

export const validateRemoveLotSelectionById = joi.object({
  _id: joi.string().required()
})

export const validateEditLotByIdBlockandLot = joi.object({
  _id: joi.string().required(),
  blockName: joi.string().required(),
  lotName: joi.string().required(),
  occupied: joi.string().required()
})

export const validateUpload = joi.object({
  base64String: joi.string().required()
})
