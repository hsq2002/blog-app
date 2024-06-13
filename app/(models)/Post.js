import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const postSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    about_me: String
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
