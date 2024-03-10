import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const commentSchema = new Schema({
  text: {
    type: Schema.Types.String,
    require: true,
  },
  userId: {
    type: Schema.Types.String,
    require: true,
  },
  feedbackId: {
    type: Schema.Types.String,
    require: true,
  },
  id: {
    type: Schema.Types.String,
    default: uuid,
    require: true,
  },
});

const Comment = model("Comment", commentSchema);

export default Comment;
