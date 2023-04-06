import * as Joi from 'joi';

export const UserSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(4).required(),
    password: Joi.string().min(4).required()
})