import supertest from 'supertest'
import { app } from '../application/server.js'
import { prismaClient } from '../application/database.js'
import { ResponseError } from '../ruddat/error/ResponseError.js'
import bcrypty from 'bcrypt'
import { createTestUser } from './test-util.js'

// test user registration
describe('POST /register', function () {
  beforeEach(async () => {
    await createTestUser()
  })

  afterAll(async () => {
    await prismaClient.$disconnect()
  })

  it('should register a new user', async () => {
    const response = await supertest(app)
      .post('/register')
      .send({
        email: 'test@gmail.com',
        username: 'rahasiaya',
        password: await bcrypty.hash('test', 10)
      })
    expect(response.status).toBe(200)
  })
})
