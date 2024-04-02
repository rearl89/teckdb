const express = require('express')
const { getCopper09DHs, getCopper09DH, createCopper09DH, deleteCopper09DH, updateCopper09DH } = require('../controllers/copper09DHController')

const router = express.Router()

router.get('/', getCopper09DHs)

router.get('/:id', getCopper09DH)

router.post('/', createCopper09DH)

router.delete('/:id', deleteCopper09DH)

router.patch('/:id', updateCopper09DH)

module.exports = router