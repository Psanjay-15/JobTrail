import passport from "passport";
import dotenv from "dotenv";
import { User } from "../models/user.model.js";

dotenv.config({
  path: "./env",
});

// var GoogleStrategy = require("passport-google-oauth20").Strategy;
import GoogleStrategy from "passport-google-oauth20";

//incode the data
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//decode the data
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // the reqi=uired info is taken from the cloud
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, next) => {
      console.log("MY PROFILE", profile._json.email);
      User.findOne({ email: profile._json.email }).then((user) => {
        if (user) {
          //console.log("User already exits in DB", user);
          next(null, user);
        } else {
          User.create({
            fullname: profile.displayName,
            googleId: profile.id,
            email: profile._json.email,
            password: "google_verified",
          })
            .then((user) => {
              //console.log("New User", user);
              next(null, user);
              // cookietoken()
            })
            .catch((err) => console.log(err));
        }
      });
    }
  )
);
