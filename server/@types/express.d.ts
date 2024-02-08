import { ObjectId } from "mongoose";

export type RequestUser = {
  id: Schema.Types.ObjectId;
  email: string;
  isAdmin: boolean;
};

declare global {
  namespace Express {
    interface Request {
      user?: RequestUser;
    }
  }
}
