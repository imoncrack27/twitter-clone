import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

//Database connection
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json()); // to parse req.body\
app.use(express.urlencoded({ extended: true })); // to parse urlencoded data

app.use(cookieParser()); // to parse cookies

//Route middleware
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
