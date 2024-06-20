import UserClient from '../../models/repository/user.client.model.js'

import {
  validateCreate,
  validateEditPassword,
  validateSignIn,
  validateConfirmEmail,
  validateForgotPassword
} from '../../models/validation/repository/user.client.validation.js'

export const CreateUserClient = async (payload) => {
  const { error, value } = validateCreate.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const newUserClient = new UserClient({
      email: value.email,
      password: value.password,
      isVerified: 'false',
      dateVerified: ''
    })
    await newUserClient.save()
    return {
      success: true,
      message: 'User Client successfully created.',
      result: newUserClient.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const SignInUserClient = async (payload) => {
  const { error, value } = validateSignIn.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    console.log(value)
    const user = await UserClient.findOne({ email: value.email })
    if (!user) {
      return {
        success: false,
        message: 'Unable to find user client by email.',
        result: undefined
      }
    }

    if (user.password !== value.password) {
      return {
        success: false,
        message: 'Invalid Password.',
        result: undefined
      }
    }

    return {
      success: true,
      message: 'Successfully signIn User Client.',
      result: user.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const ChangePassUserClieent = async (payload) => {
  const { error, value } = validateEditPassword.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const getOldPass = await UserClient.findOne({ email: value.email })

    if (!getOldPass) {
      return {
        success: false,
        message: 'Unable to find user client by email.',
        result: undefined
      }
    }

    if (getOldPass.password !== value.oldPassword) {
      return {
        success: false,
        message: 'old password not the same',
        result: undefined
      }
    }

    const result = await UserClient.findOneAndUpdate(
      { email: value.email },
      { $set: { password: value.newPassword } },
      { new: true }
    )
    if (!result) { return { success: false, message: 'email not found', result: undefined } }

    return {
      success: true,
      message: 'User Client password successfully changed',
      result
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const ConfirmEmail = async (payload) => {
  const { error, value } = validateConfirmEmail.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await UserClient.findOneAndUpdate(
      { email: value.email },
      { $set: { isVerified: 'true', dateVerified: new Date() } },
      { new: true }
    )
    if (!result) { return { success: false, message: 'email not found', result: undefined } }

    return {
      success: true,
      message: 'User Client successfully confirmed',
      result
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const ForgotPassword = async (payload) => {
  const { error, value } = validateForgotPassword.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const user = await UserClient.findOne({ email: value.email })

    if (!user) {
      return {
        success: false,
        message: 'Unable to find user client by email.',
        result: undefined
      }
    }

    const result = await UserClient.findOneAndUpdate(
      { email: value.email },
      { $set: { password: value.newPassword } },
      { new: true }
    )
    return {
      success: true,
      message: 'Password successfully saved',
      result
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
