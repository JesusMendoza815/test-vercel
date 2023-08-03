import mongoose from 'mongoose'
import 'dotenv/config'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const dbConnect = () => {
  return mongoose.connect(URL)
}

export default dbConnect
