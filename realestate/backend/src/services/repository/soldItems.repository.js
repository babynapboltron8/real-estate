import SoldItem from '../../models/repository/soldItems.model.js'
import LotSelection from '../../models/repository/lotSelection.models.js'
import {
  validateCreateSoldItem,
  validateEditSoldItem,
  validateGetSoldItemByEmail,
  validateGetSoldItemById,
  valiteRemoveSoldItemById
} from '../../models/validation/repository/soldItems.validation.js'

export const createSoldItem = async (payload) => {
  const { error, value } = validateCreateSoldItem.validate(payload)

  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const newSoldItem = new SoldItem(value)
    await newSoldItem.save()

    // data logic and processing
    const updateLotSelections = async (itemLots) => {
      const updatePromises = itemLots.map((lot) => {
        return LotSelection.findOneAndUpdate(
          {
            _id: lot.id,
            'blocks.name': lot.blockName,
            'blocks.lots.name': lot.lotName
          },
          {
            $set: { 'blocks.$.lots.$[lot].occupied': lot.occupied === 'true' }
          },
          {
            arrayFilters: [{ 'lot.name': lot.lotName }],
            new: true
          }
        )
      })
      // Wait for all update operations to complete
      const results = await Promise.all(updatePromises)
      return results // or process results as needed
    }

    // update lot selection
    updateLotSelections(value.itemLots)
      .then((updated) => {
        console.log('Lot Selection/s Updated successfully', updated)
      })
      .catch((error) => {
        console.error('Error updating lots', error)
      })

    return {
      success: true,
      message: 'Sold Item/s successfully created.',
      result: newSoldItem.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getSoldItemByEmail = async (payload) => {
  const { error, value } = validateGetSoldItemByEmail.validate(payload)

  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await SoldItem.find({ email: value.email })

    if (!result) {
      return {
        success: false,
        message: 'Unable to get user.',
        result: undefined
      }
    }

    return {
      success: true,
      message: 'Successfully get all sold item by email.',
      result: result.map((item) => item.toJSON())
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const removeSoldItemById = async (payload) => {
  const { error, value } = valiteRemoveSoldItemById.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await SoldItem.findByIdAndDelete(value.id)

    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return { success: true, message: 'Successfully Deleted', result }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const editSoldItem = async (payload) => {
  const { error, value } = validateEditSoldItem.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const needUpdateSoldItem = await SoldItem.findById(value.id)
    if (!needUpdateSoldItem) {
      return {
        success: false,
        message: 'Unable to find sold item id.',
        result: false
      }
    }

    needUpdateSoldItem.name = value.name ?? needUpdateSoldItem.name
    needUpdateSoldItem.email = value.email ?? needUpdateSoldItem.email
    needUpdateSoldItem.status = value.status ?? needUpdateSoldItem.status
    needUpdateSoldItem.itemLots = value.itemLots ?? needUpdateSoldItem.itemLots
    needUpdateSoldItem.overAllTotal = value.overAllTotal ?? needUpdateSoldItem.overAllTotal
    needUpdateSoldItem.dateUpdated = new Date()
    await needUpdateSoldItem.save()

    return {
      success: true,
      message: 'Sold Item successfully updated',
      result: needUpdateSoldItem.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getSoldItemById = async (payload) => {
  const { error, value } = validateGetSoldItemById.validate(payload)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }
  try {
    const result = await SoldItem.findById(value)
    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return {
      success: true,
      message: 'Sold Item successfully retreived.',
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
