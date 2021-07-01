const request = require('superagent')

const apiUrl = 'https://friday-moss-external-api.herokuapp.com/api/0800-hot-tips'

async function getAllTips () {
  try {
    const response = await request(`${apiUrl}`)
    return response.body
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getAllTips }
