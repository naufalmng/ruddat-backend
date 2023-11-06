import { prismaClient } from '../ruddat/application/database.js'
import bcrypt from 'bcrypt'

const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      email: 'testing@gmailcom',
      password: await bcrypt.hash('rahasiaya', 10),
      username: 'testingaja'
    }
  })
}
const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      email: 'testing@gmailcom'
    }
  })
}
const getTestUser = async () => {
  return await prismaClient.user.findUnique({
    where: {
      email: 'testing@gmailcom'
    }
  })
}
export { createTestUser, removeTestUser, getTestUser }
