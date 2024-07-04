import { userModel } from "../models/users.js";

export default class Users {
  constructor() {
    console.log(`Working users with Database persistence in mongodb`);
  }
  getAll = async () => {
    let users = await userModel.find().populate("courses");
    return users;
  };
  saveUser = async (user) => {
    let result = await userModel.create(user);
    return result;
  };
  getBy = async (params) => {
    let result = await userModel.findOne(params).populate("courses").lean();
    return result;
  };
  updateUser = async (id, user) => {
    let result = await userModel.updateOne({ _id: id }, { $set: user });
    return result;
  };
}
