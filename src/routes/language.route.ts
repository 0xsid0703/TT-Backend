import express from "express";
import {
  createLanguage,
  getLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
} from "../controller/language.controller";

const router = express.Router();

router.post("/", createLanguage); // Create a new Language
router.get("/", getLanguages); // Get all Languages
router.get("/:id", getLanguageById); // Get a Language by ID
router.put("/:id", updateLanguage); // Update a Language by ID
router.delete("/:id", deleteLanguage); // Delete a Language by ID

export default router;
