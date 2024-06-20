import {
  SignInUserClient,
  CreateUserClient,
  ChangePassUserClieent,
  ConfirmEmail,
  ForgotPassword
} from '../../services/repository/user.client.repository.js'

import {
  validateSignIn,
  validateCreate,
  validateEditPassword,
  validateConfirmEmail,
  validateForgotPassword
} from '../../models/validation/repository/user.client.validation.js'

import { BadRequestException } from '../../utils/httpErrors.js'

export const signIn = async (req, res, next) => {
  try {
    const { error, value } = validateSignIn.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await SignInUserClient(value)
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

export const signUp = async (req, res, next) => {
  try {
    const { error, value } = validateCreate.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await CreateUserClient(value)
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

export const changePass = async (req, res, next) => {
  try {
    const { error, value } = validateEditPassword.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await ChangePassUserClieent(value)
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

export const confirm = async (req, res, next) => {
  try {
    const { error, value } = validateConfirmEmail.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await ConfirmEmail(value)
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

export const forgot = async (req, res, next) => {
  try {
    const { error, value } = validateForgotPassword.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await ForgotPassword(value)
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
