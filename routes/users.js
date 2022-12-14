import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  UpdatedUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utills/verifyToken.js";

const router = express.Router();

// To check token , and authorized users can modify data
/* router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("hello user, you are the one");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are the one and you can delete the account");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are the one and you can delete all account");
});
 */

//UPDATE
router.put("/:id", verifyUser, UpdatedUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
