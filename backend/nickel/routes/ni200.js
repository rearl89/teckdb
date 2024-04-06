const express = require('express')
const { getNi200s, getNi200, createNi200, deleteNi200, updateNi200 } = require('../controllers/ni200Controller')

const router = express.Router()

router.get('/', getNi200s)

router.get('/:id', getNi200)

router.post('/', createNi200)

router.delete('/:id', deleteNi200)

router.patch('/:id', updateNi200)

module.exports = router