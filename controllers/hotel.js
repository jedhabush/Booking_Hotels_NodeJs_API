import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

//---- update
export const UpdatedHotel = async (req, res, next) => {
  try {
    const UpdatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdatedHotel);
  } catch (err) {
    next(err);
  }
};

//-- delete
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted successfully");
  } catch (err) {
    next(err);
  }
};

//-- get
export const getHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};

//-- get all
export const getAllHotels = async (req, res, next) => {
  /* const failed = true;
  if (failed) return next(createError(401, "Sorry not found try again later")); */
  try {
    const getAllHotels = await Hotel.find();
    res.status(200).json(getAllHotels);
  } catch (err) {
    next(err);
  }
};
