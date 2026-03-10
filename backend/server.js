import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

import User from "./models/User.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

// Start in-memory MongoDB
const mongoServer = await MongoMemoryServer.create();
const mongoUri = mongoServer.getUri();

mongoose.connect(mongoUri)
  .then(() => console.log("Connected to in-memory MongoDB"))
  .catch(err => console.error(err));

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("EmpowerHer Backend Running!"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
