module.exports = {
  passport: {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    linkedin: {
      consumerKey: process.env.LINKEDIN_CONSUMER_KEY,
      consumerSecret: process.env.LINKEDIN_CONSUMER_SECRET,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  dbUri: process.env.DB_URI,
};
