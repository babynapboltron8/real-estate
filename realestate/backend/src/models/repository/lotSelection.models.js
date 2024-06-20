import mongoose from 'mongoose'

const lotSchema = new mongoose.Schema({
  name: String,
  occupied: Boolean
})

const blockSchema = new mongoose.Schema({
  name: String,
  lots: [lotSchema]
})

const lotSelectionSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  price: Number,
  imageSrc: String,
  blocks: [blockSchema],
  date_created: Date,
  created_by: String
})

const LotSelection = mongoose.model('LotSelection', lotSelectionSchema)

export default LotSelection
