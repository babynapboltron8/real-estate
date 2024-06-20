import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  customerName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: Date
})

export default mongoose.model('Transaction', transactionSchema)
