import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utills/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

//---- update
export const UpdatedRoom = async (req, res, next) => {
  try {
    const UpdatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdatedRoom);
  } catch (err) {
    next(err);
  }
};

//-- delete
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: req.params.id },
    });
  } catch (error) {
    next(error);
  }

  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted successfully");
  } catch (err) {
    next(err);
  }
};

//-- get
export const getRoom = async (req, res, next) => {
  try {
    const getRoom = await Room.findById(req.params.id);
    res.status(200).json(getRoom);
  } catch (err) {
    next(err);
  }
};

//-- get all
export const getAllRooms = async (req, res, next) => {
  /* const failed = true;
    if (failed) return next(createError(401, "Sorry not found try again later")); */
  try {
    const getAllRooms = await Room.find();
    res.status(200).json(getAllRooms);
  } catch (err) {
    next(err);
  }
};
