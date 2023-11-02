import { prismaClient } from '../application/database.js'
import { registerUserValidation } from '../validations/user-validation.js'
import { validate } from '../validations/validation.js'

const register = async request => {
  const user = validate(registerUserValidation, request)
  const userCount = await prismaClient.user.findFirst({
    where: {
      email: user.email
    }
  })
  if(userCount===0){
    const newUser = await prismaClient.user.create({
      data: {
        email: user.email,
        username: user.username,
        password: user.password
      }
    })
    return newUser
  }
}

export default {
    register
}
