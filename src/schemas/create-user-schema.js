import Joi from "joi";

const createUserSchema = async () => {
  return Joi.object({
    fullName: Joi.string().required(),
    username: Joi.string().min(5).required(),
    avatar: Joi.string().required(),
  });
};

export default createUserSchema;
