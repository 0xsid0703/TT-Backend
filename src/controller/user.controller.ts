import prisma from "../prisma"; // Ensure this is your Prisma instance

// Create a new User
export const createUser = async (req, res): Promise<void> => {
  const { name, username, password, languages } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password,
        languages,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

// Get all Users
export const getUsers = async (_req, res): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

// Get a User by ID
export const getUserById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Error fetching user" });
  }
};

// Update a User
export const updateUser = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { name, username, password, languages } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: {
        name,
        username,
        password,
        languages,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

// Delete a User
export const deleteUser = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user" });
  }
};
