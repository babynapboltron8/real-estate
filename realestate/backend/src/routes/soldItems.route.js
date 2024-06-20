import express from 'express'
import {
  create,
  deleteSoldItemId,
  edit,
  getSoldItemEmail,
  getSoldItemId
} from '../controllers/admin/soldItems.controller.js'

const router = express.Router()

router.post('/admin/solditems/search/email', getSoldItemEmail)
router.post('/admin/solditems/search/id', getSoldItemId)
router.post('/admin/solditems/edit', edit)
router.post('/admin/solditems/create', create)
router.post('/admin/solditems/delete', deleteSoldItemId)

export default router
