import mongoose from 'mongoose'

const { Schema } = mongoose

// Define the schema for the item lots
const ItemLotSchema = new Schema({
  _id: String,
  blockName: String,
  lotName: String,
  occupied: Boolean
})

// Define the main schema for sold items
const SoldItemSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Reserved', 'Pending', 'Approved']
  },
  itemLots: [ItemLotSchema],
  overAllTotal: {
    type: Number,
    required: true
  }
})

// Create a model from the schema
export default mongoose.model('SoldItem', SoldItemSchema)
