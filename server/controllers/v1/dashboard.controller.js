const dashboardService = require('../../services/dashboard.service')
const constants = require('../../../config/constants')
const {getAge} = require("../../helpers/dashboard");

const DashboardController = {
  info: async (req, res) => {
    try {
      const data = await dashboardService.clients();

      const clients = data.rows
      const totalClients = data.count

      const ages = clients.map(client => getAge(client.birthday))
      const sumAges = ages.reduce((a, b) => a + b, 0)
      const avgAges = (sumAges / ages.length) || 0

      const today = new Date()
      const registeredToday = clients.filter(client => {
        const registered = new Date(client.createdAt)
        if (`${registered.getFullYear()}-${registered.getMonth()}-${registered.getDate()}` === `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`) {
          return client
        }
      })
      const totalRegisteredToday = registeredToday.length

      return res.json({...constants.successMessage, totalClients, avgAges, totalRegisteredToday});
    } catch (err) {
      console.error('Error: ', err)
      return res.status(500).json(constants.errorMessage)
    }
  }
}

module.exports = DashboardController
