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
export { createTestUser }
