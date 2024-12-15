import express from "express";
import {
  createEventSubGroup,
  getEventSubGroups,
  getEventSubGroupById,
  updateEventSubGroup,
  deleteEventSubGroup,
} from "../controller/event_sub_group.controller";

const router = express.Router();

router.post("/", createEventSubGroup); // Create a new Event_Sub_Group
router.get("/", getEventSubGroups); // Get all Event_Sub_Groups
router.get("/:id", getEventSubGroupById); // Get Event_Sub_Group by ID
router.put("/:id", updateEventSubGroup); // Update Event_Sub_Group by ID
router.delete("/:id", deleteEventSubGroup); // Delete Event_Sub_Group by ID

export default router;
