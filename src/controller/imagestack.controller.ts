import prisma from "../prisma";

// Create a new Group
export const createImageStack = async (req, res): Promise<void> => {
  const { artistId } = req.body;
  try {
    const imageStack = await prisma.imageStack.create({
      data: {
        artistId: parseInt(artistId),
      },
      include: {
        artist: true,
      },
    });
    res.status(201).json(imageStack);
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: "Error creating group" });
  }
};

// Get all ImageStack
export const getImageStack = async (_req, res): Promise<void> => {
  try {
    const imageStacks = await prisma.imageStack.findMany({
      include: {
        artist: true,
      },
    });
    res.status(200).json(imageStacks);
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "Error fetching groups" });
  }
};

// Get a Group by ID
export const getImageStackById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const imageStack = await prisma.imageStack.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        artist: true,
      },
    });
    if (!imageStack) {
      res.status(404).json({ error: "Image Stack not found" });
      return;
    }
    res.status(200).json(imageStack);
  } catch (error) {
    console.error("Error fetching image stack:", error);
    res.status(500).json({ error: "Error fetching image stack" });
  }
};

// Update a Group
export const updateImageStack = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { artistId } = req.body;

  try {
    const imageStack = await prisma.imageStack.update({
      where: { id: parseInt(id, 10) },
      data: {
        artistId: parseInt(artistId),
      },
      include: {
        artist: true,
      },
    });
    res.status(200).json(imageStack);
  } catch (error) {
    console.error("Error updating imageStack:", error);
    res.status(500).json({ error: "Error updating imageStack" });
  }
};

// Delete a imageStack
export const deleteImageStack = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.imageStack.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting imageStack:", error);
    res.status(500).json({ error: "Error deleting imageStack" });
  }
};
