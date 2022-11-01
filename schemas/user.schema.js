const Joi = require("joi");


const id = Joi.string().uuid();
const name = Joi.string().min(3);
const password = Joi.string().min(3);
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
    name: name.required(),
    password : password.required(),
    role : role.required()
  })

const updateUserSchema = Joi.object({
  name: name,
  password : password,
  role : role,
})

const getUserSchema = Joi.object({
  id : id.required(),
})




module.exports={createUserSchema, getUserSchema, updateUserSchema}















































