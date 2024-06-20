import joi from 'joi'

export const validateCreate = joi.object({
  email: joi.string().email().required().min(5),
  password: joi.string().required().min(5)
})

export const validateSignIn = joi.object({
  email: joi.string().email().required().min(5),
  password: joi.string().required().min(5)
})

export const validateEditPassword = joi.object({
  email: joi.string().email().required().min(5),
  oldPassword: joi.string().required().min(5),
  newPassword: joi.string().required().min(5)
})

export const validateConfirmEmail = joi.object({
  email: joi.string().email().required().min(5)
})

export const validateForgotPassword = joi.object({
  email: joi.string().email().required().min(5),
  password: joi.string().required().min(5)
})
