import express from 'express'
import {
  create,
  editById,
  getAll,
  getById,
  deleteClient
} from '../controllers/client/clientList.controller.js'
const router = express.Router()

router.post('/client/clientList/add', create)
router.post('/client/clientList/search/id', getById)
router.get('/client/clientList/', getAll)
router.post('/client/clientList/edit', editById)
router.post('/client/clientList/delete', deleteClient)

export default router
