import bcrypt from 'bcrypt'

const saltRounds = 10

const hash = (plainText) => bcrypt.hash(plainText, saltRounds) // encripta la str

export default {
  ...bcrypt,
  hash,
}
