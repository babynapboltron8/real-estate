import Transaction from '../../models/repository/transaction.model.js'

import {
  validateCreate,
  validateRemoveTransactionId,
  validateGetTransactionId,
  validateGetTransactionsCustomerId,
  validateUpdateTransaction
} from '../../models/validation/repository/transaction.validation.js'

export const createTransaction = async (payload) => {
  const { error, value } = validateCreate.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const newTransaction = new Transaction(value)
    await newTransaction.save()
    return {
      success: true,
      message: 'Transaction Successfully created.',
      result: newTransaction.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const removeTransactionId = async (payload) => {
  const { error, value } = validateRemoveTransactionId.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await Transaction.findByIdAndDelete(value.id)
    if (!result) { return { success: false, message: 'Id not found', result: undefined } }

    return { success: true, message: 'Successfully Deleted', result }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getTransactionId = async (payload) => {
  const { error, value } = validateGetTransactionId.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await Transaction.findById(value)
    if (!result) { return { success: false, message: 'Id not found', result: undefined } }

    return {
      success: true,
      message: 'Transaction successfully retreived.',
      result: result.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getTransactionsCustomerId = async (payload) => {
  const { error, value } = validateGetTransactionsCustomerId.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await Transaction.find({ customerId: value.customerId })
    if (!result) {
      return {
        success: false,
        message: 'Customer Id not found',
        result: undefined
      }
    }

    return {
      success: true,
      message: 'Successfully get all customer transactions.',
      result: result.map((item) => item.toJSON())
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const updateTransaction = async (payload) => {
  const { error, value } = validateUpdateTransaction.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const transactionNeedUpdate = await Transaction.findById(value.id)
    if (!transactionNeedUpdate) {
      return {
        success: false,
        message: 'Unable to find transaction id need to update.',
        result: false
      }
    }

    transactionNeedUpdate.customerName =
      value.customerName ?? transactionNeedUpdate.customerName
    transactionNeedUpdate.amount = value.amount ?? transactionNeedUpdate.amount
    transactionNeedUpdate.paymentType =
      value.paymentType ?? transactionNeedUpdate.paymentType
    transactionNeedUpdate.status = value.status ?? transactionNeedUpdate.status
    transactionNeedUpdate.lastUpdated = new Date()
    await transactionNeedUpdate.save()

    return {
      success: true,
      message: 'Transaction successfully updated',
      result: transactionNeedUpdate.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
