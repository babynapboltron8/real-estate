import ClientList from '../../models/repository/clientList.model.js'

import {
  validateCreate,
  validateDeleteClientById,
  validateEdit,
  validateGetClientById
} from '../../models/validation/repository/clientList.validation.js'

export const getAllClient = async (payload) => {
  try {
    const result = await ClientList.find()
    if (!result) {
      return {
        success: false,
        message: 'Unable to get all clients.',
        result: undefined
      }
    }
    return {
      success: true,
      message: 'Successfully get all clients.',
      result: result.map((item) => item.toJSON())
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
export const getClientById = async (payload) => {
  const { error, value } = validateGetClientById.validate(payload)
  console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await ClientList.findById(value)
    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return {
      success: true,
      message: 'Client successfully retreived.',
      result: result.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
export const createClient = async (payload) => {
  const { error, value } = validateCreate.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const newUser = new ClientList(value)
    await newUser.save()
    return {
      success: true,
      message: 'Client successfully created.',
      result: newUser.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const removeClientById = async (payload) => {
  const { error, value } = validateDeleteClientById.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await ClientList.findByIdAndDelete(value.id)
    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return { success: true, message: 'Successfully Deleted', result }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const editClientById = async (payload) => {
  const { error, value } = validateEdit.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const clientNeedUpdate = await ClientList.findById(value.id)
    if (!clientNeedUpdate) {
      return {
        success: false,
        message: 'Unable to find client need to update.',
        result: false
      }
    }

    clientNeedUpdate.name = value.name ?? clientNeedUpdate.name
    clientNeedUpdate.agentName = value.agentName ?? clientNeedUpdate.agentName
    clientNeedUpdate.paymentStatus =
      value.paymentStatus ?? clientNeedUpdate.paymentStatus
    clientNeedUpdate.lastUpdated = new Date()
    await clientNeedUpdate.save()

    return {
      success: true,
      message: 'Client successfully updated',
      result: clientNeedUpdate.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
