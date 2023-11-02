import express from 'express'
import userController from '../controllers/user-controller.js'

const publicRouter = express.Router()
publicRouter.post(`/api/v1/users`, userController.register )

export { publicRouter }