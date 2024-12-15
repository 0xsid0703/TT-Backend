import prisma from "../prisma"; // Make sure to import your Prisma instance

// Create a new Image
export const createImage = async (req, res): Promise<void> => {
  const { qrcode } = req.body;

  try {
    const newImage = await prisma.image.create({
      data: {
        qrcode,
      },
    });
    res.status(201).json(newImage);
  } catch (error) {
    console.error("Error creating Image:", error);
    res.status(500).json({ error: "Error creating Image" });
  }
};

// Get all Images
export const getImages = async (_req, res): Promise<void> => {
  try {
    const images = await prisma.image.findMany();
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching Images:", error);
    res.status(500).json({ error: "Error fetching Images" });
  }
};

// Get an Image by ID
export const getImageById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const image = await prisma.image.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!image) {
      res.status(404).json({ error: "Image not found" });
      return;
    }
    res.status(200).json(image);
  } catch (error) {
    console.error("Error fetching Image:", error);
    res.status(500).json({ error: "Error fetching Image" });
  }
};

// Update an Image
export const updateImage = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { qrcode } = req.body;

  try {
    const updatedImage = await prisma.image.update({
      where: { id: parseInt(id, 10) },
      data: {
        qrcode,
      },
    });
    res.status(200).json(updatedImage);
  } catch (error) {
    console.error("Error updating Image:", error);
    res.status(500).json({ error: "Error updating Image" });
  }
};

// Delete an Image
export const deleteImage = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.image.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting Image:", error);
    res.status(500).json({ error: "Error deleting Image" });
  }
};
