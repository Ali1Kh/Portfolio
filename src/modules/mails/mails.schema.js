import joi from 'joi'

export const mailSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    subject: joi.string().required(),
    text: joi.string().required()
}).required();