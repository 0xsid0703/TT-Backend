import prisma from "../prisma"; // Ensure this points to your Prisma instance

// Create a new Event_Sub_Group
export const createEventSubGroup = async (req, res): Promise<void> => {
  const { co2, nature, gdp, private_initiative } = req.body;
  try {
    const eventSubGroup = await prisma.event_Sub_Group.create({
      data: {
        co2: parseInt(co2),
        nature: parseInt(nature),
        gdp: parseInt(gdp),
        private_initiative: parseInt(private_initiative),
      },
    });
    res.status(200).json(eventSubGroup);
  } catch (error) {
    console.error("Error creating Event_Sub_Group:", error);
    res.status(500).json({ error: "Error creating Event_Sub_Group" });
  }
};

// Get all Event_Sub_Groups
export const getEventSubGroups = async (_req, res): Promise<void> => {
  try {
    const eventSubGroups = await prisma.event_Sub_Group.findMany({});
    res.status(200).json(eventSubGroups);
  } catch (error) {
    console.error("Error fetching Event_Sub_Groups:", error);
    res.status(500).json({ error: "Error fetching Event_Sub_Groups" });
  }
};

// Get an Event_Sub_Group by ID
export const getEventSubGroupById = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const eventSubGroup = await prisma.event_Sub_Group.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!eventSubGroup) {
      res.status(404).json({ error: "Event_Sub_Group not found" });
      return;
    }
    res.status(200).json(eventSubGroup);
  } catch (error) {
    console.error("Error fetching Event_Sub_Group:", error);
    res.status(500).json({ error: "Error fetching Event_Sub_Group" });
  }
};

// Update an Event_Sub_Group
export const updateEventSubGroup = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { co2, nature, gdp, private_initiative } = req.body;

  try {
    const eventSubGroup = await prisma.event_Sub_Group.update({
      where: { id: parseInt(id, 10) },
      data: {
        co2: parseInt(co2),
        nature: parseInt(nature),
        gdp: parseInt(gdp),
        private_initiative: parseInt(private_initiative),
      },
    });
    res.status(200).json(eventSubGroup);
  } catch (error) {
    console.error("Error updating Event_Sub_Group:", error);
    res.status(500).json({ error: "Error updating Event_Sub_Group" });
  }
};

// Delete an Event_Sub_Group
export const deleteEventSubGroup = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.event_Sub_Group.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting Event_Sub_Group:", error);
    res.status(500).json({ error: "Error deleting Event_Sub_Group" });
  }
};
