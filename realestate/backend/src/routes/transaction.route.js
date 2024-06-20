import express from 'express'

import {
  create,
  getTByCustomerId,
  getTById,
  remove,
  editTransaction
} from '../controllers/client/transaction.controller.js'

import { adminAccessHandler } from '../middlewares/admin.middleware.js'
const router = express.Router()

router.post('/client/transaction/add', adminAccessHandler, create)
router.post('/client/transaction/edit', adminAccessHandler, editTransaction)
router.post('/client/transaction/delete', adminAccessHandler, remove)
router.get('/client/transaction/customerId/', adminAccessHandler, getTByCustomerId)
router.get('/client/transaction/id', adminAccessHandler, getTById)

export default router
