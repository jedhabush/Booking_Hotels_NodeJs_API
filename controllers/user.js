import User from "../models/User.js";

//---- update
export const UpdatedUser = async (req, res, next) => {
  try {
    const UpdatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdatedUser);
  } catch (err) {
    next(err);
  }
};

//-- delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted successfully");
  } catch (err) {
    next(err);
  }
};

//-- get
export const getUser = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
};

//-- get all
export const getAllUsers = async (req, res, next) => {
  /* const failed = true;
  if (failed) return next(createError(401, "Sorry not found try again later")); */
  try {
    const getAllUsers = await User.find();
    res.status(200).json(getAllUsers);
  } catch (err) {
    next(err);
  }
};
