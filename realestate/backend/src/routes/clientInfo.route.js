import express from 'express'
import {
  create,
  editById,
  deleteClientInfoId,
  deleteClientInfoEmail,
  getByEmail,
  getById
} from '../controllers/client/clientInfo.controller.js'

const router = express.Router()

router.post('/client/clientInfo/add', create)
router.post('/client/clientInfo/search/id', getById)
router.post('/client/clientInfo/search/email', getByEmail)
router.post('/client/clientInfo/edit', editById)
router.post('/client/clientInfo/delete/email', deleteClientInfoEmail)
router.post('/client/clientInfo/delete/id', deleteClientInfoId)

export default router
