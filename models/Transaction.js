const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    amount: { type: String },
    since: { type: Date }
  }
);

module.exports = mongoose.model('Transactions', TransactionSchema);