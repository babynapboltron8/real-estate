import express from 'express'
import { create, getAll } from '../controllers/admin/position.controller.js'

const router = express.Router()

router.get('/admin/positions', getAll)

router.post('/admin/positions', create)

export default router
