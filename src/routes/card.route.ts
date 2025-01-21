import express from "express";
import {
  createCard,
  getCardById,
  getCards,
  updateCard,
  deleteCard,
  getCardByQRCode,
} from "../controller/card.controller";

const router = express.Router();

router.post("/", createCard);
router.get("/", getCards);
router.post("/qrcode", getCardByQRCode);
router.get("/:id", getCardById);
router.put("/:id", updateCard);
router.delete("/:id", deleteCard);

export default router;
