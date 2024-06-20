import {
  createClient,
  getAllClient,
  getClientById,
  removeClientById,
  editClientById
} from '../../services/repository/clientList.repository.js'

import {
  validateCreate,
  validateDeleteClientById,
  validateEdit,
  validateGetClientById
} from '../../models/validation/repository/clientList.validation.js'

import { BadRequestException } from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validateCreate.validate(req.body)

    if (error) throw new BadRequestException(error.message, error.details)

    const user = await createClient(value)
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

export const editById = async (req, res, next) => {
  try {
    const { error, value } = validateEdit.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const edit = await editClientById(value)
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

export const getById = async (req, res, next) => {
  try {
    const { error, value } = validateGetClientById.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getClientById(value)
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

export const getAll = async (req, res, next) => {
  try {
    const result = await getAllClient()
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

export const deleteClient = async (req, res, next) => {
  try {
    const { error, value } = validateDeleteClientById.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const remove = await removeClientById(value)
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
