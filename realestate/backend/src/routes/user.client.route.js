import express from 'express'
import {
  signIn,
  signUp,
  changePass,
  confirm,
  forgot
} from '../controllers/client/user.controller.js'

const router = express.Router()

router.post('/client/signin', signIn)
router.post('/client/signup', signUp)
router.post('/client/changepassword', changePass)
router.post('/client/confirmEmail', confirm)
router.post('/client/forgotPassword', forgot)

export default router
