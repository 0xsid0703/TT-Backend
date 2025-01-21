import express from "express";
import {
  createImageStack,
  deleteImageStack,
  getImageStackById,
  updateImageStack,
  getImageStack,
} from "../controller/imagestack.controller";

const router = express.Router();

router.post("/create", createImageStack); // Create a new Image
router.get("/", getImageStack); // Get all Images
router.get("/:id", getImageStackById); // Get an Image by ID
router.put("/:id", updateImageStack); // Update an Image by ID
router.delete("/:id", deleteImageStack); // Delete an Image by ID

export default router;
