import { validateCreate } from '../../models/validation/repository/position.validation.js'
import Position from '../../models/repository/position.model.js'
import User from '../../models/repository/user.model.js'

export const createPosition = async (payload) => {
  const { error, value } = validateCreate.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const user = await User.findById(value.created_by)
    if (!user) {
      return {
        success: false,
        message: "Can't find user who created the position.",
        result: undefined
      }
    }

    const position = new Position({
      created_by: value.created_by,
      date_created: new Date(),
      date_updated: undefined,
      name: value.name,
      updated_by: undefined
    })

    await position.save()
    return {
      success: true,
      message: 'Position successfully created.',
      result: position.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getAllPositions = async () => {
  try {
    const positions = await Position.find()
    if (!positions) {
      return {
        success: false,
        message: 'An error occured when getting all positions',
        result: undefined
      }
    }

    return {
      success: true,
      message: 'Successfully get all positions.',
      result: positions.map((item) => item.toJSON())
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      result: undefined
    }
  }
}
