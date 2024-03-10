import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const { String, Number } = Schema.Types;

const feedbackSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: uuid,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
    require: true,
  },
});

const Feedback = model("Feedback", feedbackSchema);

export default Feedback;
