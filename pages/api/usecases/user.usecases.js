import bcrypt from '../libs/bcrypt.js'
import { User } from '../models/user.model.js'

const createUser = async (userData) => {
  try {
    const { phoneNumber, password } = userData
    const ecnriptedPassword = await bcrypt.hash(password)
    
    return await User.create({ ...userData, password: ecnriptedPassword })

  } catch (error) {
    return error
  }
}

const phoneNumberExist = async (phoneNumber) => {
  const userExist = await User.findOne({ phoneNumber })
  return userExist
}

export { createUser, phoneNumberExist }