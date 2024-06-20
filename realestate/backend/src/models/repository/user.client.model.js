import mongoose from 'mongoose'

const { Schema } = mongoose

const UserClientSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: String,
  dateVerified: Date
})

const UserClient = mongoose.model('UserClient', UserClientSchema)

export default UserClient
