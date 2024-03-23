const express = require('express')
const { getCu200Pures, getCu200Pure, createCu200Pure, deleteCu200Pure, updateCu200Pure } = require('../controllers/cu200PureController')

const router = express.Router()

router.get('/', getCu200Pures)

router.get('/:id', getCu200Pure)

router.post('/', createCu200Pure)

router.delete('/:id', deleteCu200Pure)

router.patch('/:id', updateCu200Pure)

module.exports = router