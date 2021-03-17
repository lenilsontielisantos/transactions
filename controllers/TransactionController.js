const TransactionService = require('../services/TransactionService');
const transactionService = new TransactionService();

class TransactionController {
    findAll(req, res) {
        transactionService.findAll()
               .then(transactions => res.send(transactions))
               .catch(err => res.status(500).send({ message: err.message }))
      }
}

module.exports = TransactionController;