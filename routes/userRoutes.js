import express from 'express';
import userController from '../controllers/usercontroller.js';
const { createUser, deleteUser, getAllUsers, getUser, updateUser } =
  userController();
const userRouter = express.Router();
// Read json data

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default userRouter;
