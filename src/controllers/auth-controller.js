import { User } from "../models/index.js";
import { createUserSchema } from "../schemas/index.js";

export const createUser = async (request, response) => {
  const { body } = request;

  try {
    const validator = await createUserSchema();
    const { error, value } = validator.validate(body);

    if (error) {
      return response.status(402).json({ message: error.details });
    }

    const { fullName, username, avatar } = value;

    const user = new User({
      fullName,
      username,
      avatar,
    });

    await user.save();

    return response.status(201).json(user);
  } catch (error) {
    return res.status(501).json({ message: "server internal error" });
  }
};
