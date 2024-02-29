const express = require('express')
const { getCopper05s, getCopper05, createCopper05, deleteCopper05, updateCopper05 } = require('../controllers/copper05Controller')

const router = express.Router()

router.get('/', getCopper05s)

router.get('/:id', getCopper05)

router.post('/', createCopper05)

router.delete('/:id', deleteCopper05)

router.patch('/:id', updateCopper05)

module.exports = router