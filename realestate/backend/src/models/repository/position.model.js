import mongoose from 'mongoose'

const { Schema } = mongoose

const positionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  created_by: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  date_created: {
    type: Date,
    required: true
  },
  updated_by: mongoose.Types.ObjectId,
  date_updated: Date
})

export default mongoose.model('Position', positionSchema)
