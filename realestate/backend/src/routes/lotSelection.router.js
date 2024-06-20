import express from 'express'
import {
  create,
  getLotId,
  editLotIdBlockLot,
  removeLotId
} from '../controllers/client/lotSelection.controller.js'

import {
  adminAccessHandler
} from '../middlewares/admin.middleware.js'
const router = express.Router()

router.post('/client/LotSelection/search/id', adminAccessHandler, getLotId)
router.post('/client/LotSelection/add', adminAccessHandler, create)
router.post('/client/LotSelection/edit', adminAccessHandler, editLotIdBlockLot)
router.post('/client/LotSelection/delete', adminAccessHandler, removeLotId)

export default router
