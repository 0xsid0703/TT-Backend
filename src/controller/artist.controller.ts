import prisma from "../prisma"; // Ensure this points to your Prisma instance

// Create a new Artist
export const createArtist = async (req, res): Promise<void> => {
  const { name, link } = req.body;

  try {
    const artist = await prisma.artist.create({
      data: { name, link },
      include: {
        Card: true, // Include all related Card records
        CardStack: true, // Include all related CardStack records
      },
    });
    res.status(201).json(artist);
  } catch (error) {
    console.error("Error creating artist:", error);
    res.status(500).json({ error: "Error creating artist" });
  }
};

// Get all Artists
export const getArtists = async (req, res): Promise<void> => {
  try {
    const artists = await prisma.artist.findMany({
      include: {
        Card: true, // Include all related Card records
        CardStack: true, // Include all related CardStack records
      },
    });
    res.status(200).json(artists);
  } catch (error) {
    console.error("Error fetching artists:", error);
    res.status(500).json({ error: "Error fetching artists" });
  }
};

// Get an Artist by ID
export const getArtistById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const artist = await prisma.artist.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        Card: true, // Include all related Card records
        CardStack: true, // Include all related CardStack records
      },
    });
    if (!artist) {
      res.status(404).json({ error: "Artist not found" });
      return;
    }
    res.status(200).json(artist);
  } catch (error) {
    console.error("Error fetching artist:", error);
    res.status(500).json({ error: "Error fetching artist" });
  }
};

// Update an Artist
export const updateArtist = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { name, link } = req.body;

  try {
    const artist = await prisma.artist.update({
      where: { id: parseInt(id, 10) },
      data: { name, link },
    });
    res.status(200).json(artist);
  } catch (error) {
    console.error("Error updating artist:", error);
    res.status(500).json({ error: "Error updating artist" });
  }
};

// Delete an Artist
export const deleteArtist = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.artist.delete({
      where: { id: parseInt(id, 10) },
    });
    res.send({ id: Number(id) }); // No content
  } catch (error) {
    console.error("Error deleting artist:", error);
    res.status(500).json({ error: "Error deleting artist" });
  }
};
