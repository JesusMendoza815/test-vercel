import { CustomError } from '@/pages/api/libs/errorCustom'

const BASE_URL = 'https://yali.vercel.app/api'

const postRequest = async (phoneNumber) => {
  try {

    const response = await fetch(`${BASE_URL}/signup/twilio/sendcode`, { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(phoneNumber)
    })

    console.log(response)
    if (!response.ok) throw new Error('Network response was not ok')
    if (response.code === 409) throw new CustomError('El número ya está registrado', 409)

    const data = await response.json()

    return data

  } catch (error) {
    console.log(error)
    return error
  }
}

const postVerifyCode = async (dataToVerify) => {
  try {
    const response = await fetch(`${BASE_URL}/signup/twilio/verifycode`, { 
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(dataToVerify)
    })

    if (!response.ok) throw new Error('Bad response network')

    const data = await response.json()
    return data

  } catch (error) {
    return 'Algo inesperado sucedió'
  }
}

const postSignUp = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    const data = await response.json()
    localStorage.setItem('token', data.token)
    
    return data

  } catch (error) {
    return error.status
  }
}

export { postRequest, postVerifyCode, postSignUp }