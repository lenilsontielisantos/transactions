const Transaction = require('../models/Transaction')

class TransactionService {

    async findAll() {
        return await Transaction.find()
    }
}

module.exports = TransactionService