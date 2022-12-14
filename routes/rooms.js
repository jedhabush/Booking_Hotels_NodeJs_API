import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  UpdatedRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utills/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, UpdatedRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getAllRooms);

export default router;
