import prisma from "../prisma"; // Make sure to import your Prisma instance
import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // const imagesFolder = path.join(__dirname, "images");
    const imagesFolder = "images";
    // Create the images folder if it doesn't exist
    if (!fs.existsSync(imagesFolder)) {
      fs.mkdirSync(imagesFolder);
    }

    cb(null, imagesFolder);
  },
  filename: (req, file, cb) => {
    // You can customize the file name if needed
    cb(null, Date.now() + path.extname(file.originalname)); // Save with timestamp
  },
});
export const upload = multer({ storage });

// Create a new Image
export const createImage = async (req, res): Promise<void> => {
  const stackId = req.body.stackId;
  const storedFileName = req.file?.filename;
  // Store the file information in the database
  const image = await prisma.image.create({
    data: {
      name: storedFileName,
      stackId: parseInt(stackId, 10),
    },
  });

  res.status(200).json({ success: true, image });
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
  const { stackId } = req.body;
  const uploadMiddleware = upload.single("file");
  console.log({ id });
  uploadMiddleware(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res
        .status(400)
        .json({ success: false, message: "File upload error" });
    }

    try {
      const storedFileName = req.file?.filename;

      const updatedImage = await prisma.image.update({
        where: { id: parseInt(id, 10) },
        data: {
          name: storedFileName,
          stackId: stackId,
        },
      });
      res.status(200).json({ success: true, image: updatedImage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error uploading file" });
    }
  });
};

// Delete an Image
export const deleteImage = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.image.delete({
      where: { id: parseInt(id, 10) },
    });
    res.json({ id: Number(id) });
  } catch (error) {
    console.error("Error deleting Image:", error);
    res.status(500).json({ error: "Error deleting Image" });
  }
};
