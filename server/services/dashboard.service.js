const client = require('../../config/db').client

async function clients() {
  try {
    return await client.findAndCountAll()
  } catch (error) {
    console.error(error)
    throw new Error(error);
  }
}

module.exports = {
  clients,
}
