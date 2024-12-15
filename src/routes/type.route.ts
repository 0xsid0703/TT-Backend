import express from "express";
import {
  createType,
  getTypes,
  getTypeById,
  updateType,
  deleteType,
} from "../controller/type.controller";

const router = express.Router();

router.post("/", createType); // Create a new Type
router.get("/", getTypes); // Get all Types
router.get("/:id", getTypeById); // Get Type by ID
router.put("/:id", updateType); // Update Type by ID
router.delete("/:id", deleteType); // Delete Type by ID

export default router;
