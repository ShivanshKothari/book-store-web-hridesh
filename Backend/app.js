import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" })); //accepting json

app.use(express.urlencoded({ extended: true, limit: "22kb" }));
app.use(express.static("Frontend/public"));

app.use(cookieParser());
export { app };
