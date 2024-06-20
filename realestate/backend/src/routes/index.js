import express from 'express'
import homeRoute from './home.router.js'
import lotSelection from './lotSelection.router.js'
import adminPosition from './adminPosition.route.js'
import userClient from './user.client.route.js'
import clientList from './clientList.route.js'
import transaction from './transaction.route.js'
import soldItems from './soldItems.route.js'
import clientInfo from './clientInfo.route.js'
import lotsPricing from './lotsPricing.route.js'
import userRoute from './user.route.js'

const router = express.Router()

router.use(homeRoute)
router.use(lotSelection)
router.use(adminPosition)
router.use(userClient)
router.use(clientList)
router.use(transaction)
router.use(soldItems)
router.use(clientInfo)
router.use(lotsPricing)
router.use(userRoute)

export default router

// tetst commit
// some test commits
