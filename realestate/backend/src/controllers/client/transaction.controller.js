import {
  createTransaction,
  getTransactionId,
  getTransactionsCustomerId,
  removeTransactionId,
  updateTransaction
} from '../../services/repository/transaction.repository.js'

import {
  validateCreate,
  validateGetTransactionId,
  validateGetTransactionsCustomerId,
  validateRemoveTransactionId,
  validateUpdateTransaction
} from '../../models/validation/repository/transaction.validation.js'

import { BadRequestException } from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validateCreate.validate(req.body)
    if (error) throw new BadRequestException(error.message, error.details)

    const user = await createTransaction(value)
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

export const editTransaction = async (req, res, next) => {
  try {
    const { error, value } = validateUpdateTransaction.validate(req.body)
    if (error) throw new BadRequestException(error.message, error.details)

    const user = await updateTransaction(value)
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

export const getTById = async (req, res, next) => {
  try {
    const { error, value } = validateGetTransactionId.validate(req.body)
    if (error) throw new BadRequestException(error.message, error.details)

    const user = await getTransactionId(value)
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

export const getTByCustomerId = async (req, res, next) => {
  try {
    const { error, value } = validateGetTransactionsCustomerId.validate(req.body)
    if (error) throw new BadRequestException(error.message, error.details)

    const user = await getTransactionsCustomerId(value)
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

export const remove = async (req, res, next) => {
  try {
    const { error, value } = validateRemoveTransactionId.validate(req.body)
    if (error) throw new BadRequestException(error.message, error.details)

    const user = await removeTransactionId(value)
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
