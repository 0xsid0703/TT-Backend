import express from "express";
import {
  createCardStack,
  deleteCardStack,
  getCardStackById,
  getCardStacks,
  updateCardStack,
} from "../controller/cardstack.controller";

const router = express.Router();

router.post("/", createCardStack);
router.get("/", getCardStacks);
router.get("/:id", getCardStackById);
router.put("/:id", updateCardStack);
router.delete("/:id", deleteCardStack);

export default router;
