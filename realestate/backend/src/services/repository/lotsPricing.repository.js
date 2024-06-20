import LotsPricingModel from '../../models/repository/lotsPricing.model.js'

import {
  validateCreate,
  validateDeleteLotsPricing,
  validateEdit,
  validateGetLotsPricing
} from '../../models/validation/repository/lotsPricing.validation.js'

export const createLotsPricing = async (payload) => {
  const { error, value } = validateCreate.validate(payload)

  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const newLotsPricing = new LotsPricingModel(value)
    await newLotsPricing.save()
    return {
      success: true,
      message: 'Lots Pricing successfully created.',
      result: newLotsPricing.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const editLotsPricing = async (payload) => {
  const { error, value } = validateEdit.validate(payload)

  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const lotsPricingNeedUpdate = await LotsPricingModel.findById(value.id)
    if (!lotsPricingNeedUpdate) {
      return {
        success: false,
        message: 'Unable to find lots Pricing info that need to update.',
        result: false
      }
    }

    lotsPricingNeedUpdate.type = value.type ?? lotsPricingNeedUpdate.type
    lotsPricingNeedUpdate.squareMeter =
      value.squareMeter ?? lotsPricingNeedUpdate.squareMeter
    lotsPricingNeedUpdate.memorialType =
      value.memorialType ?? lotsPricingNeedUpdate.memorialType
    lotsPricingNeedUpdate.paymentType =
      value.paymentType ?? lotsPricingNeedUpdate.paymentType
    lotsPricingNeedUpdate.percentLess =
      value.percentLess ?? lotsPricingNeedUpdate.percentLess
    lotsPricingNeedUpdate.percentInterest =
      value.percentInterest ?? lotsPricingNeedUpdate.percentInterest
    lotsPricingNeedUpdate.numberYears =
      value.numberYears ?? lotsPricingNeedUpdate.numberYears
    lotsPricingNeedUpdate.monthlyAmortization =
      value.monthlyAmortization ?? lotsPricingNeedUpdate.monthlyAmortization
    lotsPricingNeedUpdate.totalContractPrice =
      value.totalContractPrice ?? lotsPricingNeedUpdate.totalContractPrice
    lotsPricingNeedUpdate.lastUpdated = new Date()
    await lotsPricingNeedUpdate.save()

    return {
      success: true,
      message: 'Lots Pricing successfully updated',
      result: lotsPricingNeedUpdate.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const getLotsPricingById = async (payload) => {
  const { error, value } = validateGetLotsPricing.validate(payload)
  console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await LotsPricingModel.findById(value)

    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return {
      success: true,
      message: 'Lots Pricing successfully retreived.',
      result: result.toJSON()
    }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}

export const deleteLotsPricing = async (payload) => {
  const { error, value } = validateDeleteLotsPricing.validate(payload)
  console.log(value)
  if (error) {
    return { success: false, message: error.message, result: undefined }
  }

  try {
    const result = await LotsPricingModel.findByIdAndDelete(value.id)
    if (!result) {
      return { success: false, message: 'Id not found', result: undefined }
    }

    return { success: true, message: 'Successfully Deleted', result }
  } catch (error) {
    return { success: false, message: error.message, result: undefined }
  }
}
