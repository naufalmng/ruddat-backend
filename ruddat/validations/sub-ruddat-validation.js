// validate with joi base on this scheme 
/* model SubRuddat {
  id          Int      @id @default(autoincrement())
  name        String
  slug        String
  email       String
  moderatorId String
  moderator   User     @relation(fields: [moderatorId], references: [id])
  avatar      String
  description String
  welcomeMsg  String
  topicId     Int
  topics      Topic   @relation(fields: [topicId], references: [id])
  isPublic    Boolean  @default(true)
  isNsfw      Boolean  @default(false)
  country     String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  post        Post[]

  @@map("subRuddats")
} */

import Joi from "joi";

const createSubRuddatValidation = Joi.object({
    name: Joi.string().min(3).required(),
    slug: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    moderatorId: Joi.string().required(),
    avatar: Joi.string().required(),
    description: Joi.string().required(),
    welcomeMsg: Joi.string().required(),
    topicId: Joi.string().required(),
    isPublic: Joi.boolean().default(true).required(),
    isNsfw: Joi.boolean().default(false).required(),
    country: Joi.string().required(),
})

export {
    createSubRuddatValidation
}