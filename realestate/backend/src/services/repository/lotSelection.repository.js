import {
  validateCreate,
  validateGetLotById,
  validateRemoveLotSelectionById,
  validateEditLotByIdBlockandLot
  // validateUpload
} from '../../models/validation/repository/lotSelection.validation.js'
import LotSelection from '../../models/repository/lotSelection.models.js'

export const createLotSelection = async (payload) => {
  const { error, value } = validateCreate.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const newLotSelection = new LotSelection(value)
    await newLotSelection.save()
    return {
      success: true,
      message: 'Lot Selection successfully created.',
      result: newLotSelection.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getLotSelectionById = async (payload) => {
  const { error, value } = validateGetLotById.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await LotSelection.findById(value)
    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return {
      success: true,
      message: 'Lot Selection successfully retreived.',
      result: result.toJSON()
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      result: undefined
    }
  }
}

export const removeLotSelectionById = async (payload) => {
  const { error, value } = validateRemoveLotSelectionById.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await LotSelection.findByIdAndDelete(value.id)

    if (!result) { return { success: false, message: 'Id not found', result: undefined } }

    return { success: true, message: 'Successfully Deleted', result }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const editLotSelectionByIdBlockandLot = async (payload) => {
  const { error, value } = validateEditLotByIdBlockandLot.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await LotSelection.findOneAndUpdate(
      {
        _id: value.id,
        'blocks.name': value.blockName,
        'blocks.lots.name': value.lotName
      },
      { $set: { 'blocks.$.lots.$[lot].occupied': value.occupied } },
      {
        arrayFilters: [{ 'lot.name': value.lotName }],
        new: true
      }
    )
    if (!result) { return { success: false, message: 'Lot Id not found', result: undefined } }

    return {
      success: true,
      message: 'Lot Selection updated successfully',
      result
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
