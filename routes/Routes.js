const express = require("express")
const router = express.Router()

const TransactionController = require('../controllers/TransactionController')
const transactionController = new TransactionController()

router.get('/transactions', transactionController.findAll)

module.exports = router;