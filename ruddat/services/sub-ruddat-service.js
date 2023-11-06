// handle create sub ruddat
import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/ResponseError.js';
import { createSubRuddatValidation } from '../validations/sub-ruddat-validation';
import { validate } from './../validations/validation.js';
const create = async (user, request) => {
    const sub_ruddat = validate(createSubRuddatValidation, request);
    sub_ruddat.moderator_id = user.id;
    try{
        return prismaClient.subRuddat.create({
            data: sub_ruddat,
            select: {
                id: true,
                name: true,
                slug: true,
                email: true,
                moderator_id: true,
                avatar: true,
                description: true,
                welcome_msg: true,
                topic_id: true,
                is_public: true,
                is_nsfw: true,
                country: true,
                created_at: true,
                updated_at: true,
                moderator: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        profile_pic: true,
                        created_at: true,
                        updated_at: true,
                    }
                },
            }
        });
    }catch(err){
        throw new ResponseError(
            400,
            `Failed to create sub ruddat
            error: ${err}`
        );
    }
}

export default { create }