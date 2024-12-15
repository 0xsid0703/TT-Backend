import prisma from "../prisma";

// Create a new Card
export const createCard = async (req, res) => {
  const {
    languageId,
    name,
    artistId,
    typeId,
    groupId,
    event_sub_groupId,
    qrcode,
    scene,
    action,
    consequence_positive,
    consequence_negative,
    co2_level_number,
    co2_level,
    nature_level_number,
    nature_level,
    gdp_level_number,
    gdp_level,
    image,
  } = req.body;

  try {
    const card = await prisma.card.create({
      data: {
        languageId: parseInt(languageId),
        name,
        artistId: parseInt(artistId),
        typeId: parseInt(typeId),
        groupId: parseInt(groupId),
        event_sub_groupId: parseInt(event_sub_groupId),
        qrcode,
        scene,
        action,
        consequence_positive,
        consequence_negative,
        co2_level_number: parseInt(co2_level_number),
        co2_level,
        nature_level_number: parseInt(nature_level_number),
        nature_level,
        gdp_level_number: parseInt(gdp_level_number),
        gdp_level,
        image,
      },
    });
    res.status(200).json(card);
  } catch (error) {
    console.error("Error creating card:", error);
    res.status(500).json({ error: "Error creating card" });
  }
};

// Get all Cards
export const getCards = async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      include: {
        language: true,
        artist: true,
        type: true,
        group: true,
        event_sub_group: true,
      },
    });
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ error: "Error fetching cards" });
  }
};

// Get a Card by ID
export const getCardById = async (req, res) => {
  const { id } = req.params;

  try {
    const card = await prisma.card.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        language: true,
        artist: true,
        type: true,
        group: true,
        event_sub_group: true,
      },
    });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    console.error("Error fetching card:", error);
    res.status(500).json({ error: "Error fetching card" });
  }
};

// Update a Card
export const updateCard = async (req, res) => {
  const { id } = req.params;
  const {
    languageId,
    name,
    artistId,
    typeId,
    groupId,
    event_sub_groupId,
    qrcode,
    scene,
    action,
    consequence_positive,
    consequence_negative,
    co2_level_number,
    co2_level,
    nature_level_number,
    nature_level,
    gdp_level_number,
    gdp_level,
    image,
  } = req.body;

  try {
    const card = await prisma.card.update({
      where: { id: parseInt(id, 10) },
      data: {
        languageId: parseInt(languageId),
        name,
        artistId: parseInt(artistId),
        typeId: parseInt(typeId),
        groupId: parseInt(groupId),
        event_sub_groupId: parseInt(event_sub_groupId),
        qrcode,
        scene,
        action,
        consequence_positive,
        consequence_negative,
        co2_level_number: parseInt(co2_level_number),
        co2_level,
        nature_level_number: parseInt(nature_level_number),
        nature_level,
        gdp_level_number: parseInt(gdp_level_number),
        gdp_level,
        image,
      },
    });
    res.status(200).json(card);
  } catch (error) {
    console.error("Error updating card:", error);
    res.status(500).json({ error: "Error updating card" });
  }
};

// Delete a Card
export const deleteCard = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.card.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting card:", error);
    res.status(500).json({ error: "Error deleting card" });
  }
};
