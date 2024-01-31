import mongoose from "mongoose";
import Order from "./Order";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      minlength: 6,
      maxlength: 32,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      minlength: 8,
      maxlength: 64,
      required: true,
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
      default: 'credentials'
    },
    password: {
      type: String,
      // considering that user password has been be hashed, and oauth dont need password
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: 'user',
      required: true
    },
    orderHistory: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
      default: [],
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);