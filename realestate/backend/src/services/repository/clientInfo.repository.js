import ClientInfo from '../../models/repository/clientInfo.model.js'

import {
  validateCreate,
  validateDeleteClientInfoEmail,
  validateDeleteClientInfoId,
  validateEdit,
  validateGetClientInfoEmail,
  validateGetClientInfoId
} from '../../models/validation/repository/clientInfo.validation.js'

export const createClientInfo = async (payload) => {
  const { error, value } = validateCreate.validate(payload)
  // console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const newClient = new ClientInfo(value)
    await newClient.save()
    return {
      success: true,
      message: 'Client Info successfully created.',
      result: newClient.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const editClientInfoById = async (payload) => {
  const { error, value } = validateEdit.validate(payload)
  // console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const clientInfoNeedUpdate = await ClientInfo.findById(value.id)
    if (!clientInfoNeedUpdate) {
      return {
        success: false,
        message: 'Unable to find client info that need to update.',
        result: false
      }
    }

    clientInfoNeedUpdate.name = value.name ?? clientInfoNeedUpdate.name
    clientInfoNeedUpdate.email = value.email ?? clientInfoNeedUpdate.email
    clientInfoNeedUpdate.password =
      value.password ?? clientInfoNeedUpdate.password
    clientInfoNeedUpdate.mobileNumber =
      value.mobileNumber ?? clientInfoNeedUpdate.mobileNumber
    clientInfoNeedUpdate.validId =
      value.validId ?? clientInfoNeedUpdate.validId
    clientInfoNeedUpdate.lastUpdated = new Date()
    await clientInfoNeedUpdate.save()

    return {
      success: true,
      message: 'Client Info successfully updated',
      result: clientInfoNeedUpdate.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getClientInfoById = async (payload) => {
  const { error, value } = validateGetClientInfoId.validate(payload)
  console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await ClientInfo.findById(value)

    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return {
      success: true,
      message: 'Client Info successfully retreived.',
      result: result.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getClientInfoByEmail = async (payload) => {
  const { error, value } = validateGetClientInfoEmail.validate(payload)
  console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await ClientInfo.findOne({ email: value })

    if (!result) {
      return { success: false, message: 'Email not found', result: undefined }
    }

    return {
      success: true,
      message: 'Client Info successfully retreived.',
      result: result.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const removeClientInfoById = async (payload) => {
  const { error, value } = validateDeleteClientInfoId.validate(payload)
  console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await ClientInfo.findByIdAndDelete(value.id)
    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return { success: true, message: 'Successfully Deleted', result }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const removeClientInfoByEmail = async (payload) => {
  const { error, value } = validateDeleteClientInfoEmail.validate(payload)
  console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await ClientInfo.findOneAndDelete({ email: value.email })
    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return { success: true, message: 'Successfully Deleted', result }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
