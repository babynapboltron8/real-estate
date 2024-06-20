import {
  validateCreate,
  validateUpdate,
  validateGetUserName,
  validateChangePassword,
  validateForgotPassword
} from '../../models/validation/repository/user.validation.js'
import User from '../../models/repository/user.model.js'
import Position from '../../models/repository/position.model.js'

export const createUser = async (payload) => {
  const { error, value } = validateCreate.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    // check position
    const position = await Position.findById(value.positionId)
    if (!position) {
      return {
        success: false,
        message: "Can't find specified position.",
        result: undefined
      }
    }

    // check username if already exist
    const checkUsername = await User.findOne({ username: value.username })
    if (checkUsername) {
      return {
        success: false,
        message: 'Username already in used.',
        result: undefined
      }
    }

    // check createBy user
    const createdBy = await User.findById(value.createdBy)
    if (!createdBy) {
      return {
        success: false,
        message: 'Invalid user who created the account.',
        result: undefined
      }
    }

    const user = new User({
      firstName: value.firstName,
      lastName: value.lastName,
      password: value.password,
      position: {
        _id: position._id,
        name: position.name
      },
      roles: value.roles,
      username: value.username,
      created_by: createdBy._id,
      date_created: new Date(),
      date_updated: undefined,
      updated_by: undefined
    })
    await user.save()

    return {
      success: true,
      message: 'User successfully created.',
      result: user.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const updateUser = async (payload) => {
  const { error, value } = validateUpdate.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const userNeedUpdate = await User.findById(value._id)
    if (!userNeedUpdate) {
      return {
        success: false,
        message: 'Unable to find user need to update.',
        result: false
      }
    }

    const userWhoUpdate = await User.findById(value.updatedBy)
    if (!userWhoUpdate) {
      return {
        success: false,
        message: 'Unable to find user who update.',
        result: undefined
      }
    }

    // update user position if any
    let position
    if (value.positionId) {
      position = await Position.findById(value.positionId)
      if (!position) {
        return {
          success: false,
          message: 'Unable to find user position.',
          result: undefined
        }
      }
    }
    if (position) {
      userNeedUpdate.position._id = position._id
      userNeedUpdate.position.name = position.name
    }

    userNeedUpdate.firstName = value.firstName ?? userNeedUpdate.firstName
    userNeedUpdate.lastName = value.lastName ?? userWhoUpdate.lastName
    userNeedUpdate.password = value.password ?? userNeedUpdate.password
    userNeedUpdate.roles = value.roles ?? userNeedUpdate.roles
    userNeedUpdate.date_updated = new Date()
    userNeedUpdate.updated_by = userWhoUpdate._id
    await userNeedUpdate.save()

    return {
      success: true,
      message: 'User successfully updated.',
      result: userNeedUpdate.toJSON()
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      result: undefined
    }
  }
}

export const getAllUsers = async () => {
  try {
    const users = await User.find()
    if (!users) {
      return {
        success: false,
        message: 'Unable to get all users.',
        result: undefined
      }
    }

    return {
      success: true,
      message: 'Successfully get all users.',
      result: users.map((item) => item.toJSON())
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      result: undefined
    }
  }
}

export const getUserByUserName = async (payload) => {
  const { error, value } = validateGetUserName.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const user = await User.findOne({ username: value })
    if (!user) {
      return {
        success: false,
        message: 'Unable to find username.',
        result: undefined
      }
    }

    return {
      success: true,
      message: 'Successfully get username.',
      result: user.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const signInUser = async (username, password) => {
  try {
    const user = await User.findOne({ username })
    if (!user) {
      return {
        success: false,
        message: 'Unable to find user by email.',
        result: undefined
      }
    }

    if (user.password !== password) {
      return {
        success: false,
        message: 'Invalid Password.',
        result: undefined
      }
    }

    return {
      success: true,
      message: 'Successfully signIn.',
      result: user.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const forgotPassword = async (payload) => {
  const { error, value } = validateForgotPassword.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const userNeedChangePassword = await User.findOne({
      username: value.username
    })
    if (!userNeedChangePassword) {
      return {
        success: false,
        message: 'Unable to find user need to update.',
        result: false
      }
    }

    userNeedChangePassword.password =
      value.password ?? userNeedChangePassword.password
    userNeedChangePassword.date_updated = new Date()
    await userNeedChangePassword.save()
    return {
      success: true,
      message: 'User password successfully updated.',
      result: userNeedChangePassword.toJSON()
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      result: undefined
    }
  }
}

export const changePassword = async (payload) => {
  const { error, value } = validateChangePassword.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const userNeedChangePassword = await User.findOne({
      username: value.username
    })
    if (!userNeedChangePassword) {
      return {
        success: false,
        message: 'Unable to find user need to update.',
        result: false
      }
    }

    if (userNeedChangePassword.password !== value.oldpassword) {
      return {
        success: false,
        message: 'Current Password Incorrect',
        result: false
      }
    }

    userNeedChangePassword.password =
      value.password ?? userNeedChangePassword.password
    userNeedChangePassword.date_updated = new Date()
    await userNeedChangePassword.save()
    return {
      success: true,
      message: 'User password successfully updated.',
      result: userNeedChangePassword.toJSON()
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      result: undefined
    }
  }
}
