import { PrismaClient } from "@prisma/client";
import prisma from "../prisma";

export const createCardStack = async (req, res) => {
  const { name, languageId, artistId } = req.body;
  try {
    const cardStack = await prisma.cardStack.create({
      data: {
        name,
        languageId: parseInt(languageId),
        artistId: parseInt(artistId),
      },
      include: {
        language: true,
        artist: true,
      },
    });
    res.json(cardStack);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Error creating card stack" });
  }
};

// Get all cardStacks
export const getCardStacks = async (req, res) => {
  try {
    const cardStacks = await prisma.cardStack.findMany({
      include: {
        language: true,
        artist: true,
      },
    });
    res.json(cardStacks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching card stacks" });
  }
};

export const getCardStackById = async (req, res) => {
  const { id } = req.params;
  try {
    const cardStack = await prisma.cardStack.findUnique({
      where: { id: Number(id) },
      include: {
        language: true,
        artist: true,
      },
    });
    if (cardStack) {
      res.json(cardStack);
    } else {
      res.status(404).json({ error: "Card stack not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching card stack" });
  }
};

// Update a CardStack
export const updateCardStack = async (req, res) => {
  const { id } = req.params;
  const { name, languageId, artistId } = req.body;
  try {
    const cardStack = await prisma.cardStack.update({
      where: { id: Number(id) },
      data: { name, languageId, artistId },
      include: {
        language: true,
        artist: true,
      },
    });
    res.json(cardStack);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Error updating card stack" });
  }
};

// Delete a CardStack
export const deleteCardStack = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.cardStack.delete({
      where: { id: Number(id) },
    });
    res.json({ id: Number(id) });
  } catch (error) {
    res.status(500).json({ error: "Error deleting card stack" });
  }
};
