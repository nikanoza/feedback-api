import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const userSchema = new Schema({
  fullName: {
    type: Schema.Types.String,
    require: true,
  },
  username: {
    type: Schema.Types.String,
    require: true,
  },
  avatar: {
    type: Schema.Types.String,
    require: true,
  },
  id: {
    type: Schema.Types.String,
    default: uuid,
    require: true,
  },
});

const User = model("User", userSchema);

export default User;
