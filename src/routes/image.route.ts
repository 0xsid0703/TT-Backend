import express from "express";
import {
  createImage,
  getImages,
  getImageById,
  updateImage,
  deleteImage,
} from "../controller/image.controller";

const router = express.Router();

router.post("/", createImage); // Create a new Image
router.get("/", getImages); // Get all Images
router.get("/:id", getImageById); // Get an Image by ID
router.put("/:id", updateImage); // Update an Image by ID
router.delete("/:id", deleteImage); // Delete an Image by ID

export default router;
