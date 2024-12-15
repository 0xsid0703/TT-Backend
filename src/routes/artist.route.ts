import express from "express";
import {
  createArtist,
  getArtistById,
  getArtists,
  updateArtist,
  deleteArtist,
} from "../controller/artist.controller";

const router = express.Router();

router.post("/", createArtist);
router.get("/", getArtists);
router.get("/:id", getArtistById);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);

export default router;
