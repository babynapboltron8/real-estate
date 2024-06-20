import { adminAccess } from '../services/authService/admin.authservice.js'

export const adminAccessHandler = (req, res, next) => {
  const positionName = req.header('PositionName')

  if (!positionName) {
    return res.status(401).json({
      success: false,
      error: 'No position name provided.',
      result: undefined
    })
  }
  const result = adminAccess(positionName)
  if (result) {
    return res.status(401).json({
      success: false,
      error: "User doesn't have access",
      result: undefined
    })
  }
  next()
}
