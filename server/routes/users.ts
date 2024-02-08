import { Router } from "express";
import { Login, User } from "../DB/types/db";
import { validateLogin, validateUser } from "../middleware/validate-schema";
import { userService } from "../service/user.service";
import { ApplicationError } from "../error/application-error";
import { UserModel } from "../DB/model/user.model";
import { verifyToken } from "../middleware/verify-token";
import { verifyUserOrAdmin } from "../middleware/verify-user-admin";
//import { UserModel } from "../DB/model/user.model";

const router = Router();

router.post("/", validateUser, async (req, res, next) => {
  try {
    const body = req.body as User;
    const saveUser = userService.saveUser(body);
    return res.status(200).json(saveUser);
  } catch (err) {
    next(err);
  }
});

//login:
router.post("/login", validateLogin, async (req, res, next) => {
  try {
    const { password, email } = req.body as Login;
    const token = await userService.loginUser(email, password);
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
});

//get all users:
router.get("/", verifyToken, async (req, res, next) => {
  const users = await userService.getUsers();
  return res.json(users);
});

//gey user by id:
router.get("/:id", verifyUserOrAdmin, async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.userById(id);
    return res.status(200).json({ userId: user });
  } catch (err) {
    next(err);
  }
});

//Update/edit user by id
router.put("/:id", verifyUserOrAdmin, async (req, res, next) => {
  try {
    const id = req.params.id;
    await userService.userById(id);
    const userUpdate = await userService.updateUser(id, req.body);
    res.send({
      user: userUpdate,
      success: true,
      message: "User updated successfully",
    });
  } catch (err) {
    next(err);
  }
});

//change isBusiness status
router.patch("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const pipeline = [{ $set: { isBusiness: { $not: "$isBusiness" } } }];
    const user = await UserModel.findByIdAndUpdate(userId, pipeline);
    if (!user)
      throw new Error(
        "Could not update this user isBusiness status because a user with this id cannot be found in the database"
      );
    return res.json({ user });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", verifyUserOrAdmin, async (req, res, next) => {
  try {
    const userId = req.params.id;
    let user = await UserModel.findById(userId);
    if (user?.isAdmin) {
      throw new Error("you could not delete admin user");
    }
    user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      throw new Error(
        "Could not delete this user because a user with this id cannot be found in the database"
      );
    }
    return res.json({ message: "delete succsess", user });
  } catch (err) {
    next(err);
  }
});
export default router;
