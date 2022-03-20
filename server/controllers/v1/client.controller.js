const clientService = require('../../services/client.service')
const constants = require('../../../config/constants')
const { getPagingData, getPagination} = require("../../helpers/pagination");

const ClientController = {
  index: async (req, res) => {
    try {
      const { page } = req.query
      const forPagination = getPagination(page, 10)
      const clients = await clientService.list(forPagination)
      const paging = getPagingData(clients, page, 10)
      return res.json({...constants.successMessage, paging});
    } catch (err) {
      console.error('Error: ', err)
      return res.status(500).json(constants.errorMessage)
    }
  },
  store: async (req, res) => {
    try {
      const { name, lastname, birthday } = req.body
      const client = { name, lastname, birthday }
      const stored = await clientService.create(client)
      return res.status(201).json({...constants.successMessage, client: stored});
    } catch (err) {
      console.error('Error: ', err)
      return res.status(500).json(constants.errorMessage)
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params
      const client = await clientService.show(id)
      return res.json({...constants.successMessage, client});
    } catch (err) {
      console.error('Error: ', err)
      return res.status(500).json(constants.errorMessage)
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params
      const { name, lastname, birthday } = req.body
      const client = { name, lastname, birthday }
      const updated = await clientService.update(id, client)
      return res.json({...constants.successMessage, client: updated});
    } catch (err) {
      console.error('Error: ', err)
      return res.status(500).json(constants.errorMessage)
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params
      await clientService.destroy(id)
      return res.json({...constants.successMessage});
    } catch (err) {
      console.error('Error: ', err)
      return res.status(500).json(constants.errorMessage)
    }
  }
}

module.exports = ClientController
