import prisma from "../prisma"; // Ensure this points to your Prisma instance

export const getAllStats = async (req, res): Promise<void> => {
  try {
    const artists = await prisma.artist.findMany({
      orderBy: { id: "asc" },
      include: {
        Card: true, // Include all related Card records
        CardStack: true, // Include all related CardStack records
      },
    });
    const cards = await prisma.card.findMany({
      orderBy: { id: "asc" },
      include: {
        language: true,
        artist: true,
        type: true,
        group: true,
      },
    });

    const images = await prisma.image.findMany({ orderBy: { id: "asc" } });
    const imagestacks = await prisma.imageStack.findMany({ orderBy: { id: "asc" },
      include: {
        artist: true,
      }, });
    const languages = await prisma.language.findMany({
      orderBy: { id: "asc" },
    });
    const types = await prisma.type.findMany({ orderBy: { id: "asc" } });
    const users = await prisma.user.findMany({ orderBy: { id: "asc" } });
    const groups = await prisma.group.findMany({ orderBy: { id: "asc" } });
    const cardStacks = await prisma.cardStack.findMany({
      orderBy: { id: "asc" },
      include: {
        language: true,
        artist: true,
      },
    });
    res.status(200).json({
      artists,
      cards,
      images,
      languages,
      types,
      users,
      cardStacks,
      groups,
      imagestacks,
    });
  } catch (error) {
    console.error("Error fetching artists:", error);
    res.status(500).json({ error: "Error fetching artists" });
  }
};
