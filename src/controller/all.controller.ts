import prisma from "../prisma"; // Ensure this points to your Prisma instance

export const getAllStats = async (req, res): Promise<void> => {
  try {
    const artists = await prisma.artist.findMany({
      include: {
        Card: true, // Include all related Card records
        CardStack: true, // Include all related CardStack records
      },
    });
    const cards = await prisma.card.findMany({
      include: {
        language: true,
        artist: true,
        type: true,
        group: true,
        event_sub_group: true,
      },
    });
    const images = await prisma.image.findMany();
    const languages = await prisma.language.findMany({});
    const types = await prisma.type.findMany({});
    const users = await prisma.user.findMany();
    const cardStacks = await prisma.cardStack.findMany({
      include: {
        language: true,
        artist: true,
      },
    });
    res
      .status(200)
      .json({ artists, cards, images, languages, types, users, cardStacks });
  } catch (error) {
    console.error("Error fetching artists:", error);
    res.status(500).json({ error: "Error fetching artists" });
  }
};
