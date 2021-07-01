// const { response } = require('express')
const express = require('express')

const api = require('../API/api')
// const { getAllTips } = require('../API/api')

const router = express.Router()

// Get /api/v1/all
router.get('/all', (req, res) => {
  api.getAllTips()
    .then(results => {
      res.json(results)
      return results
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

// POST

module.exports = router
