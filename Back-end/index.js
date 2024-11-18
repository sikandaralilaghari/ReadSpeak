import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connect } from "./connection/connect.js";
import authRouter from "./routes/auth.route.js";
import ttsRouter from "./routes/tts.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.static("profiles"));
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT;

connect();
app.use("/api/auth", authRouter);
app.use("/tts", ttsRouter);
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log("Server is listening at the port", PORT);
});
