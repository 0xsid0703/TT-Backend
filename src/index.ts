import express from "express";
import dotenv from "dotenv";
const cors = require("cors");
const bodyParser = require("body-parser");
import cardStackRoutes from "./routes/cardstack.route";
import cardRoutes from "./routes/card.route";
import artistRoutes from "./routes/artist.route";
import eventSubGroupRoutes from "./routes/event_sub_group.route";
import groupRoutes from "./routes/group.route";
import imageRoutes from "./routes/image.route";
import languageRoutes from "./routes/language.route";
import typeRoutes from "./routes/type.route";
import userRoutes from "./routes/user.route";
import { getAllStats } from "./controller/all.controller";
import path from "path";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "../images")));

const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*", // Allow all origins (use cautiously in production)
  })
);
// Middleware
app.use(express.json());
app.use("/api/artist", artistRoutes);
app.use("/api/card", cardRoutes);
app.use("/api/cardstack", cardStackRoutes);
app.use("/api/event_sub_group_route", eventSubGroupRoutes);
app.use("/api/group", groupRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/language", languageRoutes);
app.use("/api/type", typeRoutes);
app.use("/api/user", userRoutes);
app.get("/api/", getAllStats);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
