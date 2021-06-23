const { connect } = require('mongoose');
const { dbUri } = require('../config');

(async () => {
  try {
    await connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
})();
