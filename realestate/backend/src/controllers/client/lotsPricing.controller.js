import {
  createLotsPricing,
  editLotsPricing,
  deleteLotsPricing,
  getLotsPricingById
} from '../../services/repository/lotsPricing.repository.js'

import {
  validateCreate,
  validateDeleteLotsPricing,
  validateEdit,
  validateGetLotsPricing
} from '../../models/validation/repository/lotsPricing.validation.js'

import { BadRequestException } from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validateCreate.validate(req.body)

    if (error) throw new BadRequestException(error.message, error.details)

    const user = await createLotsPricing(value)
    if (!user.success) throw new BadRequestException(user.message, undefined)

    res.json({
      success: true,
      result: user.result,
      message: user.message
    })
  } catch (error) {
    next(error)
  }
}

export const edit = async (req, res, next) => {
  try {
    const { error, value } = validateEdit.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const edit = await editLotsPricing(value)
    if (!edit.success) throw new BadRequestException(edit.message, undefined)
    res.json({
      success: true,
      result: edit.result,
      message: edit.message
    })
  } catch (error) {
    next(error)
  }
}

export const get = async (req, res, next) => {
  try {
    const { error, value } = validateGetLotsPricing.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getLotsPricingById(value)
    if (!result.success) {
      throw new BadRequestException(result.message, undefined)
    }

    res.json({
      success: true,
      result: result.result,
      message: result.message
    })
  } catch (error) {
    next(error)
  }
}

export const deleteById = async (req, res, next) => {
  try {
    const { error, value } = validateDeleteLotsPricing.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const remove = await deleteLotsPricing(value)
    if (!remove.success) {
      throw new BadRequestException(remove.message, undefined)
    }

    res.json({
      success: true,
      result: remove.result,
      message: remove.message
    })
  } catch (error) {
    next(error)
  }
}
