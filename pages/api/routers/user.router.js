import express from 'express'
import jwt from '../libs/jwt.js'
import { sendCode, verifyCode } from '../libs/twilio.js'
import { createUser, phoneNumberExist } from '../usecases/user.usecases.js'
import { CustomError } from '../libs/errorCustom.js'

const routerUser = express.Router()

routerUser.post('/twilio/sendcode', async (req, res) => {
  try {
    const { phoneNumber } = req.body
    const userAlreadyExist = await phoneNumberExist(phoneNumber)
    if (userAlreadyExist) throw new CustomError(`El número ya está registrado`, 409)
    sendCode(phoneNumber)

    res.json({
      success: true,
      message: `Code send successfully to ${phoneNumber}`,
    })
  } catch (error) {
    res.json({ 
      success: false,
      message: error.message,
      status: error.status
    })
  }
})

routerUser.post('/twilio/verifycode', async (req, res) => {
  try {
    const { phoneNumber, code } = req.body

    const isValid = await verifyCode(phoneNumber, code)

    if (isValid === 'pending') throw new Error('Código incorrecto')

    res.json({
      success: true,
      message: 'Código correcto',
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'Código correcto',
    })
  }
})

routerUser.post('/', async (req, res) => {
  try {
    const { body } = req
    const userCreated = await createUser(body)
    const { name, role, _id } = userCreated._doc
    const token = jwt.sign({ name, role, _id })

    res.json({
      success: true,
      data: userCreated,
      token
    })

  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    })
  }
})

export default routerUser
