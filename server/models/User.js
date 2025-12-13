import mongoose from mongoose

const userSchema = new mongoose.Schema({
  firstName:{
type:String,
required: true,
trim:true,

  },
   lastName:{
type:String,
required: true,
trim:true,
  },
  phoneNumber:{
    type:Number,
    required:true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  role:{
    type:String,
    enum:[User, Admin]
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', userSchema)

export default User