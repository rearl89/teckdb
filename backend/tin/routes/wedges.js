const express = require('express')
const { getWedgess, getWedges, createWedges, deleteWedges, updateWedges } = require('../controllers/wedgesController')

const router = express.Router()

router.get('/', getWedgess)

router.get('/:id', getWedges)

router.post('/', createWedges)

router.delete('/:id', deleteWedges)

router.patch('/:id', updateWedges)

module.exports = router