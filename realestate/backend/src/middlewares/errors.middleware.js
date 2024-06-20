import {
  BadRequestException,
  InternalServerException
} from '../utils/httpErrors.js'

export const errorHandler = (err, req, res, next) => {
  if (err instanceof BadRequestException) {
    return res
      .status(400)
      .json({ success: false, message: err.message, data: err.data })
  }

  if (err instanceof InternalServerException) {
    return res.status(500).json({
      success: false,
      message: err.message,
      data: err.data
    })
  }

  return res.status(500).json({
    success: false,
    message: 'Unhandled error occured.',
    data: undefined
  })
}
