import {
  createClientInfo,
  getClientInfoByEmail,
  getClientInfoById,
  removeClientInfoByEmail,
  removeClientInfoById,
  editClientInfoById
} from '../../services/repository/clientInfo.repository.js'

import {
  validateCreate,
  validateDeleteClientInfoEmail,
  validateDeleteClientInfoId,
  validateEdit,
  validateGetClientInfoEmail,
  validateGetClientInfoId
} from '../../models/validation/repository/clientInfo.validation.js'

import { BadRequestException } from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validateCreate.validate(req.body)

    if (error) throw new BadRequestException(error.message, error.details)

    const user = await createClientInfo(value)
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

    const edit = await editClientInfoById(value)
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
    const { error, value } = validateGetClientInfoId.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getClientInfoById(value)
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

export const getByEmail = async (req, res, next) => {
  try {
    const { error, value } = validateGetClientInfoEmail.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getClientInfoByEmail(value)
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

export const deleteClientInfoId = async (req, res, next) => {
  try {
    const { error, value } = validateDeleteClientInfoId.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const remove = await removeClientInfoById(value)
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

export const deleteClientInfoEmail = async (req, res, next) => {
  try {
    const { error, value } = validateDeleteClientInfoEmail.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const remove = await removeClientInfoByEmail(value)
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
