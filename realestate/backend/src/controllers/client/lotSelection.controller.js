import {
  createLotSelection,
  getLotSelectionById,
  removeLotSelectionById,
  editLotSelectionByIdBlockandLot
} from '../../services/repository/lotSelection.repository.js'

import {
  validateCreate,
  validateEditLotByIdBlockandLot,
  validateGetLotById,
  validateRemoveLotSelectionById
} from '../../models/validation/repository/lotSelection.validation.js'
import { BadRequestException } from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validateCreate.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const createRes = await createLotSelection(value)
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

export const getLotId = async (req, res, next) => {
  try {
    const { error, value } = validateGetLotById.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getLotSelectionById(value)
    res.json({
      success: true,
      result: result.result,
      message: result.message
    })
  } catch (error) {
    next(error)
  }
}

export const editLotIdBlockLot = async (req, res, next) => {
  try {
    const { error, value } = validateEditLotByIdBlockandLot.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }
    const edit = await editLotSelectionByIdBlockandLot(value)
    res.json({
      success: true,
      result: edit.result,
      message: edit.message
    })
  } catch (error) {
    next(error)
  }
}

export const removeLotId = async (req, res, next) => {
  try {
    const { error, value } = validateRemoveLotSelectionById.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }
    const remove = await removeLotSelectionById(value)
    res.json({
      success: true,
      result: remove.result,
      message: remove.message
    })
  } catch (error) {
    next(error)
  }
}
