import {
  createPosition,
  getAllPositions
} from '../../services/repository/position.repository.js'
import { validatePosition } from '../../models/validation/controllers/adminPositionValidation.js'
import {
  BadRequestException
} from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validatePosition.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const createRes = await createPosition({
      name: value.name,
      created_by: req.user.id
    })
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

export const getAll = async (req, res, next) => {
  try {
    const getAllRes = await getAllPositions()
    if (!getAllRes.success) {
      throw new BadRequestException(getAllRes.message, undefined)
    }

    res.json({
      success: true,
      result: getAllRes.result,
      message: getAllRes.message
    })
  } catch (error) {
    next(error)
  }
}
