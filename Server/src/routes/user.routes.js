import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getCurrentUser,
  changeCurrentPassword,
  updateAccountDetails,
  signInWithGoogleSuccess,
  sendProcessingSignal,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import passport from "passport";

const router = Router();

//sign in with google
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  (req, res) => {
    res.send("login with google");
  }
);

router
  .route("/auth/google/callback")
  .get(passport.authenticate("google"), signInWithGoogleSuccess);

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/currentuser").get(verifyJWT, getCurrentUser);
router.route("/changepassword").post(verifyJWT, changeCurrentPassword);
router.route("/updatedetails").patch(verifyJWT, updateAccountDetails);

export default router;
