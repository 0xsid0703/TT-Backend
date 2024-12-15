import prisma from "../prisma"; // Update this to your actual Prisma instance import

// Create a new Language
export const createLanguage = async (req, res): Promise<void> => {
  const { language } = req.body;

  try {
    const newLanguage = await prisma.language.create({
      data: {
        language,
      },
    });
    res.status(201).json(newLanguage);
  } catch (error) {
    console.error("Error creating Language:", error);
    res.status(500).json({ error: "Error creating Language" });
  }
};

// Get all Languages
export const getLanguages = async (_req, res): Promise<void> => {
  try {
    const languages = await prisma.language.findMany({});
    res.status(200).json(languages);
  } catch (error) {
    console.error("Error fetching Languages:", error);
    res.status(500).json({ error: "Error fetching Languages" });
  }
};

// Get a Language by ID
export const getLanguageById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const language = await prisma.language.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!language) {
      res.status(404).json({ error: "Language not found" });
      return;
    }
    res.status(200).json(language);
  } catch (error) {
    console.error("Error fetching Language:", error);
    res.status(500).json({ error: "Error fetching Language" });
  }
};

// Update a Language
export const updateLanguage = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { language } = req.body;

  try {
    const updatedLanguage = await prisma.language.update({
      where: { id: parseInt(id, 10) },
      data: {
        language,
      },
    });
    res.status(200).json(updatedLanguage);
  } catch (error) {
    console.error("Error updating Language:", error);
    res.status(500).json({ error: "Error updating Language" });
  }
};

// Delete a Language
export const deleteLanguage = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.language.delete({
      where: { id: parseInt(id, 10) },
    });
    res.json({ id: Number(id) }); // No content
  } catch (error) {
    console.error("Error deleting Language:", error);
    res.status(500).json({ error: "Error deleting Language" });
  }
};
