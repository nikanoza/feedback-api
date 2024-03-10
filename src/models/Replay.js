import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const replaySchema = new Schema({
  text: {
    type: Schema.Types.String,
    require: true,
  },
  userId: {
    type: Schema.Types.String,
    require: true,
  },
  commentId: {
    type: Schema.Types.String,
    require: true,
  },
  replayTo: {
    type: Schema.Types.String,
    require: true,
  },
  id: {
    type: Schema.Types.String,
    default: uuid,
    require: true,
  },
});

const Replay = model("Replay", replaySchema);

export default Replay;
