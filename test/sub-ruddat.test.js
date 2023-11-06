import supertest from 'supertest'
import { createTestUser, removeTestUser, getTestUser } from './test-util.js'
import { web } from '../ruddat/application/web.js'
import { logger } from '../ruddat/application/logger.js'

describe('POST /api/v1/sub-ruddat', function () {
  beforeEach(async () => {
    await createTestUser()
  })
  afterEach(async () => {
    await removeTestUser()
  })
  // should return 200 if create sub ruddat success
  it('should return 200 if create sub ruddat success', async function () {
    const testUser = await getTestUser()
    // set authorization token jwt
    const response = await supertest(web)
      .post('/api/v1/sub-ruddat')
      .send({
        name: 'ruddat',
        slug: 'ruddat',
        email: `${testUser.email}`,
        avatar: 'ruddat.com',
        description: 'This is sub ruddat my friend.',
        welcomeMsg: 'Welcome to sub ruddat my friend.',
        topicId: 1,
        isPublic: true,
        isNsfw: false,
        country: 'Indonesia'
      })
      .set('Authorization', `Bearer ${accessToken}`)
    logger.info(response.body)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('data')
    expect(response.body.data.name).toBe('ruddat')
    expect(response.body.data.slug).toBe('ruddat')
    expect(response.body.data.email).toBe(`${testUser.email}`)
    expect(response.body.data.avatar).toBe('ruddat.com')
    expect(response.body.data.description).toBe('This is sub ruddat my friend.')
    expect(response.body.data.welcomeMsg).toBe(
      'Welcome to sub ruddat my friend.'
    )
    expect(response.body.data.topicId).toBe(1)
    expect(response.body.data.isPublic).toBe(true)
    expect(response.body.data.isNsfw).toBe(false)
    expect(response.body.data.country).toBe('Indonesia')
  })
})
