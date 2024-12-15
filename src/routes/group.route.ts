import express from "express";
import {
  createGroup,
  getGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
} from "../controller/group.controller";

const router = express.Router();

router.post("/", createGroup); // Create a new group
router.get("/", getGroups); // Get all groups
router.get("/:id", getGroupById); // Get group by ID
router.put("/:id", updateGroup); // Update group by ID
router.delete("/:id", deleteGroup); // Delete group by ID

export default router;
