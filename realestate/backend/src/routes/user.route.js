import express from 'express'
import {
  create,
  signIn,
  getAll,
  getUserName,
  update,
  forgotPass,
  changePass
} from '../controllers/admin/user.controller.js'

const router = express.Router()

router.post('/admin/sigin', signIn)
router.post('/admin/signup', create)
router.get('/admin/user/all', getAll)
router.post('/admin/update', update)
router.post('/admin/username', getUserName)
router.post('/admin/forgotpassword', forgotPass)
router.post('/admin/changePassword', changePass)
export default router
