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
router.route("/updateapplication").post(updateApplication);
router.route("/removeapplication").post(removeApplication);
router.route("/readapplication").get(readApplication);
router.route("/readallapplication").get(getAllAplication);

export default router;
