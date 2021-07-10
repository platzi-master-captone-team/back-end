/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow-callback */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { passport: passportConfig } = require('../config');
const UserService = require('../services/UserService');

passport.use(
  new GoogleStrategy(
    {
      clientID: passportConfig.google.clientID,
      clientSecret: passportConfig.google.clientSecret,
      callbackURL: '/api/user/auth/google/callback',
    },
    async (_token, _tokenSecret, profile, done) => {
      try {
        let user = await UserService.getUserByEmail(profile._json.email);
        if (!user) {
          const dataToSave = {
            name: profile._json.name,
            email: profile._json.email,
            role_id: 2,
          };
          user = await UserService.createNewUser(dataToSave);
        }
        const u = {
          ...user,
          avatar: profile._json.picture,
        };
        return done(null, u);
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: passportConfig.linkedin.consumerKey,
      clientSecret: passportConfig.linkedin.consumerSecret,
      callbackURL: '/api/user/auth/linkedin/callback',
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        let user = await UserService.getUserByEmail(profile.emails[0].value);
        if (!user) {
          const dataToSave = {
            name: profile.displayName,
            email: profile.emails[0].value,
            role_id: 2,
          };
          user = await UserService.createNewUser(dataToSave);
        }
        const u = {
          ...user,
          avatar: profile.photos[0].value,
        };

        return done(null, u);
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
