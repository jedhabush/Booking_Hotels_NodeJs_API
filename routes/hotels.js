import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  UpdatedHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utills/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, UpdatedHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getAllHotels);
export default router;
