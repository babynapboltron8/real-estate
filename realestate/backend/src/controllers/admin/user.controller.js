import {
  createUser,
  signInUser,
  updateUser,
  getAllUsers,
  getUserByUserName,
  changePassword,
  forgotPassword
} from '../../services/repository/user.repository.js'

import {
  validateCreate,
  validateSignIn,
  validateUpdate,
  validateGetUserName,
  validateChangePassword,
  validateForgotPassword
} from '../../models/validation/repository/user.validation.js'

import { BadRequestException } from '../../utils/httpErrors.js'

export const create = async (req, res, next) => {
  try {
    const { error, value } = validateCreate.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await createUser(value)
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

export const signIn = async (req, res, next) => {
  try {
    const { error, value } = validateSignIn.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await signInUser(value)
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

export const update = async (req, res, next) => {
  try {
    const { error, value } = validateUpdate.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await updateUser(value)
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

export const getAll = async (req, res, next) => {
  try {
    const result = await getAllUsers()
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

export const getUserName = async (req, res, next) => {
  try {
    const { error, value } = validateGetUserName.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const result = await getUserByUserName(value)
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

export const changePass = async (req, res, next) => {
  try {
    const { error, value } = validateChangePassword.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await changePassword(value)
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

export const forgotPass = async (req, res, next) => {
  try {
    const { error, value } = validateForgotPassword.validate(req.body)
    if (error) {
      throw new BadRequestException(error.message, error.details)
    }

    const user = await forgotPassword(value)
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
