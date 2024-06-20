import express from 'express'
import {
  create,
  edit,
  deleteById,
  get
} from '../controllers/client/lotsPricing.controller.js'

const router = express.Router()

router.post('/client/lotsPricing/add', create)
router.post('/client/lotsPricing/search/id', get)
router.post('/client/lotsPricing/edit/id', edit)
router.post('/client/lotsPricing/delete/id', deleteById)
router.post('/client/lotsPricing/edit/id', edit)

export default router
