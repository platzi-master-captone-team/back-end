/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow-callback */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const LinkedInStrategy = require('passport-linkedin').Strategy;
const config = require('../config');
const UserService = require('../services/UserService');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.passport.google.clientID,
      clientSecret: config.passport.google.clientSecret,
      callbackURL: '/api/user/auth/google/callback',
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await UserService.getUserByEmail(profile._json.email);
        if (!user) {
          const dataToSave = {
            name: profile._json.name,
            email: profile._json.email,
            role_id: 1,
          };
          user = await UserService.createNewUser(dataToSave);
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

// passport.use(
//   new LinkedInStrategy(
//     {
//       consumerKey: config.passport.linkedin.consumerKey,
//       consumerSecret: config.passport.linkedin.consumerSecret,
//       callbackURL: '',
//     },
//     function (token, tokenSecret, profile, done) {
//       try {
//         let user = UserService.getUserByEmail(profile.email);
//         if (!user) {
//           user = UserService.createNewUser(profile);
//         }
//         return done(null, user);
//       } catch (error) {
//         return done(error, null);
//       }
//     },
//   ),
// );

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
