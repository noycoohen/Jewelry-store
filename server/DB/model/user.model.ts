import { model } from "mongoose";
import { userSchema } from "../schema/user.schema";

const UserModel = model("Users", userSchema);

export { UserModel };
