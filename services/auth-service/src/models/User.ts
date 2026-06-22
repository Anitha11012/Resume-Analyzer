import mongoose, {Document} from "mongoose";

export interface IUSER extends Document{
name: string;
email: string;
password:string;

}

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model<IUSER>("User", userSchema);