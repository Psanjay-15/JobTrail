import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  createApplication,
  updateApplication,
  removeApplication,
  readApplication,
  getAllAplication,
} from "../controllers/application.controller.js";

const router = Router();

router.route("/createapplication").post(verifyJWT, createApplication);
router.route("/updateapplication").post(verifyJWT, updateApplication);
router.route("/removeapplication").post(verifyJWT, removeApplication);
router.route("/readapplication").get(verifyJWT, readApplication);
router.route("/readallapplication").get(verifyJWT, getAllAplication);

export default router;
