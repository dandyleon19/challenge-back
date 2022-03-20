const clientController = require("../../controllers/v1/client.controller")

const express = require("express")
const router = express.Router()

router.get(
  '/',
  clientController.index
)

router.post(
  '/',
  clientController.store
)

router.get(
  '/:id',
  clientController.show
)

router.patch(
  '/:id',
  clientController.update
)

router.delete(
  '/:id',
  clientController.destroy
)

module.exports = router
