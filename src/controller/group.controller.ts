import prisma from "../prisma";

// Create a new Group
export const createGroup = async (req, res): Promise<void> => {
  const { groupName } = req.body;

  try {
    const group = await prisma.group.create({
      data: {
        groupName,
      },
    });
    res.status(201).json(group);
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: "Error creating group" });
  }
};

// Get all Groups
export const getGroups = async (_req, res): Promise<void> => {
  try {
    const groups = await prisma.group.findMany({});
    res.status(200).json(groups);
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "Error fetching groups" });
  }
};

// Get a Group by ID
export const getGroupById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const group = await prisma.group.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!group) {
      res.status(404).json({ error: "Group not found" });
      return;
    }
    res.status(200).json(group);
  } catch (error) {
    console.error("Error fetching group:", error);
    res.status(500).json({ error: "Error fetching group" });
  }
};

// Update a Group
export const updateGroup = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { groupName } = req.body;

  try {
    const group = await prisma.group.update({
      where: { id: parseInt(id, 10) },
      data: {
        groupName,
      },
    });
    res.status(200).json(group);
  } catch (error) {
    console.error("Error updating group:", error);
    res.status(500).json({ error: "Error updating group" });
  }
};

// Delete a Group
export const deleteGroup = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.group.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Error deleting group" });
  }
};
