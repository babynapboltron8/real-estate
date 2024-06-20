import mongoose from 'mongoose'

const { Schema } = mongoose

const clientInfoScema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  validId: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: Date
})

export default mongoose.model('ClientInfo', clientInfoScema)
