import mongoose from 'mongoose'

const { Schema } = mongoose

const clientSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  agentName: { type: String },
  paymentStatus: { type: String },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: { type: Date }
})

export default mongoose.model('ClientList', clientSchema)
