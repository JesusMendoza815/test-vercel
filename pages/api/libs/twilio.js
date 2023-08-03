import 'dotenv/config'
import twilio from 'twilio'

const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const SERVICE_SID = process.env.TWILIO_SERVICE_SID
const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const sendCode = (number) => {
  try {
    client.verify.v2
      .services(SERVICE_SID)
      .verifications.create({ to: number, channel: 'sms' })
      .then((verification) => {
        console.log(verification)
        verification.status
      })
  } catch (error) {
    console.log(error)
  }
}

const verifyCode = async (number, code) => {
  try {
    const verification_check = await client.verify.v2
      .services(SERVICE_SID)
      .verificationChecks.create({ to: number, code })

    return verification_check.status
  } catch (error) {
    console.error('Error en la verificación:', error)
    throw error
  }
}

export { sendCode, verifyCode }
