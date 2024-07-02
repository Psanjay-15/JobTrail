import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import applicationRouter from "./routes/application.routes.js";
import passport from "passport";
import "./passport/passport.js";
// const passportConfig = require("./passport/passport");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/application", applicationRouter);

app.use(passport.initialize());
app.use(passport.session());

export { app };
