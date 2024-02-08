import { User } from "../DB/types/db";
import { UserModel } from "../DB/model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApplicationError } from "../error/application-error";
import { Error, ObjectId } from "mongoose";

//REGISTER:
export const saveUser = async (userData: User) => {
  const user = new UserModel(userData);
  if (!user) throw new Error("email not allowd");
  //hash the password
  user.password = await bcrypt.hash(user.password, 12);

  //save
  const saveUser = await user.save();

  return saveUser;
};

//LOGIN:
const getSecret = () => process.env.JWT_SECRET ?? "secret";

const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });

  if (!user) throw new ApplicationError(401, "Bad Credentials");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new ApplicationError(401, "Bad Credentials");

  return jwt.sign({ email, id: user._id, isAdmin: user.isAdmin }, getSecret());
};

//GET ALL USERS:
const getUsers = async () => {
  try {
    const users = await UserModel.find({}, { __V: 0 });
    return users;
  } catch {
    throw new ApplicationError(404, "Something went wrong");
  }
};

//GET USER BY ID:
const userById = async (id: string) => {
  let user = await UserModel.findById(id);
  if (!user)
    throw new ApplicationError(404, "Could not find this user in database");
  //return user;
};

//UPDATE/EDIT USER BY id:
const updateUser = async (userId: string, body: any) => {
  const updateUser = await UserModel.findByIdAndUpdate(userId, body);
  //if (!updateUser) throw new ApplicationError(401, "error!");
  return updateUser;
};

export const userService = {
  saveUser,
  loginUser,
  getUsers,
  userById,
  updateUser,
};
