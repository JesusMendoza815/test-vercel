import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: 1,
    maxLength: 100,
    default: `YaliUser${Math.round(Math.random() * 10000)}`,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 13,
    maxLength: 13,
    math: /^[\+][0-9]{12}$/,
  },
  password: {
    type: String,
    required: true,
    // math: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
  },
  role: {
    type: String,
    required: true,
    enum: ['adoptist', 'rescatist'],
  },
  joinDate: {
    type: Date,
    default: new Date(),
  },
  //Valores vacios
  email: {
    type: Date,
    default: '',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  documents: {
    type: Array,
    default: [],
  },
  //Rescatist
  posts: {
    type: Array,
    default: [],
  },
  //Adoptist
  postulations: {
    this: Array,
    default: [],
  },
})

const User = mongoose.model('user', userSchema)

export { User }
