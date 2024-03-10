import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const categorySchema = new Schema({
  title: {
    type: Schema.Types.String,
    require: true,
  },
  id: {
    type: Schema.Types.String,
    default: uuid,
    require: true,
  },
});

const Category = model("Category", categorySchema);

export default Category;
