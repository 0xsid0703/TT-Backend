import prisma from "../prisma"; // Ensure this points to your Prisma instance

// Create a new Type
export const createType = async (req, res): Promise<void> => {
  const { event, action } = req.body;

  try {
    const type = await prisma.type.create({
      data: {
        event,
        action,
      },
    });
    res.status(201).json(type);
  } catch (error) {
    console.error("Error creating Type:", error);
    res.status(500).json({ error: "Error creating Type" });
  }
};

// Get all Types
export const getTypes = async (_req, res): Promise<void> => {
  try {
    const types = await prisma.type.findMany({});
    res.status(200).json(types);
  } catch (error) {
    console.error("Error fetching Types:", error);
    res.status(500).json({ error: "Error fetching Types" });
  }
};

// Get a Type by ID
export const getTypeById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const type = await prisma.type.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!type) {
      res.status(404).json({ error: "Type not found" });
      return;
    }
    res.status(200).json(type);
  } catch (error) {
    console.error("Error fetching Type:", error);
    res.status(500).json({ error: "Error fetching Type" });
  }
};

// Update a Type
export const updateType = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { event, action } = req.body;

  try {
    const type = await prisma.type.update({
      where: { id: parseInt(id, 10) },
      data: {
        event,
        action,
      },
    });
    res.status(200).json(type);
  } catch (error) {
    console.error("Error updating Type:", error);
    res.status(500).json({ error: "Error updating Type" });
  }
};

// Delete a Type
export const deleteType = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.type.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting Type:", error);
    res.status(500).json({ error: "Error deleting Type" });
  }
};
