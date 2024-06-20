import {
  createSoldItem,
  getSoldItemByEmail,
  removeSoldItemById,
  editSoldItem,
  getSoldItemById
} from '../../services/repository/soldItems.repository.js'

import {
  validateCreateSoldItem,
  validateEditSoldItem,
  validateGetSoldItemByEmail,
  validateGetSoldItemById,
  valiteRemoveSoldItemById
} from '../../models/validation/repository/soldItems.validation.js'
import { BadRequestException } from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validateCreateSoldItem.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const createRes = await createSoldItem(value)
    if (!createRes.success) {
      throw new BadRequestException(createRes.message, undefined)
    }
    res.json({
      success: true,
      result: createRes.result,
      message: createRes.message
    })
  } catch (error) {
    next(error)
  }
}

export const getSoldItemId = async (req, res, next) => {
  try {
    const { error, value } = validateGetSoldItemById.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getSoldItemById(value)
    res.json({
      success: true,
      result: result.result,
      message: result.message
    })
  } catch (error) {
    next(error)
  }
}

export const getSoldItemEmail = async (req, res, next) => {
  try {
    const { error, value } = validateGetSoldItemByEmail.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getSoldItemByEmail(value)
    res.json({
      success: true,
      result: result.result,
      message: result.message
    })
  } catch (error) {
    next(error)
  }
}

export const edit = async (req, res, next) => {
  try {
    const { error, value } = validateEditSoldItem.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }
    const edit = await editSoldItem(value)
    res.json({
      success: true,
      result: edit.result,
      message: edit.message
    })
  } catch (error) {
    next(error)
  }
}

export const deleteSoldItemId = async (req, res, next) => {
  try {
    const { error, value } = valiteRemoveSoldItemById.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }
    const remove = await removeSoldItemById(value)
    res.json({
      success: true,
      result: remove.result,
      message: remove.message
    })
  } catch (error) {
    next(error)
  }
}
