const clientRoutes = require('./v1/client.routes')
const dashboardRoutes = require('./v1/dashboard.routes')

const express = require('express')
const router = express.Router()

router.use('/v1/clients', clientRoutes)
router.use('/v1/dashboard', dashboardRoutes)

module.exports = router
