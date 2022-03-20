const dashboardController = require("../../controllers/v1/dashboard.controller")

const express = require("express")
const router = express.Router()

router.get(
  '/',
  dashboardController.info
)

module.exports = router
