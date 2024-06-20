import mongoose from 'mongoose'

const { Schema } = mongoose

const lotsPricingSchema = new Schema({
  type: {
    type: String,
    enum: ['mausoleum', 'lawn'],
    required: true
  },
  squareMeter: {
    type: String,
    required: true
  },
  memorialType: {
    type: String,
    enum: [
      'prime corner',
      'prime deluxe',
      'de luxe corner',
      'de luxe',
      'standard'
    ],
    required: function () {
      return this.type === 'lawn'
    } // Only required for lawn type
  },
  paymentType: {
    type: String,
    enum: ['spotcash', 'installment'],
    required: true
  },
  percentLess: {
    type: Number,
    required: function () {
      return this.paymentType === 'spotcash'
    }
  },
  percentInterest: {
    type: Number,
    required: function () {
      return this.paymentType === 'installment'
    }
  },
  numberYears: {
    type: Number,
    required: function () {
      return this.paymentType === 'installment'
    }
  },
  monthlyAmortization: {
    type: Number,
    required: function () {
      return this.paymentType === 'installment'
    }
  },
  totalContractPrice: {
    type: Number,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: Date
})

export default mongoose.model('LotsPricing', lotsPricingSchema)
