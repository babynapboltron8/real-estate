import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  position: {
    _id: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    required: true
  },
  date_created: {
    type: Date,
    required: true
  },
  created_by: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  date_updated: Date,
  updated_by: mongoose.Types.ObjectId
})

export default mongoose.model('User', UserSchema)
