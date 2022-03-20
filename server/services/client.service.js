const client = require('../../config/db').client

async function list(pagination) {
  try {
    return await client.findAndCountAll({
      limit: pagination.limit,
      offset: pagination.offset
    })
  } catch (error) {
    console.error(error)
    throw new Error(error);
  }
}

async function create(data) {
  try {
    return await client.create(data);
  } catch (error) {
    console.error(error)
    throw new Error(error);
  }
}


async function show(id) {
  try {
    return await client.findByPk(id)
  } catch (error) {
    console.error(error)
    throw new Error(error);
  }
}

async function update(id, data) {
  try {
    let updated

    await client.update(data, {
      where: {id: id},
      returning: true,
      plain: true,
    }).then(async (res) => {
      updated = await client.findByPk(id)
    })

    return updated;
  } catch (error) {
    console.error(error)
    throw new Error(error);
  }
}

async function destroy(id) {
  try {
    return await client.destroy({
      where: {id: id}
    })
  } catch (error) {
    console.error(error)
    throw new Error(error);
  }
}

module.exports = {
  list,
  create,
  show,
  update,
  destroy
}
